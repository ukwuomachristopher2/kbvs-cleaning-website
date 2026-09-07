import React from 'react';
import { SERVICE_PROCESS } from '../../constants';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FadeIn } from '../animations/FadeIn';

export const ProcessSection: React.FC = () => {
  return (
    <Section bgColor="neutral">
      <Container>
        <SectionHeading
          title="Simple. Professional. Effective."
          subtitle="Our streamlined process ensures your cleaning needs are met with precision and care"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICE_PROCESS.map((item, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="relative">
                {/* Process Card */}
                <div className="text-center space-y-4">
                  {/* Step Number */}
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent-green text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                      {item.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Connector Line */}
                {index < SERVICE_PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-1 bg-gradient-to-r from-accent-green to-transparent"></div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
};
