import React from 'react';
import { 
  Layers, 
  CircleDashed, 
  Box, 
  Moon, 
  MoreVertical, 
  Calendar, 
  Mail, 
  Terminal,
  Sparkles
} from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';
import StaggerText from './ui/StaggerText';

const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32 space-y-24">
      
      {/* Inline Styles for specific animations */}
      <style>
        {`
          .orbit-path {
            stroke-dasharray: 10;
            animation: rotate 60s linear infinite;
            transform-origin: center;
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <div className="space-y-6 max-w-2xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A202C]/50 border border-verve-accent/20 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 text-verve-accent fill-verve-accent" />
                <span className="text-[11px] font-semibold text-gray-200 tracking-wide uppercase">Verve Product Overview</span>
            </div>
          </ScrollReveal>
          
          <div className="text-4xl lg:text-5xl font-semibold leading-[1.2] tracking-tight">
            <StaggerText text="Discover a simple" className="text-white" />
            <br className="hidden lg:block"/>
            <StaggerText text="notebook solution today." className="text-gray-400" delay={0.2} />
          </div>
        </div>

        <ScrollReveal delay={0.3} className="max-w-xs">
          <p className="text-sm text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quis lectus molestie.
          </p>
        </ScrollReveal>
      </div>

      {/* 
        FEATURE 01 
        Layout: Text Left, Visual Right
      */}
      <ScrollReveal className="grid lg:grid-cols-2 gap-8 lg:gap-16 p-8 lg:p-12 rounded-[2.5rem] bg-[#0A0C10] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
         {/* Background Number */}
         <span className="absolute top-6 right-10 text-8xl font-bold text-[#1a1d24]/40 select-none pointer-events-none">01</span>

         {/* Left: Text */}
         <div className="flex flex-col justify-center space-y-8 z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#0f1115] border border-white/5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                {/* 3D stacked box icon approximation */}
                <Layers className="text-verve-accent" size={28} />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-white">Express ideas like <br/> a human, not a machine.</h3>
              <p className="text-gray-500 leading-relaxed max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quis lectus molestie.
              </p>
            </div>
         </div>

         {/* Right: Visual (Circular Metrics) */}
         <div className="relative h-[350px] md:h-[400px] w-full bg-[#050608]/50 rounded-3xl border border-white/5 flex items-center justify-center overflow-hidden">
             
             {/* Central Glowing Icon */}
             <div className="relative z-20 w-16 h-16 rounded-full bg-[#0F1115] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(94,234,212,0.1)]">
                 <Moon className="text-verve-accent fill-verve-accent" size={24} />
             </div>

             {/* Orbit Rings */}
             <div className="absolute inset-0 flex items-center justify-center">
                 {/* Ring 1 */}
                 <div className="w-[180px] h-[180px] rounded-full border border-white/5 absolute" />
                 {/* Ring 2 */}
                 <div className="w-[280px] h-[280px] rounded-full border border-white/5 absolute border-dashed opacity-30" />
                 {/* Ring 3 (Gradient) */}
                 <div className="w-[380px] h-[380px] rounded-full absolute bg-gradient-to-tr from-verve-accent/5 to-transparent opacity-20 blur-3xl" />
             </div>

             {/* Floating Data Points */}
             <div className="absolute top-[25%] right-[25%] flex items-center gap-2 animate-pulse">
                <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                <span className="text-[10px] text-gray-400">ametsmsek</span>
             </div>
             
             <div className="absolute bottom-[30%] left-[20%] flex items-center gap-2">
                <span className="text-[10px] text-gray-400">tsbekkers</span>
                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
             </div>

             <div className="absolute bottom-[20%] right-[30%] flex items-center gap-2">
                <div className="w-0 z-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-rose-500 border-r-[6px] border-r-transparent transform -rotate-45"></div>
                <span className="text-[10px] text-gray-400">batukarax</span>
             </div>

             {/* Legend */}
             <div className="absolute top-6 right-6 flex flex-col gap-3">
                 {[
                   { color: 'bg-purple-500', val: '12%' },
                   { color: 'bg-rose-500', val: '84%' },
                   { color: 'bg-amber-500', val: '99%' }
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#0A0C10]/80 px-2 py-1 rounded-md border border-white/5 backdrop-blur-md">
                        <div className={`w-1.5 h-1.5 rounded-full ${item.color}`}></div>
                        <span className={`text-[10px] font-mono ${item.color.replace('bg-', 'text-')}`}>{item.val}</span>
                    </div>
                 ))}
             </div>
         </div>
      </ScrollReveal>

      {/* 
        FEATURE 02 
        Layout: Visual Left, Text Right
      */}
      <ScrollReveal className="grid lg:grid-cols-2 gap-8 lg:gap-16 p-8 lg:p-12 rounded-[2.5rem] bg-[#0A0C10] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
         <span className="absolute top-6 right-10 text-8xl font-bold text-[#1a1d24]/40 select-none pointer-events-none">02</span>

         {/* Left: Visual (Stacked Timeline) */}
         <div className="relative h-[400px] w-full flex flex-col items-center justify-center gap-4">
             {/* Card 1 */}
             <div className="w-[80%] bg-[#0F1115] border border-white/5 rounded-2xl p-4 flex items-center justify-between shadow-2xl translate-y-2 opacity-60 scale-95 blur-[1px]">
                 <div className="flex items-center gap-3">
                     <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
                     <div>
                         <div className="text-xs font-medium text-gray-300">Prototyping & Testing</div>
                         <div className="text-[10px] text-gray-600">Mar 01 to Aug 01</div>
                     </div>
                 </div>
                 <MoreVertical size={14} className="text-gray-600" />
             </div>

             {/* Card 2 (Active) */}
             <div className="w-[90%] bg-[#13161C] border border-white/10 rounded-2xl p-5 flex items-center justify-between shadow-[0_20px_40px_-15px_rgba(0,0,0,1)] z-10 transform transition-transform hover:scale-[1.02]">
                 <div className="flex items-center gap-4">
                     <div className="w-1 h-10 bg-verve-accent rounded-full shadow-[0_0_10px_rgba(94,234,212,0.5)]"></div>
                     <div>
                         <div className="text-sm font-medium text-white mb-0.5">Design & Development</div>
                         <div className="text-[11px] text-gray-500">Jan 01 to June 01</div>
                     </div>
                 </div>
                 <MoreVertical size={16} className="text-gray-500" />
             </div>

             {/* Card 3 */}
             <div className="w-[80%] bg-[#0F1115] border border-white/5 rounded-2xl p-4 flex items-center justify-between shadow-2xl -translate-y-2 opacity-60 scale-95 blur-[1px]">
                 <div className="flex items-center gap-3">
                     <div className="w-1 h-8 bg-purple-500 rounded-full"></div>
                     <div>
                         <div className="text-xs font-medium text-gray-300">Prototyping & Testing</div>
                         <div className="text-[10px] text-gray-600">Mar 01 to Aug 01</div>
                     </div>
                 </div>
                 <MoreVertical size={14} className="text-gray-600" />
             </div>
         </div>

         {/* Right: Text */}
         <div className="flex flex-col justify-center space-y-8 z-10 lg:pl-8">
            <div className="w-14 h-14 rounded-2xl bg-[#0f1115] border border-white/5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <CircleDashed className="text-amber-400" size={28} />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-white">Build your <br/> model block by block.</h3>
              <p className="text-gray-500 leading-relaxed max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quis lectus molestie.
              </p>
            </div>
         </div>
      </ScrollReveal>

      {/* 
        FEATURE 03 
        Layout: Text Left, Visual Right
      */}
      <ScrollReveal className="grid lg:grid-cols-2 gap-8 lg:gap-16 p-8 lg:p-12 rounded-[2.5rem] bg-[#0A0C10] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
         <span className="absolute top-6 right-10 text-8xl font-bold text-[#1a1d24]/40 select-none pointer-events-none">03</span>

         {/* Left: Text */}
         <div className="flex flex-col justify-center space-y-8 z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#0f1115] border border-white/5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Box className="text-rose-400" size={28} />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-white">Express ideas like <br/> a human, not a machine.</h3>
              <p className="text-gray-500 leading-relaxed max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quis lectus molestie.
              </p>
            </div>
         </div>

         {/* Right: Visual (Mini Dashboard) */}
         <div className="relative h-[350px] md:h-[400px] w-full bg-[#050608]/50 rounded-3xl border border-white/5 flex items-center justify-center overflow-hidden p-8">
             
             {/* The Dashboard Card */}
             <div className="w-full h-full bg-[#0B0D11] rounded-2xl border border-white/5 p-6 relative shadow-2xl">
                 <div className="flex items-center justify-between mb-8">
                     <span className="text-sm font-medium text-gray-300">Dashboard</span>
                 </div>

                 <div className="flex gap-2 mb-6">
                    <div className="px-3 py-1.5 rounded-lg bg-[#15181E] border border-white/5 text-[10px] font-medium text-amber-200/80 flex items-center gap-2">
                         <Calendar size={10} /> Date
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-[#15181E] border border-white/5 text-[10px] font-medium text-rose-200/80 flex items-center gap-2">
                         <Mail size={10} /> Mail
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-[#15181E] border border-white/5 text-[10px] font-medium text-indigo-200/80 flex items-center gap-2">
                         <Terminal size={10} /> Console
                    </div>
                 </div>

                 <div className="bg-[#121419] rounded-xl border border-white/5 p-5 relative overflow-hidden group-hover:border-white/10 transition-colors">
                     <div className="text-xs text-gray-400 font-medium mb-1">Import CSV</div>
                     <div className="text-[10px] text-gray-600 mb-4">Lorem ipsum dolor sit amet, conse.</div>
                     
                     <div className="space-y-2 opacity-50">
                         <div className="h-2 w-full bg-white/5 rounded-full"></div>
                         <div className="h-2 w-[70%] bg-white/5 rounded-full"></div>
                     </div>
                 </div>
                 
                 {/* Floating Circle Toggle */}
                 <div className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-[#0F1115] border border-white/10 flex items-center justify-center shadow-lg">
                     <Moon size={16} className="text-verve-accent fill-verve-accent/20" />
                 </div>
             </div>
         </div>
      </ScrollReveal>

    </section>
  );
};

export default FeaturesSection;