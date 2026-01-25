import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import profilepic from '../../images/profilepic.jpg';
import {About} from '../dataDef';

export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Welcome to my portfolio website! If you were to ask me, "Amos, what does an ideal lifestyle outside of work look like?" Fitness and exercise have always been at the heart of my life. I truly resonate with the saying, "A healthy body leads to a healthy mind." Beyond health, I have a strong passion for big data and research, particularly in exercise science. Analyzing datasets to uncover compelling insights brings me tremendous joy. Coaching has also played a significant role in my journey, enhancing my confidence, people management skills, and ability to instill life values in children through sports. Additionally, my interest in data analysis and coding has given me the opportunity to create this website and share my knowledge with others.`,
  aboutItems: [
    {label: 'Location', text: 'Singapore', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Singaporean', Icon: FlagIcon},
    {label: 'Interests', text: 'Badminton, Fitness, Data Analysis, Research', Icon: SparklesIcon},
    {label: 'Study', text: 'Nanyang Technological University | National Institute of Singapore', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'MOE (Ministry of Education)', Icon: BuildingOffice2Icon},
  ],
};
