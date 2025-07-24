import Image from 'next/image';
import { FC, memo, useEffect, useRef, useState } from 'react';
import { certificates, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Certificates: FC = memo(() => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrame: number;
    const scrollSpeed = 1; // pixels per frame

    const scroll = () => {
      scrollContainer.scrollLeft += scrollSpeed;
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(scroll);
    };
    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Allow vertical wheel to scroll horizontally
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <Section className="bg-neutral-100 w-full px-0" sectionId={SectionId.Certificates}>
      <h2 className="text-2xl font-bold text-center mb-8">Certificates</h2>
      <div className="overflow-x-hidden py-4 relative w-full">
        <div
          className="flex gap-x-8 w-full no-scrollbar"
          ref={scrollRef}
          style={{
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            whiteSpace: 'nowrap',
            width: '100%',
          }}
        >
          {certificates.concat(certificates).map((cert, idx) => (
            <div
              aria-label={`View ${cert.title}`}
              className="flex flex-col items-center flex-shrink-0 w-[calc(100vw/4)] max-w-[400px] cursor-pointer transition-transform hover:scale-105 bg-white rounded-lg p-2 mx-auto"
              key={idx}
              onClick={() => setSelectedCert(idx % certificates.length)}
              role="button"
              style={{ textAlign: 'center', wordBreak: 'break-word' }}
              tabIndex={0}
            >
              <Image
                alt={cert.title}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
                height={220}
                priority={idx === 0}
                src={cert.image}
                width={350}
              />
              <p className="mt-2 font-semibold w-full truncate">{cert.title}</p>
            </div>
          ))}
        </div>
        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
      {selectedCert !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white rounded-lg p-4 shadow-lg"
            onClick={e => e.stopPropagation()}
          >
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
                target="_blank"
              >
                View Certificate
              </a>
            )}
            <button
              aria-label="Close"
              className="absolute top-2 right-2 text-black text-2xl font-bold"
              onClick={() => setSelectedCert(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </Section>
  );
});

Certificates.displayName = 'Certificates';
export default Certificates;