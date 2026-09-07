import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY } from '../../constants';
import { Button } from '../ui/Button';
import { Rating } from '../ui/Rating';
import { FadeIn } from '../animations/FadeIn';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent-green rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <FadeIn delay={200}>
            <div className="space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2">
                <Rating rating={COMPANY.googleRating} size="sm" showText={false} />
                <span className="text-sm text-white font-semibold">
                  {COMPANY.googleRating} Google Rating
                </span>
                <span className="text-xs text-gray-300">{COMPANY.googleReviews} Reviews</span>
              </div>

              {/* Main Headline */}
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
                  Professional Cleaning Services That Transform Your Space
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  From homes and offices to carpets, mattresses, upholstery and post-construction spaces, KBVS Cleaning Company delivers reliable, professional cleaning services across Kigali.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center justify-center gap-2"
                >
                  Book a Cleaning
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = `tel:${COMPANY.phone}`}
                  className="flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call Us
                </Button>
              </div>

              {/* Phone Number */}
              <div className="pt-4 border-t border-white border-opacity-20">
                <p className="text-gray-400 text-sm mb-2">Reach us directly</p>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-2xl font-bold text-accent-green hover:text-accent-green-light transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right Image */}
          <FadeIn delay={400}>
            <div className="relative hidden lg:block">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1584622614875-2953067d63e8?w=600&h=600&fit=crop"
                  alt="Professional cleaning services"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-accent-green rounded-2xl -z-10 opacity-20"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
