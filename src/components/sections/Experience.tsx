import Section from '@/components/layout/Section';
import IconLink from '@/components/ui/IconLink';
import { experience } from '@/data/experience';
import { useLanguage } from '@/i18n/useLanguage';
import { uiStrings } from '@/i18n/translations';

export default function Experience() {
  const { locale } = useLanguage();
  const t = uiStrings[locale];

  return (
    <Section
      id="experience"
      index="02"
      title={t.sections.experience.title}
      description={t.sections.experience.description}
    >
      <div className="flex flex-col gap-12">
        {experience[locale].map((item) => (
          <article
            key={item.title}
            className="border-l-2 border-accent/40 pl-6"
          >
            <IconLink
              href={item.url}
              className="text-xl font-semibold text-accentLight"
            >
              {item.title}
            </IconLink>
            <p className="mt-1 text-sm text-gray-400">{item.subtitle}</p>
            <p className="mb-4 text-sm text-gray-500">{item.period}</p>

            <ul className="list-outside list-disc space-y-1.5 pl-5 text-gray-300">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
