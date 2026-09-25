import classNames from 'classnames';
import {FC, memo, ReactNode} from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeading: FC<SectionHeadingProps> = memo(({eyebrow, title, description, align = 'center', className}) => (
  <div
    className={classNames(
      'flex flex-col gap-y-3',
      align === 'center' ? 'mx-auto max-w-2xl items-center text-center' : 'items-start text-left',
      className,
    )}>
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{eyebrow}</span>
    <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
      {title}
    </h2>
    {description && <p className="text-pretty text-base text-neutral-600 dark:text-neutral-400">{description}</p>}
  </div>
));

SectionHeading.displayName = 'SectionHeading';
export default SectionHeading;
