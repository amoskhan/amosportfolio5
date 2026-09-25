import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo, useCallback, useState} from 'react';

import {education, experience, resumeUrl, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import SectionHeading from '../../Layout/SectionHeading';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

// Roles shown before the "show earlier experience" toggle
const RECENT_EXPERIENCE_COUNT = 5;

// Vertical rail connecting the timeline markers
const timelineListClass =
  'relative flex flex-col gap-y-5 before:absolute before:bottom-8 before:left-[7px] before:top-8 before:w-px before:bg-neutral-200 dark:before:bg-neutral-800';

const Resume: FC = memo(() => {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const toggleExperience = useCallback(() => setShowAllExperience(prev => !prev), []);

  const visibleExperience = showAllExperience ? experience : experience.slice(0, RECENT_EXPERIENCE_COUNT);
  const hiddenCount = experience.length - RECENT_EXPERIENCE_COUNT;

  return (
    <Section className="bg-white dark:bg-neutral-950" sectionId={SectionId.Resume}>
      <div className="flex flex-col gap-y-16">
        <SectionHeading
          description={
            <>
              Teaching, research, data and communications: the experiences that shaped me.
              <a
                className="ml-2 inline-flex items-center gap-x-1 font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400"
                href={resumeUrl}
                rel="noopener noreferrer"
                target="_blank">
                Download resume
                <ArrowDownTrayIcon aria-hidden="true" className="h-4 w-4" />
              </a>
            </>
          }
          eyebrow="Resume"
          title="Experience & education"
        />

        <ResumeSection Icon={BriefcaseIcon} title="Work experience">
          <ol className={timelineListClass} id="work-experience-list">
            {visibleExperience.map(item => (
              <TimelineItem item={item} key={`${item.title}-${item.date}`} />
            ))}
          </ol>
          {hiddenCount > 0 && (
            <button
              aria-controls="work-experience-list"
              aria-expanded={showAllExperience}
              className="ml-8 inline-flex w-fit items-center gap-x-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:border-blue-500 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-blue-400 sm:ml-10"
              onClick={toggleExperience}
              type="button">
              {showAllExperience ? 'Show less' : `Show ${hiddenCount} earlier roles`}
              <ChevronDownIcon
                aria-hidden="true"
                className={classNames('h-4 w-4 transition-transform', {'rotate-180': showAllExperience})}
              />
            </button>
          )}
        </ResumeSection>

        <ResumeSection Icon={AcademicCapIcon} title="Education">
          <ol className={timelineListClass}>
            {education.map(item => (
              <TimelineItem item={item} key={`${item.title}-${item.date}`} />
            ))}
          </ol>
        </ResumeSection>

        <ResumeSection Icon={SparklesIcon} title="Skills">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {skills.map(skillGroup => (
              <SkillGroup key={skillGroup.name} skillGroup={skillGroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
