export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bioParagraphs: string[];
}

export interface TimelineEntry {
  title: string;
  url: string;
  subtitle: string;
  period: string;
}

export interface ExperienceItem extends TimelineEntry {
  highlights: string[];
}

export interface EducationItem extends TimelineEntry {
  description: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Project {
  name: string;
  description: string;
  link: { label: string; url: string };
}

export interface SkillGroup {
  title: string;
  technologies: { tech: string; tools?: string[] }[];
}

export type ContactKind = 'email' | 'linkedin' | 'github';

export interface ContactLink {
  kind: ContactKind;
  label: string;
  url: string;
}
