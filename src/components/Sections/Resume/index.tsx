import { FC, memo, useCallback, useRef, useState } from 'react';

import { education, experience, SectionId, skills } from '../../../data/data';
import useDetectOutsideClick from '../../../hooks/useDetectOutsideClick';
import Section from '../../Layout/Section';
import ScrollReveal from '../../ScrollReveal';
import ResumeSection from './ResumeSection';
import { SkillGroup } from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  const [focusedItemId, setFocusedItemId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useDetectOutsideClick(sectionRef, () => setFocusedItemId(null));

  const handleItemClick = useCallback((id: string) => {
    setFocusedItemId(prev => (prev === id ? null : id));
  }, []);

  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300" ref={sectionRef}>
        <ResumeSection title="Education">
          {education.map((item, index) => {
            const id = `education-${index}`;
            const isFocused = focusedItemId === id;
            const isBlurred = focusedItemId !== null && !isFocused;
            return (
              <TimelineItem
                isBlurred={isBlurred}
                isFocused={isFocused}
                item={item}
                key={id}
                last={index === education.length - 1}
                onClick={() => handleItemClick(id)}
              />
            );
          })}
        </ResumeSection>
        <ResumeSection title="Work">
          {experience.map((item, index) => {
            const id = `work-${index}`;
            const isFocused = focusedItemId === id;
            const isBlurred = focusedItemId !== null && !isFocused;
            return (
              <TimelineItem
                isBlurred={isBlurred}
                isFocused={isFocused}
                item={item}
                key={id}
                last={index === experience.length - 1}
                onClick={() => handleItemClick(id)}
              />
            );
          })}
        </ResumeSection>
        <ResumeSection title="Skills">
          {/* <p className="pb-8">Here you can show a snapshot of your skills to show off to employers</p> */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <ScrollReveal delay={index * 0.1} key={`${skillgroup.name}-${index}`} width="100%">
                <SkillGroup skillGroup={skillgroup} />
              </ScrollReveal>
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
