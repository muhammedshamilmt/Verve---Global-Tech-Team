import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Crown, Plus, Heart } from 'lucide-react';
import Button from './ui/Button';
import StaggerText from './ui/StaggerText';
import ScrollReveal from './ui/ScrollReveal';

interface PricingSectionProps {
  onNavigate?: (page: string) => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onNavigate }) => {
  const [isYearly, setIsYearly] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleToggle = () => {
    setIsFlipping(true);
    // Match the CSS duration (300ms)
    setTimeout(() => {
        setIsYearly(!isYearly);
        setIsFlipping(false);
    }, 300); 
  };

  const plans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      icon: Heart,
      iconColor: 'text-amber-200',
      price: isYearly ? 12.00 : 16.00,
      period: '/ Month',
      description: 'Essential features for small teams.',
      features: [
        'Developer docs',
        'Submit cases to support',
        'API status notifications',
        'Troubleshooting'
      ],
      buttonVariant: 'outline' as const,
      highlight: false
    },
    {
      id: 'popular',
      name: 'Popular Plan',
      icon: Crown,
      iconColor: 'text-verve-accent',
      price: isYearly ? 39.00 : 48.00,
      period: '/ Month',
      description: 'Advanced tools for scaling businesses.',
      features: [
        'Developer docs',
        'Submit cases to support',
        'API status notifications',
        'Troubleshooting'
      ],
      buttonVariant: 'primary' as const,
      highlight: true
    }
  ];

  const marqueeItems = [
    "Streamlined Solutions", "Seamless Success", "Efficient Excellence", 
    "Empowering Growth", "Innovative Simplicity", "Streamlined Solutions", 
    "Seamless Success", "Efficient Excellence", "Empowering Growth"
  ];

  return (
    <section className="relative w-full pt-8 pb-0 overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20 lg:mb-32">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center space-y-8 mb-16 relative z-10">
            {/* Badge */}
            <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A202C]/50 border border-verve-accent/20 backdrop-blur-sm">
                    <Sparkles className="w-3 h-3 text-verve-accent fill-verve-accent" />
                    <span className="text-[11px] font-semibold text-gray-200 tracking-wide uppercase">Verve Our Pricing</span>
                </div>
            </ScrollReveal>

            {/* Heading */}
            <div className="text-4xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
                <StaggerText text="Our Plans Scale With" className="text-white" />
                <br className="hidden lg:block"/>
                <StaggerText text="Your Business" className="text-gray-400" delay={0.2} />
            </div>

            {/* Toggle Switch */}
            <ScrollReveal delay={0.3}>
                <div className="flex items-center gap-4 mt-8">
                    <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
                    
                    <button 
                        onClick={handleToggle}
                        className="relative w-14 h-8 bg-[#1A202C] rounded-full border border-white/10 p-1 transition-colors hover:border-verve-accent/50 focus:outline-none focus:ring-2 focus:ring-verve-accent/50 cursor-pointer"
                    >
                        <div 
                            className={`w-6 h-6 bg-verve-accent rounded-full shadow-lg transform transition-transform duration-300 ease-spring ${isYearly ? 'translate-x-6' : 'translate-x-0'}`} 
                        />
                    </button>
                    
                    <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-white' : 'text-gray-500'}`}>Yearly</span>
                        <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-[10px] font-semibold text-verve-accent">
                            30% Off
                        </span>
                    </div>
                </div>
            </ScrollReveal>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto perspective-1000">
            {plans.map((plan, i) => (
                <ScrollReveal 
                    key={plan.id}
                    delay={0.2 + (i * 0.1)}
                    className="h-full"
                >
                    <div
                        className={`
                            relative bg-[#060709] border rounded-[2rem] p-8 lg:p-12 flex flex-col h-full
                            transition-all duration-300 ease-in-out
                            ${plan.highlight ? 'border-verve-accent/30 shadow-[0_0_50px_rgba(94,234,212,0.05)]' : 'border-white/5'}
                        `}
                        // Use inline style for reliable transform across Tailwind configs
                        style={{
                            transform: isFlipping ? 'rotateY(90deg) scale(0.95)' : 'rotateY(0deg) scale(1)',
                            opacity: isFlipping ? 0.5 : 1,
                            transformStyle: 'preserve-3d',
                            backfaceVisibility: 'hidden'
                        }}
                    >
                        {/* Card Header */}
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-6">
                                <plan.icon className={`w-4 h-4 ${plan.iconColor} fill-current`} />
                                <span className="text-sm font-medium text-gray-300">{plan.name}</span>
                            </div>
                            
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl lg:text-6xl font-semibold text-white tracking-tight">
                                    ${plan.price.toFixed(2)}
                                </span>
                                <span className="text-sm text-gray-500 font-medium ml-2">{plan.period}</span>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                            {plan.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 rounded-full border border-white/10 bg-white/5 p-0.5">
                                        <CheckCircle2 size={12} className="text-gray-400" />
                                    </div>
                                    <span className="text-sm text-gray-400">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="mt-auto">
                            <Button 
                                variant={plan.buttonVariant} 
                                className={`w-full py-4 text-sm font-semibold tracking-wide ${plan.highlight ? 'shadow-[0_0_20px_rgba(94,234,212,0.2)]' : 'border-white/10 hover:bg-white/5'}`}
                                onClick={() => onNavigate?.('checkout')}
                            >
                                Start with Verve
                            </Button>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>
      </div>

      {/* Infinite Marquee Footer Strip */}
      <div className="w-full bg-verve-accent overflow-hidden py-5 lg:py-6 relative z-10">
          <div className="flex w-max animate-marquee">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
                  <div key={index} className="flex items-center mx-6 lg:mx-10 select-none">
                      <span className="text-black font-semibold text-lg lg:text-xl tracking-tight whitespace-nowrap">
                          {item}
                      </span>
                      <Plus className="w-4 h-4 text-black ml-12 lg:ml-20" strokeWidth={3} />
                  </div>
              ))}
          </div>
      </div>

      <style>
        {`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.33%); }
            }
            .animate-marquee {
                animation: marquee 30s linear infinite;
            }
            
            .ease-spring {
                transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            
            .perspective-1000 {
                perspective: 1000px;
            }
        `}
      </style>
    </section>
  );
};

export default PricingSection;