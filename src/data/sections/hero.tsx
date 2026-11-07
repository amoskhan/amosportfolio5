import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';

import heroImage from '../../images/header-background.webp';
import profilepic from '../../images/profilepic.jpg';
import {Hero, SectionId} from '../dataDef';

export const resumeUrl = 'https://drive.google.com/file/d/1yz-W61l0bSd4rI86g3leU2KSpYKWnEur/view?usp=sharing';

export const heroData: Hero = {
  imageSrc: heroImage,
  avatarSrc: profilepic,
  name: 'Amos Khan',
  status: 'PGDE (PE) trainee at NIE · Singapore',
  headline: 'Physical Educator in training. Sports scientist. Builder of AI tools for PE.',
  description: (
    <p>
      An NTU <strong>Sports Science</strong> graduate training with <strong>MOE</strong> to become a{' '}
      <strong>PE teacher</strong>, using sport and technology to help every student be their best.
    </p>
  ),
  actions: [
    {
      href: resumeUrl,
      text: 'Resume',
      primary: true,
      external: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Portfolio}`,
      text: 'View projects',
    },
  ],
};
