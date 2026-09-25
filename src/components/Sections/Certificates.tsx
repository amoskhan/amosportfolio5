import {Dialog, Transition} from '@headlessui/react';
import {ArrowTopRightOnSquareIcon, MagnifyingGlassPlusIcon, XMarkIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {FC, Fragment, memo, useCallback, useState} from 'react';

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

  return (
    <Section className="bg-white dark:bg-neutral-950" sectionId={SectionId.Certificates}>
      <div className="flex flex-col gap-y-12">
        <SectionHeading
          description="Professional certificates I've completed to sharpen my data, tech and project management skills."
          eyebrow="Certificates"
          title="Always learning"
        />
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map(cert => (
            <li key={cert.title}>
              <button
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-neutral-800 dark:bg-neutral-900"
                onClick={() => openCert(cert)}
                type="button">
                <div className="relative aspect-[22/17] w-full overflow-hidden border-b border-neutral-200 bg-neutral-100 dark:border-neutral-800">
                  <Image
                    alt=""
                    className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 330px, (min-width: 640px) 50vw, 100vw"
                    src={cert.image}
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-neutral-950/60 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <MagnifyingGlassPlusIcon aria-hidden="true" className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex flex-col gap-y-1 p-4">
                  <span className="font-display text-base font-bold text-neutral-900 dark:text-white">
                    {cert.title}
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">{cert.issuer}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
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
