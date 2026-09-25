import {FC, memo} from 'react';

import {SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<{skillGroup: SkillGroupType}> = memo(({skillGroup}) => {
  const {name, skills, Icon} = skillGroup;
  return (
    <div className="flex flex-col gap-y-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 sm:p-6">
      <div className="flex items-center gap-x-3">
        {Icon && <Icon aria-hidden="true" className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
        <h4 className="font-display text-base font-bold text-neutral-900 dark:text-white">{name}</h4>
      </div>
      <ul className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <li
            className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
            key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';
