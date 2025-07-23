import Image from 'next/image';
import { FC, memo, useRef, useEffect, useState } from 'react';
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
      // Loop scroll
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
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
    <Section className="bg-neutral-100" sectionId={SectionId.Certificates}>
      <h2 className="text-2xl font-bold text-center mb-8">Certificates</h2>
      <div className="overflow-x-hidden py-4 relative">
        <div
          ref={scrollRef}
          className="flex gap-x-8 min-w-full no-scrollbar"
          style={{
            scrollBehavior: 'smooth',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            width: '100%',
          }}>
          {certificates.concat(certificates).map((cert, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center min-w-[320px] max-w-[320px] cursor-pointer transition-transform hover:scale-105 bg-transparent rounded-lg p-2"
              onClick={() => setSelectedCert(idx % certificates.length)}
              tabIndex={0}
              role="button"
              aria-label={`View ${cert.title}`}
              style={{ wordBreak: 'break-word', textAlign: 'center' }}>
              <Image
                src={cert.image}
                alt={cert.title}
                width={300}
                height={200}
                className="rounded-lg shadow-lg object-cover"
                priority={idx === 0}
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
          onClick={() => setSelectedCert(null)}>
          <div className="relative bg-white rounded-lg p-4 shadow-lg" onClick={e => e.stopPropagation()}>
            <Image
              src={certificates[selectedCert].image}
              alt={certificates[selectedCert].title}
              width={800}
              height={600}
              className="rounded-lg object-contain"
            />
            <p className="text-center mt-2 font-bold">{certificates[selectedCert].title}</p>
            {certificates[selectedCert].url && (
              <a
                href={certificates[selectedCert].url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-4 text-blue-600 underline font-semibold">
                View Certificate
              </a>
            )}
            <button
              className="absolute top-2 right-2 text-black text-2xl font-bold"
              onClick={() => setSelectedCert(null)}
              aria-label="Close">
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
