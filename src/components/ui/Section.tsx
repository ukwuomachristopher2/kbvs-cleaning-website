import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  bgColor?: 'white' | 'neutral' | 'charcoal';
  spacing?: 'sm' | 'md' | 'lg';
}

const bgColorClasses = {
  white: 'bg-white',
  neutral: 'bg-neutral-soft',
  charcoal: 'bg-charcoal',
};

const spacingClasses = {
  sm: 'py-12 sm:py-16',
  md: 'py-16 sm:py-20',
  lg: 'py-20 sm:py-32',
};

export const Section: React.FC<SectionProps> = ({ 
  children, 
  id, 
  bgColor = 'white',
  spacing = 'lg'
}) => {
  return (
    <section id={id} className={`${bgColorClasses[bgColor]} ${spacingClasses[spacing]}`}>
      {children}
    </section>
  );
};
