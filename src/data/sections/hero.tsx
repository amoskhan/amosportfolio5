import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';

import heroImage from '../../images/header-background.webp';
import {Hero, SectionId} from '../dataDef';

export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Meet Amos.`,
  description: (
    <>
      <p className="prose-sm text-stone-600 dark:text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Singapore based{' '}
        <strong className="text-stone-900 dark:text-stone-100">Sports Science & Mangement Graduate</strong>, currently
        working at <strong className="text-stone-900 dark:text-stone-100">Ministry of Education (MOE) </strong> to be a
        trained <strong className="text-stone-900 dark:text-stone-100">Physical Education Teacher</strong>. Having a
        passion for <strong className="text-stone-900 dark:text-stone-100">education </strong> , I hope to inspire
        students to be the best version of themselves.{' '}
      </p>
      <p className="prose-sm text-stone-600 dark:text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me playing{' '}
        <strong className="text-stone-900 dark:text-stone-100">badminton</strong>, doing{' '}
        <strong className="text-stone-900 dark:text-stone-100"> data research</strong>,{' '}
        <strong className="text-stone-900 dark:text-stone-100"> coding</strong> or{' '}
        <strong className="text-stone-900 dark:text-stone-100">coaching</strong> students badminton.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1yz-W61l0bSd4rI86g3leU2KSpYKWnEur/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};
