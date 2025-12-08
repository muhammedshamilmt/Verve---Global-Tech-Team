import React from 'react';
import { Sparkles, Check, X, HelpCircle } from 'lucide-react';
import Button from './ui/Button';
import StaggerText from './ui/StaggerText';
import ScrollReveal from './ui/ScrollReveal';

interface PlansPageProps {
  onNavigate: (page: string) => void;
}

const PlansPage: React.FC<PlansPageProps> = ({ onNavigate }) => {
  const features = [
    { category: "Core Features", items: [
      { name: "Public Projects", basic: true, pro: true, enterprise: true },
      { name: "Private Projects", basic: false, pro: true, enterprise: true },
      { name: "Custom Domains", basic: "1", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "Collaborators", basic: "2", pro: "10", enterprise: "Unlimited" },
    ]},
    { category: "Analytics", items: [
      { name: "Basic Analytics", basic: true, pro: true, enterprise: true },
      { name: "Advanced Reports", basic: false, pro: true, enterprise: true },
      { name: "Export Data", basic: false, pro: true, enterprise: true },
      { name: "Real-time Logs", basic: false, pro: false, enterprise: true },
    ]},
    { category: "Support", items: [
      { name: "Community Support", basic: true, pro: true, enterprise: true },
      { name: "Email Support", basic: false, pro: true, enterprise: true },
      { name: "Priority SLA", basic: false, pro: false, enterprise: true },
      { name: "Dedicated Account Manager", basic: false, pro: false, enterprise: true },
    ]},
  ];

  const CheckIcon = () => <div className="flex justify-center"><div className="w-6 h-6 rounded-full bg-verve-accent/10 flex items-center justify-center"><Check size={14} className="text-verve-accent" /></div></div>;
  const CrossIcon = () => <div className="flex justify-center"><div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center"><X size={14} className="text-gray-600" /></div></div>;

  return (
    <div className="w-full pt-8 pb-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
            <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A202C]/50 border border-verve-accent/20 backdrop-blur-sm">
                    <Sparkles className="w-3 h-3 text-verve-accent fill-verve-accent" />
                    <span className="text-[11px] font-semibold text-gray-200 tracking-wide uppercase">Compare Plans</span>
                </div>
            </ScrollReveal>
            <div className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                <StaggerText text="Find the perfect fit for" className="text-white" />
                <br className="hidden lg:block"/>
                <StaggerText text="your ambition." className="text-gray-400" delay={0.2} />
            </div>
        </div>

        {/* Comparison Table */}
        <ScrollReveal delay={0.3} className="overflow-x-auto">
            <div className="min-w-[800px] bg-[#0A0C10] border border-white/5 rounded-3xl p-8 lg:p-12 relative">
                {/* Gradient Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-verve-accent/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="grid grid-cols-4 gap-8 mb-12 border-b border-white/5 pb-8">
                    <div className="flex flex-col justify-end">
                        <span className="text-lg font-medium text-white">Features</span>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-white mb-2">Basic</h3>
                        <div className="text-2xl font-bold text-gray-400 mb-4">$12<span className="text-sm font-normal text-gray-600">/mo</span></div>
                        <Button variant="outline" size="sm" className="w-full" onClick={() => onNavigate('checkout')}>Choose Basic</Button>
                    </div>
                    <div className="text-center relative">
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-verve-accent text-[10px] font-bold text-black uppercase tracking-wide">Most Popular</div>
                        <h3 className="text-xl font-semibold text-verve-accent mb-2">Pro</h3>
                        <div className="text-2xl font-bold text-white mb-4">$39<span className="text-sm font-normal text-gray-500">/mo</span></div>
                        <Button variant="primary" size="sm" className="w-full shadow-[0_0_20px_rgba(94,234,212,0.2)]" onClick={() => onNavigate('checkout')}>Choose Pro</Button>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
                        <div className="text-2xl font-bold text-gray-400 mb-4">Custom</div>
                        <Button variant="outline" size="sm" className="w-full" onClick={() => onNavigate('contact')}>Contact Sales</Button>
                    </div>
                </div>

                <div className="space-y-12">
                    {features.map((section, idx) => (
                        <div key={idx} className="space-y-6">
                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{section.category}</h4>
                            <div className="space-y-4">
                                {section.items.map((item, i) => (
                                    <div key={i} className="grid grid-cols-4 gap-8 items-center py-4 border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors -mx-4 px-4 rounded-lg group">
                                        <div className="flex items-center gap-2 text-gray-300 font-medium group-hover:text-white transition-colors">
                                            {item.name}
                                            <HelpCircle size={14} className="text-gray-600 cursor-help" />
                                        </div>
                                        <div className="text-center text-sm text-gray-400">
                                            {typeof item.basic === 'boolean' ? (item.basic ? <CheckIcon /> : <CrossIcon />) : item.basic}
                                        </div>
                                        <div className="text-center text-sm text-white font-medium">
                                            {typeof item.pro === 'boolean' ? (item.pro ? <CheckIcon /> : <CrossIcon />) : item.pro}
                                        </div>
                                        <div className="text-center text-sm text-gray-400">
                                            {typeof item.enterprise === 'boolean' ? (item.enterprise ? <CheckIcon /> : <CrossIcon />) : item.enterprise}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ScrollReveal>
        
        {/* FAQ CTA */}
        <div className="mt-24 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Still have questions?</h3>
            <p className="text-gray-400 mb-8">We'd love to hear from you. Our team is always here to chat.</p>
            <Button variant="outline" onClick={() => onNavigate('contact')}>Contact Support</Button>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;