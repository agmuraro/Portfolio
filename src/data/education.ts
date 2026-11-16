import type { EducationItem, Language } from '@/types/content';
import type { Locale } from '@/i18n/types';

export const education: Record<Locale, EducationItem[]> = {
  en: [
    {
      title: 'Pontifícia Universidade Católica do Paraná - PUCPR',
      url: 'https://www.pucpr.br/',
      subtitle: "Bachelor's in Software Engineering",
      period: 'Feb 2022 - Nov 2025',
      description:
        "The Pontifical Catholic University of Paraná (PUCPR) is one of Brazil's leading institutions in technology and innovation, recognized for its strong academic programs and emphasis on ethical, human-centered education.",
    },
  ],
  pt: [
    {
      title: 'Pontifícia Universidade Católica do Paraná - PUCPR',
      url: 'https://www.pucpr.br/',
      subtitle: 'Bacharelado em Engenharia de Software',
      period: 'Fev 2022 - Nov 2025',
      description:
        'A Pontifícia Universidade Católica do Paraná (PUCPR) é uma das instituições líderes do Brasil em tecnologia e inovação, reconhecida por seus fortes programas acadêmicos e pela ênfase em uma educação ética e humanizada.',
    },
  ],
};

export const languages: Record<Locale, Language[]> = {
  en: [
    { name: 'Portuguese', level: 'Native' },
    { name: 'English', level: 'C1' },
    { name: 'Italian', level: 'A1' },
  ],
  pt: [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'C1' },
    { name: 'Italiano', level: 'A1' },
  ],
};
