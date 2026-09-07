import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { COMPANY } from '../../constants';
import { Container } from '../ui/Container';
import { FadeIn } from '../animations/FadeIn';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { label: 'Deep Cleaning', href: '#services' },
    { label: 'Housekeeping', href: '#services' },
    { label: 'Office Cleaning', href: '#services' },
    { label: 'Carpet Cleaning', href: '#services' },
    { label: 'Upholstery Cleaning', href: '#services' },
    { label: 'Mattress Cleaning', href: '#services' },
    { label: 'Window Cleaning', href: '#services' },
    { label: 'Post-Construction Cleaning', href: '#services' },
  ];

  return (
    <footer id="contact" className="bg-charcoal text-white pt-20 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <FadeIn>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-accent-green rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">KB</span>
                </div>
                <div>
                  <h3 className="font-bold text-sm">{COMPANY.name}</h3>
                  <p className="text-xs text-gray-400">Professional Cleaning</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 italic leading-relaxed">
                "{COMPANY.tagline}"
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-accent-green rounded-lg flex items-center justify-center hover:bg-accent-green-light transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 bg-accent-green rounded-lg flex items-center justify-center hover:bg-accent-green-light transition-colors"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={100}>
            <div>
              <h4 className="font-semibold mb-4 text-accent-green">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-accent-green transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Services */}
          <FadeIn delay={200}>
            <div>
              <h4 className="font-semibold mb-4 text-accent-green">Services</h4>
              <ul className="space-y-2">
                {serviceLinks.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-accent-green transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={300}>
            <div className="space-y-4">
              <h4 className="font-semibold text-accent-green">Contact</h4>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <MapPin size={20} className="text-accent-green flex-shrink-0" />
                  <p className="text-sm text-gray-400">{COMPANY.location}</p>
                </div>
                <div className="flex gap-3">
                  <Phone size={20} className="text-accent-green flex-shrink-0" />
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="text-sm text-gray-400 hover:text-accent-green transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Mail size={20} className="text-accent-green flex-shrink-0" />
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-sm text-gray-400 hover:text-accent-green transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-400">
          <p>© {currentYear} KBVS Cleaning Company. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
