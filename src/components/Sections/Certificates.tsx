
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC, memo, useState } from 'react';

import { certificates, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Certificates: FC = memo(() => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);


  return (
    <Section className="bg-neutral-100 w-full px-0" sectionId={SectionId.Certificates}>
      <h2 className="text-2xl font-bold text-center mb-8">Certificates</h2>
      <div className="overflow-x-hidden py-4 relative w-full">
        <div
          className="flex gap-x-8 w-full overflow-x-auto snap-x snap-mandatory pb-6 px-4 md:px-8"
          style={{
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
          }}>
          {certificates.map((cert, idx) => (
            <motion.div
              aria-label={`View ${cert.title} `}
              className="flex flex-col items-center flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] max-w-[400px] cursor-pointer bg-white rounded-lg p-2 snap-center shadow-md hover:shadow-xl transition-shadow duration-300"
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
              <p className="mt-4 font-semibold w-full px-2 text-sm md:text-base">{cert.title}</p>
            </motion.div>
          ))}
        </div>
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
            className="relative bg-white rounded-lg p-4 shadow-lg"
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
