import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
// import portfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import portfolioImage13 from '../images/portfolio/portfolio-13.jpg';
import portfolioImage14 from '../images/portfolio/portfolio-14.jpg';
import portfolioImage15 from '../images/portfolio/portfolio-15.jpg';
import portfolioImage16 from '../images/portfolio/portfolio-16.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Amos Portfolio',
  description: "Example site built with Amos Khan's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Meet Amos.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Singapore based <strong className="text-stone-100">Sports Science & Mangement Undergraduate</strong>, currently working
        at <strong className="text-stone-100">Diagnostic Development Hub</strong> helping to create written and visual content which aligned with the company's branding and marketing objectives.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing  <strong className="text-stone-100">badminton</strong>,
        Keeping fit <strong className="text-stone-100"> by exercising</strong>, or coaching / educating students
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1yz-W61l0bSd4rI86g3leU2KSpYKWnEur/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Since my early years as an athlete, challenges never fazed me. Learning has always been a passion of mine. As a student, communicating effectively and building positive interpersonal relationships are crucial in building up my professional career.

Being deeply involved as a badminton athlete and coach has become integral to my identity. Besides striving for improvement in my sport, I also find immense fulfilment in mentoring the younger generation, building up their confidence while instilling life values through educational pedagogies. 

Having a deep interest in sports analytics and data analysis, I find immense joy in transforming intricate datasets into compelling narratives. Research is a vital tool, allowing me to uncover patterns and connections between research variables.

My professional journey has taken me through diverse industries including Logistics, Healthcare, and the Financial Sector.`,
  aboutItems: [
    {label: 'Location', text: 'Singapore', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Singaporean', Icon: FlagIcon},
    {label: 'Interests', text: 'Badminton, Fitness, Data Analysis, Research', Icon: SparklesIcon},
    {label: 'Study', text: 'Nanyang Technological University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'DxD Hub', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Chinese',
        level: 6,
      },

    ],
  },
  {
    name: 'Sports Science Research',
    skills: [
      {
        name: 'Data Analysis',
        level: 9,
      },
      {
        name: 'Research Writing',
        level: 8,
      },
      {
        name: 'Critical Analysis',
        level: 8,
      },
    ],
  },
  {
    name: 'Digital Technology',
    skills: [
      {
        name: 'SQL',
        level: 7,
      },
      {
        name: 'R Programming',
        level: 6,
      },
      {
        name: 'Excel VBA',
        level: 7,
      },
      {
        name: 'Tableau',
        level: 7,
      },
    ],
  },
  { 
    name: 'Microsoft Office',
    skills: [
      {
        name: 'Microsoft Word',
        level: 9,
      },
      {
        name: 'Microsoft Excel',
        level: 9,
      },
      {
        name: 'Microsoft Powerpoint',
        level: 9,
      }
    ]

  }

];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Acute Effects of Cloth Mask on Physiological Indices (Lactate Threshold, VO2, VO2max, Rate of Perceived Exertion)',
    description: 'Purpose: Examine the effects of cloth mask conditions on exercise performance between bothgenders in physiological indices such as Lactate Threshold (LT), Oxygen Consumption(VO2), Maximal Oxygen Consumption (VO2max) and Rate of Perceived Exhaustion (RPE).',
    url: 'https://drive.google.com/file/d/19sb1y6dvbFv2JfBYW7uYjDiX7-FkL4eu/view?usp=sharing',
    image: portfolioImage13,
  },

  {
    title: 'Acute Effects of Cloth Mask on Physiological Indices ',
    description: 'Check out my FYP poster here',
    url: 'https://drive.google.com/file/d/1e_oEndUPJW3prQD_6M55bwh-CZ-IuV22/view?usp=sharing',
    image: portfolioImage14,
  },

  {
    title: 'Photographer',
    description: 'Check out some of my shots here on Instagram',
    url: 'https://www.instagram.com/afrojacks_/',
    image: portfolioImage15,
  },

  {
    title: 'Badminton Coach',
    description: 'Check out my coaching services here',
    url: 'https://youtu.be/bcC817-7-YM?si=9WsvCqhGHyy3Yk3f',
    image: portfolioImage16,
  },

  // {
  //   title: 'Project title 2',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage2,
  // },
  // {
  //   title: 'Project title 3',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage3,
  // },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage4,
  // },

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Aug 2021 - Aug 2025',
    location: 'Nanyang Technological University | National Institute of Education',
    title: 'BSc Sports Science & Management',
    content: <p>Final Year Project (Exercise Physiology): Acute Effects of Cloth Mask on Physiological Indices between Genders (Lactate Threshold, VO2, VO2 Max and Rate of Perceived Exertion</p>,
  },
  {
    date: 'Feb 2024 - Jun 2024',
    location: 'Loughborough University',
    title: 'Sport and Exercise Science , Sports Science',
    content: <p>
    Student exchange at Loughborough University Y3S2.
    Academic Modules enrolled: Sports Engineering, Sports Governance, Applied Sports Physiology, Applied Psychology in Competitive Sport, Psychological Disorders in Society
    </p>,
  },
  {
    date: 'Jan 2017 - Dec 2018',
    location: 'Raffles Institution',
    title: 'Cambridge A - Levels',
    content: <p>Activities and societies: 3H2 subjects including Chemistry, Biology, Mathematics
    2H1 subjects including General Paper, Economics. 
    Badminton Team Vice Captain.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jul 2024 - Dec 2024',
    location: 'Diagnostic Development Hub (A National Platform under A*STAR)',
    title: 'Corporate Communications, Outreach and Talent Development Intern',
    content: (
      <p>
• Created written and visual content to enhance DxD Hub’s visibility across multiple platforms (e.g LinkedIn)
• Co-developed 15 LinkedIn articles, generating 64,305 impressions, 27,707 views and 453 new followers
• Conducted a comprehensive review of intern hiring trends using critical thinking and data analyst skills
      </p>
    ),
  },
  {
    date: 'Jan 2023 - Apr 2023',
    location: 'NTUC Health',
    title: 'Assistant Data Analyst',
    content: (
      <p>
      • Performed data cleaning for a Virtual Reality pilot project for senior citizens for recording purposes  
      • Conducted data analysis of survey responses from 70+ VR clients to assess the viability of project
      • Explored potential advantages Virtual Reality may help senior citizens for future projects
      </p>
    ),
  },
  {
    date: 'Jun 2023 - Aug 2023',
    location: 'Pan-Malayan Pharmaceuticals',
    title: 'Operations Assistant',
    content: (
      <p> • Under the supervision of Ocean Health Team • Tidying up warehouse utilising Dynamic 365 Business Central • Packaging of Shoppee/Lazada/Redmart orders
      </p>
    ),
  },

  {
    date: 'Feb 2021 - Jul 2021',
    location: 'Phillip Securities Pte Ltd',
    title: 'Data Processing Executive',
    content: (
      <p>
      • Initiated opening of financial accounts and due diligence checks for 1000+ newly onboarded clients
      • Ensured client’s compliance with MAS and guidelines related to AML to prevent fraudulent activities
      • Conducted consistent and accurate data processing towards existing accounts to update overall system
      </p>
    ),
  },

  {
    date: 'Apr 2016 - May 2016',
    location: 'Special Olympics Singapore',
    title: 'Internship',
    content: (
      <p> • Organize sports events for 60 children with special needs to make a positive impact through sports • Communicated and participated in soccer and floorball with students from Rainbow Centre to improve their mental wellbeing
      </p>
    ),
  },
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Ho Yuan Lu (DxD Hub) - A National Platform under A*STAR ',
      text: 'Amos applied critical thinking and data analysis skills to conduct a comprehensive review of intern hiring trends from 2022 to 2024. His analysis identified key opportunities to enhance recruitment strategies, optimize manpower planning, and address departmental needs during critical periods. His professionalism, resourcefulness, and ability to build positive working relationships made him a valued member of the team.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMHWu9j5HVnvkGAR-tfU2KRW8K6WjqmOlzqw&s',
    },
    {
      name: 'Tony Png (Phillips Securities Pte Ltd)',
      text: 'Amos has also been effective in his efforts of know-your-customer, risk profiling and due diligence process in new clients onboarding. He has no issues in asking for clarifications when in doubt in the independent verification of client information. Amos is helpful and a proactive team player during special audit projects where investigations into old archives are required. I particularly appreciate Amos willingness to take initiative to help the company serve its internal and external customers more fully.',
      image: 'https://media.licdn.com/dms/image/v2/C4E03AQEYxAXH2j21mA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1620199008897?e=1741219200&v=beta&t=nthmK82WYH8CyAuClYPJ6hcXM27x0b0FWUFdm6L9bs0',
    },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Do reach out to be if you have further details.',
  items: [
    {
      type: ContactType.Email,
      text: 'khanamos1@gmail.com',
      href: 'mailto:khanamos1@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Singapore',
      href: 'https://www.google.com/maps/place/Singapore',
    },
    {
      type: ContactType.Instagram,
      text: '@afro_jacko',
      href: 'https://www.instagram.com/afro_jacko/',
    },
    {
      type: ContactType.Github,
      text: 'AmosKhan',
      href: 'https://github.com/AmosKhan',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/AmosKhan'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/AmosKhan'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/afro_jacko/'},
];
