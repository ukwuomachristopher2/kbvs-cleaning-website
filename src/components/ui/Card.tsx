import React, { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  onLearnMore?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  onLearnMore,
}) => {
  return (
    <div className="group bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      <div className="text-accent-green mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-charcoal mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      {onLearnMore && (
        <button
          onClick={onLearnMore}
          className="text-accent-green text-sm font-semibold hover:text-accent-green-light transition-colors"
        >
          Learn More →
        </button>
      )}
    </div>
  );
};
