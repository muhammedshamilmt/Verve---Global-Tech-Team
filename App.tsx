import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import GridFeaturesSection from './components/GridFeaturesSection';
import StatsStrip from './components/StatsStrip';
import StorySection from './components/StorySection';
import SlackIntegrationSection from './components/SlackIntegrationSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import FeaturesPage from './components/FeaturesPage';
import ContactPage from './components/ContactPage';
import PricingPage from './components/PricingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import VerifyOtpPage from './components/VerifyOtpPage';
import ResetPasswordPage from './components/ResetPasswordPage';
import PasswordSuccessPage from './components/PasswordSuccessPage';
import TermsPage from './components/TermsPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import Preloader from './components/Preloader';
import PlansPage from './components/PlansPage';
import ReviewsPage from './components/ReviewsPage';
import WhyUsPage from './components/WhyUsPage';
import TeamPage from './components/TeamPage';
import NotFoundPage from './components/NotFoundPage';
import ChangelogPage from './components/ChangelogPage';
import LicensingPage from './components/LicensingPage';
import CheckoutPage from './components/CheckoutPage';
import PaymentSuccessPage from './components/PaymentSuccessPage';
import DashboardPage from './components/DashboardPage';
import CareersPage from './components/CareersPage';

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
      case 'features': return <FeaturesPage />;
      case 'pricing': return <PricingPage onNavigate={handleNavigate} />;
      case 'contact': return <ContactPage />;
      case 'about': return <AboutPage />;
      
      // New Pages
      case 'plans': return <PlansPage onNavigate={handleNavigate} />;
      case 'reviews': return <ReviewsPage />;
      case 'why-us': return <WhyUsPage />;
      case 'team': return <TeamPage />; // Updated to pass navigate prop in next step
      case 'careers': return <CareersPage onNavigate={handleNavigate} />;
      case 'changelog': return <ChangelogPage />;
      case 'licensing': return <LicensingPage />;
      case '404': return <NotFoundPage onNavigate={handleNavigate} />;

      // Auth Flow
      case 'login': return <LoginPage onNavigate={handleNavigate} />;
      case 'signup': return <SignupPage onNavigate={handleNavigate} />;
      case 'forgot-password': return <ForgotPasswordPage onNavigate={handleNavigate} />;
      case 'verify-otp': return <VerifyOtpPage onNavigate={handleNavigate} />;
      case 'reset-password': return <ResetPasswordPage onNavigate={handleNavigate} />;
      case 'password-success': return <PasswordSuccessPage onNavigate={handleNavigate} />;
      
      // Payment Flow
      case 'checkout': return <CheckoutPage onNavigate={handleNavigate} />;
      case 'payment-success': return <PaymentSuccessPage onNavigate={handleNavigate} />;

      // Dashboard
      case 'dashboard': return <DashboardPage onNavigate={handleNavigate} />;

      // Legal
      case 'terms': return <TermsPage onNavigate={handleNavigate} />;
      case 'privacy': return <PrivacyPolicyPage onNavigate={handleNavigate} />;

      case 'home':
      default:
        return (
          <>
            <HeroSection />
            <StatsStrip />
            <FeaturesSection />
            <StorySection />
            <SlackIntegrationSection />
            <GridFeaturesSection />
            <PricingSection onNavigate={handleNavigate} />
          </>
        );
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