import { GalleryImage, BeforeAfterImage } from '../types';

// Gallery images - structured for easy replacement with real KBVS photos
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'residential-1',
    src: 'https://images.unsplash.com/photo-1584622614875-2953067d63e8?w=500&h=500&fit=crop',
    alt: 'Professional home cleaning',
    category: 'residential',
    title: 'Home Deep Clean',
  },
  {
    id: 'residential-2',
    src: 'https://images.unsplash.com/photo-1563453392212-d0a3fc853a43?w=500&h=500&fit=crop',
    alt: 'Clean living room',
    category: 'residential',
    title: 'Living Room Refresh',
  },
  {
    id: 'commercial-1',
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=500&fit=crop',
    alt: 'Office cleaning services',
    category: 'commercial',
    title: 'Office Workspace',
  },
  {
    id: 'commercial-2',
    src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop',
    alt: 'Clean modern office',
    category: 'commercial',
    title: 'Corporate Office',
  },
  {
    id: 'carpet-1',
    src: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop',
    alt: 'Professional carpet cleaning',
    category: 'carpet',
    title: 'Carpet Cleaning',
  },
  {
    id: 'carpet-2',
    src: 'https://images.unsplash.com/photo-1577486337937-73548c08ce0f?w=500&h=500&fit=crop',
    alt: 'Clean carpet restoration',
    category: 'carpet',
    title: 'Carpet Restoration',
  },
  {
    id: 'upholstery-1',
    src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop',
    alt: 'Upholstery cleaning service',
    category: 'upholstery',
    title: 'Sofa Cleaning',
  },
  {
    id: 'upholstery-2',
    src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop',
    alt: 'Professional furniture cleaning',
    category: 'upholstery',
    title: 'Furniture Care',
  },
  {
    id: 'mattress-1',
    src: 'https://images.unsplash.com/photo-1584820927073-45c440ed854b?w=500&h=500&fit=crop',
    alt: 'Mattress cleaning service',
    category: 'mattress',
    title: 'Mattress Deep Clean',
  },
  {
    id: 'windows-1',
    src: 'https://images.unsplash.com/photo-1577486337937-73548c08ce0f?w=500&h=500&fit=crop',
    alt: 'Window cleaning',
    category: 'windows',
    title: 'Window Cleaning',
  },
  {
    id: 'postconstruction-1',
    src: 'https://images.unsplash.com/photo-1581578731548-c64695c952952?w=500&h=500&fit=crop',
    alt: 'Post-construction cleanup',
    category: 'post-construction',
    title: 'Construction Cleanup',
  },
];

// Before/After images - for transformation gallery
export const BEFORE_AFTER_IMAGES: BeforeAfterImage[] = [
  {
    id: 'ba-carpet-1',
    before: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=400&fit=crop',
    alt: 'Carpet cleaning transformation',
    category: 'carpet',
    title: 'Carpet Transformation',
  },
  {
    id: 'ba-sofa-1',
    before: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=400&fit=crop',
    alt: 'Sofa cleaning transformation',
    category: 'sofa',
    title: 'Sofa Restoration',
  },
  {
    id: 'ba-mattress-1',
    before: 'https://images.unsplash.com/photo-1584820927073-45c440ed854b?w=500&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1584820927073-45c440ed854b?w=500&h=400&fit=crop',
    alt: 'Mattress cleaning transformation',
    category: 'mattress',
    title: 'Mattress Deep Clean',
  },
  {
    id: 'ba-deepclean-1',
    before: 'https://images.unsplash.com/photo-1563453392212-d0a3fc853a43?w=500&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop',
    alt: 'Deep cleaning transformation',
    category: 'deep-cleaning',
    title: 'Home Deep Clean',
  },
];

export const getGalleryImagesByCategory = (category: string) => {
  if (category === 'all') return GALLERY_IMAGES;
  return GALLERY_IMAGES.filter(img => img.category === category);
};
