import {FC, memo, PropsWithChildren, useMemo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{ skillGroup: SkillGroupType }>> = memo(({skillGroup}) => {
  const {name, skills, Icon} = skillGroup;
  return (
    <div className="flex flex-col gap-y-4 p-6 bg-white rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-x-3 mb-2">
        {Icon && <Icon className="h-6 w-6 text-blue-500" />}
        <h3 className="text-xl font-bold text-neutral-800">{name}</h3>
      </div>
      <div className="flex flex-col gap-y-4">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

const LinearProgressBar: FC<{ percentage: number; level: number; max: number }> = memo(({percentage}) => {
  return (
    <div className="w-full h-2.5 bg-neutral-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-blue-400 rounded-full transition-all duration-1000 ease-out"
        style={{width: `${percentage}%`}}
      />
    </div>
  );
});

LinearProgressBar.displayName = 'LinearProgressBar';

export const Skill: FC<{ skill: SkillType }> = memo(({skill}) => {
  const {name, level, max = 10} = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

  return (
    <div className="flex flex-col w-full gap-y-1">
      <div className="flex justify-between items-end mb-1">
        <span className="text-sm font-semibold text-neutral-700">{name}</span>
        <span className="text-xs font-medium text-neutral-500">{level}/{max}</span>
      </div>
      <LinearProgressBar level={level} max={max} percentage={percentage} />
    </div>
  );
});

Skill.displayName = 'Skill';
