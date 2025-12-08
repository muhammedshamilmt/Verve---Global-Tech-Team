import React, { useEffect, useState, useRef } from 'react';

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutExpo)
      // 1 - Math.pow(2, -10 * t)
      const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(ease * end));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, start]);

  return count;
};

const StatItem: React.FC<{ label: string; value: string; delay?: number }> = ({ label, value, delay = 0 }) => {
  // Parse value: "+22k" -> prefix="+", number=22, suffix="k"
  const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const number = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : "";
  
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const count = useCountUp(number, 2000, isVisible);

  useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
              setTimeout(() => setIsVisible(true), delay);
              observer.disconnect();
          }
      }, { threshold: 0.5 });
      
      if (ref.current) {
          observer.observe(ref.current);
      }
      return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`flex flex-col items-center justify-center text-center space-y-3 group cursor-default transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase group-hover:text-verve-accent transition-colors duration-500">
        {label}
      </span>
      <span className="text-4xl lg:text-5xl font-medium text-white tracking-tight tabular-nums">
        {prefix}{count}{suffix}
      </span>
    </div>
  );
};

const StatsStrip: React.FC = () => {
  const stats = [
    { label: "CLIENT RETENTION", value: "+22k" },
    { label: "EMAILS PER MONTH", value: "+33k" },
    { label: "MONTHLY CAMPAIGNS", value: "+44k" },
  ];

  return (
    <div className="w-full relative z-10 border-b border-white/[0.02]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {stats.map((stat, index) => (
          <StatItem key={index} label={stat.label} value={stat.value} delay={index * 100} />
        ))}
      </div>
    </div>
  );
};

export default StatsStrip;