import {Dialog, Transition} from '@headlessui/react';
import {ArrowUpRightIcon, XMarkIcon} from '@heroicons/react/24/outline';
import {PlayIcon} from '@heroicons/react/24/solid';
import classNames from 'classnames';
import {useReducedMotion} from 'framer-motion';
import Image from 'next/image';
import {FC, Fragment, memo, useCallback, useEffect, useRef, useState} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import GithubIcon from '../Icon/GithubIcon';
import Section from '../Layout/Section';
import SectionHeading from '../Layout/SectionHeading';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-50 dark:bg-neutral-900" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-12">
        <SectionHeading
          description="Teaching apps, research and life outside the lab."
          eyebrow="Projects"
          title="Things I've built & researched"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, i) => (
            // The first project gets a full-width spotlight when it has a demo video, so the video plays uncropped
            <ProjectCard item={item} key={item.title} spotlight={i === 0 && !!item.video} />
          ))}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const mediaClass =
  'h-full w-full object-cover object-top transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100';
// Spotlight media is shown whole at its own 16:9 shape, without the hover zoom that would crop it
const spotlightMediaClass = 'h-full w-full object-contain';

/**
 * Plays a muted demo over the card image while the card is on screen, and pauses it when scrolled away.
 * The video only starts downloading once the card is near the viewport; reduced-motion users keep the still image.
 */
const ProjectVideo: FC<{src: string; className: string}> = memo(({src, className}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setNear(true);
        setVisible(entry.isIntersecting && entry.intersectionRatio >= 0.5);
      },
      {rootMargin: '200px 0px', threshold: [0, 0.5]},
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduceMotion]);

  // Runs again once the source is attached, so a card that is already on screen still starts playing
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !near) return;
    if (visible) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [near, visible]);

  if (reduceMotion) return null;

  return (
    <video
      aria-hidden="true"
      className={classNames('absolute inset-0', className)}
      loop
      muted
      playsInline
      preload="none"
      ref={videoRef}
      src={near ? src : undefined}
    />
  );
});

ProjectVideo.displayName = 'ProjectVideo';

const ProjectCard: FC<{item: PortfolioItem; spotlight?: boolean}> = memo(
  ({
    item: {title, description, url, linkLabel = 'View', sourceUrl, extraLinks, tags, featured, image, video},
    spotlight = false,
  }) => {
    const [demoOpen, setDemoOpen] = useState(false);
    const openDemo = useCallback(() => setDemoOpen(true), []);
    const closeDemo = useCallback(() => setDemoOpen(false), []);
    return (
      <article
        className={classNames(
          'group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:border-blue-500/40 hover:shadow-xl motion-reduce:transition-none dark:border-neutral-800 dark:bg-neutral-950',
          spotlight
            ? 'sm:col-span-2 lg:col-span-3 lg:flex-row'
            : 'hover:-translate-y-1 motion-reduce:hover:translate-y-0',
        )}>
        <div className={classNames('relative', spotlight && 'lg:w-2/3 lg:shrink-0')}>
          <a
            aria-hidden="true"
            className={classNames(
              'relative block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500',
              spotlight ? 'aspect-video bg-black' : 'aspect-[16/10] bg-neutral-100 dark:bg-neutral-800',
            )}
            href={url}
            rel="noopener noreferrer"
            tabIndex={-1}
            target="_blank">
            <Image
              alt=""
              className={spotlight ? spotlightMediaClass : mediaClass}
              fill
              placeholder="blur"
              sizes={
                spotlight
                  ? '(min-width: 1024px) 700px, 100vw'
                  : '(min-width: 1024px) 330px, (min-width: 640px) 50vw, 100vw'
              }
              src={image}
            />
            {video && <ProjectVideo className={spotlight ? spotlightMediaClass : mediaClass} src={video} />}
            {featured && (
              <span
                className={classNames(
                  'absolute top-3 rounded-full bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white shadow',
                  // The spotlight video has its own logo in the top-left corner
                  spotlight ? 'right-3' : 'left-3',
                )}>
                Featured
              </span>
            )}
          </a>
          {video && (
            <button
              className="absolute bottom-3 right-3 inline-flex items-center gap-x-1.5 rounded-full bg-neutral-950/75 px-3 py-1.5 text-xs font-semibold text-white shadow backdrop-blur transition-colors hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              onClick={openDemo}
              type="button">
              <PlayIcon aria-hidden="true" className="h-3.5 w-3.5" />
              Watch full screen<span className="sr-only"> demo of {title}</span>
            </button>
          )}
        </div>
        <div className={classNames('flex flex-1 flex-col gap-y-3 p-5', spotlight && 'sm:p-6 lg:justify-center lg:p-8')}>
          {tags && tags.length > 0 && (
            <ul aria-label="Tags" className="flex flex-wrap gap-1.5">
              {tags.map(tag => (
                <li
                  className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                  key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
          <h3
            className={classNames(
              'font-display font-bold text-neutral-900 dark:text-white',
              spotlight ? 'text-2xl' : 'text-lg',
            )}>
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{description}</p>
          <div className={classNames('flex flex-wrap items-center gap-x-4 gap-y-2 pt-2', !spotlight && 'mt-auto')}>
            <a
              className="inline-flex items-center gap-x-1 rounded-md text-sm font-semibold text-blue-600 hover:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              href={url}
              rel="noopener noreferrer"
              target="_blank">
              {linkLabel}
              <span className="sr-only"> for {title}</span>
              <ArrowUpRightIcon
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            {sourceUrl && (
              <a
                className="inline-flex items-center gap-x-1.5 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-neutral-400 dark:hover:text-white"
                href={sourceUrl}
                rel="noopener noreferrer"
                target="_blank">
                <GithubIcon aria-hidden="true" className="h-4 w-4" />
                Source<span className="sr-only"> code for {title}</span>
              </a>
            )}
            {extraLinks?.map(link => (
              <a
                className="inline-flex items-center gap-x-1 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-neutral-400 dark:hover:text-white"
                href={link.url}
                key={link.url}
                rel="noopener noreferrer"
                target="_blank">
                {link.label}
                <ArrowUpRightIcon aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
        {video && <DemoModal onClose={closeDemo} open={demoOpen} src={video} title={title} />}
      </article>
    );
  },
);

ProjectCard.displayName = 'ProjectCard';

/** Large player with native controls, so the demo can be paused, scrubbed and made full screen */
const DemoModal: FC<{open: boolean; onClose: () => void; src: string; title: string}> = memo(
  ({open, onClose, src, title}) => (
    <Transition appear as={Fragment} show={open}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-neutral-950/85 backdrop-blur-sm" />
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
              <Dialog.Panel className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl">
                <Dialog.Title className="sr-only">{title} demo</Dialog.Title>
                <button
                  aria-label="Close demo"
                  className="absolute right-3 top-3 z-10 rounded-full bg-neutral-950/60 p-2 text-white backdrop-blur transition-colors hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  onClick={onClose}
                  type="button">
                  <XMarkIcon className="h-5 w-5" />
                </button>
                <video autoPlay className="aspect-video w-full" controls muted playsInline src={src} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  ),
);

DemoModal.displayName = 'DemoModal';
