import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type CandidatePhotoCarouselProps = {
  reducedMotion: boolean;
};

const candidatePhotos = [
  '/assets/candidate-photos/01_engine.jpg',
  '/assets/candidate-photos/02_brakes.jpg',
  '/assets/candidate-photos/03_ignition_spark.jpg',
  '/assets/candidate-photos/04_cv_axle.jpg',
];

export function CandidatePhotoCarousel({ reducedMotion }: CandidatePhotoCarouselProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % candidatePhotos.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  return (
    <div className="candidate-carousel" aria-label="DAIG AUTO service image carousel">
      <motion.div
        className="candidate-carousel-track"
        animate={{ x: `-${active * 100}%` }}
        transition={
          reducedMotion
            ? { duration: 0 }
            : { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
        }
      >
        {candidatePhotos.map((photo) => (
          <div className="candidate-carousel-slide" key={photo}>
            <img src={photo} alt="" />
          </div>
        ))}
      </motion.div>
      <div className="candidate-carousel-dots">
        {candidatePhotos.map((photo, index) => (
          <span key={photo} className={active === index ? 'active' : ''} />
        ))}
      </div>
    </div>
  );
}
