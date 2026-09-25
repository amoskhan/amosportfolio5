import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';
import SectionHeading from '../../Layout/SectionHeading';
import ContactForm from './ContactForm';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'GitHub'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <Section className="bg-white dark:bg-neutral-950" sectionId={SectionId.Contact}>
      <div className="flex flex-col gap-y-12">
        <SectionHeading description={description} eyebrow="Contact" title={headerText ?? 'Get in touch.'} />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <ul className="grid grid-cols-1 content-start gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {items.map(({type, text, href}) => {
              const {Icon, srLabel} = ContactValueMap[type];
              const isExternal = !!href && href.startsWith('http');
              return (
                <li key={srLabel}>
                  <a
                    className="group flex items-center gap-x-4 rounded-xl border border-neutral-200 bg-neutral-50 p-3.5 transition-colors hover:border-blue-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-neutral-800 dark:bg-neutral-900"
                    href={href}
                    {...(isExternal ? {target: '_blank', rel: 'noopener noreferrer'} : {})}>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                        {srLabel}
                      </span>
                      <span className="truncate text-sm font-semibold text-neutral-900 group-hover:text-blue-600 dark:text-neutral-100 dark:group-hover:text-blue-400">
                        {text}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 sm:p-8 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
