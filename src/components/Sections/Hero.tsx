import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-white/60 dark:bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <motion.h1
              animate={{opacity: 1, y: 0}}
              className="text-4xl font-bold text-neutral-900 dark:text-white sm:text-5xl lg:text-7xl"
              initial={{opacity: 0, y: -20}}
              transition={{duration: 0.8}}>
              {name.split('').map((char, index) => (
                <motion.span
                  animate={{opacity: 1}}
                  initial={{opacity: 0}}
                  key={index}
                  transition={{delay: index * 0.05, duration: 0.1}}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 1, duration: 1}}>
              {description}
            </motion.div>
            <div className="flex gap-x-4 text-neutral-900 dark:text-neutral-100">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <motion.a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-neutral-900 dark:text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary
                      ? 'border-blue-500 ring-blue-500'
                      : 'border-neutral-900 ring-neutral-900 dark:border-white dark:ring-white',
                  )}
                  href={href}
                  key={text}
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-neutral-900 dark:text-white sm:h-6 sm:w-6" />}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-neutral-900 dark:bg-white p-1 ring-neutral-900 dark:ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent text-white dark:text-neutral-900 sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
