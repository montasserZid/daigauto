import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { useState } from 'react';
import type { Translation } from '../locales';

type JobsDoneProps = {
  t: Translation;
  reveal: object;
};

const galleryImages = [
  '/assets/jobs/mobile-service-audi-tools.jpg',
  '/assets/jobs/mobile-service-driveway-audi.jpg',
  '/assets/jobs/mobile-service-hyundai-driveway.jpg',
  '/assets/jobs/maintenance-red-hyundai-tools.jpg',
  '/assets/jobs/brake-before.jpg',
  '/assets/jobs/brake-after.jpg',
];

export function JobsDone({ t, reveal }: JobsDoneProps) {
  const [comparison, setComparison] = useState(54);
  const [active, setActive] = useState(0);

  const previous = () => setActive((value) => (value === 0 ? galleryImages.length - 1 : value - 1));
  const next = () => setActive((value) => (value === galleryImages.length - 1 ? 0 : value + 1));

  return (
    <section id="jobs" className="jobs-section">
      <motion.div className="jobs-intro" {...reveal}>
        <p>{t.jobs.eyebrow}</p>
        <h2>{t.jobs.title}</h2>
        <span>{t.jobs.body}</span>
      </motion.div>

      <div className="jobs-layout">
        <motion.article className="comparison-panel" {...reveal}>
          <div className="comparison-copy">
            <span>{t.jobs.comparisonTitle}</span>
            <p>{t.jobs.comparisonBody}</p>
          </div>
          <div className="before-after" style={{ '--comparison': `${comparison}%` } as CSSProperties}>
            <img src="/assets/jobs/brake-after.jpg" alt={t.jobs.after} />
            <div className="after-image">
              <img src="/assets/jobs/brake-before.jpg" alt={t.jobs.before} />
            </div>
            <div className="comparison-line">
              <span />
            </div>
            <span className="comparison-tag before">{t.jobs.before}</span>
            <span className="comparison-tag after">{t.jobs.after}</span>
            <input
              aria-label={t.jobs.swipeHint}
              type="range"
              min="18"
              max="82"
              value={comparison}
              onChange={(event) => setComparison(Number(event.target.value))}
            />
          </div>
          <small>{t.jobs.swipeHint}</small>
        </motion.article>

        <motion.div className="job-gallery" {...reveal}>
          <div className="featured-job">
            <img src={galleryImages[active]} alt={t.jobs.gallery[active].title} />
            <div>
              <span>{t.jobs.gallery[active].label}</span>
              <h3>{t.jobs.gallery[active].title}</h3>
            </div>
            <div className="gallery-controls">
              <button type="button" onClick={previous} aria-label="Previous job photo">
                <ChevronLeft size={18} />
              </button>
              <button type="button" onClick={next} aria-label="Next job photo">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div className="job-thumbs">
            {galleryImages.map((image, index) => (
              <button
                key={image}
                type="button"
                className={active === index ? 'active' : ''}
                onClick={() => setActive(index)}
                aria-label={t.jobs.gallery[index].title}
              >
                <img src={image} alt="" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
