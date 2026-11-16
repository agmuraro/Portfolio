import { Fragment, type ReactNode } from 'react';

/**
 * Renders a string where `**term**` segments are wrapped in an accent span.
 * Keeps content data free of JSX while preserving inline emphasis.
 */
export function highlightText(text: string): ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g);

  return parts.map((part, index) => {
    const isHighlighted = index % 2 === 1;
    return (
      <Fragment key={index}>
        {isHighlighted ? (
          <span className="font-semibold text-accentLight">{part}</span>
        ) : (
          part
        )}
      </Fragment>
    );
  });
}
