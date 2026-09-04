import { Camera, Send } from 'lucide-react';
import type { Translation } from '../locales';

type QuoteFormProps = {
  t: Translation;
};

export function QuoteForm({ t }: QuoteFormProps) {
  const form = t.quoteForm;

  return (
    <form className="quote-form" onSubmit={(event) => event.preventDefault()}>
      <p>{form.intro}</p>
      <div className="form-grid">
        <label>
          {form.name}
          <input autoComplete="name" name="name" type="text" />
        </label>
        <label>
          {form.phone}
          <input autoComplete="tel" inputMode="tel" name="phone" type="tel" />
        </label>
        <label>
          {form.email}
          <input autoComplete="email" inputMode="email" name="email" type="email" />
        </label>
        <label>
          {form.year}
          <input inputMode="numeric" name="year" type="text" />
        </label>
        <label>
          {form.make}
          <input name="make" type="text" />
        </label>
        <label>
          {form.model}
          <input name="model" type="text" />
        </label>
        <label>
          {form.mileage}
          <input inputMode="numeric" name="mileage" type="text" />
        </label>
        <label>
          {form.date}
          <input name="date" type="date" />
        </label>
      </div>
      <label>
        {form.service}
        <textarea name="service" rows={4} />
      </label>
      <fieldset>
        <legend>{form.contact}</legend>
        <div className="contact-options">
          {form.contactOptions.map((option) => (
            <label key={option}>
              <input name="contact" type="radio" value={option} />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="upload-box">
        <Camera size={22} />
        <span>
          <strong>{form.photo}</strong>
          {form.photoHint}
        </span>
        <input name="photo" type="file" accept="image/*" />
      </label>
      <button className="submit-button" type="submit">
        <Send size={18} />
        {form.submit}
      </button>
      <small>{form.note}</small>
    </form>
  );
}
