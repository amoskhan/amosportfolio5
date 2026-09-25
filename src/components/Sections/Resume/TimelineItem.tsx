import Image from 'next/image';
import {FC, memo} from 'react';

import type {TimelineItem as TimelineItemType} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItemType}> = memo(({item}) => {
  const {title, date, location, content, image} = item;

  return (
    <li className="relative pl-8 sm:pl-10">
      {/* Timeline marker; the rail is drawn by the parent list */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-7 h-[15px] w-[15px] rounded-full border-[3px] border-white bg-blue-500 ring-1 ring-blue-500/40 dark:border-neutral-950"
      />
      <article className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-colors duration-300 hover:border-blue-500/40 dark:border-neutral-800 dark:bg-neutral-900 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          {image && (
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-700">
              <Image alt={`${location} logo`} className="h-full w-full object-contain" sizes="56px" src={image} />
            </div>
          )}
          <div className="flex min-w-0 flex-1 flex-col gap-y-3">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col gap-y-0.5">
                <h4 className="font-display text-lg font-bold leading-snug text-neutral-900 dark:text-white">
                  {title}
                </h4>
                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{location}</p>
              </div>
              <span className="inline-flex w-fit shrink-0 items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                {date}
              </span>
            </div>
            <div className="timeline-content text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 [&_li]:pl-1 [&_li]:marker:text-blue-500 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-4">
              {content}
            </div>
          </div>
        </div>
      </article>
    </li>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
