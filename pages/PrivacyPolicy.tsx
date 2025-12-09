import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (page: string) => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
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
                  <Shield className="text-blue-400" size={24} />
              </div>
              <h1 className="text-4xl font-semibold">Privacy Policy</h1>
          </div>
          
          <div className="space-y-8 text-gray-400 leading-relaxed bg-[#060709] border border-white/5 p-8 lg:p-12 rounded-3xl">
              <p>Last updated: January 2025</p>
              
              <section className="space-y-4">
                  <h2 className="text-xl font-medium text-white">1. Information We Collect</h2>
                  <p>
                      We collect information you provide directly to us. For example, we collect information when you create an account, subscribe, participate in any interactive features of our services, fill out a form, request customer support or otherwise communicate with us.
                  </p>
              </section>

              <section className="space-y-4">
                  <h2 className="text-xl font-medium text-white">2. How We Use Information</h2>
                  <p>
                      We use the information we collect to provide, maintain, and improve our services, such as to administer your account, send you technical notices, updates, security alerts and support and administrative messages.
                  </p>
              </section>

              <section className="space-y-4">
                  <h2 className="text-xl font-medium text-white">3. Data Security</h2>
                  <p>
                      Verve takes reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
                  </p>
              </section>

              <section className="space-y-4">
                  <h2 className="text-xl font-medium text-white">4. Your Choices</h2>
                  <p>
                      Account Information: You may update, correct or delete information about you at any time by logging into your online account or emailing us at privacy@verve.com.
                  </p>
              </section>
          </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;