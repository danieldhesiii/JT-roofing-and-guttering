// Single source of truth for business + contact details.
// Update phone numbers / links here and they propagate across the whole site.

const primaryPhone = '07767075702'
// WhatsApp needs the international format with no leading 0 (UK +44).
const whatsappNumber = '447767075702'
const whatsappMessage = "Hi JT Roofing, I'd like a free quote please."

export const site = {
  name: 'JT Roofing & Guttering',
  shortName: 'JT Roofing',
  tagline: 'Local & trusted roofing, over 40 years in the trade',
  yearsExperience: 40,
  serviceArea: 'Exeter & surrounding areas',
  description:
    'Family-run roofing and guttering specialists with over 40 years of experience. New roofs, flat roofs, leadwork, slate, UPVC guttering and repairs across Exeter and the surrounding areas.',

  phone: {
    primary: primaryPhone,
    primaryHref: 'tel:+447767075702',
    others: [
      { label: '01473 875209', href: 'tel:01473875209' },
      { label: '01284 634121', href: 'tel:01284634121' },
      { label: '01279 942316', href: 'tel:01279942316' },
    ],
  },

  email: 'info@jtroofingandguttering.com',

  whatsapp: {
    number: whatsappNumber,
    url: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  },

  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=61581523282413',
    // Placeholders — swap for the customer's real review profile URLs when confirmed.
    checkatrade: 'https://www.checkatrade.com/',
    google: 'https://www.google.com/search?q=JT+Roofing+and+Guttering+reviews',
  },

  // Trust signals shown in the trust bar.
  trust: [
    { value: '40+', label: 'Years in the trade' },
    { value: 'Checkatrade', label: 'Vetted & monitored' },
    { value: 'Free', label: 'No-obligation quotes' },
    { value: 'Fully', label: 'Insured & guaranteed' },
  ],
}

export default site
