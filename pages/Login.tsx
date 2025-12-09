import React from 'react';
import { Mail, Lock, ArrowRight, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

const Login: React.FC<LoginPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full min-h-screen flex relative overflow-hidden">
      
      {/* Back Button */}
      <button 
        onClick={() => onNavigate('home')}
        className="absolute top-8 left-8 z-50 p-2 rounded-full bg-[#0F1115] border border-white/10 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={20} />
      </button>

      {/* Left Side: Visual / Testimonial (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 relative bg-[#050608] items-center justify-center p-12 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-verve-accent/5 via-transparent to-transparent opacity-40" />
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} 
        />
        
        <div className="relative z-10 max-w-md space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-[#0F1115] border border-white/10 flex items-center justify-center shadow-2xl mb-8">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21" stroke="#5eead4" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M12 21C14.5 21 16.5 19 16.5 16.5C16.5 14 14.5 12 12 12" fill="#5eead4" />
                </svg>
            </div>
            
            <h2 className="text-4xl font-semibold text-white leading-tight">
                "Verve has completely transformed how we ship software. It's simply magical."
            </h2>
            
            <div className="flex items-center gap-4 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500"></div>
                <div>
                    <div className="text-white font-medium">Alex Rivera</div>
                    <div className="text-sm text-gray-500">CTO at TechFlow</div>
                </div>
            </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full lg:w-1/2 bg-[#020406] flex items-center justify-center p-6 lg:p-12 relative">
          
          <div className="w-full max-w-md space-y-8 relative z-10">
              <div className="text-center lg:text-left">
                  <h1 className="text-3xl font-semibold text-white mb-2">Welcome back</h1>
                  <p className="text-gray-400">Enter your credentials to access your account.</p>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0F1115] border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium text-gray-300">
                        {/* Google Icon */}
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><radialGradient id="prefix__b" cx="1.479" cy="12.788" fx="1.479" fy="12.788" r="9.655" gradientTransform="matrix(.8032 0 0 1.0842 2.459 -.293)" gradientUnits="userSpaceOnUse"><stop offset=".368" stopColor="#ffcf09"/><stop offset=".718" stopColor="#ffcf09" stopOpacity=".7"/><stop offset="1" stopColor="#ffcf09" stopOpacity="0"/></radialGradient><radialGradient id="prefix__c" cx="14.295" cy="23.291" fx="14.295" fy="23.291" r="11.878" gradientTransform="matrix(1.3272 0 0 1.0073 -3.434 -.672)" gradientUnits="userSpaceOnUse"><stop offset=".383" stopColor="#34a853"/><stop offset=".706" stopColor="#34a853" stopOpacity=".7"/><stop offset="1" stopColor="#34a853" stopOpacity="0"/></radialGradient><linearGradient id="prefix__d" x1="23.558" y1="6.286" x2="12.148" y2="20.299" gradientUnits="userSpaceOnUse"><stop offset=".671" stopColor="#4285f4"/><stop offset=".885" stopColor="#4285f4" stopOpacity="0"/></linearGradient><clipPath id="prefix__a"><path d="M22.36 10H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53h-.013l.013-.01c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6 3.3-4.53 6.16-4.53 1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07 1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93v.01C3.99 20.53 7.7 23 12 23c2.97 0 5.46-.98 7.28-2.66 2.08-1.92 3.28-4.74 3.28-8.09 0-.78-.07-1.53-.2-2.25z" fill="none"/></clipPath></defs><path d="M22.36 10H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53h-.013l.013-.01c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6 3.3-4.53 6.16-4.53 1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07 1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93v.01C3.99 20.53 7.7 23 12 23c2.97 0 5.46-.98 7.28-2.66 2.08-1.92 3.28-4.74 3.28-8.09 0-.78-.07-1.53-.2-2.25z" fill="#fc4c53"/><g clipPath="url(#prefix__a)"><ellipse cx="3.646" cy="13.572" rx="7.755" ry="10.469" fill="url(#prefix__b)"/><ellipse cx="15.538" cy="22.789" rx="15.765" ry="11.965" transform="rotate(-7.12 15.539 22.789)" fill="url(#prefix__c)"/><path fill="url(#prefix__d)" d="M11.105 8.28l.491 5.596.623 3.747 7.362 6.848 8.607-15.897-17.083-.294z"/></g></svg>
                        Google
                  </button>
                  <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0F1115] border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium text-gray-300">
                        {/* GitHub Icon */}
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 499.368"><path fill="#fff" fillRule="nonzero" d="M256.003 0C114.555 0 0 114.555 0 256.003c0 113.286 73.28 208.961 175.038 242.865 12.796 2.247 17.586-5.433 17.586-12.153 0-6.077-.309-26.225-.309-47.686-64.313 11.844-80.941-15.674-86.058-30.055-2.896-7.37-15.359-30.1-26.269-36.177-8.948-4.808-21.752-16.652-.31-16.961 20.168-.309 34.574 18.564 39.382 26.244 23.038 38.732 59.839 27.828 74.555 21.101 2.227-16.627 8.947-27.828 16.318-34.239-56.968-6.386-116.467-28.471-116.467-126.399 0-27.827 9.907-50.866 26.225-68.787-2.562-6.41-11.51-32.655 2.562-67.853 0 0 21.436-6.72 70.409 26.244 20.483-5.767 42.227-8.638 63.998-8.638 21.751 0 43.52 2.896 63.997 8.638 48.973-33.279 70.39-26.244 70.39-26.244 14.09 35.192 5.117 61.443 2.562 67.853 16.318 17.921 26.244 40.625 26.244 68.787 0 98.237-59.84 119.988-116.801 126.399 9.282 8.014 17.277 23.373 17.277 47.371 0 34.238-.309 61.751-.309 70.389 0 6.721 4.808 14.735 17.586 12.179C438.739 464.964 512 368.955 512 256.003 512 114.555 397.445 0 256.003 0z"/></svg>
                        GitHub
                  </button>
              </div>

              <div className="relative flex items-center gap-4 py-2">
                  <div className="flex-grow h-px bg-white/5"></div>
                  <span className="text-xs text-gray-500 uppercase">Or continue with</span>
                  <div className="flex-grow h-px bg-white/5"></div>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-400 ml-1">Email Address</label>
                      <div className="relative group">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-verve-accent transition-colors" size={18} />
                          <input 
                            type="email" 
                            className="w-full bg-[#0F1115] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 transition-all" 
                            placeholder="name@company.com" 
                          />
                      </div>
                  </div>

                  <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-400 ml-1">Password</label>
                      <div className="relative group">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-verve-accent transition-colors" size={18} />
                          <input 
                            type="password" 
                            className="w-full bg-[#0F1115] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 transition-all" 
                            placeholder="••••••••" 
                          />
                      </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2 cursor-pointer group">
                          <input type="checkbox" className="w-4 h-4 rounded bg-[#0F1115] border-white/10 checked:bg-verve-accent checked:border-verve-accent text-black focus:ring-verve-accent/50 transition-all" />
                          <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Remember me</span>
                      </label>
                      <button 
                        type="button"
                        onClick={() => onNavigate('forgot-password')} 
                        className="text-verve-accent hover:text-verve-accent/80 font-medium transition-colors"
                      >
                        Forgot password?
                      </button>
                  </div>

                  <Button className="w-full py-4 text-base shadow-[0_0_20px_rgba(94,234,212,0.2)] hover:shadow-[0_0_30px_rgba(94,234,212,0.4)] transition-all">
                      Sign In <ArrowRight size={18} className="ml-2" />
                  </Button>
              </form>

              <p className="text-center text-gray-500 text-sm">
                  Don't have an account?{' '}
                  <button 
                    onClick={() => onNavigate('signup')} 
                    className="text-white hover:text-verve-accent font-medium transition-colors"
                  >
                    Sign up
                  </button>
              </p>
          </div>
      </div>
    </div>
  );
};

export default Login;