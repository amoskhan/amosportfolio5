import classNames from 'classnames';
import {FC, memo} from 'react';

import {socialLinks} from '../data/data';

const Socials: FC<{className?: string}> = memo(({className}) => {
  return (
    <>
      {socialLinks.map(({label, Icon, href}) => (
        <a
          aria-label={label}
          className={classNames(
            'rounded-full p-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
            className,
          )}
          href={href}
          key={label}
          rel="noopener noreferrer"
          target="_blank"
          title={label}>
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
      ))}
    </>
  );
});

Socials.displayName = 'Socials';
export default Socials;
