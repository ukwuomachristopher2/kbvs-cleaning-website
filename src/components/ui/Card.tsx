import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div
      className={`bg-white rounded-lg p-6 ${
        hover ? 'hover:shadow-lg transition-shadow duration-300 cursor-pointer' : 'shadow-md'
      } ${className}`}
    >
      {children}
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
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
    <Card hover className="h-full flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <div className="text-accent-green flex-shrink-0">{icon}</div>
        <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
      {onLearnMore && (
        <button
          onClick={onLearnMore}
          className="inline-flex items-center text-accent-green hover:text-accent-green-light font-semibold text-sm transition-colors"
        >
          Learn More <ChevronRight size={16} className="ml-1" />
        </button>
      )}
    </Card>
  );
};
