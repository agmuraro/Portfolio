import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import type { ContactKind } from '@/types/content';
import type { IconType } from 'react-icons';

export const contactIcons: Record<ContactKind, IconType> = {
  email: MdOutlineEmail,
  linkedin: FaLinkedin,
  github: FaGithub,
};
