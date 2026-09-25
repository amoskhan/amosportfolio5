import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import SectionHeading from '../Layout/SectionHeading';

const About: FC = memo(() => {
  const {profileImageSrc, title, paragraphs, aboutItems} = aboutData;
  return (
    <Section className="bg-white dark:bg-neutral-950" sectionId={SectionId.About}>
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-5 md:gap-14">
        {profileImageSrc && (
          <div className="relative mx-auto w-full max-w-xs md:col-span-2 md:mx-0 md:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-3 -z-0 rounded-3xl bg-gradient-to-br from-blue-500/25 via-transparent to-emerald-400/20 blur-2xl"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-neutral-200 shadow-xl dark:border-neutral-800">
              <Image
                alt="Portrait of Amos Khan"
                className="h-full w-full object-cover"
                placeholder="blur"
                sizes="(min-width: 768px) 400px, 320px"
                src={profileImageSrc}
              />
            </div>
          </div>
        )}
        <div className="flex flex-col gap-y-8 md:col-span-3">
          <SectionHeading align="left" eyebrow="About me" title={title} />
          <div className="flex flex-col gap-y-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg">
            {paragraphs.map((paragraph, idx) => (
              <p className="text-pretty" key={idx}>
                {paragraph}
              </p>
            ))}
          </div>
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}) => (
              <div
                className="flex items-start gap-x-3 rounded-xl border border-neutral-200 bg-neutral-50 p-3.5 dark:border-neutral-800 dark:bg-neutral-900"
                key={label}>
                {Icon && (
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                )}
                <div className="flex flex-col">
                  <dt className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    {label}
                  </dt>
                  <dd className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{text}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
