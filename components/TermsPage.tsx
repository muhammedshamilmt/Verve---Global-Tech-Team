import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: string) => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#020406] text-white pt-24 pb-20 px-6 lg:px-12 relative">
       
       <button 
        onClick={() => onNavigate('signup')}
        className="fixed top-8 left-8 z-50 p-2 rounded-full bg-[#0F1115] border border-white/10 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={20} />
      </button>

      <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#0F1115] border border-white/10 flex items-center justify-center">
                  <FileText className="text-verve-accent" size={24} />
              </div>
              <h1 className="text-4xl font-semibold">Terms of Service</h1>
          </div>
          
          <div className="space-y-8 text-gray-400 leading-relaxed bg-[#060709] border border-white/5 p-8 lg:p-12 rounded-3xl">
              <p>Last updated: January 2025</p>
              
              <section className="space-y-4">
                  <h2 className="text-xl font-medium text-white">1. Acceptance of Terms</h2>
                  <p>
                      By accessing and using Verve, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                  </p>
              </section>

              <section className="space-y-4">
                  <h2 className="text-xl font-medium text-white">2. Provision of Services</h2>
                  <p>
                      You agree and acknowledge that Verve is entitled to modify, improve or discontinue any of its services at its sole discretion and without notice to you even if it may result in you being prevented from accessing any information contained in it.
                  </p>
              </section>

              <section className="space-y-4">
                  <h2 className="text-xl font-medium text-white">3. Proprietary Rights</h2>
                  <p>
                      You acknowledge and agree that Verve may contain proprietary and confidential information including trademarks, service marks and patents protected by intellectual property laws and international intellectual property treaties.
                  </p>
              </section>

              <section className="space-y-4">
                  <h2 className="text-xl font-medium text-white">4. Termination of Agreement</h2>
                  <p>
                      The Terms of this agreement will continue to apply in perpetuity until terminated by either party without notice at any time for any reason. Terms that are to continue in perpetuity shall be unaffected by the termination of this agreement.
                  </p>
              </section>
          </div>
      </div>
    </div>
  );
};

export default TermsPage;