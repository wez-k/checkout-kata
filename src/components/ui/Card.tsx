import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  variant?: 'default' | 'elevated' | 'subtle';
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  className = '',
  headerClassName = '',
  contentClassName = '',
  variant = 'default',
}) => {
  const baseClasses =
    'bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-white/20 backdrop-blur-sm transition-all duration-300 min-h-[400px] sm:min-h-[450px] flex flex-col';

  const variantClasses = {
    default: 'hover:-translate-y-1 hover:shadow-2xl',
    elevated: 'shadow-2xl hover:-translate-y-2 hover:shadow-3xl',
    subtle: 'shadow-lg hover:shadow-xl',
  };

  const headerBaseClasses =
    'text-gray-800 mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold border-b-4 border-blue-500 pb-3 sm:pb-4';

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      <h2 className={`${headerBaseClasses} ${headerClassName}`}>{title}</h2>
      <div className={`flex-1 px-2 sm:px-6 ${contentClassName}`}>{children}</div>
    </div>
  );
};
