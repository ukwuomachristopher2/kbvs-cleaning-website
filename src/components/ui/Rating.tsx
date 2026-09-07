import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  reviewCount?: number;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Rating: React.FC<RatingProps> = ({
  rating,
  reviewCount,
  size = 'md',
  showText = true,
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={sizes[size] + (i < Math.round(rating) ? ' fill-yellow-400 text-yellow-400' : ' text-gray-300')}
          />
        ))}
      </div>
      {showText && (
        <span className={`font-semibold text-charcoal ${textSizes[size]}`}>
          {rating.toFixed(1)}
          {reviewCount && ` (${reviewCount} reviews)`}
        </span>
      )}
    </div>
  );
};
