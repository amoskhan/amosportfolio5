import {StaticImageData} from 'next/image';
import {FC, ForwardRefExoticComponent, SVGProps} from 'react';

import {IconProps} from '../components/Icon/Icon';

export interface HomepageMeta {
  title: string;
  description: string;
  siteUrl?: string;
  ogImageUrl?: string;
  twitterCardType?: 'summary' | 'summary_large_image';
  twitterCreator?: string;
}

/**
 * Hero section
 */
export interface Hero {
  imageSrc: string | StaticImageData;
  avatarSrc?: string | StaticImageData;
  name: string;
  status?: string;
  headline: string;
  description: JSX.Element;
  actions: HeroActionItem[];
}

interface HeroActionItem {
  href: string;
  text: string;
  primary?: boolean;
  external?: boolean;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

/**
 * About section
 */
export interface About {
  profileImageSrc?: string | StaticImageData;
  title: string;
  paragraphs: string[];
  aboutItems: AboutItem[];
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

/**
 * Skills section
 */

export interface SkillGroup {
  name: string;
  skills: string[];
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

/**
 * Portfolio section
 */
export interface PortfolioItem {
  title: string;
  description: string;
  url: string;
  linkLabel?: string;
  sourceUrl?: string;
  extraLinks?: {label: string; url: string}[];
  tags?: string[];
  featured?: boolean;
  image: string | StaticImageData;
}

/**
 * Certificates section
 */
export interface Certificate {
  title: string;
  issuer: string;
  url?: string;
  image: string | StaticImageData;
}

/**
 * Resume section
 */
export interface TimelineItem {
  date: string;
  location: string;
  title: string;
  content: JSX.Element;
  image?: string | StaticImageData;
}

/**
 * Testimonial section
 */
export interface TestimonialSection {
  testimonials: Testimonial[];
}

export interface Testimonial {
  image?: string | StaticImageData;
  name: string;
  title?: string;
  text: string;
}

/**
 * Contact section
 */
export interface ContactSection {
  headerText?: string;
  description: string;
  items: ContactItem[];
}

export const ContactType = {
  Email: 'Email',
  Phone: 'Phone',
  Location: 'Location',
  Github: 'Github',
  LinkedIn: 'LinkedIn',
  Facebook: 'Facebook',
  Twitter: 'Twitter',
  Instagram: 'Instagram',
} as const;

export type ContactType = (typeof ContactType)[keyof typeof ContactType];

export interface ContactItem {
  type: ContactType;
  text: string;
  href?: string;
}

export interface ContactValue {
  Icon: FC<IconProps> | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
  srLabel: string;
}

/**
 * Social items
 */
export interface Social {
  label: string;
  Icon: FC<IconProps>;
  href: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  content: string;
  author: string;
  image: string | StaticImageData;
  collageImages?: (string | StaticImageData)[];
}

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
  Certificates: 'certificates',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];
