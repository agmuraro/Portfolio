export const NAV_SECTION_IDS = [
  'about',
  'experience',
  'education',
  'projects',
  'skills',
  'contact',
] as const;

export type SectionId = (typeof NAV_SECTION_IDS)[number];
