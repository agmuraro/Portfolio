import Section from '@/components/layout/Section';
import IconLink from '@/components/ui/IconLink';
import { education, languages } from '@/data/education';
import { useLanguage } from '@/i18n/useLanguage';
import { uiStrings } from '@/i18n/translations';

export default function Education() {
  const { locale } = useLanguage();
  const t = uiStrings[locale];

  return (
    <Section
      id="education"
      index="03"
      title={t.sections.education.title}
      description={t.sections.education.description}
    >
      <div className="flex flex-col gap-10">
        {education[locale].map((item) => (
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
            <p className="max-w-2xl leading-relaxed text-gray-300">
              {item.description}
            </p>
          </article>
        ))}

        <div className="border-l-2 border-accent/40 pl-6">
          <h3 className="text-xl font-semibold text-accentLight">
            {t.sections.education.languagesHeading}
          </h3>
          <p className="mt-1 text-gray-300">
            {languages[locale].map((language, index) => (
              <span key={language.name}>
                {index > 0 && ' | '}
                {language.name} -{' '}
                <span className="text-gray-400">{language.level}</span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </Section>
  );
}
