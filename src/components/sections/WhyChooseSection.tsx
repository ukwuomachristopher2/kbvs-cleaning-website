import React from 'react';
import { CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_POINTS } from '../../constants';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FadeIn } from '../animations/FadeIn';

export const WhyChooseSection: React.FC = () => {
  return (
    <Section bgColor="neutral">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <FadeIn>
            <div className="hidden lg:block relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=600&fit=crop"
                  alt="Professional cleaning in action"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Right Content */}
          <FadeIn delay={300}>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-charcoal mb-4">
                  Why Choose KBVS Cleaning Company?
                </h2>
              </div>

              {/* Why Choose Points */}
              <div className="space-y-4">
                {WHY_CHOOSE_POINTS.map((point, index) => {
                  const [title, description] = point.split(': ');
                  return (
                    <FadeIn key={index} delay={100 + index * 50}>
                      <div className="flex gap-3">
                        <CheckCircle className="text-accent-green flex-shrink-0 mt-1" size={20} />
                        <div>
                          <h3 className="font-semibold text-charcoal">{title}</h3>
                          {description && <p className="text-gray-600 text-sm">{description}</p>}
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
};
