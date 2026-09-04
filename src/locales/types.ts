export type Locale = 'fr' | 'en';

export type Translation = {
  nav: {
    home: string;
    services: string;
    jobs: string;
    about: string;
    area: string;
    faq: string;
    contact: string;
    quote: string;
  };
  hero: {
    eyebrow: string;
    titleTop: string;
    titleBottom: string;
    body: string;
    quote: string;
    call: string;
    location: string;
  };
  values: Array<{ title: string; body: string }>;
  sections: {
    servicesEyebrow: string;
    servicesTitle: string;
    servicesBody: string;
    howEyebrow: string;
    howTitle: string;
    areaEyebrow: string;
    areaTitle: string;
    areaBody: string;
    whyEyebrow: string;
    whyTitle: string;
    reviewsEyebrow: string;
    reviewsTitle: string;
    faqEyebrow: string;
    faqTitle: string;
    quoteEyebrow: string;
    quoteTitle: string;
    finalTitle: string;
    finalBody: string;
  };
  services: Array<{ title: string; body: string }>;
  jobs: {
    eyebrow: string;
    title: string;
    body: string;
    before: string;
    after: string;
    comparisonTitle: string;
    comparisonBody: string;
    gallery: Array<{ label: string; title: string }>;
    swipeHint: string;
  };
  how: Array<{ title: string; body: string }>;
  why: string[];
  reviews: {
    emptyTitle: string;
    emptyBody: string;
    future: string;
  };
  faq: Array<{ q: string; a: string }>;
  quoteForm: {
    intro: string;
    name: string;
    phone: string;
    email: string;
    year: string;
    make: string;
    model: string;
    mileage: string;
    service: string;
    date: string;
    contact: string;
    contactOptions: string[];
    photo: string;
    photoHint: string;
    submit: string;
    note: string;
  };
  footer: {
    tagline: string;
    area: string;
    contactTitle: string;
    phone: string;
    phoneHref: string;
    email: string;
  };
  mobileBar: {
    call: string;
    quote: string;
    book: string;
  };
};
