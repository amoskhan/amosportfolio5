import {ArrowUpIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => (
  <footer className="border-t border-neutral-200 bg-neutral-50 px-4 py-10 dark:border-neutral-800 dark:bg-neutral-900 sm:px-6 lg:px-8">
    <div className="mx-auto flex max-w-screen-lg flex-col items-center gap-6 sm:flex-row sm:justify-between">
      <div className="flex flex-col items-center gap-y-1 text-center sm:items-start sm:text-left">
        <span className="font-display text-base font-bold text-neutral-900 dark:text-white">
          Amos Khan<span className="text-blue-500">.</span>
        </span>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          © {currentYear} Amos Khan. Built with Next.js & Tailwind CSS.
        </span>
      </div>
      <div className="flex items-center gap-x-1 text-neutral-500 dark:text-neutral-400">
        <Socials className="hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-white" />
        <a
          aria-label="Back to top"
          className="ml-2 rounded-full border border-neutral-300 p-2 transition-colors hover:border-blue-500 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-neutral-700 dark:hover:text-blue-400"
          href={`/#${SectionId.Hero}`}
          title="Back to top">
          <ArrowUpIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  </footer>
));

Footer.displayName = 'Footer';
export default Footer;
