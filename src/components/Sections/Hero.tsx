import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const fadeUp = {
  hidden: {opacity: 0, y: 16},
  visible: {opacity: 1, y: 0},
};

const Hero: FC = memo(() => {
  const {imageSrc, avatarSrc, name, status, headline, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-neutral-950">
        <Image
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          sizes="100vw"
          src={imageSrc}
        />
        {/* Scrim keeps the text readable on any part of the photo, in both themes */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/55 to-neutral-950/90" />

        <motion.div
          animate="visible"
          className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-y-6 px-4 pb-24 pt-28 text-center sm:px-6"
          initial="hidden"
          transition={{staggerChildren: 0.12}}>
          {avatarSrc && (
            <motion.div
              className="relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-white/20 sm:h-28 sm:w-28"
              transition={{duration: 0.5}}
              variants={fadeUp}>
              <Image
                alt={`Portrait of ${name}`}
                className="h-full w-full object-cover"
                priority
                sizes="112px"
                src={avatarSrc}
              />
            </motion.div>
          )}
          {status && (
            <motion.span
              className="inline-flex items-center gap-x-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur sm:text-sm"
              transition={{duration: 0.5}}
              variants={fadeUp}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {status}
            </motion.span>
          )}
          <motion.h1
            className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
            transition={{duration: 0.6}}
            variants={fadeUp}>
            Hi, I'm {name.split(' ')[0]}
            <span className="text-blue-400">.</span>
          </motion.h1>
          <motion.p
            className="text-balance font-display text-lg font-semibold text-white/90 sm:text-2xl"
            transition={{duration: 0.6}}
            variants={fadeUp}>
            {headline}
          </motion.p>
          <motion.div
            className="max-w-2xl text-pretty text-base leading-relaxed text-neutral-300 sm:text-lg [&_strong]:font-semibold [&_strong]:text-white"
            transition={{duration: 0.6}}
            variants={fadeUp}>
            {description}
          </motion.div>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
            transition={{duration: 0.6}}
            variants={fadeUp}>
            {actions.map(({href, text, primary, external, Icon}) => (
              <a
                className={classNames(
                  'inline-flex items-center gap-x-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 active:scale-95 sm:text-base',
                  primary
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500'
                    : 'border border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/15',
                )}
                href={href}
                key={text}
                {...(external ? {target: '_blank', rel: 'noopener noreferrer'} : {})}>
                {text}
                {Icon && <Icon aria-hidden="true" className="h-5 w-5" />}
              </a>
            ))}
          </motion.div>
          <motion.div className="flex gap-x-2 text-white/80" transition={{duration: 0.6}} variants={fadeUp}>
            <Socials className="hover:bg-white/10 hover:text-white" />
          </motion.div>
        </motion.div>

        <a
          aria-label="Scroll to About section"
          className="absolute inset-x-0 bottom-6 z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/80 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          href={`/#${SectionId.About}`}>
          <ChevronDownIcon className="h-5 w-5 animate-bounce motion-reduce:animate-none" />
        </a>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
