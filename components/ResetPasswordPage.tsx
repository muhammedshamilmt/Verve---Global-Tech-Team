import React from 'react';
import { Lock, ArrowRight, ArrowLeft, KeyRound } from 'lucide-react';
import Button from './ui/Button';

interface ResetPasswordPageProps {
  onNavigate: (page: string) => void;
}

const ResetPasswordPage: React.FC<ResetPasswordPageProps> = ({ onNavigate }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('password-success');
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6 bg-[#020406] relative overflow-hidden">
       {/* Background Effects */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

       <button 
        onClick={() => onNavigate('login')}
        className="absolute top-8 left-8 p-2 rounded-full bg-[#0F1115] border border-white/10 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={20} />
      </button>

      <div className="w-full max-w-md relative z-10">
          <div className="text-center mb-10">
              <div className="w-16 h-16 rounded-2xl bg-[#0F1115] border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <KeyRound className="text-blue-400" size={32} />
              </div>
              <h1 className="text-3xl font-semibold text-white mb-2">Set new password</h1>
              <p className="text-gray-400">Must be at least 8 characters.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-[#060709] border border-white/5 p-8 rounded-3xl shadow-2xl backdrop-blur-xl">
              <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400 ml-1">New Password</label>
                  <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                      <input 
                        type="password" 
                        required
                        className="w-full bg-[#0F1115] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" 
                        placeholder="••••••••" 
                      />
                  </div>
              </div>

              <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400 ml-1">Confirm Password</label>
                  <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                      <input 
                        type="password" 
                        required
                        className="w-full bg-[#0F1115] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" 
                        placeholder="••••••••" 
                      />
                  </div>
              </div>

              <Button className="w-full py-4 text-base bg-blue-500 text-white hover:bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all">
                  Reset Password <ArrowRight size={18} className="ml-2" />
              </Button>
          </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;