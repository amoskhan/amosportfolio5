import {Dialog, Menu, Transition} from '@headlessui/react';
import {Bars3Icon, ChevronDownIcon, MoonIcon, SunIcon, XMarkIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {motion, useScroll, useSpring} from 'framer-motion';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useEffect, useMemo, useState} from 'react';

import {SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';
import Socials from '../Socials';
import {useTheme} from '../ThemeContext';

export const headerID = 'headerNav';

const sectionLabels: Partial<Record<SectionId, string>> = {
  [SectionId.About]: 'About',
  [SectionId.Portfolio]: 'Projects',
  [SectionId.Resume]: 'Resume',
  [SectionId.Blog]: 'Updates',
  [SectionId.Certificates]: 'Certificates',
  [SectionId.Testimonials]: 'Testimonials',
  [SectionId.Contact]: 'Contact',
};

// Desktop shows the main sections directly and tucks the rest into a "More" dropdown.
const primarySections: SectionId[] = [SectionId.About, SectionId.Portfolio, SectionId.Resume];
const moreSections: SectionId[] = [SectionId.Blog, SectionId.Certificates, SectionId.Testimonials];

const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navSections = useMemo(
    () => [
      SectionId.About,
      SectionId.Portfolio,
      SectionId.Resume,
      SectionId.Blog,
      SectionId.Certificates,
      SectionId.Testimonials,
      SectionId.Contact,
    ],
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  // The hero is observed too so no nav item stays highlighted after scrolling back to the top.
  useNavObserver([SectionId.Hero, ...navSections].map(section => `#${section}`).join(','), intersectionHandler);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Over the hero image the header is transparent with light text; once scrolled it becomes a solid bar.
  const overHero = !scrolled;

  // Reading progress bar along the bottom of the header
  const {scrollYProgress} = useScroll();
  const progress = useSpring(scrollYProgress, {stiffness: 200, damping: 30, restDelta: 0.001});

  return (
    <header
      className={classNames(
        'fixed inset-x-0 top-0 z-40 transition-colors duration-300',
        overHero
          ? 'bg-transparent'
          : 'border-b border-neutral-200/70 bg-white/80 backdrop-blur-md dark:border-neutral-800/70 dark:bg-neutral-950/80',
      )}
      id={headerID}>
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          className={classNames(
            'rounded-md font-display text-lg font-bold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
            overHero ? 'text-white' : 'text-neutral-900 dark:text-white',
          )}
          href={`/#${SectionId.Hero}`}>
          Amos Khan<span className="text-blue-500">.</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-x-1 md:flex">
          {primarySections.map(section => (
            <NavLink current={section === currentSection} key={section} light={overHero} section={section} />
          ))}
          <MoreMenu currentSection={currentSection} light={overHero} />
          <NavLink current={currentSection === SectionId.Contact} light={overHero} section={SectionId.Contact} />
          <ThemeToggle className="ml-2" light={overHero} />
        </nav>
        <MobileNav currentSection={currentSection} light={overHero} navSections={navSections} />
      </div>
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-px h-0.5 origin-left bg-blue-500"
        style={{scaleX: progress}}
      />
    </header>
  );
});

const navItemClass = (current: boolean, light: boolean) =>
  classNames(
    'relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
    current
      ? light
        ? 'text-white'
        : 'text-blue-700 dark:text-blue-300'
      : light
        ? 'text-white/80 hover:text-white'
        : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white',
  );

// Pill behind the active item; the shared layoutId makes it glide between items as you scroll.
const ActivePill: FC<{light: boolean}> = memo(({light}) => (
  <motion.span
    aria-hidden="true"
    className={classNames('absolute inset-0 rounded-full', light ? 'bg-white/15' : 'bg-blue-50 dark:bg-blue-500/15')}
    layoutId="nav-active-pill"
    transition={{type: 'spring', stiffness: 380, damping: 32}}
  />
));

const NavLink: FC<{section: SectionId; current: boolean; light: boolean}> = memo(({section, current, light}) => (
  <Link aria-current={current ? 'true' : undefined} className={navItemClass(current, light)} href={`/#${section}`}>
    {current && <ActivePill light={light} />}
    <span className="relative">{sectionLabels[section]}</span>
  </Link>
));

const MoreMenu: FC<{currentSection: SectionId | null; light: boolean}> = memo(({currentSection, light}) => {
  const current = !!currentSection && moreSections.includes(currentSection);
  return (
    <Menu as="div" className="relative">
      {({open}) => (
        <>
          <Menu.Button className={navItemClass(current, light)}>
            {current && <ActivePill light={light} />}
            <span className="relative flex items-center gap-x-1">
              {current ? sectionLabels[currentSection] : 'More'}
              <ChevronDownIcon
                aria-hidden="true"
                className={classNames('h-4 w-4 transition-transform duration-200', {'rotate-180': open})}
              />
            </span>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="opacity-0 -translate-y-1 scale-95"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 -translate-y-1 scale-95">
            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-xl border border-neutral-200 bg-white p-1.5 shadow-lg focus:outline-none dark:border-neutral-800 dark:bg-neutral-900">
              {moreSections.map(section => (
                <Menu.Item key={section}>
                  {({active}) => (
                    <Link
                      aria-current={section === currentSection ? 'true' : undefined}
                      className={classNames(
                        'block rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                        section === currentSection
                          ? 'text-blue-700 dark:text-blue-300'
                          : 'text-neutral-700 dark:text-neutral-200',
                        {'bg-neutral-100 dark:bg-neutral-800': active},
                      )}
                      href={`/#${section}`}>
                      {sectionLabels[section]}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
});

const ThemeToggle: FC<{className?: string; light?: boolean}> = memo(({className, light}) => {
  const {theme, toggleTheme} = useTheme();
  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  return (
    <button
      aria-label={label}
      className={classNames(
        'rounded-full p-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
        light
          ? 'text-white hover:bg-white/15'
          : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800',
        className,
      )}
      onClick={toggleTheme}
      title={label}
      type="button">
      {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
});

const MobileNav: FC<{navSections: SectionId[]; currentSection: SectionId | null; light: boolean}> = memo(
  ({navSections, currentSection, light}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    return (
      <div className="flex items-center gap-x-1 md:hidden">
        <ThemeToggle light={light} />
        <button
          aria-label="Open menu"
          className={classNames(
            'rounded-full p-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
            light
              ? 'text-white hover:bg-white/15'
              : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800',
          )}
          onClick={open}
          type="button">
          <Bars3Icon className="h-6 w-6" />
        </button>
        <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="relative z-50 md:hidden" onClose={close}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <div className="fixed inset-0 bg-neutral-950/60 backdrop-blur-sm" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in duration-200 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full">
              <Dialog.Panel className="fixed inset-y-0 right-0 flex w-full max-w-xs flex-col bg-white shadow-xl dark:bg-neutral-900">
                <div className="flex h-16 items-center justify-between border-b border-neutral-200 px-4 dark:border-neutral-800">
                  <Dialog.Title className="font-display text-lg font-bold text-neutral-900 dark:text-white">
                    Menu
                  </Dialog.Title>
                  <button
                    aria-label="Close menu"
                    className="rounded-full p-2 text-neutral-700 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-neutral-200 dark:hover:bg-neutral-800"
                    onClick={close}
                    type="button">
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                <nav aria-label="Mobile" className="flex flex-col gap-y-1 p-4">
                  {navSections.map(section => (
                    <Link
                      aria-current={section === currentSection ? 'true' : undefined}
                      className={classNames(
                        'rounded-lg px-3 py-2.5 text-base font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                        section === currentSection
                          ? 'bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300'
                          : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800',
                      )}
                      href={`/#${section}`}
                      key={section}
                      onClick={close}>
                      {sectionLabels[section]}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex justify-center gap-x-2 border-t border-neutral-200 p-4 text-neutral-600 dark:border-neutral-800 dark:text-neutral-300">
                  <Socials className="hover:text-blue-500" />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </div>
    );
  },
);

Header.displayName = 'Header';
export default Header;
