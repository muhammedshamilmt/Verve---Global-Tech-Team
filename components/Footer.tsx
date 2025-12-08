import React from 'react';

// Assuming App passes a navigation handler or we use a context/prop drill. 
// However, since Footer is used in App.tsx, we need to update it to accept props.
// Let's assume for this step we will update App.tsx to pass the prop, 
// and update Footer definition here to accept it.

interface FooterProps {
    onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, page: string) => {
      e.preventDefault();
      if (onNavigate) onNavigate(page);
  };

  return (
    <footer className="relative w-full bg-[#020406] overflow-hidden pt-32 pb-12">
      
      {/* 1. Background Gradient - "Teal Fog" */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020406] via-[#040f16] to-[#0c2e29]" />
      
      {/* 2. Radial Glow for depth */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[90%] h-[600px] bg-verve-accent/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-60" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col min-h-[60vh] justify-between">
        
        {/* Top Content */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full relative z-20">
            {/* Logo/Description */}
            <div className="max-w-xs space-y-6">
                 {/* Cross Icon from Design Reference */}
                 <div className="w-6 h-6 relative opacity-50">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full stroke-gray-500">
                        <line x1="12" y1="5" x2="12" y2="19" strokeWidth="1" />
                        <line x1="5" y1="12" x2="19" y2="12" strokeWidth="1" />
                    </svg>
                 </div>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                    Verve is a premium website template designed specifically for Artificial Intelligence (AI) agencies.
                </p>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-16 mt-12 md:mt-0">
                <div className="flex flex-col gap-4">
                    <button onClick={(e) => handleNav(e, 'plans')} className="text-left text-sm text-gray-500 hover:text-verve-accent transition-colors font-medium">
                        Plans
                    </button>
                    <button onClick={(e) => handleNav(e, 'reviews')} className="text-left text-sm text-gray-500 hover:text-verve-accent transition-colors font-medium">
                        Reviews
                    </button>
                    <button onClick={(e) => handleNav(e, 'why-us')} className="text-left text-sm text-gray-500 hover:text-verve-accent transition-colors font-medium">
                        Why Us
                    </button>
                    <button onClick={(e) => handleNav(e, 'team')} className="text-left text-sm text-gray-500 hover:text-verve-accent transition-colors font-medium">
                        Team
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <button onClick={(e) => handleNav(e, '404')} className="text-left text-sm text-gray-500 hover:text-verve-accent transition-colors font-medium">
                        404 Page
                    </button>
                    <button onClick={(e) => handleNav(e, 'changelog')} className="text-left text-sm text-gray-500 hover:text-verve-accent transition-colors font-medium">
                        Changelog
                    </button>
                    <button onClick={(e) => handleNav(e, 'licensing')} className="text-left text-sm text-gray-500 hover:text-verve-accent transition-colors font-medium">
                        Licensing
                    </button>
                </div>
            </div>
        </div>

        {/* Center Giant Text */}
        <div className="flex-grow flex items-end justify-center w-full py-12 lg:py-0 relative pointer-events-none select-none">
            {/* 
                Using a mask to fade the text out at the bottom like in the image 
                The text is huge, bold, and slightly transparent white.
            */}
            <h1 className="text-[20vw] lg:text-[23vw] font-bold leading-[0.75] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 absolute bottom-10 lg:bottom-0 left-1/2 -translate-x-1/2 w-full text-center whitespace-nowrap opacity-80 mix-blend-overlay">
                Verve AI
            </h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center relative z-20 border-t border-white/5 pt-8">
            <p className="text-xs text-gray-500 font-medium">
                © 2025, Verve. Designed By Mars.
            </p>
            <p className="text-xs text-gray-500 font-medium mt-4 md:mt-0">
                Built with Framer.
            </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;