import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealOnScrollProps {
  children: ReactNode;
  direction?: 'vertical' | 'horizontal';
  distance?: number;
  delay?: number;
}

export default function RevealOnScroll({
  children,
  direction = 'vertical',
  distance = 50,
  delay = 0,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const axis = direction === 'horizontal' ? 'x' : 'y';

    gsap.set(el, { [axis]: distance, opacity: 0 });

    const tween = gsap.to(el, {
      [axis]: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      delay,
      scrollTrigger: {
        trigger: el,
        start: 'top 100%',
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [direction, distance, delay]);

  return <div ref={ref}>{children}</div>;
}
