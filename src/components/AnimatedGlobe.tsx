import React, { useEffect, useRef } from 'react';

// Minimal animated SVG globe (latitude/longitude lines rotate subtly)
const AnimatedGlobe: React.FC<{ size?: number; className?: string }>= ({ size = 380, className }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let id: number;
    let angle = 0;
    const step = () => {
      angle = (angle + 0.2) % 360;
      if (ref.current) {
        const g = ref.current.querySelector('#rot');
        if (g) (g as SVGGElement).setAttribute('transform', `rotate(${angle} ${size/2} ${size/2})`);
      }
      id = requestAnimationFrame(step);
    };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [size]);

  const s = size;
  const c = s / 2;
  const r = c - 6;

  return (
    <svg ref={ref} width={s} height={s} viewBox={`0 0 ${s} ${s}`} className={className} aria-hidden>
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#28a745"/>
          <stop offset="100%" stopColor="#2ecc71"/>
        </linearGradient>
      </defs>
      <circle cx={c} cy={c} r={r} fill="url(#g)" />
      <g id="rot" stroke="rgba(255,255,255,0.6)" strokeWidth="1" fill="none">
        {/* longitude lines */}
        {[...Array(8)].map((_, i) => {
          const a = (i * Math.PI) / 4;
          const x = Math.cos(a) * r;
          const y = Math.sin(a) * r;
          return <path key={`lon-${i}`} d={`M ${c - x} ${c - y} L ${c + x} ${c + y}`} />;
        })}
        {/* latitude lines */}
        {[...Array(5)].map((_, i) => {
          const rr = r * Math.cos(((i + 1) * Math.PI) / 10);
          return <circle key={`lat-${i}`} cx={c} cy={c} r={rr} />;
        })}
      </g>
    </svg>
  );
};

export default AnimatedGlobe;
