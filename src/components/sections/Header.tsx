import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY } from '../../constants';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">KB</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-charcoal leading-tight">{COMPANY.name}</h1>
              <p className="text-xs text-accent-green font-semibold">Professional Cleaning</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-charcoal hover:text-accent-green transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 text-sm font-semibold text-accent-green hover:text-accent-green-light transition-colors"
            >
              <Phone size={18} />
              {COMPANY.phone}
            </a>
            <Button size="sm" onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Book a Cleaning
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-charcoal hover:text-accent-green transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4 py-4">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-charcoal hover:text-accent-green transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="border-t border-gray-100 pt-4 space-y-3">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-semibold text-accent-green border border-accent-green rounded-lg hover:bg-accent-green hover:text-white transition-colors"
              >
                <Phone size={18} />
                Call Us
              </a>
              <Button
                fullWidth
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book a Cleaning
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
