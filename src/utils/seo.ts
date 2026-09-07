export const SEO_CONFIG = {
  title: 'KBVS Cleaning Company | Professional Cleaning Services in Kigali, Rwanda',
  description: 'KBVS Cleaning Company provides professional residential and commercial cleaning services in Kigali, Rwanda, including deep cleaning, carpet cleaning, upholstery, mattress, window, office and post-construction cleaning.',
  keywords: 'cleaning company Kigali, cleaning services Kigali, house cleaning Kigali, office cleaning Kigali, carpet cleaning Kigali, upholstery cleaning Kigali, mattress cleaning Kigali, post-construction cleaning Kigali, professional cleaning Rwanda',
  ogImage: 'https://images.unsplash.com/photo-1584622614875-2953067d63e8?w=1200&h=630&fit=crop',
  ogUrl: 'https://kbvscleaning.com',
};

export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'KBVS Cleaning Company',
    'image': 'https://images.unsplash.com/photo-1584622614875-2953067d63e8?w=1200&h=630&fit=crop',
    'description': 'Professional cleaning services in Kigali, Rwanda',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Kigali',
      'addressCountry': 'RW',
      'addressRegion': 'Rwanda',
    },
    'telephone': '+250788315638',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '5.0',
      'reviewCount': '9',
    },
  };
};
