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
import portfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import portfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import portfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import portfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import portfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import portfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import portfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import portfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import portfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import portfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import portfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import portfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import portfolioImage13 from '../images/portfolio/portfolio-13.jpg';
import portfolioImage14 from '../images/portfolio/portfolio-14.jpg';
import portfolioImage15 from '../images/portfolio/portfolio-15.jpg';
import portfolioImage16 from '../images/portfolio/portfolio-16.jpg';
import tonypng from '../images/portfolio/tonypng.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import cert1 from '../images/certificates/Python For Everybody.jpg';
import cert2 from '../images/certificates/Google Data Analytics.jpg';
import cert3 from '../images/certificates/Google IT Support.jpg';
import cert4 from '../images/certificates/Google Project Management.jpg';
import cert5 from '../images/certificates/Web Design for Everybody.jpg';
import cert6 from '../images/certificates/Google Business Intelligence.jpg';
import {
  About,
  BlogPost,
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
  Blog: 'blog',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

// /**
//  * Blog posts
//  */
// export const blogPosts: BlogPost[] = [
//   {
//     id: '1',
//     title: 'Why am I doing this website?',
//     date: '2025-07-02',
//     content: 'Well, to answer this question, it all begins with me being an IT monitor back in primary school. Being deeply involved in technology was always something I was passionate in. With the rise of ChatGPT and OpenAI models, coding and generating websites has became super convenient and efficient. A simple prompt to the GPT allows me to identify coding mistakes and debug errors. Having graduated with just a Sports Science Degree from NTU, I truly believe that if you are interested in something, do not feel afraid to try it. Sure, CS graduates might need stellar grades to even pick up coding skills, but dont let your degree or path restrict you from what you want to achieve. Initially, my goal was to create a functional website to blog and showcase who I am in the internet without paying any $$. Which I can say for now, I have achieved it.',
//     author: 'Amos Khan',
//   },
//   {
//     id: '2',
//     title: 'My experience in DxD Hub 2024',
//     date: '2024-07-02',
//     content: 'Having completed my internship in DxD Hub (National Platform under A*STAR), I have built strong connections within the medtech ecosystem and collaborating partners. It was a true honor to have experienced DxD Hubs 10th Year Anniversary event, having experience this event showed the milestones of what the company has accomplished. Me and my colleagues came up with a backstory and strong   ',
//     author: 'Amos Khan',
//   },
//   {
//     id: '3',
//     title: 'Second Blog Post',
//     date: '2023-10-02',
//     content: 'This is the content of the second blog post.',
//     author: 'Author Name',
//   },
// ];


export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Why am I doing this website?🤔',
    date: '2025-07-02',
    content: 'I started getting interested in technology back in primary school when I was an IT monitor. I have always enjoyed working with tech, and now with tools like ChatGPT and OpenAI, building websites and coding has become much easier. Whenever I run into coding mistakes, a quick prompt to GPT helps me figure things out. Even though I graduated with a Sports Science degree from NTU, I think anyone who is curious should give coding a try. You do not need to be a computer science graduate or have perfect grades to learn new skills. My main goal was to create a simple website to share my thoughts and experiences online without spending any money, and I am happy that I managed to do just that.',
    author: 'Amos Khan',
    image: portfolioImage1,
    collageImages: [portfolioImage12, portfolioImage13 ,portfolioImage14],
  },
  {
    id: 2,
    title: 'DxD Hub Internship',
    date: '2024-07-02',
    content: 'Having completed my internship in DxD Hub (National Platform under A*STAR), I have built strong connections within the medtech ecosystem and collaborating partners. As a Outreach Communications Intern, I was given the experience to be the planning committee of DxD Hubs 10th Year Anniversary event. I ensured smooth logistics and supported event operations to deliver a professional and well-organised experience. Post event, I also proposed a design for a feature wall to further document the achievements of DxD Hub and enhance its branding. <split para> Beyond event planning, I also co-developed 15 LinkedIn articles, generating 64,305 impressions, 27,707 views and 453 new followers. I conducted a comprehensive review of intern hiring trends using critical thinking and data analyst skills. This analysis identified key opportunities to enhance recruitment strategies, optimize manpower planning, and address departmental needs during critical periods. ',
    author: 'Amos Khan',
    image: portfolioImage2,
  },
  {
    id: 3,
    title: '📢 Final Year Project Presentation 2024 - Exercise Physiology',
    date: '2025-18-02',
    content: 'Research Topic: Acute Effects of Cloth Mask on Exercise Performance between Genders 👨‍🔬After more than 100 hours dedicated to data collection, meticulous data cleaning and report writing, I have completed my FYP report. This module was one of the most demanding yet rewarding parts of my journey in SSM. It gave me invaluable hands-on experience with physiological measurement tools (Gas Exchange Analyser, YSI 2900, Dual X-Ray absorptiometry etc...) and a chance to explore how mask impact exercise performance. ',
    author: 'Amos Khan',
    image: portfolioImage12,
  },
  {
    id: 4,
    title: 'HTX Internship',
    date: '2025-22-07',
    content: 'During my final-year internship, I had the rewarding opportunity to work closely with scientists and engineers from the Human Factors and Simulation department at HTX. This experience was truly eye-opening, as I was able to apply the practical knowledge I gained in school to real-world experiments. Our work focused on addressing real-life challenges faced by Home Team Officers, including conducting experiments related to Thermal Physiology and Heat Acclimatization while ensuring safe conditions for officers in the field. This hands-on experience not only deepened my understanding of the subject but also highlighted the importance of research in supporting those who serve on the front lines.',
    author: 'Amos Khan',
    image: portfolioImage4,
  },
];

// Certificates section
export const certificates = [
  {
    title: 'Python For Everybody',
    image: cert1,
    url: 'https://coursera.org/share/b7b2ea884f78fa602aa786a371ca8ede'
  },
    {
    title: 'Google Data Analytics',
    image: cert2,
    url: 'https://coursera.org/share/88c34a4692a8905982a144a076625fc3'
  },
    {
    title: 'Google IT Support',
    image: cert3,
    url: 'https://coursera.org/share/7e00c0ff3a725a26b3be3ca93e67a61c'
  },
    {
    title: 'Google Project Management',
    image: cert4,
    url: 'https://coursera.org/share/45ca7d5258d159c4ae76b329d72699b6'
  },
  {
    title: 'Web Design for Everybody: Basics of Web Development & Coding',
    image: cert5,
    url: 'https://coursera.org/share/9a4b6c2afa8c8bb14038a5ea225c0e97'
  },
  {
    title: 'Google Business Intelligence',
    image: cert6,
    url: 'https://coursera.org/share/cc62568b761ecab74de956843dda2a17'
  },

  // Add more certificates here
];
/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Meet Amos.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Singapore based <strong className="text-stone-100">Sports Science & Mangement Undergraduate</strong>,
        currently working at <strong className="text-stone-100">Ministry of Education (MOE) </strong>{' '}
        to be a trained <strong className="text-stone-100">Physical Education Teacher</strong>. Having a passion for <strong className="text-stone-100">education</strong>, I hope to inspire students to be the best version of themselves.{' '}
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me playing <strong className="text-stone-100">badminton</strong>, keeping fit{' '}
        <strong className="text-stone-100"> through exercise</strong>, or coaching / educating students badminton.
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
        level: 7,
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
        level: 9,
      },
      {
        name: 'Excel VBA',
        level: 8,
      },
      {
        name: 'Tableau',
        level: 8,
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
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title:
      'Acute Effects of Cloth Mask on Physiological Indices (Lactate Threshold, VO2, VO2max, Rate of Perceived Exertion)',
    description:
      'Purpose: Examine the effects of cloth mask conditions on exercise performance between bothgenders in physiological indices such as Lactate Threshold (LT), Oxygen Consumption(VO2), Maximal Oxygen Consumption (VO2max) and Rate of Perceived Exhaustion (RPE).',
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
    date: 'Jul 2025 - Present',
    location: 'National Institute of Singapore',
    title: 'Postgraduate Diploma in Education (PGDE) Trainee',
    content: <p> Pursuing a Postgraduate Diploma in Education (PGDE) at the National Institute of Education, Singapore.</p>
  },
  {
    date: 'Aug 2021 - Aug 2025',
    location: 'Nanyang Technological University | National Institute of Education',
    title: 'BSc Sports Science & Management',
    content: (
      <p>
        Final Year Project (Exercise Physiology): Acute Effects of Cloth Mask on Physiological Indices between Genders
        (Lactate Threshold, VO2, VO2 Max and Rate of Perceived Exertion)
        <br />
        <a
          href="https://hdl.handle.net/10356/182647"
          target="_blank"
          style={{ color: '#2563eb' }} // Tailwind blue-600
        >
          https://hdl.handle.net/10356/182647
        </a>
      </p>
    ),
  },
  {
    date: 'Feb 2024 - Jun 2024',
    location: 'Loughborough University',
    title: 'Sport and Exercise Science, Sports Science',
    content: (
      <p>
        Student exchange at Loughborough University Y3S2. 
        <br /> Academic Modules: Sports Engineering, Sports
        Governance, Applied Sports Physiology, Applied Psychology in Competitive Sport, Psychological Disorders in
        Society
      </p>
    ),
  },
  {
    date: 'Jan 2017 - Dec 2018',
    location: 'Raffles Institution',
    title: 'Cambridge A - Levels',
    content: (
      <p>
        Activities and societies: 3H2 subjects including Chemistry, Biology, Mathematics <br />
        2H1 subjects including General Paper, Economics. 
        <br />Badminton Team Vice Captain.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jul 2025 - Present',
    location: 'Ministry of Education (Singapore)',
    title: 'Postgraduate Diploma in Education (PGDE) Trainee',
    content:<p>
      • Engaged in a 2-year teaching programme to become a qualified Physical Educator in Singapore. <br />
      • Leveraged on technology in education by integrating digital tools for lesson planning, student engagement, and assessment. <br />•Acquired skills such as educational pedagogy, classroom management, and the use of EdTech platforms such as Google Classroom and Microsoft Teams to enhance learning experiences.
    </p>
  },

  {
    date: 'Jan 2025 - May 2025',
    location: 'HTX (Home Team Science & Technology Agency)',
    title: 'Thermal Physiology Intern',
    content: <p>• Conducted experiments on Home Team Officers concerning Thermal Physiology <br />• Utilised IBM SPSS for statistical analysis, identifying significant differences in physiological metrics while driving data-driven interpretations. <br />• Automated manual Excel plotting using R Programming Language, improving workflow efficiency by ~80%</p>,
  },

  {
    date: 'Jul 2024 - Dec 2024',
    location: 'Diagnostic Development Hub (A National Platform under A*STAR)',
    title: 'Corporate Communications, Outreach and Talent Development Intern',
    content: (
      <p>
        • Created written and visual content to enhance DxD Hub’s visibility across multiple platforms (e.g LinkedIn) <br />
        • Co-developed 15 LinkedIn articles, generating 64,305 impressions, 27,707 views and 453 new followers <br />
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
        • Performed data cleaning for a Virtual Reality pilot project for senior citizens for recording purposes <br />
        • Conducted data analysis of survey responses from 70+ VR clients to assess the viability of project <br />
        • Explored potential advantages Virtual Reality may help senior citizens for future projects
      </p>
    ),
  },
  {
    date: 'Jun 2023 - Aug 2023',
    location: 'Pan-Malayan Pharmaceuticals',
    title: 'Operations Assistant',
    content: (
      <p>
        • Under the supervision of Ocean Health Team <br />
        • Tidying up warehouse utilising Dynamic 365 Business Central <br />
        • Packaging of Shoppee/Lazada/Redmart orders
      </p>
    ),
  },

  {
    date: 'Feb 2021 - Jul 2021',
    location: 'Phillip Securities Pte Ltd',
    title: 'Data Processing Executive',
    content: (
      <p>
        • Initiated opening of financial accounts and due diligence checks for 1000+ newly onboarded clients <br />
        • Ensured client’s compliance with MAS and guidelines related to AML to prevent fraudulent activities <br />
        • Conducted consistent and accurate data processing towards existing accounts to update overall system
      </p>
    ),
  },

  {
    date: 'Nov 2018 - Jan 2019',
    location: 'ST Logistics',
    title: 'Data Admin Supervisor',
    content: (
      <p>
        • Supervised a group of part-timers and executed data entry of client’s details into software systems
        for processing <br />
        • Sorted 9000 orders in sequential order in Excel for the proper safekeeping of client details
      </p>
    ),
  },

  {
    date: 'Apr 2016 - May 2016',
    location: 'Special Olympics Singapore',
    title: 'Internship',
    content: (
      <p>
        • Organize sports events for 60 children with special needs to make a positive impact through sports <br />
        • Communicated and participated in soccer and floorball with students from Rainbow Centre to improve their mental wellbeing
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
      text: 'Amos has also been effective in his efforts of know-your-customer, risk profiling and due diligence process in new clients onboarding. Amos is helpful and a proactive team player during special audit projects where investigations into old archives are required. I particularly appreciate Amos willingness to take initiative to help the company serve its internal and external customers more fully.',
      image: tonypng,
    },
        {
      name: 'Glenn Tan (HTX - Home Team Science & Technology Agency)',
      text: 'Amos displayed great enthusiasm when performing all tasks assigned to him. He often took the initiative to offer his assistance for tasks, and was unafraid to take on tasks outside of his comfort zone. Amos exhibited professionalism while handling trial participants, and constantly sought to improve himself.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DJ4nRFeU7ZHDBF8rHtiJIcccqEgL4rCW7g&s',
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
  description: 'Do reach out to me if you have further details.',
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
    {
      type: ContactType.Phone,
      text: '+65 96182276',
      href: 'tel:+6596182276',
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
