import Image from 'next/image';
import {FC, memo} from 'react';

import {SectionId, testimonial} from '../../data/data';
import QuoteIcon from '../Icon/QuoteIcon';
import Section from '../Layout/Section';
import SectionHeading from '../Layout/SectionHeading';

const Testimonials: FC = memo(() => {
  const {testimonials} = testimonial;

  // If no testimonials, don't render the section
  if (!testimonials.length) {
    return null;
  }

  return (
    <Section className="bg-neutral-50 dark:bg-neutral-900" sectionId={SectionId.Testimonials}>
      <div className="flex flex-col gap-y-12">
        <SectionHeading
          description="Feedback from the people I've had the privilege of working with."
          eyebrow="Testimonials"
          title="Kind words from supervisors"
        />
        <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map(({name, title, text, image}) => (
            <li key={name}>
              <figure className="relative flex h-full flex-col gap-y-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:p-8">
                <QuoteIcon aria-hidden="true" className="h-8 w-8 text-blue-500/80" />
                <blockquote className="flex-1 text-pretty text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                  <p>{text}</p>
                </blockquote>
                <figcaption className="flex items-center gap-x-4 border-t border-neutral-200 pt-5 dark:border-neutral-800">
                  {image && (
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-neutral-200 bg-white dark:border-neutral-700">
                      <Image alt="" className="h-full w-full object-cover" sizes="64px" src={image} />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <cite className="font-display text-base font-bold not-italic text-neutral-900 dark:text-white">
                      {name}
                    </cite>
                    {title && <span className="text-sm text-neutral-500 dark:text-neutral-400">{title}</span>}
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
});

Testimonials.displayName = 'Testimonials';
export default Testimonials;
