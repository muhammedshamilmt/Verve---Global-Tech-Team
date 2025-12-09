import React, { useState } from 'react';
import PricingSection from '../components/PricingSection';
import { ChevronDown, HelpCircle, Briefcase } from 'lucide-react';
import Button from '../components/ui/Button';

interface PricingPageProps {
  onNavigate?: (page: string) => void;
}

const Pricing: React.FC<PricingPageProps> = ({ onNavigate }) => {
  // Simple FAQ state
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time. Your plan will remain active until the end of your billing cycle."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We will notify you when you reach 80% and 100% of your limits. You can upgrade your plan or pay for additional usage as needed."
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we offer a 50% discount for qualified non-profit organizations and open-source projects. Contact us to apply."
    },
    {
      question: "Is there a trial period available?",
      answer: "Absolutely! All plans come with a 14-day free trial, no credit card required. You can test all features before committing."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, Amex) and PayPal. For Enterprise plans, we also support invoicing."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* 
        Reusing the highly detailed Pricing Section
        This component already has the toggle, cards, animations and marquee.
      */}
      <PricingSection onNavigate={onNavigate} />

      {/* Enterprise CTA Strip */}
      <section className="py-20 bg-[#0A0C10] border-y border-white/5">
         <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#1A1D24] border border-white/10 flex items-center justify-center shrink-0">
                    <Briefcase className="text-white" size={28} />
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Need a custom plan?</h3>
                    <p className="text-gray-400 max-w-md">For large teams with specific security, compliance, or support requirements, check out our Enterprise solutions.</p>
                </div>
            </div>
            <Button variant="outline" className="px-8 py-3 border-white/20 hover:bg-white/10" onClick={() => onNavigate?.('contact')}>Contact Sales</Button>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 max-w-[900px] mx-auto px-6 lg:px-12">
         <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1A202C]/50 border border-white/10 mb-2">
                <HelpCircle className="text-gray-300" size={20} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white">Frequently Asked Questions</h2>
            <p className="text-gray-400">Everything you need to know about billing and plans.</p>
         </div>

         <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div 
                    key={index}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'bg-[#1A1D24]/50 border-verve-accent/30' : 'bg-[#060709] border-white/5 hover:border-white/10'}`}
                >
                    <button 
                        onClick={() => toggleFaq(index)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                        <span className={`font-medium ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                            {faq.question}
                        </span>
                        <ChevronDown 
                            className={`text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-verve-accent' : ''}`} 
                            size={20} 
                        />
                    </button>
                    
                    <div 
                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default Pricing;