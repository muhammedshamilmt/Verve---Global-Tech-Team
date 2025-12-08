import React from 'react';
import { Sparkles, PieChart, AppWindow, Tag, Crown, MousePointer2, Clock } from 'lucide-react';
import StaggerText from './ui/StaggerText';
import ScrollReveal from './ui/ScrollReveal';

const GridFeaturesSection: React.FC = () => {
  const features = [
    {
      icon: PieChart,
      color: "text-cyan-400",
      title: "Responsive Break Points",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo ornare.",
      footer: "Vestibulum lobortis ligula vehicula, semper."
    },
    {
      icon: AppWindow,
      color: "text-rose-400",
      title: "Easy to Customize",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo ornare.",
      footer: "Vestibulum lobortis ligula vehicula, semper."
    },
    {
      icon: Tag,
      color: "text-amber-400",
      title: "Framer CMS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo ornare.",
      footer: "Vestibulum lobortis ligula vehicula, semper."
    },
    {
      icon: Crown,
      color: "text-indigo-400",
      title: "Structured Layers",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo ornare.",
      footer: "Vestibulum lobortis ligula vehicula, semper."
    },
    {
      icon: MousePointer2,
      color: "text-emerald-400",
      title: "Text Effects",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo ornare.",
      footer: "Vestibulum lobortis ligula vehicula, semper."
    },
    {
      icon: Clock,
      color: "text-fuchsia-400",
      title: "Time Animations",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo ornare.",
      footer: "Vestibulum lobortis ligula vehicula, semper."
    }
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-24 lg:pb-32">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-8 mb-20">
        {/* Badge */}
        <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A202C]/50 border border-verve-accent/20 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 text-verve-accent fill-verve-accent" />
                <span className="text-[11px] font-semibold text-gray-200 tracking-wide uppercase">Verve Features</span>
            </div>
        </ScrollReveal>

        {/* Heading */}
        <div className="text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight">
          <StaggerText text="Build a solution that wins" className="text-white" />
          <br className="hidden lg:block"/>
          <StaggerText text="you more customers." className="text-gray-400" delay={0.3} />
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <ScrollReveal 
            key={index}
            delay={index * 0.1}
            className="group relative bg-[#060709] border border-white/5 hover:border-white/10 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 overflow-hidden"
          >
            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Icon */}
              <div className="mb-6">
                <feature.icon className={`w-6 h-6 ${feature.color}`} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="flex-grow space-y-4">
                <h3 className="text-xl font-medium text-white tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Footer Text */}
              <div className="mt-8 pt-8 border-t border-white/[0.02] group-hover:border-white/[0.05] transition-colors">
                <p className="text-[11px] text-gray-600 font-medium">
                  {feature.footer}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default GridFeaturesSection;