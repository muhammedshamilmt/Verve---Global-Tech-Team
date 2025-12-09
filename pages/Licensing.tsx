import React from 'react';
import { Scale, Check, X } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';

const Licensing: React.FC = () => {
  return (
    <div className="w-full pt-8 pb-24 relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#1A1D24] border border-white/10 flex items-center justify-center mx-auto shadow-xl">
                <Scale className="text-white" size={32} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-semibold text-white">Licensing</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Simple, transparent licensing for your projects. Choose the license that fits your needs.
            </p>
        </div>

        {/* License Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Standard */}
            <ScrollReveal className="bg-[#0A0C10] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors">
                <h3 className="text-2xl font-semibold text-white mb-2">Standard License</h3>
                <p className="text-gray-400 text-sm mb-8 h-10">For personal projects or a single commercial project.</p>
                
                <div className="space-y-4 mb-8">
                    {[
                        { text: "Use in one end product", check: true },
                        { text: "Use for personal or commercial", check: true },
                        { text: "No redistribution / resale", check: true },
                        { text: "End product cannot be sold", check: false },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            {item.check ? <Check size={16} className="text-verve-accent" /> : <X size={16} className="text-gray-600" />}
                            <span className={item.check ? "text-gray-300" : "text-gray-600"}>{item.text}</span>
                        </div>
                    ))}
                </div>
            </ScrollReveal>

            {/* Extended */}
            <ScrollReveal delay={0.1} className="bg-[#0A0C10] border border-verve-accent/20 rounded-3xl p-8 shadow-[0_0_30px_rgba(94,234,212,0.05)]">
                <h3 className="text-2xl font-semibold text-white mb-2">Extended License</h3>
                <p className="text-gray-400 text-sm mb-8 h-10">For end products that are sold to customers (SaaS, Themes).</p>
                
                <div className="space-y-4 mb-8">
                    {[
                        { text: "Use in one end product", check: true },
                        { text: "Use for personal or commercial", check: true },
                        { text: "No redistribution / resale", check: true },
                        { text: "End product CAN be sold", check: true },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <Check size={16} className="text-verve-accent" />
                            <span className="text-gray-300">{item.text}</span>
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </div>

        {/* Legal Text */}
        <ScrollReveal delay={0.2} className="space-y-8 text-gray-400 leading-relaxed text-sm border-t border-white/5 pt-12">
            <div>
                <h4 className="text-white font-medium text-base mb-2">Rights</h4>
                <p>You have rights for royalty free use of our resources for any or all of your personal and commercial projects. You may modify the resources according to your requirements and use them royalty free in any or all of your personal and commercial projects. For example, you may include this resource in a website you will be designing for a client.</p>
            </div>
            <div>
                <h4 className="text-white font-medium text-base mb-2">Prohibitions</h4>
                <p>You do not have the rights to redistribute, resell, lease, license, sub-license or offer the file downloaded to any third party. For any resalable web applications or software programs, you should not include our graphic resources as an additional attachment. This will be considered as a redistribution of our resources which is forbidden.</p>
            </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default Licensing;