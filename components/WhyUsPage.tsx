import React from 'react';
import { Sparkles, Zap, Shield, Rocket, ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import StaggerText from './ui/StaggerText';
import ScrollReveal from './ui/ScrollReveal';

const WhyUsPage: React.FC = () => {
  return (
    <div className="w-full pt-8 pb-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-24 space-y-6 max-w-4xl mx-auto">
            <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A202C]/50 border border-verve-accent/20 backdrop-blur-sm">
                    <Sparkles className="w-3 h-3 text-verve-accent fill-verve-accent" />
                    <span className="text-[11px] font-semibold text-gray-200 tracking-wide uppercase">Why Choose Verve</span>
                </div>
            </ScrollReveal>
            <div className="text-4xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
                <StaggerText text="We build differently." className="text-white" />
            </div>
            <ScrollReveal delay={0.2}>
                <p className="text-lg text-gray-400 leading-relaxed">
                    Most agencies focus on output. We focus on outcome. See what makes the Verve experience unique.
                </p>
            </ScrollReveal>
        </div>

        {/* Feature Blocks */}
        <div className="space-y-32">
            
            {/* Block 1: Speed */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <ScrollReveal className="relative h-[400px] bg-[#0A0C10] border border-white/5 rounded-3xl overflow-hidden flex items-center justify-center group">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-50" />
                     <div className="relative z-10 w-48 h-48 rounded-full border-2 border-amber-500/30 flex items-center justify-center animate-pulse">
                         <div className="w-32 h-32 rounded-full bg-amber-500/10 flex items-center justify-center backdrop-blur-md">
                             <Zap className="text-amber-400 w-16 h-16" />
                         </div>
                     </div>
                </ScrollReveal>
                <ScrollReveal delay={0.2} className="space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                        <Zap className="text-amber-400" size={24} />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-white">Unmatched Velocity</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Time is money. Our proprietary stack and pre-built components allow us to ship production-ready code 3x faster than traditional agencies. No bloat, just speed.
                    </p>
                    <ul className="space-y-3">
                        {['Rapid Prototyping', 'Automated CI/CD', 'Instant Rollbacks'].map(item => (
                            <li key={item} className="flex items-center gap-3 text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </ScrollReveal>
            </div>

            {/* Block 2: Quality */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <ScrollReveal delay={0.2} className="space-y-6 order-2 lg:order-1">
                    <div className="w-12 h-12 rounded-xl bg-verve-accent/10 border border-verve-accent/20 flex items-center justify-center">
                        <Shield className="text-verve-accent" size={24} />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-white">Bulletproof Quality</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        We don't cut corners. Every line of code is reviewed, tested, and optimized. We build software that scales with you, not software you have to rewrite in six months.
                    </p>
                    <ul className="space-y-3">
                        {['100% Type Safety', '90%+ Test Coverage', 'Accessibility First'].map(item => (
                            <li key={item} className="flex items-center gap-3 text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-verve-accent"></div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </ScrollReveal>
                <ScrollReveal className="relative h-[400px] bg-[#0A0C10] border border-white/5 rounded-3xl overflow-hidden flex items-center justify-center order-1 lg:order-2 group">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-verve-accent/10 via-transparent to-transparent opacity-50" />
                     <div className="relative z-10 w-full max-w-sm p-6 bg-[#0F1115] border border-white/10 rounded-xl shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                         <div className="flex gap-2 mb-4">
                             <div className="w-3 h-3 rounded-full bg-red-500"></div>
                             <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                             <div className="w-3 h-3 rounded-full bg-green-500"></div>
                         </div>
                         <div className="space-y-2">
                             <div className="h-2 bg-white/10 rounded w-3/4"></div>
                             <div className="h-2 bg-white/10 rounded w-1/2"></div>
                             <div className="h-2 bg-white/10 rounded w-5/6"></div>
                             <div className="h-2 bg-verve-accent/50 rounded w-full"></div>
                         </div>
                         <div className="mt-4 flex justify-end">
                             <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded font-mono">Tests Passed: 142/142</div>
                         </div>
                     </div>
                </ScrollReveal>
            </div>

            {/* Block 3: Innovation */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <ScrollReveal className="relative h-[400px] bg-[#0A0C10] border border-white/5 rounded-3xl overflow-hidden flex items-center justify-center group">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-50" />
                     <Rocket className="relative z-10 text-purple-400 w-32 h-32 transform group-hover:-translate-y-4 transition-transform duration-500" />
                     <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-purple-500/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </ScrollReveal>
                <ScrollReveal delay={0.2} className="space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                        <Rocket className="text-purple-400" size={24} />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-white">Future Proof</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        We don't just follow trends; we set them. We utilize the absolute latest in web technology to ensure your product stays relevant for years to come.
                    </p>
                    <ul className="space-y-3">
                        {['Next.js & React 19', 'Edge Computing', 'AI-Native Architecture'].map(item => (
                            <li key={item} className="flex items-center gap-3 text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </ScrollReveal>
            </div>

        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
            <h2 className="text-3xl font-semibold text-white mb-6">Ready to experience the difference?</h2>
            <Button variant="primary" size="lg" className="px-10 py-4 shadow-[0_0_30px_rgba(94,234,212,0.3)]">
                Start Your Project <ArrowRight size={18} className="ml-2" />
            </Button>
        </div>

      </div>
    </div>
  );
};

export default WhyUsPage;