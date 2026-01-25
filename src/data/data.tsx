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
  title: 'Amos Portfolio',
  description: 'Portolio of Amos Khan - Sports Science Graduate & PE Teacher Trainee',
  ogImageUrl: 'assets/og-image.jpg', // You should add an actual OG image
  twitterCardType: 'summary_large',
  twitterTitle: 'Amos Portfolio',
  twitterCreator: '@afro_jacko',
  twitterDescription: 'Portolio of Amos Khan - Sports Science Graduate & PE Teacher Trainee',
  twitterUrl: 'https://amoskhan.com',
};
