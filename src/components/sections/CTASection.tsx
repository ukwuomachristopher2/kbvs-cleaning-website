import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { FadeIn } from '../animations/FadeIn';

export const CTASection: React.FC = () => {
  return (
    <Section bgColor="charcoal" spacing="md">
      <Container>
        <FadeIn>
          <div className="text-center space-y-8 max-w-2xl mx-auto">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Ready for a Cleaner, Better Space?
              </h2>
              <p className="text-xl text-gray-300">
                Let KBVS Cleaning Company transform your space with professional cleaning services in Kigali.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Cleaning
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = 'tel:+250788315638'}
              >
                Call +250 788 315 638
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
};
