import React, { useEffect } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

interface PasswordSuccessPageProps {
  onNavigate: (page: string) => void;
}

const PasswordSuccessPage: React.FC<PasswordSuccessPageProps> = ({ onNavigate }) => {
  
  // Auto redirect after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
        onNavigate('login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6 bg-[#020406] relative overflow-hidden">
       
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-verve-accent/5 rounded-full blur-[120px] pointer-events-none" />

       <div className="w-full max-w-md relative z-10 text-center">
            <div className="w-24 h-24 rounded-full bg-verve-accent/10 border border-verve-accent/20 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(94,234,212,0.1)] relative">
                <div className="absolute inset-0 rounded-full border border-verve-accent/40 animate-ping opacity-20"></div>
                <Check className="text-verve-accent w-12 h-12" strokeWidth={3} />
            </div>

            <h1 className="text-4xl font-semibold text-white mb-4">Password Reset!</h1>
            <p className="text-gray-400 text-lg mb-8">
                Your password has been successfully reset. <br/>
                Redirecting you to login...
            </p>

            <Button 
                onClick={() => onNavigate('login')}
                className="px-8 py-3 bg-[#0F1115] border border-white/10 hover:bg-white/5"
            >
                Back to Login <ArrowRight size={16} className="ml-2" />
            </Button>
       </div>
    </div>
  );
};

export default PasswordSuccessPage;