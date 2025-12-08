import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger scrolled state slightly earlier for responsiveness
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated navigation values to match App.tsx router logic
  const navLinks = [
    { name: 'Features', value: 'features' },
    { name: 'Pricing', value: 'pricing' }, 
    { name: 'About', value: 'about' },
    { name: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (value: string) => {
    onNavigate(value);
    setIsOpen(false);
  };

  return (
    <nav 
        className={`
            fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out border-b
            ${isScrolled 
                ? 'py-4 bg-[#020406]/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50' 
                : 'py-8 bg-transparent border-transparent'
            }
        `}
    >
      <div className="px-6 lg:px-12 flex justify-between items-center max-w-[1400px] mx-auto">
          {/* Logo */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-6 h-6 flex items-center justify-center transition-transform group-hover:scale-110">
                {/* Custom crescent logo shape */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="url(#logo_gradient)" fillOpacity="0.2"/>
                    <path d="M14 6C14 6 10 8 10 12C10 16 14 18 14 18" stroke="#5eead4" strokeWidth="2.5" strokeLinecap="round"/>
                    <defs>
                    <linearGradient id="logo_gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5eead4"/>
                        <stop offset="1" stopColor="#3b82f6"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
            <span className="text-xl font-semibold tracking-tight text-white group-hover:text-verve-accent transition-colors">Verve</span>
          </div>

          {/* Desktop Links */}
          <div className={`hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 transition-all duration-300 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 lg:opacity-100 lg:translate-y-0'}`}>
            {navLinks.map((link) => (
            <button 
                key={link.name} 
                onClick={() => handleNavClick(link.value)}
                className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors tracking-wide bg-transparent border-none cursor-pointer"
            >
                {link.name}
            </button>
            ))}
          </div>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
                <button 
                    onClick={() => handleNavClick('login')}
                    className="relative px-5 py-2.5 rounded-full overflow-hidden group transition-all"
                >
                    <span className="relative z-10 text-xs font-semibold text-gray-300 group-hover:text-white transition-colors">Log In</span>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </button>

                <Button 
                    variant="primary" 
                    size="sm" 
                    className="text-xs font-bold px-6 py-2.5 shadow-[0_0_20px_rgba(94,234,212,0.15)] hover:shadow-[0_0_35px_rgba(94,234,212,0.4)] transition-all duration-300 hover:-translate-y-0.5 bg-gradient-to-r from-verve-accent to-emerald-400 border border-transparent hover:border-verve-accent/50"
                    onClick={() => handleNavClick('signup')}
                >
                    Get Started
                </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl shadow-verve-accent/10 backdrop-blur-xl">
            {navLinks.map((link) => (
                <button 
                key={link.name} 
                onClick={() => handleNavClick(link.value)}
                className="text-lg font-medium text-gray-300 hover:text-white text-left"
                >
                {link.name}
                </button>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <button 
                onClick={() => handleNavClick('login')}
                className="text-lg font-medium text-gray-300 hover:text-white text-left"
                >
                Log In
            </button>
            <Button variant="primary" className="w-full justify-center mt-2 shadow-[0_0_20px_rgba(94,234,212,0.2)]" onClick={() => handleNavClick('signup')}>Get Started</Button>
            </div>
          )}
      </div>
    </nav>
  );
};

export default Navbar;