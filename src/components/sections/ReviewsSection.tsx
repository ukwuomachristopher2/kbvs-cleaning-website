import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { COMPANY } from '../../constants';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Rating } from '../ui/Rating';
import { FadeIn } from '../animations/FadeIn';

export const ReviewsSection: React.FC = () => {
  return (
    <Section id="reviews" bgColor="white">
      <Container>
        <div className="text-center space-y-8">
          <FadeIn>
            <div className="space-y-4">
              <SectionHeading
                title="What Our Customers Say"
                subtitle="Trusted by our customers across Kigali"
              />
            </div>
          </FadeIn>

          {/* Google Rating Card */}
          <FadeIn delay={200}>
            <div className="bg-gradient-to-br from-neutral-soft to-white rounded-2xl p-12 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                <Rating rating={COMPANY.googleRating} size="lg" showText={false} />
              </div>
              <h3 className="text-3xl font-bold text-charcoal mb-2">
                {COMPANY.googleRating} Google Rating
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Based on {COMPANY.googleReviews} verified customer reviews
              </p>
              <p className="text-gray-600 mb-8 italic">
                "Trusted by our customers across Kigali for professional, reliable cleaning services."
              </p>
              <a
                href={COMPANY.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Button>
                  View Our Google Reviews
                  <ExternalLink size={18} className="ml-2" />
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
};
