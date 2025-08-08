import React, { useEffect, useRef } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

const Reveal: React.FC<Props> = ({ children, className = '', delayMs = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('reveal');

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer = setTimeout(() => entry.target.classList.add('show'), delayMs);
            // once shown, unobserve
            obs.unobserve(entry.target as Element);
            return () => clearTimeout(timer as unknown as number);
          }
        });
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delayMs]);

  return <div ref={ref} className={className}>{children}</div>;
};

export default Reveal;
