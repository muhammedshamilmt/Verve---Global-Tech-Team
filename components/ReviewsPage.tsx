import React from 'react';
import { Sparkles, Star, Quote } from 'lucide-react';
import StaggerText from './ui/StaggerText';
import ScrollReveal from './ui/ScrollReveal';

const ReviewsPage: React.FC = () => {
  const reviews = [
    { name: "Sarah Jenkins", role: "CTO at TechFlow", text: "Verve has completely transformed how we ship software. It's simply magical. The attention to detail is unparalleled.", rating: 5 },
    { name: "David Chen", role: "Founder, StartUp", text: "I've used many templates before, but this one is in a league of its own. Highly recommended for any serious team.", rating: 5 },
    { name: "Emily Davis", role: "Product Designer", text: "The design system is incredibly robust. It saved us months of development time.", rating: 5 },
    { name: "Michael Ross", role: "Engineering Lead", text: "Clean code, great documentation, and stunning visuals. What more could you ask for?", rating: 4 },
    { name: "Jessica Kim", role: "Marketing Director", text: "Our conversion rates doubled after switching to the Verve landing page. It's beautiful.", rating: 5 },
    { name: "Tom Wilson", role: "Freelance Dev", text: "Worth every penny. The components are so easy to customize and integrate.", rating: 5 },
    { name: "Anna Polina", role: "CEO at Nexus", text: "Verve gave us the professional edge we needed to close our Series A funding.", rating: 5 },
    { name: "Chris Martin", role: "Design Lead", text: "A masterpiece of modern web design. The animations are buttery smooth.", rating: 5 },
    { name: "Robert Fox", role: "Developer", text: "Implementation was a breeze. Best React template on the market.", rating: 4 },
  ];

  return (
    <div className="w-full pt-8 pb-24 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="text-center mb-20 space-y-6">
                <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A202C]/50 border border-verve-accent/20 backdrop-blur-sm">
                        <Sparkles className="w-3 h-3 text-verve-accent fill-verve-accent" />
                        <span className="text-[11px] font-semibold text-gray-200 tracking-wide uppercase">Wall of Love</span>
                    </div>
                </ScrollReveal>
                <div className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                    <StaggerText text="Loved by builders" className="text-white" />
                    <br className="hidden lg:block"/>
                    <StaggerText text="worldwide." className="text-gray-400" delay={0.2} />
                </div>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {reviews.map((review, i) => (
                    <ScrollReveal key={i} delay={i * 0.05} className="break-inside-avoid">
                        <div className="bg-[#0A0C10] border border-white/5 p-8 rounded-2xl hover:border-verve-accent/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group relative overflow-hidden">
                            {/* Quote Icon Background */}
                            <Quote className="absolute top-6 right-6 text-white/5 w-12 h-12 rotate-180" />
                            
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, starIndex) => (
                                    <Star 
                                        key={starIndex} 
                                        size={14} 
                                        className={`${starIndex < review.rating ? 'text-verve-accent fill-verve-accent' : 'text-gray-700'}`} 
                                    />
                                ))}
                            </div>
                            
                            <p className="text-gray-300 leading-relaxed mb-6 relative z-10">"{review.text}"</p>
                            
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 flex items-center justify-center text-xs font-bold text-white">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-white">{review.name}</div>
                                    <div className="text-xs text-gray-500">{review.role}</div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    </div>
  );
};

export default ReviewsPage;