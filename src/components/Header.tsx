import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageSwitch } from './LanguageSwitch';
import { Logo } from './Logo';
import type { Locale, Translation } from '../locales';

type HeaderProps = {
  t: Translation;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

const navItems = [
  ['home', '#home'],
  ['services', '#services'],
  ['jobs', '#jobs'],
  ['about', '#about'],
  ['area', '#area'],
  ['faq', '#faq'],
  ['contact', '#contact'],
] as const;

export function Header({ t, locale, onLocaleChange }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="header-logo" href="#home" aria-label="DAIG AUTO">
        <Logo horizontal />
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([key, href]) => (
          <a key={key} href={href}>
            {t.nav[key]}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <LanguageSwitch locale={locale} onChange={onLocaleChange} />
        <a className="quote-link" href="#quote">
          {t.nav.quote}
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="mobile-menu-brand">
              <Logo horizontal />
            </div>
            {navItems.map(([key, href]) => (
              <a key={key} href={href} onClick={close}>
                {t.nav[key]}
              </a>
            ))}
            <div className="mobile-menu-bottom">
              <LanguageSwitch locale={locale} onChange={onLocaleChange} />
              <a className="quote-link" href="#quote" onClick={close}>
                {t.nav.quote}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
