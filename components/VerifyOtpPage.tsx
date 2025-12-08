import React from 'react';
import { ArrowLeft, ArrowRight, Smartphone } from 'lucide-react';
import Button from './ui/Button';

interface VerifyOtpPageProps {
  onNavigate: (page: string) => void;
}

const VerifyOtpPage: React.FC<VerifyOtpPageProps> = ({ onNavigate }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('reset-password');
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6 bg-[#020406] relative overflow-hidden">
       {/* Background Effects */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

       <button 
        onClick={() => onNavigate('forgot-password')}
        className="absolute top-8 left-8 p-2 rounded-full bg-[#0F1115] border border-white/10 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={20} />
      </button>

      <div className="w-full max-w-md relative z-10">
          <div className="text-center mb-10">
              <div className="w-16 h-16 rounded-2xl bg-[#0F1115] border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <Smartphone className="text-purple-400" size={32} />
              </div>
              <h1 className="text-3xl font-semibold text-white mb-2">Check your email</h1>
              <p className="text-gray-400">We sent a verification code to <span className="text-white">name@company.com</span></p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 bg-[#060709] border border-white/5 p-8 rounded-3xl shadow-2xl backdrop-blur-xl">
              <div className="flex gap-3 justify-center">
                  {[1, 2, 3, 4].map((_, i) => (
                      <input 
                        key={i}
                        type="text" 
                        maxLength={1}
                        className="w-14 h-16 rounded-xl bg-[#0F1115] border border-white/10 text-center text-2xl font-bold text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                      />
                  ))}
              </div>

              <div className="text-center">
                 <p className="text-sm text-gray-500">Didn't receive the email? <button type="button" className="text-purple-400 hover:text-purple-300 font-medium">Click to resend</button></p>
              </div>

              <Button className="w-full py-4 text-base bg-purple-500 text-white hover:bg-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all">
                  Verify Code <ArrowRight size={18} className="ml-2" />
              </Button>
          </form>
      </div>
    </div>
  );
};

export default VerifyOtpPage;