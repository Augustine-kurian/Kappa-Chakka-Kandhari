// ===== Central site data – edit links/phones here once, used everywhere =====

export const CONTACT = {
  email: 'info@kappachakkakandhari.com',
  phone: '9858591010', // navbar call icon
  phoneDisplay: '+91 985 859 1010',
  whatsapp: '916364671010', // country code + number, no spaces
  whatsappDisplay: '+91 636 467 1010',
}

// Book Now dropdown – each opens the ReserveGo widget in a new tab
export const BOOKING = [
  { label: 'Chennai', url: 'https://widget.reservego.co/widget/outlet/66d2fbea389397dbee351d7c?source=9' },
  { label: 'Bengaluru', url: 'https://widget.reservego.co/widget/outlet/66d2e416389397dbee2edeb0?source=9' },
]

// Restaurant menu PDF (public/menus). The flipbook pages are images in public/menus/pages.
export const MENU_PDF = '/menus/kck-restaurant-menu.pdf'
export const MENU_PAGES = Array.from({ length: 18 }, (_, i) => `/menus/pages/page-${String(i + 1).padStart(2, '0')}.webp`)

// Grand Sunday Breakfast menu image (opens in a popup)
export const GRAND_SUNDAY_MENU = '/menus/grand-sunday-breakfast.webp'

export const LINKS = {
  instagram: 'https://www.instagram.com/kckfoods/',
  chefInstagram: 'https://www.instagram.com/chefregimathew/',
  menuPdf: MENU_PDF, // every "View Our Menu" button opens this PDF in a new tab
}

/*
 * Navbar items
 *  to       → page link
 *  children → dropdown
 *  pdf      → opens a PDF in a new tab
 *  action   → 'grandSunday' opens the Grand Sunday Breakfast menu popup
 */
export const NAV = [
  { to: '/', label: 'The Journey' },
  {
    label: 'About us',
    children: [
      { to: '/about-kck', label: 'About KCK' },
      { to: '/about-chef', label: 'About Chef' },
      { to: '/about-team', label: 'About Team' },
    ],
  },
  {
    label: 'Menu',
    children: [{ to: '/menu', label: 'Restaurant' }],
  },
  { label: 'Grand Sunday Breakfast', action: 'grandSunday' },
  {
    label: 'Events',
    children: [
      { to: '/banquets', label: 'Banquets' },
      { to: '/catering-service', label: 'Catering Service' },
    ],
  },
  { to: '/awards-accolades', label: 'Awards & Accolades' },
  { to: '/media', label: 'Media' },
  { to: '/contact-us', label: 'Contact Us' },
]

export const QUICK_LINKS = [
  { to: '/about-team', label: 'About Team' },
  { to: '/about-kck', label: 'About KCK' },
  { to: '/about-chef', label: 'About Chef' },
  { to: '/media', label: 'Press' },
]

export const LOCATIONS = [
  {
    city: 'Chennai',
    phone: '+91 985 859 1010',
    phonesFull: '+91 985 859 1010, (044) 2828 1010 , 2825 1010',
    name: 'Kappa Chakka Kandhari',
    company: 'Kappa Chakka Kandhari Foods Pvt Ltd.',
    address: '#10, Haddows Road, Nugambakkam, Chennai - 600 006',
    email: 'info@kappachakkakandhari.com',
    map: 'https://www.google.com/maps?q=Kappa+Chakka+Kandhari,+10+Haddows+Rd,+Nungambakkam,+Chennai+600006&output=embed',
  },
  {
    city: 'Bengaluru',
    phone: '+91 636 467 1010',
    phonesFull: '+91 636 467 1010, +91 802 552 1010',
    name: 'Kappa Chakka Kandhari',
    company: 'Kappa Chakka Kandhari Foods Pvt Ltd.',
    address: '438 18th Main Rd, 6th Block, Koramangala, Bengaluru - 560 095',
    email: 'info@kappachakkakandhari.com',
    map: 'https://www.google.com/maps?q=Kappa+Chakka+Kandhari,+438+18th+Main+Rd,+Koramangala,+Bengaluru+560095&output=embed',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'As a food enthusiast, I’ve tried a number of restaurants, but Kappa Chakka Kandhari is so much unique for its traditionality and attention to detail. Each recipe feels like an expression of love with careful preparation and mouthwatering with flavor. A must-visit for anyone seeking the best taste of Kerala!',
    name: 'Ilakkiya Ramalingam',
  },
  {
    quote:
      'I recently visited Kappa Chakka Kandhari in Chennai for a special occasion, and it crossed my expectations! The ambiance was warm and inviting, the service so much perfect, and the food? Absolutely divine. I can’t wait to return!',
    name: 'Karthik Kumar',
  },
  {
    quote:
      'Kappa Chakka Kandhari is my go-to place for a taste of home. Their dishes recall fond memories of my childhood, and every visit feels like a reunion with old friends. Each aspect of the dining experience shows the team’s commitment.',
    name: 'Annie George',
  },
]

/*
 * Instagram section on the Home page (6 posts, 3 visible, auto-rotating).
 * Paste 6 post/reel links from https://www.instagram.com/kckfoods/
 * (open a post → ⋯ → Copy link), e.g. 'https://www.instagram.com/p/ABC123xyz/'
 * While this list is empty, photo tiles linking to the profile are shown instead.
 */
export const INSTAGRAM_POSTS = [
  // 'https://www.instagram.com/p/XXXXXXXXXXX/',
]
