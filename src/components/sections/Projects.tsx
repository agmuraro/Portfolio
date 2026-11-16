import Section from '@/components/layout/Section';
import IconLink from '@/components/ui/IconLink';
import { projects } from '@/data/projects';
import { highlightText } from '@/lib/highlightText';
import { useLanguage } from '@/i18n/useLanguage';
import { uiStrings } from '@/i18n/translations';

export default function Projects() {
  const { locale } = useLanguage();
  const t = uiStrings[locale];

  return (
    <Section
      id="projects"
      index="04"
      title={t.sections.projects.title}
      description={t.sections.projects.description}
    >
      <div className="flex flex-col gap-10">
        {projects[locale].map((project) => (
          <article key={project.name}>
            <h3 className="text-xl font-semibold text-accentLight">
              {project.name}
            </h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-gray-300">
              {highlightText(project.description)}
            </p>
            <IconLink
              href={project.link.url}
              className="mt-3 font-medium text-accent transition-colors hover:text-accentLight"
            >
              {project.link.label}
            </IconLink>
          </article>
        ))}
      </div>
    </Section>
  );
}
