import type { ReactNode } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

interface IconLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function IconLink({
  href,
  children,
  className = '',
}: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 ${className}`}
    >
      {children}
      <MdOutlineArrowOutward className="shrink-0" aria-hidden="true" />
    </a>
  );
}
