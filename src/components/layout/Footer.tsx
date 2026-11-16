import { profile } from '@/data/profile';
import { contactLinks } from '@/data/contact';
import { contactIcons } from '@/lib/contactIcons';
import { useLanguage } from '@/i18n/useLanguage';
import { uiStrings } from '@/i18n/translations';

export default function Footer() {
  const { locale } = useLanguage();
  const t = uiStrings[locale];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10 text-center lg:px-10 md:flex-row md:justify-between md:text-left">
        <span className="text-sm text-gray-400">
          {profile[locale].name} <span className="text-accent">&copy;</span>{' '}
          {new Date().getFullYear()}
        </span>

        <div className="flex items-center gap-5">
          {contactLinks.map(({ kind, label, url }) => {
            const Icon = contactIcons[kind];
            return (
              <a
                key={kind}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 transition-colors hover:text-accent"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        <a
          href="#hero"
          className="text-sm text-gray-400 transition-colors hover:text-accent"
        >
          {t.footer.backToTop}
        </a>
      </div>
    </footer>
  );
}
