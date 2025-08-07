import React from 'react';
import { cn } from '@/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled,
  ...props
}) => {
  const baseClasses = 'font-semibold transition-all duration-300 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none';
  
  const variants = {
    primary: 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:from-blue-600 hover:to-blue-700 hover:shadow-xl hover:-translate-y-0.5 focus:ring-blue-300 disabled:bg-gray-400',
    secondary: 'bg-gradient-to-br from-gray-50 via-blue-50/50 to-indigo-50/50 text-gray-700 shadow-md hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 hover:text-white border border-gray-200/50 hover:border-transparent focus:ring-blue-300/50',
    danger: 'bg-red-500 text-white shadow-md hover:bg-red-600 focus:ring-red-300',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-300'
  };

  const sizes = {
    sm: 'px-2 py-1.5 sm:px-3 sm:py-2 text-sm rounded-lg',
    md: 'px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-xl',
    lg: 'px-6 py-4 sm:px-8 sm:py-5 text-base sm:text-lg rounded-2xl'
  };

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}; 