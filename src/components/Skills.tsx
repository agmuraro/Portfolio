import AnimatedContent from './reactBits/AnimatedContent';
import { useState } from 'react';

export default function Skills({ cardClass = '' }: { cardClass?: string }) {
  const [hoveredGroup, setHoveredGroup] = useState<number | null>(null);

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
            <h2 className='text-3xl font-bold mb-4 text-accent'>Skills</h2>
            <p className='text-gray-300 leading-relaxed'>
              Over time, I've cultivated a strong understanding across multiple
              layers of development — from frameworks and databases to cloud
              services and agile workflows. Here are the areas where I hold the
              highest proficiency:
            </p>
          </header>

          <div className='grid md:grid-cols-2 gap-8'>
            {skillGroups.map((group, idx) => {
              const isHovered = hoveredGroup === idx;

              return (
                <div
                  key={group.title}
                  className='space-y-4'
                  onMouseEnter={() => setHoveredGroup(idx)}
                  onMouseLeave={() => setHoveredGroup(null)}
                >
                  <h3
                    className={`text-2xl font-semibold transition-colors duration-300 ${
                      isHovered ? 'text-accent' : 'text-gray-200'
                    }`}
                  >
                    {group.title}
                  </h3>

                  <div className='space-y-3'>
                    {group.technologies.map(({ tech, tools }) => (
                      <div
                        key={tech}
                        className='flex flex-wrap items-center gap-2'
                      >
                        <span
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                            isHovered
                              ? 'bg-accent/20 text-accent border-accent/40'
                              : 'bg-surface/60 text-gray-200 border-border'
                          }`}
                        >
                          {tech}
                        </span>
                        {tools && tools.length > 0 && (
                          <>
                            <span
                              className={`mx-1 ${
                                isHovered ? 'text-accent' : 'text-gray-500'
                              }`}
                            >
                              →
                            </span>
                            {tools.map((tool) => (
                              <span
                                key={tool}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
                                  isHovered
                                    ? 'bg-accent/10 text-accent border-accent/30'
                                    : 'bg-surface/40 text-gray-400 border-border'
                                }`}
                              >
                                {tool}
                              </span>
                            ))}
                          </>
                        )}
                      </div>
                    ))}
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
