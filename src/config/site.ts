export const siteConfig = {
  // ============================================================
  // BUSINESS IDENTITY
  // ============================================================
  name: 'Rising Tide Timber Frames',
  shortName: 'Rising Tide',
  tagline: 'Creating Heirloom Timber Structures',
  description:
    'Rising Tide Timber Frames specializes in designing, fabricating, and installing exquisite heirloom timber structures. We marry traditional hand-cut joinery with modern tools to create timber frame homes, barns, pavilions, and more in Pennsylvania and surrounding regions.',

  // URLs
  url: 'https://risingtidetimberframes.com',
  baseUrl: '/',
  bookingUrl: '/contact/', // Contact page for consultations

  // ============================================================
  // CONTACT
  // ============================================================
  contact: {
    phone: {
      primary: '484-955-1587',
      formatted: '(484) 955-1587',
    },
    email: 'info@risingtidetimberframes.com',
    address: {
      street: 'West Reading',
      city: 'West Reading',
      state: 'PA',
      zip: '19611',
      full: 'West Reading, PA 19611',
    },
    hours: {
      days: 'Monday - Friday',
      time: 'By Appointment',
      full: 'Mon-Fri by appointment',
      shop: {
        days: 'Monday - Friday',
        time: '7:00 AM - 5:00 PM',
        location: 'Workshop',
      },
      consultations: {
        days: 'Monday - Saturday',
        time: 'By Appointment',
      },
    },
    geo: {
      lat: 40.3340,
      lng: -75.9474,
    },
  },

  // ============================================================
  // COMPANY
  // ============================================================
  company: {
    name: 'Rising Tide Timber Frames',
    title: 'Custom Timber Frame Design & Construction',
    specialization: 'Heavy Timber Construction & Hand-Cut Joinery',
  },

  // ============================================================
  // BRANDING — Colors also defined in src/styles/global.css @theme
  // ============================================================
  brand: {
    colors: {
      primary: '#8B6914',       // warm timber gold
      'primary-dark': '#6B5010',
      'primary-light': '#B8942E',
      accent: '#2C4A3E',        // forest green
      dark: '#1C1C1C',          // charcoal
      'dark-light': '#4A4A4A',
    },
  },

  // ============================================================
  // SOCIAL MEDIA
  // ============================================================
  social: {
    facebook: '',
    instagram: '',
  },

  // ============================================================
  // GOOGLE REVIEWS
  // ============================================================
  googleReviews: {
    rating: 5.0,
    reviewCount: 0,
    url: '',
  },

  // ============================================================
  // SEO DEFAULTS
  // ============================================================
  seo: {
    titleTemplate: '%s | Rising Tide Timber Frames',
    defaultTitle: 'Custom Timber Frame Homes & Structures | Rising Tide Timber Frames | West Reading, PA',
    defaultDescription:
      'Rising Tide Timber Frames designs, fabricates, and installs custom timber frame homes, barns, pavilions, and structures in Pennsylvania. Traditional hand-cut joinery meets modern craftsmanship.',
    defaultImage: '/images/og-image.jpg',
    keywords: [
      'timber frame homes',
      'timber frame construction',
      'custom timber frames',
      'hand-cut joinery',
      'timber frame barns',
      'timber frame pavilions',
      'timber framing Pennsylvania',
      'heavy timber construction',
      'West Reading PA timber frames',
      'heirloom timber structures',
      'post and beam construction',
      'Douglas fir timber frames',
    ],
  },

  // ============================================================
  // NAVIGATION
  // ============================================================
  navigation: {
    main: [
      { name: 'About', href: '/about/' },
      { name: 'Services', href: '/services/' },
      { name: 'Portfolio', href: '/portfolio/' },
      { name: 'Blog', href: '/blog/' },
      { name: 'Contact', href: '/contact/' },
    ],
    footer: {
      quickLinks: [
        { name: 'About', href: '/about/' },
        { name: 'Services', href: '/services/' },
        { name: 'Portfolio', href: '/portfolio/' },
        { name: 'Blog', href: '/blog/' },
        { name: 'Contact', href: '/contact/' },
      ],
    },
  },

  // ============================================================
  // SERVICES
  // ============================================================
  services: [
    {
      name: 'Timber Frame Residences',
      description:
        'Complete custom timber frame homes that combine the warmth and beauty of exposed heavy timbers with modern energy efficiency. From cozy cabins to grand estates, every frame is hand-crafted to your vision.',
      icon: 'home',
      href: '/services/timber-frame-residences/',
    },
    {
      name: 'Roof Trusses',
      description:
        'Striking king post, queen post, hammer beam, and scissor trusses that serve as both structural support and breathtaking architectural focal points.',
      icon: 'truss',
      href: '/services/roof-trusses/',
    },
    {
      name: 'Barns & Agricultural Structures',
      description:
        'Traditional timber frame barns built to last generations. Whether for working farms, event venues, or personal retreats, our barns honor the craft while meeting modern needs.',
      icon: 'barn',
      href: '/services/barns/',
    },
    {
      name: 'Pavilions & Outdoor Living',
      description:
        'Open-air timber frame pavilions, pergolas, and outdoor living spaces that extend your home into nature. Perfect for entertaining, dining, or simply relaxing.',
      icon: 'pavilion',
      href: '/services/pavilions/',
    },
    {
      name: 'Pool Houses',
      description:
        'Elegant timber frame pool houses that provide shade, storage, and a stunning gathering space to complement your outdoor oasis.',
      icon: 'pool',
    },
    {
      name: 'Entry Ways & Accents',
      description:
        'Timber frame entry ways, porches, and accent features that add character and curb appeal. A perfect way to introduce timber frame craftsmanship to any structure.',
      icon: 'entry',
    },
    {
      name: 'Design & Engineering',
      description:
        'Collaborative design services from concept to construction-ready plans. We work with your architect or provide in-house design to bring your timber frame vision to life.',
      icon: 'design',
    },
    {
      name: 'Restoration & Repair',
      description:
        'Expert restoration and repair of existing timber frame structures. We preserve the integrity and beauty of historic timber frames while ensuring structural soundness.',
      icon: 'restore',
    },
  ],

  // ============================================================
  // WOOD SPECIES
  // ============================================================
  woodSpecies: [
    'Douglas Fir',
    'White Oak',
    'White Pine',
    'Western Hemlock',
    'Eastern White Cedar',
    'Western Red Cedar',
    'Reclaimed Wood',
  ],

  // ============================================================
  // SERVICE AREAS
  // ============================================================
  serviceAreas: [
    'West Reading',
    'Reading',
    'Wyomissing',
    'Shillington',
    'Sinking Spring',
    'Birdsboro',
    'Boyertown',
    'Pottstown',
    'Kutztown',
    'Hamburg',
    'Berks County',
    'Lancaster County',
    'Chester County',
    'Montgomery County',
    'Lehigh Valley',
    'Philadelphia Region',
  ],

  // ============================================================
  // TESTIMONIALS
  // ============================================================
  testimonials: [
    {
      quote:
        'Rising Tide brought our dream timber frame home to life. The craftsmanship is extraordinary — every joint, every timber is a work of art. Our home will stand for generations.',
      author: 'The Henderson Family',
    },
    {
      quote:
        'From the initial design consultation to the final peg, the team at Rising Tide exceeded every expectation. Their attention to detail and passion for the craft is evident in every piece of our barn.',
      author: 'Mark & Susan R.',
    },
    {
      quote:
        'We wanted a timber frame pavilion that would be the centerpiece of our backyard. Rising Tide delivered something beyond what we imagined. The quality of their hand-cut joinery is remarkable.',
      author: 'David P.',
    },
  ],

  // ============================================================
  // FAQ
  // ============================================================
  faq: [
    {
      question: 'What is timber framing and how is it different from conventional construction?',
      answer:
        'Timber framing is an ancient building method that uses large wooden beams (timbers) joined together with traditional mortise-and-tenon joinery, secured with wooden pegs rather than metal fasteners. Unlike conventional stick framing that uses many small 2x4s nailed together, timber framing creates an exposed structural skeleton of heavy timbers that is both the support system and a stunning design feature of the building.',
    },
    {
      question: 'What wood species do you work with?',
      answer:
        'We work with a diverse range of wood species including Douglas Fir, White Oak, White Pine, Western Hemlock, Eastern White Cedar, Western Red Cedar, and reclaimed wood. Each species has unique characteristics in terms of strength, grain pattern, and color. We help you select the ideal species for your project based on structural requirements, aesthetic preferences, and budget.',
    },
    {
      question: 'How long does a timber frame project take from design to completion?',
      answer:
        'The timeline varies depending on the size and complexity of the project. A typical timber frame home takes 3-6 months for design and engineering, 2-4 months for fabrication in our shop, and 1-2 weeks for frame raising on site. Smaller structures like pavilions and entry ways can be completed more quickly. We provide detailed timelines during the consultation process.',
    },
    {
      question: 'Do you handle the entire project or just the timber frame?',
      answer:
        'We specialize in the design, fabrication, and installation (raising) of the timber frame itself. We work closely with your general contractor, architect, and other trades to ensure seamless integration. We can also recommend trusted builders in your area who have experience enclosing timber frames.',
    },
    {
      question: 'How does the cost of a timber frame compare to conventional construction?',
      answer:
        'Timber frame construction is a premium building method and typically costs more than conventional framing. However, timber frames use up to 30% less wood, are exceptionally energy-efficient when paired with SIPs (Structural Insulated Panels), and last for centuries — making them an excellent long-term investment. We provide detailed estimates during the design phase.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'Based in West Reading, Pennsylvania, we serve clients throughout Berks County, Lancaster County, Chester County, Montgomery County, the Lehigh Valley, and the greater Philadelphia region. We also take on select projects throughout the Mid-Atlantic and Northeast. Contact us to discuss your project location.',
    },
    {
      question: 'Can I visit your shop to see the work in progress?',
      answer:
        'Absolutely! We welcome visitors to our workshop by appointment. Seeing timbers being hand-cut and joined is one of the best ways to appreciate the craft and understand the quality that goes into every Rising Tide frame. Contact us to schedule a visit.',
    },
    {
      question: 'Do you work with existing architectural plans?',
      answer:
        'Yes! Whether you come to us with detailed architectural drawings, a rough sketch on a napkin, or just an idea in your head, we can work with you. We collaborate with your architect or provide in-house design services to develop the timber frame that perfectly complements your project.',
    },
  ],

  // ============================================================
  // PROCESS STEPS
  // ============================================================
  process: [
    {
      step: 1,
      title: 'Consultation & Design',
      description: 'We begin with a thorough consultation to understand your vision, needs, and budget. Our team develops detailed designs and 3D renderings so you can see your timber frame before a single cut is made.',
    },
    {
      step: 2,
      title: 'Engineering & Planning',
      description: 'Every timber frame is engineered for structural integrity. We create precise shop drawings that specify every joint, timber dimension, and connection detail.',
    },
    {
      step: 3,
      title: 'Fabrication',
      description: 'In our workshop, skilled craftsmen hand-cut each timber using traditional joinery techniques married with modern precision tools. Every mortise, tenon, and peg is crafted to exacting standards.',
    },
    {
      step: 4,
      title: 'Frame Raising',
      description: 'The culmination of months of planning and craftsmanship — your timber frame is assembled on site. Frame raising is an exciting milestone where the skeleton of your structure comes to life.',
    },
  ],
};

export type SiteConfig = typeof siteConfig;
