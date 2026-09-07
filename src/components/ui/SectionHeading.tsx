import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
}

const alignmentClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center' 
}) => {
  return (
    <div className={`${alignmentClasses[alignment]} mb-12 max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''}`}>
      <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
