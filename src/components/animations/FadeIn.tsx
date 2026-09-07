import React from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, duration = 600 }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transition: `opacity ${duration}ms ease-in-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
