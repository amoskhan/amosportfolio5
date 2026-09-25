import {FC, ForwardRefExoticComponent, memo, PropsWithChildren, SVGProps} from 'react';

const ResumeSection: FC<
  PropsWithChildren<{title: string; Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>}>
> = memo(({title, Icon, children}) => {
  return (
    <div className="flex flex-col gap-y-6">
      <h3 className="flex items-center gap-x-3 font-display text-xl font-bold text-neutral-900 dark:text-white">
        {Icon && (
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <Icon aria-hidden="true" className="h-5 w-5" />
          </span>
        )}
        {title}
      </h3>
      {children}
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
