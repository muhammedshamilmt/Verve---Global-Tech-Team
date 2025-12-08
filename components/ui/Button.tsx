import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ease-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#020406]";
  
  const variants = {
    primary: "bg-verve-accent text-black hover:bg-verve-accent/90 hover:shadow-[0_0_20px_rgba(94,234,212,0.3)] focus:ring-verve-accent",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/5 focus:ring-gray-500",
    ghost: "bg-transparent text-gray-300 hover:text-white hover:bg-white/5 focus:ring-gray-500",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;