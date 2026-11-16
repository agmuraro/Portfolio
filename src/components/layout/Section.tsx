import type { ReactNode } from 'react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

interface SectionProps {
  id: string;
  index: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function Section({
  id,
  index,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-border py-20 md:py-28"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <span className="font-mono text-sm text-accent">{index}</span>
          <h2 className="mt-2 text-4xl font-bold text-gray-100 md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
              {description}
            </p>
          )}
          {children && <div className="mt-12">{children}</div>}
        </div>
      </RevealOnScroll>
    </section>
  );
}
