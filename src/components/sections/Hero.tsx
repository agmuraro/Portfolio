import { MdKeyboardArrowDown } from 'react-icons/md';
import TypingText from '@/components/ui/TypingText';
import { profile } from '@/data/profile';
import { contactLinks } from '@/data/contact';
import { contactIcons } from '@/lib/contactIcons';
import { useLanguage } from '@/i18n/useLanguage';
import { uiStrings } from '@/i18n/translations';

const NAME_TYPING_SPEED = 70;

export default function Hero() {
  const { locale } = useLanguage();
  const t = uiStrings[locale];
  const p = profile[locale];

  return (
    <header
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <p className="font-mono text-sm text-accent">{t.hero.greeting}</p>

      <h1 className="mt-4 text-5xl font-extrabold text-gray-100 md:text-7xl">
        <TypingText key={`${locale}-name`} text={p.name} speed={NAME_TYPING_SPEED} />
      </h1>

      <h2 className="mt-4 text-xl text-accentLight md:text-2xl">
        <TypingText
          key={`${locale}-role`}
          text={p.role}
          showCursor={false}
          initialDelay={p.name.length * NAME_TYPING_SPEED + 400}
        />
      </h2>

      <p className="mt-6 max-w-xl text-gray-400">{p.tagline}</p>

      <div className="mt-10 flex items-center gap-6">
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
              <Icon size={22} />
            </a>
          );
        })}
      </div>

      <a
        href="#about"
        aria-label={t.hero.scrollAria}
        className="absolute bottom-10 text-gray-500 transition-colors hover:text-accent"
      >
        <MdKeyboardArrowDown className="animate-bounce" size={28} />
      </a>
    </header>
  );
}
