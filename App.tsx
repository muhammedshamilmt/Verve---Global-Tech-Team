import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

// Import Pages
import Landing from './pages/Landing';
import About from './pages/About';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import VerifyOtp from './pages/VerifyOtp';
import ResetPassword from './pages/ResetPassword';
import PasswordSuccess from './pages/PasswordSuccess';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Plans from './pages/Plans';
import Reviews from './pages/Reviews';
import WhyUs from './pages/WhyUs';
import Team from './pages/Team';
import Careers from './pages/Careers';
import NotFound from './pages/NotFound';
import Changelog from './pages/Changelog';
import Licensing from './pages/Licensing';
import Checkout from './pages/Checkout';
import PaymentSuccess from './pages/PaymentSuccess';
import Dashboard from './pages/Dashboard';

type Page = 
  | 'home' | 'about' | 'features' | 'pricing' | 'contact' 
  | 'login' | 'signup' 
  | 'forgot-password' | 'verify-otp' | 'reset-password' | 'password-success'
  | 'terms' | 'privacy'
  | 'plans' | 'reviews' | 'why-us' | 'team' | 'careers' | '404' | 'changelog' | 'licensing'
  | 'checkout' | 'payment-success'
  | 'dashboard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoading, setIsLoading] = useState(true);

  const handleNavigate = (page: string) => {
      setCurrentPage(page as Page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Define which pages are "Auth" or special pages (No Navbar/Footer)
  // Dashboard is also a special page with its own layout
  const isSpecialPage = [
    'login', 'signup', 
    'forgot-password', 'verify-otp', 'reset-password', 'password-success',
    'terms', 'privacy',
    'checkout', 'payment-success',
    'dashboard'
  ].includes(currentPage);

  const isNotFound = currentPage === '404';

  const renderContent = () => {
    switch (currentPage) {
      case 'features': return <Features />;
      case 'pricing': return <Pricing onNavigate={handleNavigate} />;
      case 'contact': return <Contact />;
      case 'about': return <About onNavigate={handleNavigate} />;
      
      // New Pages
      case 'plans': return <Plans onNavigate={handleNavigate} />;
      case 'reviews': return <Reviews />;
      case 'why-us': return <WhyUs onNavigate={handleNavigate} />;
      case 'team': return <Team onNavigate={handleNavigate} />;
      case 'careers': return <Careers onNavigate={handleNavigate} />;
      case 'changelog': return <Changelog />;
      case 'licensing': return <Licensing />;
      case '404': return <NotFound onNavigate={handleNavigate} />;

      // Auth Flow
      case 'login': return <Login onNavigate={handleNavigate} />;
      case 'signup': return <Signup onNavigate={handleNavigate} />;
      case 'forgot-password': return <ForgotPassword onNavigate={handleNavigate} />;
      case 'verify-otp': return <VerifyOtp onNavigate={handleNavigate} />;
      case 'reset-password': return <ResetPassword onNavigate={handleNavigate} />;
      case 'password-success': return <PasswordSuccess onNavigate={handleNavigate} />;
      
      // Payment Flow
      case 'checkout': return <Checkout onNavigate={handleNavigate} />;
      case 'payment-success': return <PaymentSuccess onNavigate={handleNavigate} />;

      // Dashboard
      case 'dashboard': return <Dashboard onNavigate={handleNavigate} />;

      // Legal
      case 'terms': return <Terms onNavigate={handleNavigate} />;
      case 'privacy': return <PrivacyPolicy onNavigate={handleNavigate} />;

      case 'home':
      default:
        return <Landing onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className={`min-h-screen bg-[#020406] text-white selection:bg-verve-accent selection:text-black relative overflow-hidden flex flex-col font-sans ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        {/* Background Layer Group - Only for non-dashboard pages to avoid conflict */}
        {currentPage !== 'dashboard' && (
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-[-350px] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-[#0d3632] rounded-full blur-[100px] opacity-80 mix-blend-screen" />
            <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#1a4d47] rounded-full blur-[80px] opacity-40 mix-blend-color-dodge" />
            <div 
              className="absolute inset-0 opacity-[0.25]" 
              style={{ 
                backgroundImage: `linear-gradient(to right, rgba(94, 234, 212, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(94, 234, 212, 0.3) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
                maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 10%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 10%, transparent 70%)'
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020406_90%)]" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ filter: 'url(#noise)' }} />
          </div>
        )}

        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Only show Navbar if NOT a special page or 404 */}
          {!isSpecialPage && !isNotFound && <Navbar onNavigate={handleNavigate} />}
          
          <main className={`flex-grow flex flex-col ${!isSpecialPage && !isNotFound ? 'pt-24 lg:pt-32' : ''}`}>
            {renderContent()}
          </main>
          
          {/* Only show Footer if NOT a special page or 404 */}
          {!isSpecialPage && !isNotFound && <Footer onNavigate={handleNavigate} />}
        </div>
      </div>
    </>
  );
};

export default App;