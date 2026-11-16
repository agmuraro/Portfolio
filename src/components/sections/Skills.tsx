import Section from '@/components/layout/Section';
import { skillGroups } from '@/data/skills';
import { useLanguage } from '@/i18n/useLanguage';
import { uiStrings } from '@/i18n/translations';

export default function Skills() {
  const { locale } = useLanguage();
  const t = uiStrings[locale];

  return (
    <Section
      id="skills"
      index="05"
      title={t.sections.skills.title}
      description={t.sections.skills.description}
    >
      <div className="grid gap-10 md:grid-cols-2">
        {skillGroups[locale].map((group) => (
          <div key={group.title}>
            <h3 className="text-xl font-semibold text-accentLight">
              {group.title}
            </h3>

            <div className="mt-4 space-y-3">
              {group.technologies.map(({ tech, tools }) => (
                <div key={tech} className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-accent/30 px-4 py-1.5 text-sm font-medium text-gray-200">
                    {tech}
                  </span>
                  {tools?.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-border px-3 py-1 text-xs text-gray-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
