import GithubIcon from '../../components/Icon/GithubIcon';
import InstagramIcon from '../../components/Icon/InstagramIcon';
import LinkedInIcon from '../../components/Icon/LinkedInIcon';
import {ContactSection, ContactType, Social} from '../dataDef';

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

export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/AmosKhan'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/AmosKhan'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/afro_jacko/'},
];
