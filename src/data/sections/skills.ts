import {
    BeakerIcon,
    ChatBubbleBottomCenterTextIcon,
    ComputerDesktopIcon,
    DocumentTextIcon,
} from '@heroicons/react/24/outline';
import { SkillGroup } from '../dataDef';

export const skills: SkillGroup[] = [
    {
        name: 'Spoken languages',
        skills: [
            {
                name: 'English',
                level: 10,
            },
            {
                name: 'Chinese',
                level: 7,
            },
        ],
        Icon: ChatBubbleBottomCenterTextIcon,
    },
    {
        name: 'Microsoft Office',
        skills: [
            {
                name: 'Word',
                level: 10,
            },
            {
                name: 'Excel',
                level: 10,
            },
            {
                name: 'Powerpoint',
                level: 10,
            },
        ],
        Icon: DocumentTextIcon,
    },
    {
        name: 'Sports Science Research',
        skills: [
            {
                name: 'Data Analysis',
                level: 9,
            },
            {
                name: 'Report Writing',
                level: 8,
            },
            {
                name: 'Critical Thinking',
                level: 8,
            },
        ],
        Icon: BeakerIcon,
    },
    {
        name: 'Digital Technology',
        skills: [
            {
                name: 'R',
                level: 9,
            },
            {
                name: 'Excel VBA',
                level: 8,
            },
            {
                name: 'Tableau',
                level: 8,
            },
            {
                name: 'SQL',
                level: 7,
            },
        ],
        Icon: ComputerDesktopIcon,
    },
];
