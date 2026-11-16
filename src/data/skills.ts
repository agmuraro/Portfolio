import type { SkillGroup } from '@/types/content';
import type { Locale } from '@/i18n/types';

export const skillGroups: Record<Locale, SkillGroup[]> = {
  en: [
    {
      title: 'Frontend',
      technologies: [
        { tech: 'HTML' },
        { tech: 'CSS', tools: ['Tailwind', 'Bootstrap', 'SCSS'] },
        { tech: 'JavaScript', tools: ['React', 'TypeScript'] },
      ],
    },
    {
      title: 'Backend',
      technologies: [
        { tech: 'PHP', tools: ['Laravel', 'Yii1'] },
        { tech: 'Python', tools: ['FastAPI'] },
        { tech: 'TypeScript', tools: ['Nest.js'] },
      ],
    },
    {
      title: 'Database & ORMs',
      technologies: [
        { tech: 'PostgreSQL' },
        { tech: 'MySQL' },
        { tech: 'MongoDB' },
        { tech: 'Prisma' },
        { tech: 'SQLAlchemy' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      technologies: [
        { tech: 'AWS' },
        { tech: 'Azure' },
        { tech: 'Docker' },
        { tech: 'WSL' },
      ],
    },
    {
      title: 'Architectures & Agile Methodologies',
      technologies: [
        { tech: 'Microservices' },
        { tech: 'MVC' },
        { tech: 'Scrum' },
        { tech: 'Kanban' },
      ],
    },
    {
      title: 'Useful Tools',
      technologies: [
        { tech: 'Trello' },
        { tech: 'Git' },
        { tech: 'GitHub' },
        { tech: 'Bitbucket' },
        { tech: 'Gitlab' },
      ],
    },
  ],
  pt: [
    {
      title: 'Frontend',
      technologies: [
        { tech: 'HTML' },
        { tech: 'CSS', tools: ['Tailwind', 'Bootstrap', 'SCSS'] },
        { tech: 'JavaScript', tools: ['React', 'TypeScript'] },
      ],
    },
    {
      title: 'Backend',
      technologies: [
        { tech: 'PHP', tools: ['Laravel', 'Yii1'] },
        { tech: 'Python', tools: ['FastAPI'] },
        { tech: 'TypeScript', tools: ['Nest.js'] },
      ],
    },
    {
      title: 'Banco de Dados & ORMs',
      technologies: [
        { tech: 'PostgreSQL' },
        { tech: 'MySQL' },
        { tech: 'MongoDB' },
        { tech: 'Prisma' },
        { tech: 'SQLAlchemy' },
      ],
    },
    {
      title: 'Nuvem & DevOps',
      technologies: [
        { tech: 'AWS' },
        { tech: 'Azure' },
        { tech: 'Docker' },
        { tech: 'WSL' },
      ],
    },
    {
      title: 'Arquiteturas & Metodologias Ágeis',
      technologies: [
        { tech: 'Microsserviços' },
        { tech: 'MVC' },
        { tech: 'Scrum' },
        { tech: 'Kanban' },
      ],
    },
    {
      title: 'Ferramentas Úteis',
      technologies: [
        { tech: 'Trello' },
        { tech: 'Git' },
        { tech: 'GitHub' },
        { tech: 'Bitbucket' },
        { tech: 'Gitlab' },
      ],
    },
  ],
};
