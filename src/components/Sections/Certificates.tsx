import {Dialog, Transition} from '@headlessui/react';
import {
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {FC, Fragment, KeyboardEvent, memo, useCallback, useRef, useState} from 'react';

import {certificates, SectionId} from '../../data/data';
import {Certificate} from '../../data/dataDef';
import Section from '../Layout/Section';
import SectionHeading from '../Layout/SectionHeading';

const Certificates: FC = memo(() => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openCert = useCallback((cert: Certificate) => {
    setSelectedCert(cert);
    setIsOpen(true);
  }, []);
  // Only flip the open flag so the certificate stays rendered during the close transition
  const close = useCallback(() => setIsOpen(false), []);

  // Carousel: one certificate per slide, driven by native scroll-snap so swiping works on touch screens
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const count = certificates.length;

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (track) {
      setIndex(Math.round(track.scrollLeft / track.clientWidth));
    }
  }, []);

  const goTo = useCallback(
    (target: number) => {
      const track = trackRef.current;
      if (track) {
        const wrapped = (target + count) % count;
        track.scrollTo({left: wrapped * track.clientWidth, behavior: 'smooth'});
      }
    },
    [count],
  );

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        goTo(index + (event.key === 'ArrowRight' ? 1 : -1));
      }
    },
    [goTo, index],
  );

  const current = certificates[index] ?? certificates[0];
  const arrowClass =
    'absolute top-1/2 z-10 -translate-y-1/2 rounded-full border border-neutral-200 bg-white/90 p-2.5 text-neutral-800 shadow-lg backdrop-blur transition hover:border-blue-500 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-95 dark:border-neutral-700 dark:bg-neutral-900/90 dark:text-neutral-100 dark:hover:text-blue-400';

  return (
    <Section className="bg-white dark:bg-neutral-950" sectionId={SectionId.Certificates}>
      <div className="flex flex-col gap-y-12">
        <SectionHeading
          description="Professional certificates I've completed to sharpen my data, tech and project management skills."
          eyebrow="Certificates"
          title="Always learning"
        />
        <div
          aria-label="Certificates"
          aria-roledescription="carousel"
          className="mx-auto flex w-full max-w-xl flex-col items-center gap-y-6"
          role="region">
          <div className="relative w-full">
            <div
              className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              onKeyDown={onKeyDown}
              onScroll={onScroll}
              ref={trackRef}
              tabIndex={0}>
              {certificates.map((cert, i) => (
                <div
                  aria-label={`${i + 1} of ${count}`}
                  aria-roledescription="slide"
                  className="w-full shrink-0 snap-center"
                  key={cert.title}
                  role="group">
                  <button
                    aria-label={`View ${cert.title} certificate`}
                    className="group relative block aspect-[22/17] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 dark:border-neutral-800"
                    onClick={() => openCert(cert)}
                    tabIndex={i === index ? 0 : -1}
                    type="button">
                    <Image
                      alt=""
                      className="object-contain"
                      fill
                      placeholder="blur"
                      sizes="(min-width: 640px) 576px, 100vw"
                      src={cert.image}
                    />
                    <span className="absolute bottom-3 right-3 flex items-center gap-x-1.5 rounded-full bg-neutral-950/70 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 touch:opacity-100">
                      <MagnifyingGlassPlusIcon aria-hidden="true" className="h-4 w-4" />
                      Click to enlarge
                    </span>
                  </button>
                </div>
              ))}
            </div>
            <button
              aria-label="Previous certificate"
              className={classNames(arrowClass, 'left-2 md:-left-16')}
              onClick={() => goTo(index - 1)}
              type="button">
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              aria-label="Next certificate"
              className={classNames(arrowClass, 'right-2 md:-right-16')}
              onClick={() => goTo(index + 1)}
              type="button">
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>

          <motion.div
            animate={{opacity: 1, y: 0}}
            aria-live="polite"
            className="flex flex-col items-center gap-y-1 text-center"
            initial={{opacity: 0, y: 6}}
            key={current.title}
            transition={{duration: 0.25}}>
            <span className="font-display text-lg font-bold text-neutral-900 dark:text-white">{current.title}</span>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              {current.issuer} · {index + 1} of {count}
            </span>
          </motion.div>

          <div className="flex items-center gap-x-2">
            {certificates.map((cert, i) => (
              <button
                aria-current={i === index ? 'true' : undefined}
                aria-label={`Go to ${cert.title}`}
                className={classNames(
                  'h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                  i === index ? 'w-6 bg-blue-500' : 'w-2 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700',
                )}
                key={cert.title}
                onClick={() => goTo(i)}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>

      <Transition appear as={Fragment} show={isOpen}>
        <Dialog as="div" className="relative z-50" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-900">
                  {selectedCert && (
                    <>
                      <button
                        aria-label="Close"
                        className="absolute right-3 top-3 z-10 rounded-full bg-neutral-950/60 p-2 text-white backdrop-blur transition-colors hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        onClick={close}
                        type="button">
                        <XMarkIcon className="h-5 w-5" />
                      </button>
                      <Image
                        alt={`${selectedCert.title} certificate`}
                        className="h-auto w-full bg-white"
                        placeholder="blur"
                        sizes="(min-width: 896px) 896px, 100vw"
                        src={selectedCert.image}
                      />
                      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col gap-y-1">
                          <Dialog.Title className="font-display text-lg font-bold text-neutral-900 dark:text-white">
                            {selectedCert.title}
                          </Dialog.Title>
                          <p className="text-sm text-neutral-500 dark:text-neutral-400">{selectedCert.issuer}</p>
                        </div>
                        {selectedCert.url && (
                          <a
                            className="inline-flex w-fit items-center gap-x-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900"
                            href={selectedCert.url}
                            rel="noopener noreferrer"
                            target="_blank">
                            Verify on Coursera
                            <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Section>
  );
});

Certificates.displayName = 'Certificates';
export default Certificates;
