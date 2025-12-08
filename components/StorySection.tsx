import React from 'react';
import { Sparkles } from 'lucide-react';
import StaggerText from './ui/StaggerText';
import ScrollReveal from './ui/ScrollReveal';

/* --- CUSTOM BRAND ICONS --- */

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M5.042 15.123a2.52 2.52 0 1 0 0-5.042h2.521v5.042a2.52 2.52 0 0 0-2.52 2.52z" fill="#E01E5A"/>
    <path d="M8.824 15.123a2.52 2.52 0 1 0 5.042 0V12.6H8.824v2.522z" fill="#E01E5A"/>
    <path d="M8.824 8.822a2.52 2.52 0 1 0 0-5.041 2.52 2.52 0 0 0 0 5.041z" fill="#36C5F0"/>
    <path d="M8.824 11.343a2.52 2.52 0 1 0 0 5.042h2.521v-2.521a2.52 2.52 0 0 0-2.52-2.52z" fill="#36C5F0"/>
    <path d="M15.126 5.042a2.52 2.52 0 1 0 5.042 0V2.52a2.52 2.52 0 0 0-5.042 2.52z" fill="#2EB67D"/>
    <path d="M12.605 8.822a2.52 2.52 0 1 0-5.042 0v2.521h2.521a2.52 2.52 0 0 0 2.52-2.52z" fill="#2EB67D"/>
    <path d="M15.126 18.904a2.52 2.52 0 1 0 0 5.042 2.52 2.52 0 0 0 0-5.042z" fill="#ECB22E"/>
    <path d="M15.126 12.602a2.52 2.52 0 1 0 0-5.042h-2.52v2.521a2.52 2.52 0 0 0 2.52 2.52z" fill="#ECB22E"/>
  </svg>
);

const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#3DDC84]">
    <path d="M17.523 15.3414c.4628 0 .8413-.3773.8413-.8399 0-.4627-.3785-.8399-.8413-.8399-.4628 0-.8414.3772-.8414.8399 0 .4626.3786.8399.8414.8399m-11.046 0c.4628 0 .8413-.3773.8413-.8399 0-.4627-.3785-.8399-.8413-.8399-.4628 0-.8414.3772-.8414.8399 0 .4626.3786.8399.8414.8399M19.165 9.07l1.795-3.1098c.1629-.2806.0682-.6411-.2132-.8037-.2814-.1626-.6418-.0667-.8047.2138l-1.8105 3.136c-1.7402-.7962-3.714-1.2588-5.879-1.2588-2.1648 0-4.1387.4626-5.879 1.2588L4.5633 5.3703c-.163-.2805-.5234-.3764-.8048-.2138-.2813.1626-.376.523-.213.8037l1.7948 3.1098C2.569 10.9757 1 13.9238 1 17.262h22c0-3.3382-1.569-6.2863-4.358-8.192"/>
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-5">
    <path d="M6 12a3 3 0 1 0 3-3h3v3H6z" fill="#F24E1E"/>
    <path d="M12 6h-3a3 3 0 1 0 0 6h3V6z" fill="#A259FF"/>
    <path d="M12 6V3a3 3 0 1 1 0 6h-3c0-1.65 1.35-3 3-3z" fill="#1ABCFE"/>
    <path d="M6 18a3 3 0 1 0 3-3h3v3c0 1.65-1.35 3-3 3z" fill="#0ACF83"/>
    <path d="M12 12H9a3 3 0 0 0 0 6 3 3 0 0 0 3-3V12z" fill="#1ABCFE"/>
  </svg>
);

const RedditIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <circle cx="12" cy="12" r="10" fill="#FF4500"/>
    <path d="M16.67 13.5c.09-.59.6-1.02 1.21-1.02.68 0 1.23.55 1.23 1.23 0 .68-.55 1.23-1.23 1.23-.55 0-1.02-.39-1.18-.91-.77.55-1.78.91-2.9.96l.5-2.33 1.62.34c.05.5.47.89.98.89.54 0 .98-.44.98-.98 0-.54-.44-.98-.98-.98-.48 0-.87.35-.96.81l-1.77-.38c-.2-.04-.39.09-.43.28l-.59 2.79c-1.13-.06-2.16-.43-2.93-.98-.16.51-.63.9-1.19.9-.68 0-1.23-.55-1.23-1.23 0-.68.55-1.23 1.23-1.23.6 0 1.11.43 1.2.99.93-.68 2.15-1.09 3.48-1.09s2.55.42 3.48 1.1zm-6.69.48c-.41 0-.74.33-.74.74 0 .41.33.74.74.74.41 0 .74-.33.74-.74 0-.41-.33-.74-.74-.74zm5.54 2.82c-.68.68-2.02.73-2.31.73-.28 0-1.63-.05-2.31-.73-.13-.13-.13-.34 0-.47.13-.13.34-.13.47 0 .56.56 1.76.56 1.84.56.09 0 1.29 0 1.84-.56.13-.13.34-.13.47 0 .13.13.13.34 0 .47zm1.06-2.08c-.41 0-.74.33-.74.74 0 .41.33.74.74.74.41 0 .74-.33.74-.74 0-.41-.33-.74-.74-.74z" fill="#FFF"/>
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#5865F2]">
    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.2 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09 0 .11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.48-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.85 2.12-1.89 2.12z"/>
  </svg>
);

const SunIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#F97316] stroke-2 stroke-linecap-round stroke-linejoin-round">
      <circle cx="12" cy="12" r="4" fill="#F97316" stroke="none" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M6.34 17.66l-1.41 1.41" />
      <path d="M19.07 4.93l-1.41 1.41" />
    </svg>
);

const BurstIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#EF4444]">
         <path d="M12 2C13.1 2 14 2.9 14 4V8.5H18.5C19.6 8.5 20.5 9.4 20.5 10.5C20.5 11.6 19.6 12.5 18.5 12.5H14V17C14 18.1 13.1 19 12 19C10.9 19 10 18.1 10 17V12.5H5.5C4.4 12.5 3.5 11.6 3.5 10.5C3.5 9.4 4.4 8.5 5.5 8.5H10V4C10 2.9 10.9 2 12 2Z" fillRule="evenodd"/>
    </svg>
);


const StorySection: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-24 lg:pb-32">
      
      {/* Centered Header Content */}
      <div className="flex flex-col items-center text-center space-y-10 mb-20 relative z-10">
        
        {/* Badge */}
        <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A202C]/50 border border-verve-accent/20 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 text-verve-accent fill-verve-accent" />
                <span className="text-[11px] font-semibold text-gray-200 tracking-wide uppercase">Verve Template</span>
            </div>
        </ScrollReveal>

        {/* Heading */}
        <div className="text-4xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
          <StaggerText text="How Verve Template" className="text-white" />
          <br className="hidden lg:block"/>
          <StaggerText text="got started" className="text-gray-200" delay={0.2} />
        </div>

        {/* Text Block with Cursors */}
        <ScrollReveal delay={0.3} className="relative max-w-2xl mx-auto text-center">
            
            {/* Cursor 1: ersadwork (Yellow) */}
            <div className="absolute -top-6 -left-4 lg:-left-12 flex items-start gap-2 animate-float-slow z-20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#FCD34D] drop-shadow-lg transform -rotate-12">
                    <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="currentColor" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <div className="px-2.5 py-1 rounded-full bg-[#FCD34D] text-black text-[10px] font-bold shadow-lg mt-4 border border-black/10">
                    ersadwork
                </div>
            </div>

            {/* Paragraph 1 */}
            <p className="text-gray-400 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel orci metus. Morbi in sollicitudin felis, non sagittis purus. Donec iaculis auctor est sagittis blandit. Aliquam massa urna, laoreet id odio ut, vulputate dapibus lorem. Nulla interdum scelerisque ligula ut efficitur. Vivamus vitae magna nec risus semper semper.
            </p>

            {/* Paragraph 2 */}
            <p className="text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel orci metus. Morbi in sollicitudin felis, non sagittis purus. Donec iaculis auctor est sagittis blandit.
            </p>

             {/* Cursor 2: batukarax (Pink) */}
             <div className="absolute bottom-[40%] -right-4 lg:-right-16 flex items-start gap-2 animate-float-delayed z-20">
                <div className="px-2.5 py-1 rounded-full bg-[#FB7185] text-white text-[10px] font-bold shadow-lg mt-4 border border-black/10 order-2 lg:order-1">
                    batukarax
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#FB7185] drop-shadow-lg transform -rotate-12 order-1 lg:order-2">
                     <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="currentColor" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
            </div>
        </ScrollReveal>
      </div>

      {/* Cards Grid */}
      <ScrollReveal delay={0.2}>
      <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Card 1: Cyan Integration Card */}
          <div className="relative rounded-[2.5rem] bg-verve-accent p-8 lg:p-12 overflow-hidden flex flex-col justify-center items-center text-center h-[500px] group">
              {/* Grid Background Overlay */}
              <div 
                className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply" 
                style={{ 
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
              />
              
              <div className="relative z-10 space-y-8 max-w-md mx-auto">
                  <h3 className="text-3xl lg:text-4xl font-semibold text-black leading-tight tracking-tight">
                      Simplifying everything you can do with this product
                  </h3>
                  
                  <button className="inline-flex items-center justify-center px-8 py-3.5 bg-black text-white rounded-full text-sm font-medium transition-transform hover:scale-105 hover:shadow-xl active:scale-95">
                      Our Integration
                  </button>
              </div>
          </div>

          {/* Card 2: Detailed Orbit Interface */}
          <div className="relative rounded-[2.5rem] bg-[#0A0C10] border border-white/5 p-8 lg:p-12 overflow-hidden flex flex-col justify-center items-center h-[500px]">
              
              {/* Circular Orbit System */}
              <div className="relative w-full h-full flex items-center justify-center">
                  
                  {/* Central Hub with Crescent Logo */}
                  <div className="relative z-20 w-32 h-32 rounded-full bg-[#111318] border border-white/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center">
                       {/* Inner glowing circle */}
                       <div className="w-16 h-16 rounded-full bg-[#16181D] shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center border border-white/5">
                            {/* Verve Crescent Logo */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transform -rotate-12">
                                <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21" stroke="#5eead4" strokeWidth="3" strokeLinecap="round" />
                                <path d="M12 21C14.5 21 16.5 19 16.5 16.5C16.5 14 14.5 12 12 12" fill="#5eead4" />
                            </svg>
                       </div>
                       
                       {/* Pulse effect */}
                       <div className="absolute inset-0 rounded-full border border-verve-accent/5 animate-pulse"></div>
                  </div>

                  {/* Inner Ring (Static) */}
                  <div className="absolute w-[240px] h-[240px] rounded-full border border-white/[0.03]" />
                  
                  {/* Outer Ring (Static) */}
                  <div className="absolute w-[420px] h-[420px] rounded-full border border-white/[0.03] border-dashed opacity-40" />

                  {/* Rotating Orbit Ring containing Icons */}
                  <div className="absolute w-[340px] h-[340px] animate-spin-slow">
                        
                        {/* 1. Top (12:00) - Google */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#16181D] rounded-full border border-white/5 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer group">
                            <div className="group-hover:scale-110 transition-transform duration-300">
                                <GoogleIcon />
                            </div>
                        </div>

                        {/* 2. Top Right (1:30) - Android */}
                        <div className="absolute top-[14.645%] right-[14.645%] w-12 h-12 bg-[#16181D] rounded-full border border-white/5 flex items-center justify-center shadow-lg transform translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform cursor-pointer group">
                            <div className="group-hover:scale-110 transition-transform duration-300">
                                <AndroidIcon />
                            </div>
                        </div>

                        {/* 3. Right (3:00) - Figma */}
                        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#16181D] rounded-full border border-white/5 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer group">
                             <div className="group-hover:scale-110 transition-transform duration-300">
                                <FigmaIcon />
                            </div>
                        </div>

                        {/* 4. Bottom Right (4:30) - Reddit */}
                        <div className="absolute bottom-[14.645%] right-[14.645%] w-12 h-12 bg-[#16181D] rounded-full border border-white/5 flex items-center justify-center shadow-lg transform translate-x-1/2 translate-y-1/2 hover:scale-110 transition-transform cursor-pointer group">
                             <div className="group-hover:scale-110 transition-transform duration-300">
                                <RedditIcon />
                            </div>
                        </div>

                        {/* 5. Bottom (6:00) - Sun/Orange Icon */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#16181D] rounded-full border border-white/5 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer group">
                             <div className="group-hover:scale-110 transition-transform duration-300">
                                <SunIcon />
                             </div>
                        </div>

                        {/* 6. Bottom Left (7:30) - Discord */}
                        <div className="absolute bottom-[14.645%] left-[14.645%] w-12 h-12 bg-[#16181D] rounded-full border border-white/5 flex items-center justify-center shadow-lg transform -translate-x-1/2 translate-y-1/2 hover:scale-110 transition-transform cursor-pointer group">
                             <div className="group-hover:scale-110 transition-transform duration-300">
                                <DiscordIcon />
                             </div>
                        </div>
                        
                        {/* 7. Left (9:00) - Red Burst */}
                         <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#16181D] rounded-full border border-white/5 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer group">
                             <div className="group-hover:scale-110 transition-transform duration-300">
                                <BurstIcon />
                            </div>
                        </div>

                        {/* 8. Top Left (10:30) - Slack */}
                        <div className="absolute top-[14.645%] left-[14.645%] w-12 h-12 bg-[#16181D] rounded-full border border-white/5 flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform cursor-pointer group">
                             <div className="group-hover:scale-110 transition-transform duration-300">
                                <SlackIcon />
                            </div>
                        </div>
                  </div>
              </div>

          </div>

      </div>
      </ScrollReveal>

      <style>
        {`
            @keyframes float-slow {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            @keyframes float-delayed {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-8px); }
            }
            @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            .animate-float-slow {
                animation: float-slow 4s ease-in-out infinite;
            }
            .animate-float-delayed {
                animation: float-delayed 5s ease-in-out infinite 1s;
            }
            .animate-spin-slow {
                animation: spin-slow 80s linear infinite;
            }
            /* Counter-rotate icons so they stay upright while parent spins */
            .animate-spin-slow > div {
                animation: spin-reverse 80s linear infinite;
            }
            @keyframes spin-reverse {
                from { transform: rotate(0deg); }
                to { transform: rotate(-360deg); }
            }
        `}
      </style>
    </section>
  );
};

export default StorySection;