import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  // Text content matching Verve branding
  const [text, setText] = useState("Driving the Intelligence Revolution."); 
  const [textOpacity, setTextOpacity] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeline = async () => {
      // 1. Text 1 Fade In
      setTimeout(() => setTextOpacity(1), 100);

      // 2. Text 1 Fade Out
      setTimeout(() => setTextOpacity(0), 1800);

      // 3. Change Text to Brand Name & Fade In
      setTimeout(() => {
        setText("Verve.");
        setTextOpacity(1);
      }, 2300);

      // 4. Text 2 Fade Out
      setTimeout(() => setTextOpacity(0), 3800);

      // 5. Start Exit Animation (Stairs go UP)
      setTimeout(() => {
        setIsExiting(true);
      }, 4300);

      // 6. Finish & Unmount
      setTimeout(() => {
        setShow(false);
        onComplete();
      }, 5500);
    };

    timeline();
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col pointer-events-none font-sans">
      
      {/* Content Layer */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
         <h1 
            // Text color logic: Backgrounds are Green (#5eead4) and White. Black text works best on both.
            className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-[#020406] transition-opacity duration-500 ease-in-out text-center px-4"
            style={{ opacity: textOpacity }}
         >
            {text}
         </h1>
      </div>

      {/* Stairs Background Layer */}
      <div className="absolute inset-0 z-10 flex w-full h-full">
        {/* 5 Columns for the stair effect */}
        {[0, 1, 2, 3, 4].map((index) => (
            <div 
                key={index}
                // Alternating colors: Green (#5eead4) and White
                className={`relative h-full flex-1 transform transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    index % 2 === 0 ? 'bg-[#5eead4]' : 'bg-white'
                }`}
                style={{
                    // Moves the bar UP towards the top of the screen (-100% Y)
                    transform: isExiting ? 'translateY(-100%)' : 'translateY(0%)',
                    // Staggered delay creates the stairs shape
                    transitionDelay: `${index * 0.1}s`
                }}
            />
        ))}
      </div>
    </div>
  );
};

export default Preloader;