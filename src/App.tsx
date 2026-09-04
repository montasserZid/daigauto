import {
  BatteryCharging,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Disc3,
  Gauge,
  MapPin,
  MessageSquareText,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { CandidatePhotoCarousel } from './components/CandidatePhotoCarousel';
import { Header } from './components/Header';
import { JobsDone } from './components/JobsDone';
import { Logo } from './components/Logo';
import { QuoteForm } from './components/QuoteForm';
import { SectionTitle } from './components/SectionTitle';
import { translations, type Locale } from './locales';

const serviceIcons = [Wrench, Disc3, Gauge, BatteryCharging, CheckCircle2, CalendarCheck, Sparkles];

function getInitialLocale(): Locale {
  const saved = window.localStorage.getItem('daig-locale');
  return saved === 'en' || saved === 'fr' ? saved : 'fr';
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const [openFaq, setOpenFaq] = useState(0);
  const reducedMotion = useReducedMotion();
  const t = translations[locale];

  useEffect(() => {
    window.localStorage.setItem('daig-locale', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const reveal = useMemo(
    () =>
      reducedMotion
        ? {}
        : ({
            initial: { opacity: 1, y: 18 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: '-80px' },
            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          } as const),
    [reducedMotion],
  );

  return (
    <div className="app-shell">
      <Header t={t} locale={locale} onLocaleChange={setLocale} />

      <main>
        <section id="home" className="hero-section">
          <div className="hero-media" aria-hidden="true">
            <img src="/assets/candidate-photos/01_engine.jpg" alt="" />
          </div>
          <div className="hero-overlay" />
          <motion.div
            className="hero-content"
            initial={reducedMotion ? false : { opacity: 0, y: 30 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>
              {t.hero.titleTop}
              <span>{t.hero.titleBottom}</span>
            </h1>
            <p className="hero-copy">{t.hero.body}</p>
            <div className="hero-actions">
              <a className="primary-button" href="#quote">
                {t.hero.quote}
                <ChevronRight size={18} />
              </a>
              <a className="secondary-button" href={`tel:${t.footer.phoneHref}`}>
                <Phone size={18} />
                {t.hero.call}
              </a>
            </div>
            <div className="hero-location">
              <MapPin size={17} />
              {t.hero.location}
            </div>
          </motion.div>
        </section>

        <section className="value-strip" aria-label="Value proposition">
          {t.values.map((value) => (
            <motion.article key={value.title} {...reveal}>
              <span />
              <h2>{value.title}</h2>
              <p>{value.body}</p>
            </motion.article>
          ))}
        </section>

        <section id="services" className="page-section">
          <SectionTitle
            eyebrow={t.sections.servicesEyebrow}
            title={t.sections.servicesTitle}
            body={t.sections.servicesBody}
          />
          <div className="service-list">
            {t.services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Wrench;
              return (
                <motion.article key={service.title} className="service-item" {...reveal}>
                  <Icon size={24} />
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.body}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <JobsDone t={t} reveal={reveal} />

        <section className="split-section">
          <motion.div className="garage-panel" {...reveal} aria-hidden="true">
            <CandidatePhotoCarousel reducedMotion={Boolean(reducedMotion)} />
          </motion.div>
          <motion.div className="process-panel" {...reveal}>
            <SectionTitle eyebrow={t.sections.howEyebrow} title={t.sections.howTitle} />
            <div className="process-list">
              {t.how.map((step, index) => (
                <article key={step.title}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="area" className="area-section">
          <motion.div {...reveal}>
            <SectionTitle
              eyebrow={t.sections.areaEyebrow}
              title={t.sections.areaTitle}
              body={t.sections.areaBody}
            />
          </motion.div>
          <motion.div className="map-block" {...reveal}>
            <div className="map-grid" />
            <div className="map-pin">
              <MapPin size={24} />
              <strong>Brossard</strong>
              <span>Rive-Sud / South Shore</span>
            </div>
          </motion.div>
        </section>

        <section id="about" className="why-section">
          <SectionTitle eyebrow={t.sections.whyEyebrow} title={t.sections.whyTitle} align="center" />
          <div className="why-list">
            {t.why.map((item) => (
              <motion.article key={item} {...reveal}>
                <ShieldCheck size={20} />
                <span>{item}</span>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="reviews-section">
          <SectionTitle eyebrow={t.sections.reviewsEyebrow} title={t.sections.reviewsTitle} />
          <motion.div className="reviews-placeholder" {...reveal}>
            <MessageSquareText size={28} />
            <h3>{t.reviews.emptyTitle}</h3>
            <p>{t.reviews.emptyBody}</p>
            <small>{t.reviews.future}</small>
          </motion.div>
        </section>

        <section id="faq" className="faq-section">
          <SectionTitle eyebrow={t.sections.faqEyebrow} title={t.sections.faqTitle} align="center" />
          <div className="faq-list">
            {t.faq.map((item, index) => (
              <article key={item.q} className={openFaq === index ? 'open' : ''}>
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                  {item.q}
                  <ChevronRight size={18} />
                </button>
                <div>
                  <p>{item.a}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="quote" className="quote-section">
          <div>
            <SectionTitle eyebrow={t.sections.quoteEyebrow} title={t.sections.quoteTitle} />
            <div className="quote-aside">
              <Logo compact />
              <p>{t.hero.location}</p>
            </div>
          </div>
          <QuoteForm t={t} />
        </section>

        <section className="final-cta">
          <motion.div {...reveal}>
            <h2>{t.sections.finalTitle}</h2>
            <p>{t.sections.finalBody}</p>
            <a className="primary-button" href="#quote">
              {t.hero.quote}
              <ChevronRight size={18} />
            </a>
          </motion.div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div>
          <Logo horizontal />
          <p>{t.footer.tagline}</p>
          <span>{t.footer.area}</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#home">{t.nav.home}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#jobs">{t.nav.jobs}</a>
          <a href="#area">{t.nav.area}</a>
          <a href="#faq">{t.nav.faq}</a>
        </nav>
        <div>
          <strong>{t.footer.contactTitle}</strong>
          <a href={`tel:${t.footer.phoneHref}`}>{t.footer.phone}</a>
          <a href={`mailto:${t.footer.email}`}>{t.footer.email}</a>
          <a href="#quote">{t.nav.quote}</a>
        </div>
      </footer>

      <nav className="mobile-action-bar" aria-label="Mobile quick actions">
        <a href={`tel:${t.footer.phoneHref}`}>
          <Phone size={17} />
          {t.mobileBar.call}
        </a>
        <a href="#quote">
          <MessageSquareText size={17} />
          {t.mobileBar.quote}
        </a>
        <a href="#quote">
          <CalendarCheck size={17} />
          {t.mobileBar.book}
        </a>
      </nav>
    </div>
  );
}
