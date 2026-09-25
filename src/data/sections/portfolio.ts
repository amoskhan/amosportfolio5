import cert6 from '../../images/certificates/Google Business Intelligence.jpg';
import cert2 from '../../images/certificates/Google Data Analytics.jpg';
import cert3 from '../../images/certificates/Google IT Support.jpg';
import cert4 from '../../images/certificates/Google Project Management.jpg';
import cert1 from '../../images/certificates/Python For Everybody.jpg';
import cert5 from '../../images/certificates/Web Design for Everybody.jpg';
import portfolioImage13 from '../../images/portfolio/portfolio-13.jpg';
import portfolioImage14 from '../../images/portfolio/portfolio-14.jpg';
import portfolioImage15 from '../../images/portfolio/portfolio-15.jpg';
import portfolioImage16 from '../../images/portfolio/portfolio-16.jpg';
import portfolioImage22 from '../../images/portfolio/portfolio-22.jpg';
import portfolioImage23 from '../../images/portfolio/portfolio-23.jpg';
import {Certificate, PortfolioItem} from '../dataDef';

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Kinetix Lab',
    description:
      'AI-powered biomechanics analysis for PE. Upload a single- or dual-angle video of a movement and get frame-by-frame feedback on technique, joint angles and movement phases, with key frames captured for review.',
    url: 'https://kinetix-lab.vercel.app/',
    linkLabel: 'Live app',
    sourceUrl: 'https://github.com/amoskhan/Kinetix-Lab',
    tags: ['React', 'TypeScript', 'Gemini AI', 'MediaPipe'],
    featured: true,
    image: portfolioImage23,
  },
  {
    title: 'SG PE Syllabus Bot',
    description:
      'An AI assistant that bridges the gap between policy and practice. It combines computer vision with large language models to help educators navigate the 2024 PE Syllabus and analyse student performance in real time.',
    url: 'https://sg-pe-syllabus-bot.vercel.app/',
    linkLabel: 'Live app',
    sourceUrl: 'https://github.com/amoskhan/SG-PE-Syllabus-Bot',
    tags: ['LLMs', 'Computer Vision', 'TypeScript'],
    featured: true,
    image: portfolioImage22,
  },
  {
    title: 'Cloth Masks & Exercise Performance (FYP)',
    description:
      'My final-year research in exercise physiology, examining how wearing a cloth mask affects exercise performance in both genders across lactate threshold, VO2, VO2max and rating of perceived exertion.',
    url: 'https://drive.google.com/file/d/19sb1y6dvbFv2JfBYW7uYjDiX7-FkL4eu/view?usp=sharing',
    linkLabel: 'Read report',
    tags: ['Exercise Physiology', 'Research'],
    image: portfolioImage13,
  },
  {
    title: 'FYP Research Poster',
    description:
      'A one-page summary of the methods and findings from my cloth mask study, presented at the 2024 Final Year Project presentations.',
    url: 'https://drive.google.com/file/d/1e_oEndUPJW3prQD_6M55bwh-CZ-IuV22/view?usp=sharing',
    linkLabel: 'View poster',
    tags: ['Research', 'Science Communication'],
    image: portfolioImage14,
  },
  {
    title: 'Photography',
    description: 'Photography is my creative outlet away from sport. Check out some of my shots on Instagram.',
    url: 'https://www.instagram.com/afrojacks_/',
    linkLabel: 'See on Instagram',
    tags: ['Photography'],
    image: portfolioImage15,
  },
  {
    title: 'Badminton Coaching',
    description:
      'I coach students in badminton, building skills, confidence and sportsmanship. Watch a clip from one of my sessions.',
    url: 'https://www.youtube.com/watch?v=1KYuPvBLjUg',
    linkLabel: 'Watch on YouTube',
    tags: ['Coaching', 'Badminton'],
    image: portfolioImage16,
  },
];

export const certificates: Certificate[] = [
  {
    title: 'Google Data Analytics',
    issuer: 'Google · Coursera',
    image: cert2,
    url: 'https://coursera.org/share/88c34a4692a8905982a144a076625fc3',
  },
  {
    title: 'Google Business Intelligence',
    issuer: 'Google · Coursera',
    image: cert6,
    url: 'https://coursera.org/share/cc62568b761ecab74de956843dda2a17',
  },
  {
    title: 'Google Project Management',
    issuer: 'Google · Coursera',
    image: cert4,
    url: 'https://coursera.org/share/45ca7d5258d159c4ae76b329d72699b6',
  },
  {
    title: 'Google IT Support',
    issuer: 'Google · Coursera',
    image: cert3,
    url: 'https://coursera.org/share/7e00c0ff3a725a26b3be3ca93e67a61c',
  },
  {
    title: 'Python for Everybody',
    issuer: 'University of Michigan · Coursera',
    image: cert1,
    url: 'https://coursera.org/share/b7b2ea884f78fa602aa786a371ca8ede',
  },
  {
    title: 'Web Design for Everybody',
    issuer: 'University of Michigan · Coursera',
    image: cert5,
    url: 'https://coursera.org/share/9a4b6c2afa8c8bb14038a5ea225c0e97',
  },
];
