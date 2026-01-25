import classNames from 'classnames';
import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';

import { isApple, isMobile } from '../../config';
import { SectionId, testimonial } from '../../data/data';
import useInterval from '../../hooks/useInterval';
import QuoteIcon from '../Icon/QuoteIcon';
import Section from '../Layout/Section';

const Testimonials: FC = memo(() => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  // Mobile iOS doesn't allow background-fixed elements
  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  const { imageSrc, testimonials } = testimonial;

  const resolveSrc = useMemo(() => {
    if (!imageSrc) return undefined;
    return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  }, [imageSrc]);

  const next = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const setIndex = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useInterval(next, 6000); // 6 seconds per slide

  // If no testimonials, don't render the section
  if (!testimonials.length) {
    return null;
  }

  const activeTestimonial = testimonials[activeIndex];

  return (
    <Section noPadding sectionId={SectionId.Testimonials}>
      <div
        className={classNames(
          'relative flex min-h-[500px] w-full items-center justify-center bg-cover bg-center py-16 md:py-24',
          parallaxEnabled && 'bg-fixed',
          { 'bg-neutral-50 dark:bg-neutral-800': !imageSrc },
        )}
        style={imageSrc ? { backgroundImage: `url(${resolveSrc})` } : undefined}>
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-white/60 dark:bg-black/70" />

        <div className="z-10 w-full max-w-4xl px-4 md:px-6">
          {/* Glass Card */}
          <div className="relative flex flex-col items-center gap-y-8 rounded-3xl bg-white/70 dark:bg-neutral-900/40 p-8 text-center shadow-2xl backdrop-blur-md border border-neutral-200 dark:border-white/10 md:p-14 transition-all duration-500 hover:bg-white/90 dark:hover:bg-neutral-900/50 hover:border-blue-500/30">
            {/* Quote Icon */}
            <QuoteIcon className="absolute -top-6 -left-4 h-12 w-12 text-blue-500/80 md:-top-8 md:-left-8 md:h-16 md:w-16 rotate-180" />
            <QuoteIcon className="absolute -bottom-6 -right-4 h-12 w-12 text-blue-500/80 md:-bottom-8 md:-right-8 md:h-16 md:w-16" />

            {/* Avatar with Glow */}
            <div className="relative shrink-0">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-blue-500 shadow-xl md:h-32 md:w-32">
                {activeTestimonial.image ? (
                  <img
                    alt={activeTestimonial.name}
                    className="h-full w-full object-cover"
                    src={
                      typeof activeTestimonial.image === 'string'
                        ? activeTestimonial.image
                        : activeTestimonial.image?.src
                    }
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-neutral-200 dark:bg-neutral-800">
                    <QuoteIcon className="h-10 w-10 text-neutral-500 dark:text-white/50" />
                  </div>
                )}
              </div>
            </div>

            {/* Content - with Fade Animation Key */}
            <div className="flex flex-col items-center gap-y-6" key={activeIndex}>
              <blockquote className="max-w-2xl text-lg font-light italic leading-relaxed text-neutral-800 dark:text-neutral-200 md:text-2xl animate-fade-in-up">
                "{activeTestimonial.text}"
              </blockquote>

              <div className="flex flex-col items-center gap-y-1 animate-fade-in-up delay-100">
                <cite className="text-xl font-bold not-italic text-neutral-900 dark:text-white md:text-2xl tracking-wide">
                  {activeTestimonial.name}
                </cite>
                {/* Optional: Add title/company if available in data, otherwise just stick to name */}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="mt-4 flex gap-x-3">
              {testimonials.map((_, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={classNames(
                      'h-2.5 rounded-full transition-all duration-300 focus:outline-none',
                      isActive ? 'w-8 bg-blue-500' : 'w-2.5 bg-neutral-500 hover:bg-neutral-400',
                    )}
                    key={`dot-${index}`}
                    onClick={() => setIndex(index)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

export default Testimonials;
