export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'residential' | 'commercial' | 'carpet' | 'upholstery' | 'mattress' | 'windows' | 'post-construction';
  title?: string;
}

export interface BeforeAfterImage {
  id: string;
  before: string;
  after: string;
  alt: string;
  category: 'carpet' | 'sofa' | 'mattress' | 'deep-cleaning' | 'post-construction' | 'tile';
  title: string;
}

export interface FormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  propertyType: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: 'google' | 'website';
}
