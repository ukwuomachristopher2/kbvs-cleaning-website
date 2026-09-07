import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

export const Rating: React.FC<RatingProps> = ({ rating, size = 'md', showText = true }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="relative">
            <Star
              size={sizeClasses[size] as any}
              className="text-gray-300 fill-gray-300"
            />
            {i < fullStars && (
              <Star
                size={sizeClasses[size] as any}
                className="text-yellow-400 fill-yellow-400 absolute top-0 left-0"
              />
            )}
            {hasHalfStar && i === fullStars && (
              <div className="absolute top-0 left-0 overflow-hidden w-1/2">
                <Star
                  size={sizeClasses[size] as any}
                  className="text-yellow-400 fill-yellow-400"
                />
              </div>
            )}
          </div>
        ))}
      </div>
      {showText && <span className="text-sm font-semibold text-charcoal ml-1">{rating}</span>}
    </div>
  );
};
