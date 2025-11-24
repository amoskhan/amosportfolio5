
import { FC, memo, PropsWithChildren, useMemo } from 'react';

import { Skill as SkillType, SkillGroup as SkillGroupType } from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{ skillGroup: SkillGroupType }>> = memo(({ skillGroup }) => {
  const { name, skills, Icon } = skillGroup;
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-3xl shadow-lg border border-neutral-200 relative overflow-hidden">
      {Icon && (
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <Icon className="w-48 h-48 text-neutral-900" />
        </div>
      )}
      <div className="relative z-10 flex flex-col items-center w-full">
        <span className="text-xl font-bold mb-6 text-neutral-800">{name}</span>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <Skill key={`${skill.name} -${index} `} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

const CircularProgress: FC<{ percentage: number; level: number; max: number }> = memo(({ percentage, level, max }) => {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg className="transform -rotate-90 w-16 h-16">
        <circle
          cx="32"
          cy="32"
          fill="transparent"
          r={radius}
          stroke="#e5e7eb" // neutral-200
          strokeWidth="4"
        />
        <circle
          cx="32"
          cy="32"
          fill="transparent"
          r={radius}
          stroke="#3b82f6" // blue-500
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          strokeWidth="4"
        />
      </svg>
      <span className="absolute text-xs font-bold text-neutral-700">{`${level} /${max}`}</span >
    </div >
  );
});

CircularProgress.displayName = 'CircularProgress';

export const Skill: FC<{ skill: SkillType }> = memo(({ skill }) => {
  const { name, level, max = 10 } = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

  return (
    <div className="flex flex-col items-center gap-y-2">
      <CircularProgress level={level} max={max} percentage={percentage} />
      <span className="text-sm font-medium text-neutral-700">{name}</span>
    </div>
  );
});

Skill.displayName = 'Skill';
