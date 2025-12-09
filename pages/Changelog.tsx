import React from 'react';
import { Sparkles, GitCommit } from 'lucide-react';
import StaggerText from '../components/ui/StaggerText';
import ScrollReveal from '../components/ui/ScrollReveal';

const Changelog: React.FC = () => {
  const changes = [
    {
      version: "v2.0.0",
      date: "January 15, 2025",
      type: "Major",
      content: [
        "Completely redesigned dashboard interface.",
        "Added dark mode support for all components.",
        "New 'Teams' feature for collaborative projects.",
        "Performance improvements: 3x faster load times."
      ]
    },
    {
      version: "v1.5.2",
      date: "December 10, 2024",
      type: "Improvement",
      content: [
        "Improved accessibility on mobile devices.",
        "Updated dependency packages.",
        "Fixed a bug where the navbar would flicker on scroll."
      ]
    },
    {
      version: "v1.5.0",
      date: "November 22, 2024",
      type: "Feature",
      content: [
        "Launched public API beta.",
        "Added 3 new landing page templates.",
        "Integrated Stripe for payment processing."
      ]
    },
    {
      version: "v1.0.0",
      date: "October 01, 2024",
      type: "Release",
      content: [
        "Initial public release.",
        "Core features: Authentication, Database, Storage.",
        "Documentation site live."
      ]
    }
  ];

  return (
    <div className="w-full pt-8 pb-24 relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-24 space-y-6">
            <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A202C]/50 border border-verve-accent/20 backdrop-blur-sm">
                    <Sparkles className="w-3 h-3 text-verve-accent fill-verve-accent" />
                    <span className="text-[11px] font-semibold text-gray-200 tracking-wide uppercase">Product Updates</span>
                </div>
            </ScrollReveal>
            <div className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                <StaggerText text="Changelog" className="text-white" />
            </div>
            <p className="text-gray-400">New updates and improvements to Verve.</p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-16">
            {changes.map((change, i) => (
                <ScrollReveal key={i} delay={i * 0.1} className="relative pl-12 md:pl-0">
                    <div className="md:flex gap-12 group">
                        {/* Timeline Dot */}
                        <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#0A0C10] border border-white/30 group-hover:border-verve-accent group-hover:bg-verve-accent transition-colors md:left-auto md:right-full md:mr-[-5px]"></div>
                        
                        {/* Date Side (Desktop) */}
                        <div className="hidden md:block w-48 text-right flex-shrink-0 pt-1">
                            <div className="text-sm font-mono text-gray-500 mb-2">{change.date}</div>
                            <div className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border ${
                                change.type === 'Major' ? 'border-verve-accent/30 text-verve-accent bg-verve-accent/5' : 
                                change.type === 'Feature' ? 'border-blue-500/30 text-blue-400 bg-blue-500/5' :
                                'border-gray-500/30 text-gray-400 bg-gray-500/5'
                            }`}>
                                {change.type}
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="flex-grow pb-8 border-b border-white/5 last:border-0 last:pb-0">
                             <div className="flex items-center gap-3 mb-4">
                                 <h3 className="text-2xl font-semibold text-white">{change.version}</h3>
                                 <div className="md:hidden text-xs text-gray-500">{change.date}</div>
                             </div>
                             <ul className="space-y-3">
                                 {change.content.map((item, idx) => (
                                     <li key={idx} className="flex items-start gap-3 text-gray-400">
                                         <GitCommit size={16} className="mt-1 text-gray-600 flex-shrink-0" />
                                         <span className="leading-relaxed">{item}</span>
                                     </li>
                                 ))}
                             </ul>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Changelog;