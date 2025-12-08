import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import Button from './ui/Button';
import DashboardPreview from './DashboardPreview';
import StaggerText from './ui/StaggerText';
import ScrollReveal from './ui/ScrollReveal';

const HeroSection: React.FC = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-8 lg:mt-0">
      {/* Left Column: Text Content (5 cols) */}
      <div className="lg:col-span-5 space-y-8 lg:pr-8 text-center lg:text-left flex flex-col items-center lg:items-start">
        {/* Badge */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A202C]/50 border border-verve-accent/20 backdrop-blur-sm shadow-[0_0_15px_rgba(94,234,212,0.1)] transition-all hover:bg-[#1A202C]/70">
            <Sparkles className="w-3.5 h-3.5 text-verve-accent fill-verve-accent" />
            <span className="text-[12px] font-semibold text-gray-200 tracking-wide uppercase">Verve Product Overview</span>
          </div>
        </ScrollReveal>

        {/* Heading */}
        <div className="text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-tight">
          <StaggerText text="Learn About our" className="text-white" delay={0.1} />
          <br className="hidden lg:block"/>
          <StaggerText text="Global Tech Team." className="text-white" delay={0.3} />
        </div>

        {/* Description */}
        <ScrollReveal delay={0.4}>
          <p className="text-base text-gray-400 leading-relaxed max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam ut lorem quis lectus molestie.
          </p>
        </ScrollReveal>

        {/* Features List */}
        <ScrollReveal delay={0.5} className="w-full max-w-sm">
          <ul className="space-y-4 pt-2">
            {[
              "Create posts, reels and stories.",
              "Publish your Facebook posts dynamically."
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="flex-shrink-0 rounded-full bg-verve-accent text-black p-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-gray-400 text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.6} className="pt-6 w-full lg:w-auto">
          <Button variant="primary" size="lg" className="px-8 py-3.5 font-semibold shadow-[0_0_20px_rgba(94,234,212,0.4)] text-sm tracking-wide">See How it Works</Button>
        </ScrollReveal>
      </div>

      {/* Right Column: Visual (7 cols) */}
      <div className="lg:col-span-7 relative w-full flex items-center justify-center lg:justify-end perspective-1000 mt-8 lg:mt-0">
        <ScrollReveal delay={0.2} className="w-full">
            <DashboardPreview />
        </ScrollReveal>
      </div>
    </div>
  );
};

export default HeroSection;