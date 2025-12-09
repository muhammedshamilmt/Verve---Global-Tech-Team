import React from 'react';
import { Sparkles, Target, Zap, Globe, Heart, Shield, ArrowUpRight } from 'lucide-react';
import Button from '../components/ui/Button';
import StaggerText from '../components/ui/StaggerText';
import ScrollReveal from '../components/ui/ScrollReveal';

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

const About: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full relative overflow-hidden pt-8">
      {/* Added pt-8 so hero content isn't hidden behind fixed navbar */}
      
      {/* 
        SECTION 1: HERO 
        Atmospheric introduction
      */}
      <section className="relative pt-20 lg:pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <div className="flex flex-col items-center space-y-8 z-10 relative">
             <ScrollReveal>
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A202C]/50 border border-verve-accent/20 backdrop-blur-sm">
                    <Sparkles className="w-3 h-3 text-verve-accent fill-verve-accent" />
                    <span className="text-[11px] font-semibold text-gray-200 tracking-wide uppercase">Who We Are</span>
                </div>
             </ScrollReveal>
            
            <div className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] max-w-4xl mx-auto">
                <StaggerText text="Driving the Global" className="text-white" />
                <br className="hidden lg:block"/>
                <ScrollReveal delay={0.3}>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">Intelligence Revolution.</span>
                </ScrollReveal>
            </div>
            
            <ScrollReveal delay={0.4}>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Verve is a collective of visionaries, engineers, and designers building the infrastructure for the next generation of AI-native companies.
                </p>
            </ScrollReveal>
        </div>

        {/* Decorative Abstract Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-verve-accent/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      </section>

      {/* 
        SECTION 2: MISSION / STORY
        Split layout
      */}
      <section className="py-24 border-t border-white/5 bg-white/[0.01]">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual */}
            <ScrollReveal className="relative h-[500px] rounded-3xl bg-[#0A0C10] border border-white/5 overflow-hidden group">
                {/* Abstract Grid visual */}
                <div className="absolute inset-0 opacity-20" 
                     style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }} 
                />
                
                {/* Glowing Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-verve-accent rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                
                {/* Floating Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                    <div className="w-48 h-48 border border-white/10 rounded-full absolute animate-[spin_15s_linear_infinite_reverse]" />
                </div>

                <div className="absolute bottom-8 left-8 right-8 p-6 bg-[#0F1115]/90 backdrop-blur-md border border-white/10 rounded-2xl">
                    <div className="text-xs font-mono text-verve-accent mb-2">EST. 2021</div>
                    <p className="text-sm text-gray-300">
                        "We started with a simple idea: make AI accessible, scalable, and beautiful for everyone."
                    </p>
                </div>
            </ScrollReveal>

            {/* Content */}
            <div className="space-y-8">
                <div className="text-3xl lg:text-4xl font-semibold text-white">
                    <StaggerText text="Our mission is to empower" />
                    <br className="hidden lg:block"/>
                    <StaggerText text="builders everywhere." className="text-gray-500" delay={0.2} />
                </div>
                <ScrollReveal delay={0.3} className="space-y-6 text-gray-400 leading-relaxed">
                    <p>
                        In a world rapidly transforming through artificial intelligence, we saw a gap between complex technology and human-centric design. Verve was born to bridge that gap.
                    </p>
                    <p>
                        We believe that software should not only be powerful but also intuitive and inspiring. Our tools are designed to remove friction, allowing teams to focus on what truly matters: innovation and growth.
                    </p>
                </ScrollReveal>
                
                <ScrollReveal delay={0.4} className="pt-4 grid grid-cols-2 gap-8">
                    <div>
                        <div className="text-3xl font-bold text-white mb-1">150+</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">Countries Reached</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-white mb-1">2M+</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">Users Empowered</div>
                    </div>
                </ScrollReveal>
            </div>

         </div>
      </section>

      {/* 
        SECTION 3: VALUES
        Grid of glass cards
      */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 space-y-4">
              <ScrollReveal><h2 className="text-3xl lg:text-4xl font-semibold">Our Core Values</h2></ScrollReveal>
              <ScrollReveal delay={0.1}><p className="text-gray-400 max-w-xl mx-auto">The principles that guide every line of code we write and every pixel we design.</p></ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                  { icon: Target, title: "Precision", desc: "We obsession over the details that others overlook." },
                  { icon: Zap, title: "Velocity", desc: "We move fast, iterate quickly, and ship often." },
                  { icon: Shield, title: "Trust", desc: "Security and transparency are foundational, not optional." },
                  { icon: Heart, title: "Empathy", desc: "We build for humans first, algorithms second." },
              ].map((item, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.1} className="group p-8 rounded-2xl bg-[#060709] border border-white/5 hover:border-verve-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                      <div className="w-12 h-12 rounded-xl bg-[#1A1D24] border border-white/5 flex items-center justify-center mb-6 group-hover:bg-verve-accent/10 group-hover:text-verve-accent transition-colors">
                          <item.icon size={24} className="text-gray-300 group-hover:text-verve-accent" />
                      </div>
                      <h3 className="text-lg font-medium text-white mb-3">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </ScrollReveal>
              ))}
          </div>
      </section>

      {/* 
        SECTION 4: TEAM
        Horizontal cards
      */}
      <section className="py-24 border-t border-white/5 bg-[#030507]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-end mb-16">
                    <ScrollReveal className="space-y-4">
                        <h2 className="text-3xl lg:text-4xl font-semibold">Meet the Minds</h2>
                        <p className="text-gray-400">The diverse team making it all happen.</p>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <Button 
                            variant="outline" 
                            className="hidden md:flex gap-2"
                            onClick={() => onNavigate?.('careers')}
                        >
                            Join the Team <ArrowUpRight size={16} />
                        </Button>
                    </ScrollReveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { name: "Elena Vos", role: "Founder & CEO", color: "from-purple-500 to-indigo-500" },
                        { name: "Marcus Chen", role: "CTO", color: "from-cyan-500 to-blue-500" },
                        { name: "Sarah Miller", role: "Head of Design", color: "from-rose-500 to-orange-500" },
                        { name: "David Kim", role: "VP of Engineering", color: "from-emerald-500 to-teal-500" },
                    ].map((member, i) => (
                        <ScrollReveal key={i} delay={i * 0.1} className="group relative">
                            {/* Image Placeholder */}
                            <div className={`aspect-[4/5] rounded-2xl bg-gradient-to-br ${member.color} opacity-80 mb-6 relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                {/* Abstract Shine */}
                                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
                            </div>
                            
                            <div className="space-y-1">
                                <h3 className="text-lg font-medium text-white group-hover:text-verve-accent transition-colors">{member.name}</h3>
                                <p className="text-sm text-gray-500">{member.role}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
          </div>
      </section>

      {/* 
        SECTION 5: Global Offices
        Simple map representation
      */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="rounded-[2.5rem] bg-[#0A0C10] border border-white/5 p-12 lg:p-24 text-center relative overflow-hidden">
               {/* Background Map Effect */}
               <div className="absolute inset-0 opacity-10 pointer-events-none">
                   {/* Simplified dots for map feel */}
                   <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
                   <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-white rounded-full animate-pulse delay-75" />
                   <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse delay-150" />
               </div>
               
               <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                   <div className="w-16 h-16 mx-auto rounded-full bg-[#1A1D24] flex items-center justify-center border border-white/10 shadow-lg">
                       <Globe className="text-verve-accent" size={32} />
                   </div>
                   <h2 className="text-3xl lg:text-5xl font-semibold text-white">Global from Day One</h2>
                   <p className="text-gray-400 text-lg leading-relaxed">
                       We are a remote-first company with hubs in San Francisco, London, Tokyo, and Berlin. We believe talent is distributed equally, opportunity is not.
                   </p>
                   <div className="pt-4">
                       <Button variant="primary" onClick={() => onNavigate?.('careers')}>View Open Positions</Button>
                   </div>
               </div>
          </ScrollReveal>
      </section>

      <style>
        {`
            @keyframes shine {
                100% { left: 100%; }
            }
            .animate-shine {
                animation: shine 1.5s;
            }
        `}
      </style>
    </div>
  );
};

export default About;