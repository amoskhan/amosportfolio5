import {HomepageMeta} from './dataDef';
// Re-export specific sections
export * from './sections/about';
export * from './sections/blog';
export * from './sections/contact';
export * from './sections/hero';
export * from './sections/portfolio';
export * from './sections/resume';
export * from './sections/skills';
export * from './sections/testimonials';
// Re-export DataDef
export * from './dataDef';

// Meta data
export const homePageMeta: HomepageMeta = {
  title: 'Amos Khan | PE Teacher, Sports Scientist & Builder',
  description:
    'Portfolio of Amos Khan — a Singapore-based Sports Science & Management graduate (NTU) training with MOE to become a Physical Education teacher, and building AI tools for PE.',
  siteUrl: 'https://amosportfolio.vercel.app',
  ogImageUrl: '/og-image.jpg',
  twitterCardType: 'summary_large_image',
  twitterCreator: '@afro_jacko',
};
