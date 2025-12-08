import React from 'react';
import { Sparkles, ArrowRight, Heart, Globe, Zap, Coffee, Laptop, Smile } from 'lucide-react';
import Button from './ui/Button';
import StaggerText from './ui/StaggerText';
import ScrollReveal from './ui/ScrollReveal';

interface CareersPageProps {
  onNavigate?: (page: string) => void;
}

const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  const benefits = [
    { icon: Globe, title: "Remote First", desc: "Work from anywhere in the world. We are fully distributed." },
    { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health, dental, and vision coverage." },
    { icon: Zap, title: "Flexible Hours", desc: "We focus on output, not hours. Manage your own schedule." },
    { icon: Coffee, title: "Coworking Stipend", desc: "We cover the cost of your local coworking space." },
    { icon: Laptop, title: "Top Equipment", desc: "Latest MacBook Pro, monitor, and accessories provided." },
    { icon: Smile, title: "Team Retreats", desc: "Twice a year we fly the whole team to an exotic location." },
  ];

  const openings = [
    {
      dept: "Engineering",
      roles: [
        { title: "Senior Frontend Engineer", loc: "Remote (Global)", type: "Full-time", salary: "$140k - $180k" },
        { title: "Staff Backend Engineer", loc: "Remote (US/EU)", type: "Full-time", salary: "$160k - $210k" },
        { title: "DevOps Specialist", loc: "Remote (Global)", type: "Full-time", salary: "$130k - $170k" },
      ]
    },
    {
      dept: "Design",
      roles: [
        { title: "Product Designer", loc: "Remote (US)", type: "Full-time", salary: "$120k - $160k" },
        { title: "Brand Designer", loc: "Remote (Global)", type: "Contract", salary: "$80/hr" },
      ]
    },
    {
      dept: "Product",
      roles: [
        { title: "Technical Product Manager", loc: "London / Remote", type: "Full-time", salary: "$130k - $175k" },
      ]
    }
  ];

  return (
    <div className="w-full pt-8 pb-24 relative overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-16 pb-32 text-center relative z-10">
         <ScrollReveal>
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A202C]/50 border border-verve-accent/20 backdrop-blur-sm mb-8">
                <Sparkles className="w-3 h-3 text-verve-accent fill-verve-accent" />
                <span className="text-[11px] font-semibold text-gray-200 tracking-wide uppercase">Careers at Verve</span>
            </div>
         </ScrollReveal>
        
        <div className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-8">
            <StaggerText text="Build the future" className="text-white" />
            <br className="hidden lg:block"/>
            <StaggerText text="of software with us." className="text-gray-500" delay={0.2} />
        </div>
        
        <ScrollReveal delay={0.3}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
                We're a team of makers, thinkers, and explorers. We're looking for people who are obsessed with quality and ready to do the best work of their lives.
            </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Button 
                className="w-full sm:w-auto px-8 py-4 shadow-[0_0_30px_rgba(94,234,212,0.3)]"
                onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}
             >
                 View Open Roles
             </Button>
             <Button variant="outline" className="w-full sm:w-auto px-8 py-4" onClick={() => onNavigate?.('about')}>Read Our Story</Button>
        </ScrollReveal>

        {/* Hero Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-verve-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      </section>

      {/* 2. Benefits Grid */}
      <section className="py-24 bg-[#0A0C10] border-y border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
              <div className="text-center mb-16">
                  <ScrollReveal><h2 className="text-3xl font-semibold text-white mb-4">Life at Verve</h2></ScrollReveal>
                  <ScrollReveal delay={0.1}><p className="text-gray-400">We take care of our team so they can take care of the product.</p></ScrollReveal>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {benefits.map((item, i) => (
                      <ScrollReveal key={i} delay={i * 0.05} className="bg-[#020406] border border-white/5 p-8 rounded-2xl hover:border-verve-accent/20 transition-all duration-300 group">
                          <div className="w-12 h-12 rounded-xl bg-[#1A1D24] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-verve-accent/10 group-hover:text-verve-accent transition-colors">
                              <item.icon size={24} className="text-gray-300 group-hover:text-verve-accent" />
                          </div>
                          <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </ScrollReveal>
                  ))}
              </div>
          </div>
      </section>

      {/* 3. Open Positions */}
      <section id="openings" className="py-24 max-w-[1000px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">Open Positions</h2>
              <p className="text-gray-400">Join our growing team.</p>
          </div>

          <div className="space-y-16">
              {openings.map((dept, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                      <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                          {dept.dept} <span className="text-xs bg-white/10 text-gray-300 px-2 py-0.5 rounded-full font-normal">{dept.roles.length}</span>
                      </h3>
                      <div className="space-y-4">
                          {dept.roles.map((role, idx) => (
                              <div key={idx} className="group bg-[#0A0C10] border border-white/5 p-6 rounded-xl hover:border-verve-accent/30 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4">
                                  <div>
                                      <h4 className="text-lg font-medium text-white group-hover:text-verve-accent transition-colors">{role.title}</h4>
                                      <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                                          <span>{role.type}</span>
                                          <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                          <span>{role.loc}</span>
                                      </div>
                                  </div>
                                  <div className="flex items-center gap-6">
                                      <span className="text-sm font-mono text-gray-400 hidden md:block">{role.salary}</span>
                                      <Button variant="outline" size="sm" className="group-hover:bg-white/10">
                                          Apply <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                      </Button>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </ScrollReveal>
              ))}
          </div>
      </section>

      {/* 4. General Application */}
      <section className="py-20 max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="relative rounded-[2.5rem] bg-[#0A0C10] border border-white/5 p-12 lg:p-20 text-center overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-40 pointer-events-none" />
               
               <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                   <h2 className="text-3xl font-semibold text-white">Don't see the right role?</h2>
                   <p className="text-gray-400 text-lg">
                       We're always looking for exceptional talent. If you think you'd be a great fit, we'd love to hear from you.
                   </p>
                   <div className="pt-4">
                       <Button variant="outline" className="px-8 py-3">Submit General Application</Button>
                   </div>
               </div>
          </ScrollReveal>
      </section>

    </div>
  );
};

export default CareersPage;