import {
  AcademicCapIcon,
  BeakerIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';

import {SkillGroup} from '../dataDef';

export const skills: SkillGroup[] = [
  {
    name: 'Teaching & Coaching',
    skills: [
      'PE pedagogy',
      'Classroom management',
      'Badminton coaching',
      'Sports event planning',
      'Google Classroom',
      'Microsoft Teams',
    ],
    Icon: AcademicCapIcon,
  },
  {
    name: 'Sports Science Research',
    skills: [
      'Exercise physiology testing',
      'Gas exchange analysis',
      'Blood lactate (YSI 2900)',
      'DXA body composition',
      'Thermal physiology',
      'Report writing',
    ],
    Icon: BeakerIcon,
  },
  {
    name: 'Data & Analytics',
    skills: ['R', 'Python', 'SQL', 'Tableau', 'IBM SPSS', 'Excel & VBA', 'Microsoft Office'],
    Icon: ChartBarIcon,
  },
  {
    name: 'Web & AI Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'Git', 'LLM APIs (Gemini)', 'MediaPipe'],
    Icon: CodeBracketIcon,
  },
  {
    name: 'Languages',
    skills: ['English', 'Chinese'],
    Icon: ChatBubbleLeftRightIcon,
  },
];
