import Section from '@/components/layout/Section';
import { profile } from '@/data/profile';
import { highlightText } from '@/lib/highlightText';
import { useLanguage } from '@/i18n/useLanguage';
import { uiStrings } from '@/i18n/translations';

export default function About() {
  const { locale } = useLanguage();
  const t = uiStrings[locale];

  return (
    <Section id="about" index="01" title={t.sections.about.title}>
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-gray-300">
        {profile[locale].bioParagraphs.map((paragraph, index) => (
          <p key={index}>{highlightText(paragraph)}</p>
        ))}
      </div>
    </Section>
  );
}
