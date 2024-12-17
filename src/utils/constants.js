export const NAVIGATION_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/interview-experiences', label: 'Interview Experiences' },
  { path: '/interview-prep', label: 'Interview Prep' },
  { path: '/jobs', label: 'Job Recommendations' }
];

export const FOOTER_SECTIONS = {
  company: {
    title: 'InSyncInterview',
    links: [
      { label: 'Contact Us', path: '/contact' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Privacy Policy', path: '/privacy' }
    ]
  },
  getStarted: {
    title: 'Get Started',
    links: [
      { label: 'Create an Account', path: '/signup' },
      { label: 'Learn More', path: '/learn' },
      { label: 'Support', path: '/support' }
    ]
  },
  social: {
    title: 'Follow Us',
    links: [
      { label: 'Facebook', path: 'https://facebook.com' },
      { label: 'Twitter', path: 'https://twitter.com' },
      { label: 'LinkedIn', path: 'https://linkedin.com' }
    ]
  }
};