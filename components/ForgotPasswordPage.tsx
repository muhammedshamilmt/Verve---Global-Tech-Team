import React from 'react';
import { Mail, ArrowLeft, ArrowRight, ShieldQuestion } from 'lucide-react';
import Button from './ui/Button';

interface ForgotPasswordPageProps {
  onNavigate: (page: string) => void;
}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({ onNavigate }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    onNavigate('verify-otp');
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6 bg-[#020406] relative overflow-hidden">
       {/* Background Effects */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-verve-accent/5 rounded-full blur-[120px] pointer-events-none" />
       
       <button 
        onClick={() => onNavigate('login')}
        className="absolute top-8 left-8 p-2 rounded-full bg-[#0F1115] border border-white/10 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={20} />
      </button>

      <div className="w-full max-w-md relative z-10">
          <div className="text-center mb-10">
              <div className="w-16 h-16 rounded-2xl bg-[#0F1115] border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <ShieldQuestion className="text-verve-accent" size={32} />
              </div>
              <h1 className="text-3xl font-semibold text-white mb-2">Forgot Password?</h1>
              <p className="text-gray-400">No worries, we'll send you reset instructions.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-[#060709] border border-white/5 p-8 rounded-3xl shadow-2xl backdrop-blur-xl">
              <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400 ml-1">Email Address</label>
                  <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-verve-accent transition-colors" size={18} />
                      <input 
                        type="email" 
                        required
                        className="w-full bg-[#0F1115] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 transition-all" 
                        placeholder="name@company.com" 
                      />
                  </div>
              </div>

              <Button className="w-full py-4 text-base shadow-[0_0_20px_rgba(94,234,212,0.2)] hover:shadow-[0_0_30px_rgba(94,234,212,0.4)] transition-all">
                  Send Instructions <ArrowRight size={18} className="ml-2" />
              </Button>
          </form>
          
          <div className="text-center mt-8">
            <button onClick={() => onNavigate('login')} className="text-sm text-gray-500 hover:text-white transition-colors">
                Back to log in
            </button>
          </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;