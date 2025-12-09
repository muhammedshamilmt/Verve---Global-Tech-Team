import React, { useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Button from '../components/ui/Button';

interface PaymentSuccessPageProps {
  onNavigate: (page: string) => void;
}

const PaymentSuccess: React.FC<PaymentSuccessPageProps> = ({ onNavigate }) => {
  
  // Confetti or redirect logic could go here
  useEffect(() => {
    // Optional: Auto redirect after 10s
    // const timer = setTimeout(() => onNavigate('dashboard'), 10000);
    // return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6 bg-[#020406] relative overflow-hidden">
       
       {/* Background Effects */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-verve-accent/10 rounded-full blur-[120px] pointer-events-none" />
       
       <div className="w-full max-w-lg relative z-10 text-center space-y-8">
            
            {/* Animated Checkmark */}
            <div className="relative w-32 h-32 mx-auto">
                 {/* Pulse Rings */}
                 <div className="absolute inset-0 rounded-full border border-verve-accent/30 animate-[ping_2s_ease-out_infinite]" />
                 <div className="absolute inset-4 rounded-full border border-verve-accent/50 animate-[ping_2s_ease-out_infinite_0.5s]" />
                 
                 {/* Central Circle */}
                 <div className="relative w-full h-full rounded-full bg-verve-accent flex items-center justify-center shadow-[0_0_50px_rgba(94,234,212,0.4)]">
                     <svg className="w-16 h-16 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" className="animate-[draw_0.6s_ease-out_forwards]" style={{ strokeDasharray: 30, strokeDashoffset: 30 }} />
                     </svg>
                 </div>
            </div>

            <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight">Payment Successful!</h1>
                <p className="text-gray-400 text-lg">
                    Thank you for your purchase. A confirmation email has been sent to <span className="text-white font-medium">john@example.com</span>.
                </p>
            </div>

            {/* Receipt Card */}
            <div className="bg-[#0A0C10] border border-white/10 rounded-2xl p-6 text-left space-y-4 max-w-sm mx-auto shadow-xl">
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-sm text-gray-400">Transaction ID</span>
                    <span className="text-sm font-mono text-white">#TRX-8842-XJ</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-sm text-gray-400">Date</span>
                    <span className="text-sm text-white">Jan 24, 2025</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Amount Paid</span>
                    <span className="text-lg font-bold text-verve-accent">$42.90</span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button 
                    onClick={() => onNavigate('dashboard')}
                    className="w-full sm:w-auto px-8 py-3 bg-white text-black hover:bg-gray-200"
                >
                    Go to Dashboard <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button 
                    variant="outline"
                    className="w-full sm:w-auto px-8 py-3"
                >
                    <Download size={16} className="mr-2" /> Download Invoice
                </Button>
            </div>
       </div>

       <style>
         {`
           @keyframes draw {
             to { stroke-dashoffset: 0; }
           }
         `}
       </style>
    </div>
  );
};

export default PaymentSuccess;