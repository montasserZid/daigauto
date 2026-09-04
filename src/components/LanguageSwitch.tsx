import type { Locale } from '../locales';

type LanguageSwitchProps = {
  locale: Locale;
  onChange: (locale: Locale) => void;
};

export function LanguageSwitch({ locale, onChange }: LanguageSwitchProps) {
  return (
    <div className="language-switch" aria-label="Language switcher">
      {(['fr', 'en'] as const).map((item) => (
        <button
          key={item}
          type="button"
          className={locale === item ? 'active' : ''}
          aria-pressed={locale === item}
          onClick={() => onChange(item)}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
