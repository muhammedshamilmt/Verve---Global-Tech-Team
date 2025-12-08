import React, { useRef, useEffect, useState } from 'react';

interface StaggerTextProps {
  text: string;
  className?: string;
  wrapperClassName?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'span';
  stagger?: number;
  delay?: number;
}

const StaggerText: React.FC<StaggerTextProps> = ({ 
  text, 
  className = "", 
  wrapperClassName = "",
  tag: Tag = 'div', 
  stagger = 0.05,
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Split by spaces but preserve them in layout by using gap or spaces
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={`inline-flex flex-wrap gap-x-[0.25em] ${wrapperClassName}`}>
      {words.map((word, i) => (
        <span 
          key={i} 
          className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.2,0.65,0.3,0.9)] transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
          style={{ transitionDelay: `${delay + (i * stagger)}s` }}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
};

export default StaggerText;