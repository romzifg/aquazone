import { useMemo } from 'react';

const FISH_COLORS = ['#22d3ee', '#34d399', '#7dd3fc', '#86efac'];

export default function FishParticles() {
  const particles = useMemo(() =>
    Array.from({ length: 14 }, (_, i) => ({
      id: i,
      w: Math.random() * 20 + 12,
      h: Math.random() * 5 + 4,
      top: Math.random() * 90 + 2,
      delay: Math.random() * 18,
      duration: Math.random() * 12 + 18,
      opacity: Math.random() * 0.22 + 0.06,
      color: FISH_COLORS[i % FISH_COLORS.length],
    })), []
  );

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          top: `${p.top}%`,
          left: '-60px',
          width: p.w,
          height: p.h,
          opacity: p.opacity,
          animation: `swimRight ${p.duration}s ${p.delay}s infinite linear`,
        }}>
          <svg viewBox="0 0 28 10" width={p.w} height={p.h}>
            <ellipse cx="17" cy="5" rx="11" ry="4" fill={p.color} />
            <polygon points="1,1 8,5 1,9" fill={p.color} />
          </svg>
        </div>
      ))}
    </div>
  );
}
