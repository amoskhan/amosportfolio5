import {useEffect} from 'react';

import {SectionId} from '../data/data';

/**
 * Reports which section is currently being read: the last section whose top has scrolled past the
 * upper third of the viewport. Recomputed on scroll (throttled to animation frames) and resize.
 */
export const useNavObserver = (selectors: string, handler: (section: SectionId | null) => void) => {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(selectors));
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.3;
      let current: HTMLElement | undefined;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) {
          current = section;
        }
      }
      // A short final section may never reach the line, so treat the bottom of the page as the last section.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom && sections.length) {
        current = sections[sections.length - 1];
      }
      handler((current?.id as SectionId | undefined) ?? null);
    };

    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [selectors, handler]);
};
