import {motion, useScroll, useTransform} from 'framer-motion';
import Image from 'next/image';
import {FC, memo, useRef} from 'react';

import type {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{
  item: TimelineItem;
  last?: boolean;
  onClick?: (id: string) => void;
  itemId: string;
  isFocused?: boolean;
  isBlurred?: boolean;
}> = memo(({item, onClick, itemId, isFocused, isBlurred}) => {
  const {title, date, location, content, image} = item;
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.02, 0.95]);

  const handleClick = () => {
    if (onClick) {
      onClick(itemId);
    }
  };

  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left" ref={ref}>
      <motion.div
        animate={{
          scale: isFocused ? 1.05 : 1,
          zIndex: isFocused ? 10 : 1,
          filter: isBlurred ? 'blur(2px) grayscale(100%)' : 'none',
          opacity: isBlurred ? 0.5 : 1,
        }}
        className={`flex flex-col rounded-2xl border border-neutral-300 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer ${
          isFocused ? 'ring-2 ring-blue-500' : ''
        }`}
        onClick={handleClick}
        style={{scale: isFocused ? 1.05 : scale}}>
        <div className="flex flex-col items-center gap-x-6 md:flex-row md:items-start">
          {image && (
            <div className="relative mb-4 h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-gray-200 shadow-sm md:mb-0 md:h-28 md:w-28">
              <Image alt={title} className="h-full w-full object-cover" src={image} />
            </div>
          )}
          <div className="w-full flex-1">
            <div className="flex flex-col items-center justify-between gap-y-2 md:flex-row md:items-start">
              <h2 className="text-xl font-bold text-black">{title}</h2>
              <span className="text-sm font-medium text-gray-600">{date}</span>
            </div>
            <div className="mt-1 flex flex-col items-center md:items-start">
              <span className="text-sm font-medium italic text-gray-700">{location}</span>
            </div>
            <div className="mt-4 text-justify text-gray-800">{content}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
