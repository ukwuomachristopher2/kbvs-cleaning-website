import { COMPANY } from '../constants';

export const getWhatsAppUrl = () => {
  const message = encodeURIComponent(
    'Hello KBVS Cleaning Company, I would like to request a cleaning service. Please provide me with more information.'
  );
  const phone = COMPANY.phone.replace(/[^0-9]/g, '');
  return `https://wa.me/${phone}?text=${message}`;
};

export const openWhatsApp = () => {
  window.open(getWhatsAppUrl(), '_blank');
};
