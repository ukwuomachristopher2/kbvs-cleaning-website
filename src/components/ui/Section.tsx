import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'neutral' | 'charcoal';
  spacing?: 'sm' | 'md' | 'lg';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  bgColor = 'white',
  spacing = 'lg',
}) => {
  const bgColors = {
    white: 'bg-white',
    neutral: 'bg-neutral-soft',
    charcoal: 'bg-charcoal',
  };

  const spacings = {
    sm: 'py-12 sm:py-16',
    md: 'py-16 sm:py-20',
    lg: 'py-20 sm:py-28',
  };

  return (
    <section className={`${bgColors[bgColor]} ${spacings[spacing]} ${className}`}>
      {children}
    </section>
  );
};
