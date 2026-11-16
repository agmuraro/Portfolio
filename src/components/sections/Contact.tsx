import Section from '@/components/layout/Section';
import { contactLinks } from '@/data/contact';
import { contactIcons } from '@/lib/contactIcons';
import { useLanguage } from '@/i18n/useLanguage';
import { uiStrings } from '@/i18n/translations';

export default function Contact() {
  const { locale } = useLanguage();
  const t = uiStrings[locale];

  return (
    <Section
      id="contact"
      index="06"
      title={t.sections.contact.title}
      description={t.sections.contact.description}
    >
      <div className="flex flex-col gap-5">
        {contactLinks.map(({ kind, label, url }) => {
          const Icon = contactIcons[kind];
          return (
            <a
              key={kind}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-gray-300"
            >
              <Icon className="text-2xl text-accent" aria-hidden="true" />
              <span className="font-medium text-accentLight group-hover:underline">
                {label}
              </span>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
