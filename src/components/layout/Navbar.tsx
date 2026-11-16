import { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { useActiveSection } from '@/hooks/useActiveSection';
import { NAV_SECTION_IDS } from '@/lib/navigation';
import { profile } from '@/data/profile';
import { useLanguage } from '@/i18n/useLanguage';
import { uiStrings } from '@/i18n/translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, toggleLocale } = useLanguage();
  const t = uiStrings[locale];
  const activeId = useActiveSection(NAV_SECTION_IDS);

  const languageButton = (className: string) => (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.navbar.languageToggleAria}
      className={className}
    >
      {locale === 'en' ? 'PT' : 'EN'}
    </button>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-midnight/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#hero"
          className="font-mono text-sm font-semibold text-gray-100 transition-colors hover:text-accent"
        >
          {profile[locale].name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {NAV_SECTION_IDS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`text-sm transition-colors ${
                    activeId === id
                      ? 'text-accent'
                      : 'text-gray-400 hover:text-gray-100'
                  }`}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>

          {languageButton(
            'rounded border border-border px-2 py-1 text-xs font-mono text-gray-300 transition-colors hover:border-accent hover:text-accent'
          )}
        </div>

        <div className="flex items-center gap-3 md:hidden">
          {languageButton(
            'rounded border border-border px-2 py-1 text-xs font-mono text-gray-300 transition-colors hover:border-accent hover:text-accent'
          )}

          <button
            type="button"
            className="text-gray-100"
            aria-label={isOpen ? t.navbar.closeMenu : t.navbar.openMenu}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-1 border-t border-border bg-midnight px-6 py-4 md:hidden">
          {NAV_SECTION_IDS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-base ${
                  activeId === id ? 'text-accent' : 'text-gray-300'
                }`}
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
