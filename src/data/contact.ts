import type { ContactLink } from '@/types/content';

export const email = 'arthurmuraro18@gmail.com';

export const contactLinks: ContactLink[] = [
  {
    kind: 'email',
    label: 'arthurmuraro18@gmail.com',
    url: `mailto:${email}`,
  },
  {
    kind: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/arthurmuraro/',
  },
  {
    kind: 'github',
    label: 'GitHub',
    url: 'https://github.com/agmuraro',
  },
];
