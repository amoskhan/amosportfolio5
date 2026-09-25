import {Dialog, Transition} from '@headlessui/react';
import {MagnifyingGlassPlusIcon, XMarkIcon} from '@heroicons/react/24/outline';
import Image, {StaticImageData} from 'next/image';
import {FC, Fragment, memo, useCallback, useEffect, useState} from 'react';

import {BlogPost} from '../../data/dataDef';

type ImageSrc = string | StaticImageData;

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

// Post content separates paragraphs with "<split para>" markers or newlines.
export const getParagraphs = (content: string) =>
  content
    .split(/<split para>|\n/)
    .map(paragraph => paragraph.trim())
    .filter(Boolean);

const BlogModal: FC<BlogModalProps> = memo(({post, isOpen, onClose}) => {
  // Keep showing the last post while the close transition plays.
  const [displayedPost, setDisplayedPost] = useState<BlogPost | null>(post);
  const [lightboxSrc, setLightboxSrc] = useState<ImageSrc | null>(null);

  useEffect(() => {
    if (post) {
      setDisplayedPost(post);
    }
  }, [post]);

  useEffect(() => {
    if (!isOpen) {
      setLightboxSrc(null);
    }
  }, [isOpen]);

  const handleLightboxClose = useCallback(() => {
    setLightboxSrc(null);
  }, []);

  if (!displayedPost) return null;

  const {title, date, author, content, image, collageImages} = displayedPost;

  return (
    <Transition appear as={Fragment} show={isOpen}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-4"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-4">
              <Dialog.Panel className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left shadow-2xl dark:border-neutral-800 dark:bg-neutral-900">
                <button
                  aria-label="Close"
                  className="absolute right-4 top-4 z-30 rounded-full bg-neutral-950/60 p-2 text-white backdrop-blur transition-colors hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  onClick={onClose}
                  type="button">
                  <XMarkIcon className="h-5 w-5" />
                </button>

                <button
                  aria-label="View full image"
                  className="group relative block h-64 w-full cursor-zoom-in overflow-hidden bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 dark:bg-neutral-800 sm:h-80"
                  onClick={() => setLightboxSrc(image)}
                  type="button">
                  <Image alt="" className="object-cover" fill placeholder="blur" sizes="768px" src={image} />
                  <span className="absolute inset-0 flex items-center justify-center bg-neutral-950/0 transition-colors duration-300 group-hover:bg-neutral-950/30">
                    <span className="flex items-center gap-x-2 rounded-full bg-neutral-950/60 px-4 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <MagnifyingGlassPlusIcon aria-hidden="true" className="h-5 w-5" />
                      View full image
                    </span>
                  </span>
                </button>

                <div className="flex flex-col gap-y-6 p-6 sm:p-10">
                  <div className="flex flex-col gap-y-3">
                    <time
                      className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 dark:bg-blue-500/15 dark:text-blue-300"
                      dateTime={date}>
                      {new Date(date).toLocaleDateString('en-SG', {day: 'numeric', month: 'long', year: 'numeric'})}
                    </time>
                    <Dialog.Title
                      as="h3"
                      className="font-display text-2xl font-bold leading-tight text-neutral-900 dark:text-white sm:text-3xl">
                      {title}
                    </Dialog.Title>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Written by <span className="font-medium text-neutral-900 dark:text-white">{author}</span>
                    </p>
                  </div>

                  <div className="flex flex-col gap-y-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-lg">
                    {getParagraphs(content).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {collageImages && collageImages.length > 0 && (
                    <div className="grid grid-cols-3 gap-3">
                      {collageImages.map((src, index) => (
                        <button
                          aria-label={`View photo ${index + 1}`}
                          className="relative aspect-square cursor-zoom-in overflow-hidden rounded-xl bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-neutral-800"
                          key={index}
                          onClick={() => setLightboxSrc(src)}
                          type="button">
                          <Image
                            alt=""
                            className="object-cover transition-transform duration-300 hover:scale-105"
                            fill
                            sizes="240px"
                            src={src}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>

        {/* Lightbox: nested inside the post dialog so Headless UI treats it as a child dialog */}
        <Transition as={Fragment} show={!!lightboxSrc}>
          <Dialog as="div" className="relative z-[60]" onClose={handleLightboxClose}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <div className="fixed inset-0 bg-neutral-950/95 backdrop-blur-xl" />
            </Transition.Child>
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="relative h-[85vh] w-full max-w-5xl">
                <Dialog.Title className="sr-only">{title}: full image</Dialog.Title>
                {lightboxSrc && (
                  <Image
                    alt=""
                    className="cursor-zoom-out object-contain"
                    fill
                    onClick={handleLightboxClose}
                    sizes="100vw"
                    src={lightboxSrc}
                  />
                )}
                <button
                  aria-label="Close image"
                  className="absolute right-0 top-0 rounded-full border border-white/10 bg-neutral-950/60 p-2.5 text-white backdrop-blur transition-colors hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  onClick={handleLightboxClose}
                  type="button">
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </Dialog.Panel>
            </div>
          </Dialog>
        </Transition>
      </Dialog>
    </Transition>
  );
});

BlogModal.displayName = 'BlogModal';
export default BlogModal;
