import React from 'react';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { TrustSection } from './components/sections/TrustSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { BeforeAfterSection } from './components/sections/BeforeAfterSection';
import { WhyChooseSection } from './components/sections/WhyChooseSection';
import { GallerySection } from './components/sections/GallerySection';
import { ProcessSection } from './components/sections/ProcessSection';
import { CommercialSection } from './components/sections/CommercialSection';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { CTASection } from './components/sections/CTASection';
import { BookingForm } from './components/sections/BookingForm';
import { Footer } from './components/sections/Footer';
import { WhatsAppButton } from './components/sections/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustSection />
      <ServicesSection />
      <BeforeAfterSection />
      <WhyChooseSection />
      <GallerySection />
      <ProcessSection />
      <CommercialSection />
      <ReviewsSection />
      <CTASection />
      <BookingForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
