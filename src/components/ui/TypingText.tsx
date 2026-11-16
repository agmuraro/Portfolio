import { useEffect, useState } from 'react';
import './TypingText.css';

interface TypingTextProps {
  text: string;
  speed?: number;
  initialDelay?: number;
  showCursor?: boolean;
  cursorChar?: string;
  className?: string;
}

export default function TypingText({
  text,
  speed = 75,
  initialDelay = 0,
  showCursor = true,
  cursorChar = '|',
  className = '',
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    let charIndex = 0;

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const typeNextChar = () => {
      if (charIndex >= text.length) return;
      charIndex += 1;
      setDisplayedText(text.slice(0, charIndex));
      timeouts.push(setTimeout(typeNextChar, speed));
    };

    timeouts.push(setTimeout(typeNextChar, initialDelay));

    return () => timeouts.forEach(clearTimeout);
  }, [text, speed, initialDelay]);

  return (
    <span className={`typing-text ${className}`}>
      {displayedText}
      {showCursor && (
        <span className="typing-text__cursor">{cursorChar}</span>
      )}
    </span>
  );
}
