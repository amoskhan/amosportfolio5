import {
  AcademicCapIcon,
  BeakerIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';
import {FaMicrosoft} from 'react-icons/fa6';
import {GiShuttlecock} from 'react-icons/gi';
import {PiMicrosoftExcelLogo, PiMicrosoftTeamsLogo} from 'react-icons/pi';
import {
  SiGit,
  SiGoogleclassroom,
  SiGooglegemini,
  SiHtml5,
  SiMediapipe,
  SiNextdotjs,
  SiPython,
  SiR,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import {
  TbAlphabetLatin,
  TbBone,
  TbCalendarEvent,
  TbChalkboard,
  TbChartBar,
  TbChartHistogram,
  TbDroplet,
  TbFileText,
  TbHeartbeat,
  TbLanguage,
  TbLungs,
  TbSql,
  TbTemperatureSun,
  TbUsersGroup,
} from 'react-icons/tb';

import {SkillGroup} from '../dataDef';

export const skills: SkillGroup[] = [
  {
    name: 'Teaching & Coaching',
    skills: [
      {name: 'PE pedagogy', Icon: TbChalkboard},
      {name: 'Classroom management', Icon: TbUsersGroup},
      {name: 'Badminton coaching', Icon: GiShuttlecock},
      {name: 'Sports event planning', Icon: TbCalendarEvent},
      {name: 'Google Classroom', Icon: SiGoogleclassroom},
      {name: 'Microsoft Teams', Icon: PiMicrosoftTeamsLogo},
    ],
    Icon: AcademicCapIcon,
  },
  {
    name: 'Sports Science Research',
    skills: [
      {name: 'Exercise physiology testing', Icon: TbHeartbeat},
      {name: 'Gas exchange analysis', Icon: TbLungs},
      {name: 'Blood lactate (YSI 2900)', Icon: TbDroplet},
      {name: 'DXA body composition', Icon: TbBone},
      {name: 'Thermal physiology', Icon: TbTemperatureSun},
      {name: 'Report writing', Icon: TbFileText},
    ],
    Icon: BeakerIcon,
  },
  {
    name: 'Data & Analytics',
    skills: [
      {name: 'R', Icon: SiR},
      {name: 'Python', Icon: SiPython},
      {name: 'SQL', Icon: TbSql},
      {name: 'Tableau', Icon: TbChartBar},
      {name: 'IBM SPSS', Icon: TbChartHistogram},
      {name: 'Excel & VBA', Icon: PiMicrosoftExcelLogo},
      {name: 'Microsoft Office', Icon: FaMicrosoft},
    ],
    Icon: ChartBarIcon,
  },
  {
    name: 'Web & AI Development',
    skills: [
      {name: 'React', Icon: SiReact},
      {name: 'Next.js', Icon: SiNextdotjs},
      {name: 'TypeScript', Icon: SiTypescript},
      {name: 'Tailwind CSS', Icon: SiTailwindcss},
      {name: 'HTML', Icon: SiHtml5},
      {name: 'Git', Icon: SiGit},
      {name: 'LLM APIs (Gemini)', Icon: SiGooglegemini},
      {name: 'MediaPipe', Icon: SiMediapipe},
    ],
    Icon: CodeBracketIcon,
  },
  {
    name: 'Languages',
    skills: [
      {name: 'English', Icon: TbAlphabetLatin},
      {name: 'Chinese', Icon: TbLanguage},
    ],
    Icon: ChatBubbleLeftRightIcon,
  },
];
