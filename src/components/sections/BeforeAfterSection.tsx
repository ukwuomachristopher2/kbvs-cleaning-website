import React, { useState } from 'react';
import { BEFORE_AFTER_IMAGES } from '../../utils/imageData';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FadeIn } from '../animations/FadeIn';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ before, after, alt }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg cursor-ew-resize group"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image */}
      <img src={after} alt={`${alt} - After`} className="w-full h-auto block" />

      {/* Before Image Container */}
      <div className="absolute inset-0" style={{ width: `${sliderPosition}%` }}>
        <img
          src={before}
          alt={`${alt} - Before`}
          className="w-full h-full object-cover"
          style={{ width: `${(100 / sliderPosition) * 100}%` }}
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-accent-green transition-opacity group-hover:bg-accent-green-light"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg">
          <div className="flex gap-1">
            <div className="w-0.5 h-4 bg-accent-green"></div>
            <div className="w-0.5 h-4 bg-accent-green"></div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm font-semibold">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm font-semibold">
        After
      </div>
    </div>
  );
};

export const BeforeAfterSection: React.FC = () => {
  const categories = ['carpet', 'sofa', 'mattress', 'deep-cleaning', 'post-construction', 'tile'];

  return (
    <Section bgColor="white">
      <Container>
        <SectionHeading
          title="See the Transformation"
          subtitle="Witness the quality and impact of our professional cleaning services"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BEFORE_AFTER_IMAGES.map((item, index) => (
            <FadeIn key={item.id} delay={index * 100}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-charcoal">{item.title}</h3>
                  <span className="inline-block bg-accent-green text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <BeforeAfterSlider before={item.before} after={item.after} alt={item.alt} />
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
};
