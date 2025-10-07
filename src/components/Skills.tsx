import AnimatedContent from './reactBits/AnimatedContent';
import { useState } from 'react';

export default function TechStack({ cardClass = '' }: { cardClass?: string }) {
  const [openedSection, setOpenedSection] = useState<number | null>(1);

  const handleToggle = (sectionIndex: number) => {
    setOpenedSection((prev) => (prev === sectionIndex ? null : sectionIndex));
  };

  const skillGroups = [
    {
      title: 'Frontend',
      technologies: [
        { tech: 'HTML' },
        { tech: 'CSS', tools: ['Tailwind', 'Bootstrap'] },
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
      technologies: [{ tech: 'AWS' }, { tech: 'Docker' }],
    },
    {
      title: 'Architectures, Agile Methodologies & Useful Tools',
      technologies: [
        { tech: 'Microservices' },
        { tech: 'MVC' },
        { tech: 'Scrum' },
        { tech: 'Kanban' },
        { tech: 'Trello' },
        { tech: 'Git' },
        { tech: 'GitHub' },
        { tech: 'Bitbucket' },
        { tech: 'Gitlab' },
      ],
    },
  ];

  return (
    <div className='flex justify-start'>
      <AnimatedContent
        distance={50}
        direction='vertical'
        reverse={false}
        duration={0.8}
        ease='power3.out'
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0}
        delay={0}
      >
        <section
          id='skills'
          className={`w-full p-6 bg-surface rounded-xl border border-border shadow-lg ${cardClass}`}
        >
          <header className='mb-6'>
            <h2 className='text-3xl font-bold text-accent'>Skills</h2>
            <p className='mt-2 text-gray-300 leading-relaxed'>
              Over time, I&apos;ve cultivated a strong understanding across
              multiple layers of development — from frameworks and databases to
              cloud services and agile workflows. Here are the areas where I
              hold the highest proficiency:
            </p>
          </header>

          <div className='divide-y divide-border'>
            {skillGroups.map((group, idx) => {
              const expanded = openedSection === idx;

              return (
                <div
                  key={group.title}
                  className={`transition-all ${
                    expanded ? 'bg-surface/60' : ''
                  }`}
                >
                  <button
                    onClick={() => handleToggle(idx)}
                    className='w-full flex items-center justify-between gap-4 py-4 focus:outline-none group'
                  >
                    <div className='flex items-center gap-2'>
                      <span className='text-accent'>#</span>
                      <span className='text-xl text-gray-100'>
                        {group.title}
                      </span>
                    </div>

                    <span
                      className={`text-md transition-transform duration-300 ${
                        expanded ? 'rotate-0' : 'rotate-90'
                      }`}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 16 16'
                        fill='currentColor'
                        className='w-4 h-4 text-accentLight'
                      >
                        {expanded ? (
                          <path d='M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z' />
                        ) : (
                          <path d='M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z' />
                        )}
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
                      expanded
                        ? 'max-h-[480px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className='pb-5 pl-6 text-gray-300'>
                      <ul className='space-y-2'>
                        {group.technologies.map(({ tech, tools }) => (
                          <li key={tech} className='list-none'>
                            <span className='inline-flex items-center px-2 py-0.5 rounded-lg border border-border bg-surface text-sm'>
                              <span className='mr-2 text-accentLight'>/</span>
                              {tech}
                            </span>

                            {tools && tools.length > 0 && (
                              <ul className='mt-2  flex flex-wrap gap-2'>
                                {tools.map((tool) => (
                                  <li key={tool} className='list-none'>
                                    <span className='inline-flex items-center px-2 py-0.5 rounded-lg border border-border bg-surface text-xs text-gray-300'>
                                      <span className='mr-2 text-accentLight'>
                                        -
                                      </span>
                                      {tool}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </AnimatedContent>
    </div>
  );
}
