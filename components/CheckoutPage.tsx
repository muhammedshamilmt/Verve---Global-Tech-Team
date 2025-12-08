import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Lock, ShieldCheck, Sparkles } from 'lucide-react';
import Button from './ui/Button';

interface CheckoutPageProps {
  onNavigate: (page: string) => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ onNavigate }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing delay
    setTimeout(() => {
        setIsProcessing(false);
        onNavigate('payment-success');
    }, 2000);
  };

  return (
    <div className="w-full min-h-screen bg-[#020406] pt-8 pb-24 relative overflow-hidden">
       {/* Background */}
       <div className="absolute top-0 right-0 w-full h-[600px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-verve-accent/5 via-transparent to-transparent opacity-60 pointer-events-none" />

       <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Back Navigation */}
          <button 
            onClick={() => onNavigate('plans')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
             <div className="w-8 h-8 rounded-full bg-[#0F1115] border border-white/10 flex items-center justify-center group-hover:border-verve-accent/30 transition-colors">
                <ArrowLeft size={16} />
             </div>
             <span className="text-sm font-medium">Back to Plans</span>
          </button>

          <div className="grid lg:grid-cols-12 gap-12">
              
              {/* Left Column: Billing Form */}
              <div className="lg:col-span-8 space-y-8">
                  <div className="space-y-2">
                      <h1 className="text-3xl font-semibold text-white">Checkout</h1>
                      <p className="text-gray-400">Complete your purchase to start your subscription.</p>
                  </div>

                  <form id="checkout-form" onSubmit={handlePayment} className="space-y-8">
                      {/* Personal Info */}
                      <section className="space-y-4">
                          <h2 className="text-lg font-medium text-white flex items-center gap-2">
                              1. Personal Information
                          </h2>
                          <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-1.5">
                                  <label className="text-xs font-medium text-gray-400 ml-1">First Name</label>
                                  <input type="text" required className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 focus:outline-none transition-all" placeholder="John" />
                              </div>
                              <div className="space-y-1.5">
                                  <label className="text-xs font-medium text-gray-400 ml-1">Last Name</label>
                                  <input type="text" required className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 focus:outline-none transition-all" placeholder="Doe" />
                              </div>
                          </div>
                          <div className="space-y-1.5">
                              <label className="text-xs font-medium text-gray-400 ml-1">Email Address</label>
                              <input type="email" required className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 focus:outline-none transition-all" placeholder="john@example.com" />
                          </div>
                      </section>

                      {/* Payment Details */}
                      <section className="space-y-4">
                          <h2 className="text-lg font-medium text-white flex items-center gap-2">
                              2. Payment Method
                              <span className="text-xs font-normal text-gray-500 ml-auto flex items-center gap-1">
                                <Lock size={12} /> Secure SSL Connection
                              </span>
                          </h2>
                          
                          <div className="bg-[#0F1115] border border-white/10 rounded-xl p-6 space-y-6">
                              <div className="flex gap-4 mb-4">
                                  <button type="button" className="flex-1 py-2 rounded-lg bg-verve-accent/10 border border-verve-accent/50 text-verve-accent text-sm font-medium flex items-center justify-center gap-2">
                                      <CreditCard size={16} /> Card
                                  </button>
                                  <button type="button" className="flex-1 py-2 rounded-lg bg-transparent border border-white/10 text-gray-400 text-sm font-medium hover:bg-white/5 transition-colors">
                                      PayPal
                                  </button>
                              </div>

                              <div className="space-y-4">
                                  <div className="space-y-1.5">
                                      <label className="text-xs font-medium text-gray-400 ml-1">Card Number</label>
                                      <div className="relative">
                                          <input type="text" required placeholder="0000 0000 0000 0000" className="w-full bg-[#060709] border border-white/10 rounded-xl px-4 py-3 text-white font-mono placeholder-gray-600 focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 focus:outline-none transition-all" />
                                          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2 opacity-50">
                                              <div className="w-8 h-5 bg-gray-600 rounded"></div>
                                              <div className="w-8 h-5 bg-gray-600 rounded"></div>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="grid grid-cols-2 gap-4">
                                      <div className="space-y-1.5">
                                          <label className="text-xs font-medium text-gray-400 ml-1">Expiry Date</label>
                                          <input type="text" required placeholder="MM / YY" className="w-full bg-[#060709] border border-white/10 rounded-xl px-4 py-3 text-white font-mono placeholder-gray-600 focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 focus:outline-none transition-all" />
                                      </div>
                                      <div className="space-y-1.5">
                                          <label className="text-xs font-medium text-gray-400 ml-1">CVC</label>
                                          <input type="text" required placeholder="123" className="w-full bg-[#060709] border border-white/10 rounded-xl px-4 py-3 text-white font-mono placeholder-gray-600 focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 focus:outline-none transition-all" />
                                      </div>
                                  </div>

                                  <div className="space-y-1.5">
                                      <label className="text-xs font-medium text-gray-400 ml-1">Cardholder Name</label>
                                      <input type="text" required placeholder="JOHN DOE" className="w-full bg-[#060709] border border-white/10 rounded-xl px-4 py-3 text-white font-mono placeholder-gray-600 focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 focus:outline-none transition-all" />
                                  </div>
                              </div>
                          </div>
                      </section>
                  </form>
              </div>

              {/* Right Column: Summary */}
              <div className="lg:col-span-4">
                  <div className="bg-[#0A0C10] border border-white/10 rounded-2xl p-6 lg:p-8 sticky top-24 shadow-2xl">
                      <h3 className="text-xl font-semibold text-white mb-6">Order Summary</h3>
                      
                      <div className="flex items-start gap-4 pb-6 border-b border-white/5">
                          <div className="w-12 h-12 rounded-xl bg-verve-accent/10 flex items-center justify-center border border-verve-accent/20">
                              <Sparkles className="text-verve-accent" size={20} />
                          </div>
                          <div>
                              <div className="font-medium text-white">Pro Plan</div>
                              <div className="text-sm text-gray-400">Monthly billing</div>
                          </div>
                          <div className="ml-auto font-semibold text-white">$39.00</div>
                      </div>

                      <div className="py-6 space-y-3">
                          <div className="flex justify-between text-sm text-gray-400">
                              <span>Subtotal</span>
                              <span>$39.00</span>
                          </div>
                          <div className="flex justify-between text-sm text-gray-400">
                              <span>Tax (10%)</span>
                              <span>$3.90</span>
                          </div>
                          <div className="flex justify-between text-sm text-verve-accent">
                              <span>Discount</span>
                              <span>-$0.00</span>
                          </div>
                      </div>

                      <div className="pt-4 border-t border-white/10 mb-8">
                          <div className="flex justify-between items-end">
                              <span className="text-gray-200 font-medium">Total</span>
                              <div className="text-right">
                                  <span className="text-2xl font-bold text-white block">$42.90</span>
                                  <span className="text-xs text-gray-500">USD / Month</span>
                              </div>
                          </div>
                      </div>

                      <Button 
                        onClick={(e) => {
                            const form = document.getElementById('checkout-form') as HTMLFormElement;
                            if (form.checkValidity()) {
                                handlePayment(e);
                            } else {
                                form.reportValidity();
                            }
                        }} 
                        className="w-full py-4 text-base shadow-[0_0_20px_rgba(94,234,212,0.2)] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                        disabled={isProcessing}
                      >
                         {isProcessing ? (
                             <span className="flex items-center gap-2">
                                 <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                 </svg>
                                 Processing...
                             </span>
                         ) : (
                             "Pay $42.90"
                         )}
                      </Button>

                      <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
                          <ShieldCheck size={14} />
                          <span>Guaranteed safe & secure checkout</span>
                      </div>
                  </div>
              </div>

          </div>
       </div>
    </div>
  );
};

export default CheckoutPage;