import React from 'react';
import { Sparkles, Briefcase, Sofa, Wind, Wrench, Users, Building2, Home } from 'lucide-react';
import { SERVICES } from '../../constants';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Grid } from '../ui/Grid';
import { ServiceCard } from '../ui/Card';
import { FadeIn } from '../animations/FadeIn';

const getIconForService = (serviceId: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'deep-cleaning': <Sparkles size={24} />,
    'standard-cleaning': <Sparkles size={24} />,
    'housekeeping': <Home size={24} />,
    'office-cleaning': <Briefcase size={24} />,
    'carpet-cleaning': <Wind size={24} />,
    'upholstery-cleaning': <Sofa size={24} />,
    'mattress-cleaning': <Sofa size={24} />,
    'window-cleaning': <Wind size={24} />,
    'post-construction': <Wrench size={24} />,
    'moving-cleaning': <Users size={24} />,
    'tile-cleaning': <Sparkles size={24} />,
  };
  return iconMap[serviceId] || <Sparkles size={24} />;
};

export const ServicesSection: React.FC = () => {
  return (
    <Section id="services" bgColor="white">
      <Container>
        <SectionHeading
          title="Our Cleaning Services"
          subtitle="Comprehensive cleaning solutions designed for every space and need"
        />
        <Grid columns={3} gap="lg">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 50}>
              <ServiceCard
                icon={getIconForService(service.id)}
                title={service.name}
                description={service.description}
                onLearnMore={() => console.log(`Learn more about ${service.name}`)}
              />
            </FadeIn>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
