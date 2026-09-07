import React, { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';

export const WhatsAppButton: React.FC = () => {
  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 md:bottom-8 md:right-8"
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};
