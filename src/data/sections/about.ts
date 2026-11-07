import {
  AcademicCapIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  FlagIcon,
  MapPinIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import profilepic from '../../images/profilepic.jpg';
import {About} from '../dataDef';

export const aboutData: About = {
  profileImageSrc: profilepic,
  title: 'A healthy body leads to a healthy mind.',
  paragraphs: [
    'Sport has always been at the heart of my life. That belief in a healthy body and mind led me to Sports Science at NTU, and now to teaching PE.',
    'I also love data and research, from my exercise physiology FYP to a thermal physiology internship at HTX. Years of coaching badminton showed me how sport builds values in children.',
    'I also build apps for teaching: Kampung Pals (with Akid), the SG PE Syllabus Bot and Kinetix Lab.',
  ],
  aboutItems: [
    {label: 'Currently', text: 'PGDE (PE) trainee, NIE / MOE', Icon: BriefcaseIcon},
    {label: 'Education', text: 'BSc Sports Science & Management, NTU', Icon: AcademicCapIcon},
    {label: 'Location', text: 'Singapore', Icon: MapPinIcon},
    {label: 'Nationality', text: 'Singaporean', Icon: FlagIcon},
    {label: 'Languages', text: 'English, Chinese', Icon: ChatBubbleLeftRightIcon},
    {
      label: 'Interests',
      text: 'Badminton, fitness, photography, data & research, building with AI',
      Icon: SparklesIcon,
    },
  ],
};
