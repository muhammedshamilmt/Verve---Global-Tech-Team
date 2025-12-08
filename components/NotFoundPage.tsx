import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import Button from './ui/Button';

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden p-6">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-verve-accent/5 via-[#020406] to-[#020406]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
      
      <div className="relative z-10 text-center space-y-8">
          <h1 className="text-[150px] md:text-[200px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent select-none">
              404
          </h1>
          
          <div className="-mt-12 space-y-6">
              <h2 className="text-2xl md:text-4xl font-semibold text-white">Lost in space?</h2>
              <p className="text-gray-400 max-w-md mx-auto">
                  The page you are looking for doesn't exist or has been moved to another dimension.
              </p>
              
              <div className="flex justify-center gap-4">
                  <Button onClick={() => onNavigate('home')} className="gap-2">
                      <Home size={16} /> Return Home
                  </Button>
                  <Button variant="outline" onClick={() => window.history.back()} className="gap-2">
                      <ArrowLeft size={16} /> Go Back
                  </Button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default NotFoundPage;