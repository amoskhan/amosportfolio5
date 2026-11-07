import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {motion, useReducedMotion} from 'framer-motion';
import {FC, KeyboardEvent, memo, useCallback, useEffect, useRef, useState} from 'react';

import {SkillGroup} from '../../../data/dataDef';

const arrowClass =
  'rounded-full border border-neutral-200 bg-white p-2.5 text-neutral-800 shadow-sm transition hover:border-blue-500 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-95 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:text-blue-400';

/**
 * Skills carousel: one skill group per slide, driven by native scroll-snap so swiping works on touch screens.
 */
const SkillCarousel: FC<{skillGroups: SkillGroup[]}> = memo(({skillGroups}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const count = skillGroups.length;

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

  return (
    <div aria-label="Skills" aria-roledescription="carousel" className="flex flex-col gap-y-5" role="region">
      <div
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        onKeyDown={onKeyDown}
        onScroll={onScroll}
        ref={trackRef}
        tabIndex={0}>
        {skillGroups.map((group, i) => (
          <div
            aria-label={`${i + 1} of ${count}: ${group.name}`}
            aria-roledescription="slide"
            className="w-full shrink-0 snap-center"
            key={group.name}
            role="group">
            <SkillSlide active={i === index} group={group} position={`${i + 1} / ${count}`} />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-x-4">
        <button aria-label="Previous skill group" className={arrowClass} onClick={() => goTo(index - 1)} type="button">
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {skillGroups.map((group, i) => (
            <button
              aria-current={i === index ? 'true' : undefined}
              aria-label={`Go to ${group.name}`}
              className={classNames(
                'h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                i === index ? 'w-6 bg-blue-500' : 'w-2 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700',
              )}
              key={group.name}
              onClick={() => goTo(i)}
              type="button"
            />
          ))}
        </div>
        <button aria-label="Next skill group" className={arrowClass} onClick={() => goTo(index + 1)} type="button">
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
});

SkillCarousel.displayName = 'SkillCarousel';
export default SkillCarousel;

const SkillSlide: FC<{group: SkillGroup; active: boolean; position: string}> = memo(({group, active, position}) => {
  const {name, skills, Icon} = group;
  const reduceMotion = useReducedMotion();
  // Tiles animate in the first time their slide is shown, then stay visible while swiping away
  const [shown, setShown] = useState(active);
  useEffect(() => {
    if (active) setShown(true);
  }, [active]);
  return (
    <div className="flex h-full flex-col gap-y-5 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 sm:p-6">
      <div className="flex items-center gap-x-3">
        {Icon && (
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
            <Icon aria-hidden="true" className="h-5 w-5" />
          </span>
        )}
        <h4 className="font-display text-lg font-bold text-neutral-900 dark:text-white">{name}</h4>
        <span className="ml-auto text-sm font-medium text-neutral-500 dark:text-neutral-400">{position}</span>
      </div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map(({name: skill, Icon: SkillIcon}, i) => (
          <motion.li
            animate={shown || reduceMotion ? {opacity: 1, y: 0} : {opacity: 0, y: 10}}
            className="group flex flex-col items-center gap-y-2 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-4 text-center transition-colors hover:border-blue-500/50 dark:border-neutral-700/70 dark:bg-neutral-800/60"
            initial={reduceMotion ? false : {opacity: 0, y: 10}}
            key={skill}
            transition={{duration: 0.3, delay: active ? i * 0.05 : 0}}>
            <SkillIcon
              aria-hidden="true"
              className="h-7 w-7 text-neutral-500 transition-colors group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-blue-400"
            />
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{skill}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
});

SkillSlide.displayName = 'SkillSlide';
