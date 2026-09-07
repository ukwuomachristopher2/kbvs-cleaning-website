import React from 'react';
import { Briefcase, Users, Building2, Hotel } from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { FadeIn } from '../animations/FadeIn';

const commercialServices = [
  { icon: <Briefcase size={32} />, label: 'Offices' },
  { icon: <Building2 size={32} />, label: 'Commercial Spaces' },
  { icon: <Hotel size={32} />, label: 'Hospitality Businesses' },
  { icon: <Users size={32} />, label: 'Property Managers' },
];

export const CommercialSection: React.FC = () => {
  return (
    <Section bgColor="white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <FadeIn>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-charcoal mb-4">
                  Professional Cleaning for Businesses
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Maintain a clean, professional environment for your employees, customers and visitors with dependable workplace cleaning solutions from KBVS. Whether you manage offices, commercial properties, hospitality venues or rental units, we provide customized cleaning services that support your business operations.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-4">
                {commercialServices.map((service, index) => (
                  <FadeIn key={index} delay={100 + index * 50}>
                    <div className="flex flex-col items-center gap-3 p-4 bg-neutral-soft rounded-lg hover:shadow-md transition-shadow">
                      <div className="text-accent-green">{service.icon}</div>
                      <p className="font-semibold text-charcoal text-center text-sm">{service.label}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* CTA */}
              <Button
                size="lg"
                onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Commercial Cleaning
              </Button>
            </div>
          </FadeIn>

          {/* Right Image */}
          <FadeIn delay={300}>
            <div className="hidden lg:block relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=600&fit=crop"
                  alt="Commercial office cleaning"
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
