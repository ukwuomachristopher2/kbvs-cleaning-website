import React from 'react';
import { CheckCircle } from 'lucide-react';
import { TRUST_POINTS } from '../../constants';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FadeIn } from '../animations/FadeIn';

export const TrustSection: React.FC = () => {
  return (
    <Section id="about" bgColor="neutral">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <FadeIn>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-charcoal mb-4">
                  More Than Cleaning. We Transform Spaces.
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  KBVS Cleaning Company provides professional cleaning solutions designed to restore comfort, cleanliness and confidence to your space. Whether you need a deep clean at home, professional office cleaning, carpet and upholstery care, or post-construction cleanup, our team is committed to delivering exceptional results.
                </p>
              </div>

              {/* Trust Points */}
              <div className="space-y-4">
                {TRUST_POINTS.map((point, index) => (
                  <FadeIn key={index} delay={100 + index * 100}>
                    <div className="flex gap-4">
                      <CheckCircle className="text-accent-green flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-charcoal mb-1">{point.title}</h3>
                        <p className="text-gray-600">{point.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right Image */}
          <FadeIn delay={300}>
            <div className="hidden lg:block relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1563453392212-d0a3fc853a43?w=600&h=600&fit=crop"
                  alt="Professional cleaning transformation"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
};
