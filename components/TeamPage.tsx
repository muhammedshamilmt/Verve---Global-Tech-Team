import React from 'react';
import { Sparkles, Linkedin, Twitter, Github } from 'lucide-react';
import Button from './ui/Button';
import StaggerText from './ui/StaggerText';
import ScrollReveal from './ui/ScrollReveal';

const TeamPage: React.FC = () => {
  const team = [
    { name: "Elena Vos", role: "Founder & CEO", image: "bg-gradient-to-br from-purple-500 to-indigo-500" },
    { name: "Marcus Chen", role: "CTO", image: "bg-gradient-to-br from-cyan-500 to-blue-500" },
    { name: "Sarah Miller", role: "Head of Design", image: "bg-gradient-to-br from-rose-500 to-orange-500" },
    { name: "David Kim", role: "VP of Engineering", image: "bg-gradient-to-br from-emerald-500 to-teal-500" },
    { name: "Alex Rivera", role: "Senior Developer", image: "bg-gradient-to-br from-yellow-500 to-amber-500" },
    { name: "Maya Patel", role: "Product Manager", image: "bg-gradient-to-br from-pink-500 to-rose-500" },
    { name: "James Wilson", role: "DevOps Engineer", image: "bg-gradient-to-br from-gray-500 to-slate-500" },
    { name: "Lisa Wong", role: "QA Lead", image: "bg-gradient-to-br from-blue-400 to-indigo-400" },
  ];

  return (
    <div className="w-full pt-8 pb-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
            <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A202C]/50 border border-verve-accent/20 backdrop-blur-sm">
                    <Sparkles className="w-3 h-3 text-verve-accent fill-verve-accent" />
                    <span className="text-[11px] font-semibold text-gray-200 tracking-wide uppercase">The Crew</span>
                </div>
            </ScrollReveal>
            <div className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                <StaggerText text="Meet the minds behind" className="text-white" />
                <br className="hidden lg:block"/>
                <StaggerText text="the magic." className="text-gray-400" delay={0.2} />
            </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
                <ScrollReveal key={i} delay={i * 0.05} className="group">
                    <div className="relative overflow-hidden rounded-2xl bg-[#0A0C10] border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-white/10 hover:shadow-2xl">
                        
                        {/* Image Placeholder */}
                        <div className={`aspect-[4/5] w-full ${member.image} opacity-80 group-hover:opacity-100 transition-opacity duration-500 relative`}>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-transparent opacity-60"></div>
                            
                            {/* Social Overlay */}
                            <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-colors"><Linkedin size={16} /></a>
                                <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-colors"><Twitter size={16} /></a>
                                <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-colors"><Github size={16} /></a>
                            </div>
                        </div>

                        <div className="p-5 text-center relative z-10 bg-[#0A0C10]">
                            <h3 className="text-lg font-medium text-white group-hover:text-verve-accent transition-colors">{member.name}</h3>
                            <p className="text-sm text-gray-500">{member.role}</p>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>

        {/* Join Us CTA */}
        <div className="mt-32 p-12 rounded-[2.5rem] bg-[#0A0C10] border border-white/5 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
             <div className="relative z-10">
                 <h2 className="text-3xl font-semibold text-white mb-4">We are hiring!</h2>
                 <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                     We are always looking for talented individuals to join our remote-first team. Check out our open positions.
                 </p>
                 <Button variant="outline">View Openings</Button>
             </div>
        </div>

      </div>
    </div>
  );
};

export default TeamPage;