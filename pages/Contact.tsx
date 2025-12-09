import React from 'react';
import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="w-full pt-8 pb-24 relative overflow-hidden">
        {/* Adjusted padding top from pt-24/32 to pt-8 since main container now has padding */}
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Info */}
            <div className="space-y-12 pt-8">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A202C]/50 border border-verve-accent/20 backdrop-blur-sm animate-reveal">
                        <Sparkles className="w-3 h-3 text-verve-accent fill-verve-accent" />
                        <span className="text-[11px] font-semibold text-gray-200 tracking-wide uppercase">Contact Us</span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                        Let’s build something <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-verve-accent to-blue-500">great together.</span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                        Whether you have a question about features, pricing, or enterprise solutions, our team is ready to help.
                    </p>
                </div>

                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#1A1D24] border border-white/5 flex items-center justify-center shrink-0">
                            <Mail className="text-verve-accent" size={20} />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-white">Email Us</h3>
                            <p className="text-gray-400 text-sm mb-1">Our friendly team is here to help.</p>
                            <a href="mailto:hello@verve.com" className="text-verve-accent font-medium hover:underline">hello@verve.com</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#1A1D24] border border-white/5 flex items-center justify-center shrink-0">
                            <MapPin className="text-verve-accent" size={20} />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-white">Office</h3>
                            <p className="text-gray-400 text-sm mb-1">Come say hello at our office HQ.</p>
                            <p className="text-gray-300 font-medium">100 Smith Street, Collingwood VIC 3066</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#1A1D24] border border-white/5 flex items-center justify-center shrink-0">
                            <Phone className="text-verve-accent" size={20} />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-white">Phone</h3>
                            <p className="text-gray-400 text-sm mb-1">Mon-Fri from 8am to 5pm.</p>
                            <p className="text-gray-300 font-medium">+1 (555) 000-0000</p>
                        </div>
                    </div>
                </div>

                {/* Abstract Map Graphic */}
                <div className="relative w-full h-48 rounded-2xl bg-[#0A0C10] border border-white/5 overflow-hidden opacity-80">
                    <div className="absolute inset-0" style={{ 
                        backgroundImage: 'radial-gradient(circle at center, rgba(94, 234, 212, 0.15) 2px, transparent 2px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-verve-accent rounded-full animate-ping"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-verve-accent rounded-full border-2 border-black z-10"></div>
                </div>
            </div>

            {/* Right Column: Form */}
            <div className="relative">
                {/* Background Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-verve-accent/20 to-blue-500/20 rounded-[2.5rem] blur-xl opacity-50" />
                
                <div className="relative bg-[#060709]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 lg:p-10 shadow-2xl">
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">First Name</label>
                                <input type="text" className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 transition-all" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Last Name</label>
                                <input type="text" className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 transition-all" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Email Address</label>
                            <input type="email" className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 transition-all" placeholder="john@company.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Subject</label>
                            <select className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 transition-all appearance-none">
                                <option>General Inquiry</option>
                                <option>Support</option>
                                <option>Sales</option>
                                <option>Enterprise</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Message</label>
                            <textarea rows={4} className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 transition-all resize-none" placeholder="Tell us how we can help..."></textarea>
                        </div>

                        <button type="submit" className="w-full bg-verve-accent text-black font-semibold rounded-xl py-4 hover:bg-verve-accent/90 transition-all hover:shadow-[0_0_20px_rgba(94,234,212,0.3)] flex items-center justify-center gap-2">
                            <Send size={18} /> Send Message
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-white/5 text-center">
                        <p className="text-xs text-gray-500">By sending this form you agree to our Terms of Service and Privacy Policy.</p>
                    </div>
                </div>
            </div>
        </div>

        <style>
          {`
            .animate-reveal {
                animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            @keyframes slideUpFade {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
    </div>
  );
};

export default Contact;