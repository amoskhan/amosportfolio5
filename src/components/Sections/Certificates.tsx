import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC, memo, useRef, useState } from 'react';

import { certificates, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Certificates: FC = memo(() => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Section className="bg-neutral-100 dark:bg-neutral-900 w-full px-0" sectionId={SectionId.Certificates}>
      <h2 className="text-2xl font-bold text-center mb-8">Certificates</h2>
      <div className="relative w-full py-4 group">
        <button
          aria-label="Scroll left"
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg hover:bg-white dark:bg-neutral-800/80 dark:hover:bg-neutral-800 transition-all opacity-0 group-hover:opacity-100 hidden sm:block"
          onClick={() => scroll('left')}>
          <ChevronLeftIcon className="h-6 w-6 text-neutral-800 dark:text-neutral-100" />
        </button>
        <div
          className="flex gap-x-8 w-full overflow-x-auto snap-x snap-mandatory pb-6 px-4 md:px-12 no-scrollbar"
          ref={scrollRef}
          style={{
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
          }}>
          {certificates.map((cert, idx) => (
            <motion.div
              aria-label={`View ${cert.title} `}
              className="flex flex-col items-center flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] max-w-[400px] cursor-pointer bg-white dark:bg-neutral-800 rounded-lg p-2 snap-center shadow-md hover:shadow-xl transition-shadow duration-300"
              key={idx}
              onClick={() => setSelectedCert(idx)}
              role="button"
              style={{ textAlign: 'center', wordBreak: 'break-word' }}
              tabIndex={0}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              whileTap={{ scale: 0.98 }}>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  alt={cert.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 25vw"
                  src={cert.image}
                />
              </div>
              <p className="mt-4 font-semibold w-full px-2 text-sm md:text-base text-neutral-900 dark:text-neutral-100">
                {cert.title}
              </p>
            </motion.div>
          ))}
        </div>
        <button
          aria-label="Scroll right"
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg hover:bg-white dark:bg-neutral-800/80 dark:hover:bg-neutral-800 transition-all opacity-0 group-hover:opacity-100 hidden sm:block"
          onClick={() => scroll('right')}>
          <ChevronRightIcon className="h-6 w-6 text-neutral-800 dark:text-neutral-100" />
        </button>
      </div>
      {selectedCert !== null && (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onClick={() => setSelectedCert(null)}>
          <motion.div
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-lg text-neutral-900 dark:text-neutral-100"
            initial={{ scale: 0.8, opacity: 0 }}
            onClick={e => e.stopPropagation()}>
            <Image
              alt={certificates[selectedCert].title}
              className="rounded-lg object-contain"
              height={600}
              src={certificates[selectedCert].image}
              width={800}
            />
            <p className="text-center mt-2 font-bold">{certificates[selectedCert].title}</p>
            {certificates[selectedCert].url && (
              <a
                className="block text-center mt-4 text-blue-600 underline font-semibold"
                href={certificates[selectedCert].url}
                rel="noopener noreferrer"
                target="_blank">
                View Certificate
              </a>
            )}
            <button
              aria-label="Close"
              className="absolute top-2 right-2 text-black text-2xl font-bold"
              onClick={() => setSelectedCert(null)}>
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </Section>
  );
});

Certificates.displayName = 'Certificates';
export default Certificates;
