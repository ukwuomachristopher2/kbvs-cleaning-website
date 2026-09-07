import React, { useState } from 'react';
import { COMPANY, SERVICES } from '../../constants';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { FadeIn } from '../animations/FadeIn';

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    propertyType: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const propertyTypes = ['House', 'Apartment', 'Office', 'Commercial Property', 'Other'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Connect to backend/email service
    // For now, just simulate submission
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          service: '',
          propertyType: '',
          preferredDate: '',
          preferredTime: '',
          message: '',
        });
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <Section id="booking-form" bgColor="neutral">
      <Container maxWidth="xl">
        <SectionHeading
          title="Request a Cleaning Service"
          subtitle="Fill out the form below and we'll get back to you with a quote and scheduling details"
        />

        {submitted ? (
          <FadeIn>
            <div className="max-w-2xl mx-auto bg-white rounded-lg p-12 text-center shadow-lg border-l-4 border-accent-green">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-4">
                Your cleaning service request has been received. Our team will contact you shortly at {formData.phone} to confirm the details and provide you with a quote.
              </p>
              <p className="text-sm text-gray-500">Expected response time: Within 2 business hours</p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn>
            <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition"
                      placeholder="+250 788 315 638"
                    />
                  </div>
                </div>

                {/* Row 2: Email */}
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Row 3: Service and Property Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Service Required *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition"
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map(service => (
                        <option key={service.id} value={service.id}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Property Type *
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition"
                    >
                      <option value="">Select property type</option>
                      {propertyTypes.map(type => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                {/* Row 5: Message */}
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">
                    Message / Cleaning Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us more about your cleaning needs, any specific areas of focus, or special requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  disabled={isLoading}
                  className="disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Submitting...' : 'Request a Quote'}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our terms and privacy policy. We'll contact you within 2 business hours.
                </p>
              </form>
            </div>
          </FadeIn>
        )}
      </Container>
    </Section>
  );
};
