import React from 'react';
import { ArrowRightLeft, ShoppingCart, CheckCircle2 } from 'lucide-react';

const SlackLogo = () => (
  <svg viewBox="0 0 122.88 122.78" className="w-full h-full">
    <g>
      <path fill="#E01E5A" d="M25.91,77.62c0,7.14-5.77,12.9-12.9,12.9S0.1,84.75,0.1,77.62c0-7.14,5.77-12.9,12.9-12.9h12.9V77.62 L25.91,77.62z M32.36,77.62c0-7.14,5.77-12.9,12.9-12.9s12.9,5.77,12.9,12.9v32.26c0,7.14-5.77,12.9-12.9,12.9 s-12.9-5.77-12.9-12.9V77.62L32.36,77.62z"/>
      <path fill="#36C5F0" d="M45.26,25.81c-7.14,0-12.9-5.77-12.9-12.9c0-7.14,5.77-12.9,12.9-12.9s12.9,5.77,12.9,12.9v12.9H45.26 L45.26,25.81z M45.26,32.36c7.14,0,12.9,5.77,12.9,12.9c0,7.14-5.77,12.9-12.9,12.9H12.9C5.77,58.17,0,52.4,0,45.26 c0-7.14,5.77-12.9,12.9-12.9H45.26L45.26,32.36z"/>
      <path fill="#2EB67D" d="M96.97,45.26c0-7.14,5.77-12.9,12.9-12.9c7.14,0,12.9,5.77,12.9,12.9c0,7.14-5.77,12.9-12.9,12.9h-12.9V45.26 L96.97,45.26z M90.52,45.26c0,7.14-5.77,12.9-12.9,12.9c-7.14,0-12.9-5.77-12.9-12.9V12.9c0-7.14,5.77-12.9,12.9-12.9 c7.14,0,12.9,5.77,12.9,12.9V45.26L90.52,45.26z"/>
      <path fill="#ECB22E" d="M77.62,96.97c7.14,0,12.9,5.77,12.9,12.9c0,7.14-5.77,12.9-12.9,12.9c-7.14,0-12.9-5.77-12.9-12.9v-12.9H77.62 L77.62,96.97z M77.62,90.52c-7.14,0-12.9-5.77-12.9-12.9c0-7.14,5.77-12.9,12.9-12.9h32.36c7.14,0,12.9,5.77,12.9,12.9 c0,7.14-5.77,12.9-12.9,12.9H77.62L77.62,90.52z"/>
    </g>
  </svg>
);

const SlackIntegrationSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
          {/* Subtle Green Glow from Top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#0d3632] opacity-20 blur-[100px] rounded-full mix-blend-screen" />
          
          {/* Grid Pattern overlay for this section */}
          <div 
             className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
             style={{ 
                backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
                maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)'
             }}
          />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Connection Visual */}
        <div className="flex items-center gap-4 lg:gap-8 mb-16 animate-fade-in-up">
            
            {/* Verve Logo Container */}
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-[#050608] border border-white/5 shadow-2xl flex items-center justify-center relative group">
                {/* Glow */}
                <div className="absolute inset-0 bg-verve-accent/10 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Logo */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-verve-accent relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M12 21C14.5 21 16.5 19 16.5 16.5C16.5 14 14.5 12 12 12" fill="currentColor" />
                </svg>
            </div>

            {/* Connection Arrow */}
            <div className="w-10 h-10 rounded-full bg-[#1A1D24] border border-white/10 flex items-center justify-center text-gray-500 shadow-lg z-20">
                <ArrowRightLeft size={14} className="group-hover:text-white transition-colors" />
            </div>

            {/* Slack Logo Container */}
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-[#050608] border border-white/5 shadow-2xl flex items-center justify-center relative group">
                {/* Glow */}
                <div className="absolute inset-0 bg-[#E01E5A]/10 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Logo */}
                <div className="w-8 h-8 lg:w-10 lg:h-10 relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    <SlackLogo />
                </div>
            </div>

        </div>

        {/* Text Content */}
        <div className="max-w-3xl mx-auto space-y-6 mb-20">
            <h2 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight animate-reveal opacity-0 delay-100">
                Slack Integration
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed animate-reveal opacity-0 delay-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel orci metus. <br className="hidden lg:block"/>
                Morbi in sollicitudin felis, non sagittis purus. Donec iaculis auctor est sagittis blandit.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 pt-4 animate-reveal opacity-0 delay-300">
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                    <ShoppingCart className="w-4 h-4 text-verve-accent" />
                    <span>Beautiful layouts</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-verve-accent" />
                    <span>Easily customized</span>
                </div>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl animate-reveal opacity-0 delay-300">
            {/* Stat 1 */}
            <div className="group bg-[#060709] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="text-3xl lg:text-4xl font-semibold text-white mb-3">
                    22K<span className="text-verve-accent">+</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed font-medium px-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            {/* Stat 2 */}
            <div className="group bg-[#060709] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="text-3xl lg:text-4xl font-semibold text-white mb-3">
                    64M<span className="text-verve-accent">+</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed font-medium px-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            {/* Stat 3 */}
            <div className="group bg-[#060709] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="text-3xl lg:text-4xl font-semibold text-white mb-3">
                    94<span className="text-verve-accent">%</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed font-medium px-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        </div>

      </div>

      <style>
        {`
            @keyframes slideUpFade {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-reveal {
                animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            .delay-100 { animation-delay: 100ms; }
            .delay-200 { animation-delay: 200ms; }
            .delay-300 { animation-delay: 300ms; }
        `}
      </style>
    </section>
  );
};

export default SlackIntegrationSection;