import React, { useState } from 'react';
import { GALLERY_IMAGES, getGalleryImagesByCategory } from '../../utils/imageData';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ImageLightbox } from '../ui/ImageLightbox';
import { FadeIn } from '../animations/FadeIn';

type GalleryCategory = 'all' | 'residential' | 'commercial' | 'carpet' | 'upholstery' | 'mattress' | 'windows' | 'post-construction';

const categories: { label: string; value: GalleryCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Carpet', value: 'carpet' },
  { label: 'Upholstery', value: 'upholstery' },
  { label: 'Mattress', value: 'mattress' },
  { label: 'Windows', value: 'windows' },
  { label: 'Post-Construction', value: 'post-construction' },
];

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = getGalleryImagesByCategory(activeCategory);

  return (
    <Section id="gallery" bgColor="neutral">
      <Container>
        <SectionHeading title="Our Work" subtitle="Explore our recent cleaning projects and transformations" />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.value
                  ? 'bg-accent-green text-white shadow-md'
                  : 'bg-white text-charcoal hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max">
          {filteredImages.map((image, index) => (
            <FadeIn key={image.id} delay={index * 50}>
              <div
                className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-90 rounded-full p-3">
                      <svg className="w-6 h-6 text-charcoal" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {image.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <p className="text-white text-sm font-semibold">{image.title}</p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* Lightbox */}
      {selectedImage && (
        <ImageLightbox src={selectedImage} alt="Gallery image" onClose={() => setSelectedImage(null)} />
      )}
    </Section>
  );
};
