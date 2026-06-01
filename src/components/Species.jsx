import { useInView } from '../hooks/useInView';
import { SPECIES, WA_LINK } from '../data/content';

function SpeciesFishSVG({ species }) {
  const isRummy = species.id === 'rummynose';
  const isCardinal = species.id === 'cardinal';

  const school = [
    [20, 30], [60, 18], [100, 26], [140, 15], [175, 24],
    [10, 58], [50, 48], [90, 54], [130, 44], [168, 52],
    [30, 84], [70, 74], [110, 80], [150, 70], [182, 78],
  ];

  return (
    <svg viewBox="0 0 320 130" style={{
      width: '100%', maxWidth: 300,
      filter: `drop-shadow(0 0 10px ${species.accentColor}44)`,
    }}>
      {/* Plants background */}
      {[15, 30, 280, 295].map((x, i) => (
        <g key={i} opacity="0.4">
          <line x1={x} y1="130" x2={x - 4} y2={50 - i * 8} stroke="#16a34a" strokeWidth="2.5" />
          <line x1={x} y1="130" x2={x + 5} y2={38 - i * 6} stroke="#15803d" strokeWidth="3" />
        </g>
      ))}
      {/* Substrate */}
      <ellipse cx="160" cy="127" rx="148" ry="7" fill="rgba(146,110,50,0.22)" />
      {/* Schooling fish */}
      {school.map(([x, y], i) => {
        const sc = 0.88 + (i % 3) * 0.07;
        return (
          <g key={i} transform={`translate(${x},${y}) scale(${sc})`}>
            {/* body */}
            <ellipse cx="10" cy="0" rx="12" ry="4.5"
              fill={isRummy ? '#c0c8d8' : '#dbeafe'} opacity="0.9" />
            {/* blue or silver stripe */}
            {!isCardinal && !isRummy && (
              <rect x="2" y="-1.8" width="14" height="2.5" rx="1.2"
                fill="#3b82f6" opacity="0.88" />
            )}
            {/* red belly / full red */}
            <rect x="2" y={isCardinal ? "-2" : "0.8"} width="14"
              height={isCardinal ? "4" : "2.2"} rx="1.2"
              fill="#ef4444" opacity="0.82" />
            {/* rummy nose red head */}
            {isRummy && (
              <ellipse cx="20" cy="0" rx="4" ry="3.5" fill="#ef4444" opacity="0.88" />
            )}
            {/* tail */}
            <polygon points="-5,-4 2,0 -5,4"
              fill={isRummy ? '#9ca3af' : '#bfdbfe'} opacity="0.65" />
            {/* eye */}
            <circle cx="19" cy="-1.2" r="1.8" fill="rgba(255,255,255,0.95)" />
            <circle cx="19.4" cy="-1.2" r="0.9" fill="#0f172a" />
            {/* dorsal fin */}
            <path d="M 6 -4.5 Q 12 -8.5 18 -4.5 Q 12 -2.5 6 -4.5 Z"
              fill={isCardinal ? '#fca5a5' : '#93c5fd'} opacity="0.38" />
          </g>
        );
      })}
      {/* Bubbles */}
      {[[12, 90], [12, 68], [12, 46], [308, 85], [308, 62]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5"
          fill="none" stroke="rgba(147,197,253,0.18)" strokeWidth="1" />
      ))}
    </svg>
  );
}

function SpeciesCard({ species, index }) {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} style={{
      background: 'rgba(8,18,32,0.7)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 16, overflow: 'hidden',
      backdropFilter: 'blur(12px)',
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(36px)',
      transition: `opacity 0.6s ${index * 0.12}s, transform 0.6s ${index * 0.12}s, border-color 0.25s, box-shadow 0.25s`,
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = species.borderColor;
        e.currentTarget.style.boxShadow = `0 20px 48px ${species.accentColor}18`;
        e.currentTarget.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${species.accentColor}, transparent)` }} />

      {/* Number badge */}
      <div style={{ padding: '22px 22px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: species.tagColor,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '0.04em',
        }}>{species.number}</div>
        <span style={{
          fontSize: 10.5, fontWeight: 600, color: species.accentColor,
          background: species.dimColor, border: `1px solid ${species.borderColor}`,
          borderRadius: 5, padding: '3px 10px', letterSpacing: '0.06em',
        }}>TETRA</span>
      </div>

      {/* Fish illustration */}
      <div style={{
        padding: '18px 22px 10px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        minHeight: 120, position: 'relative',
      }}>
        <img src={species.img} alt={species.name} style={{ width: '100%', maxWidth: 260, height: 'auto', filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.12))' }} />
        {/* <SpeciesFishSVG species={species}/> */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(circle, ${species.accentColor}0a 0%, transparent 70%)`,
        }} />
      </div>

      {/* Info */}
      <div style={{ padding: '0 22px 24px' }}>
        <h3 style={{
          fontSize: 21, fontWeight: 700, color: '#e8f4ff',
          marginBottom: 3, letterSpacing: '-0.3px',
        }}>{species.name}</h3>
        <p style={{
          fontSize: 12, color: species.accentColor, fontStyle: 'italic',
          fontWeight: 300, marginBottom: 18, opacity: 0.8,
        }}>{species.latin}</p>

        {/* Highlights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 22 }}>
          {species.highlights.map(h => (
            <div key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
              <div style={{
                width: 16, height: 16, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                background: species.dimColor,
                border: `1px solid ${species.borderColor}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: species.accentColor }} />
              </div>
              <span style={{ fontSize: 13, color: 'rgba(190,215,245,0.65)', lineHeight: 1.6, fontWeight: 300 }}>{h}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.055)', marginBottom: 18 }} />

        {/* CTA */}
        <a href={WA_LINK} target="_blank" rel="noreferrer" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          border: `1px solid ${species.borderColor}`,
          color: species.accentColor, padding: '10px 16px', borderRadius: 8,
          fontSize: 12.5, fontWeight: 600, textDecoration: 'none',
          background: species.dimColor,
          transition: 'background 0.2s',
          letterSpacing: '0.06em', textTransform: 'uppercase',
        }}
          onMouseEnter={e => e.currentTarget.style.background = species.accentColor + '22'}
          onMouseLeave={e => e.currentTarget.style.background = species.dimColor}
        >
          <span>Inquire About This Species</span>
          <span>›</span>
        </a>
      </div>
    </div>
  );
}

export default function Species() {
  const [ref, inView] = useInView();

  return (
    <section id="species" style={{
      padding: 'clamp(80px,10vw,110px) 28px',
      background: 'linear-gradient(180deg, #050d16 0%, #071326 100%)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.2), transparent)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div ref={ref} style={{
          textAlign: 'center', marginBottom: 60,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(28px)',
          transition: 'all 0.65s',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 40, background: 'rgba(59,130,246,0.4)' }} />
            <p style={{ fontSize: 11, fontWeight: 600, color: '#60a5fa', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Our Featured Species
            </p>
            <div style={{ height: 1, width: 40, background: 'rgba(59,130,246,0.4)' }} />
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 700,
            color: '#e8f4ff', lineHeight: 1.12, marginBottom: 16,
            letterSpacing: '-0.8px',
          }}>
            Three Premium Tetra Species
          </h2>
          <p style={{
            fontSize: 15.5, color: 'rgba(180,210,245,0.5)',
            maxWidth: 520, margin: '0 auto', fontWeight: 300, lineHeight: 1.8,
          }}>
            We focus exclusively on three tetra species — not because we can't do more,
            but because true specialization is what delivers consistent quality.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {SPECIES.map((s, i) => <SpeciesCard key={s.id} species={s} index={i} />)}
        </div>

        {/* Bottom badge row */}
        <div style={{
          marginTop: 52, padding: '22px 28px',
          background: 'rgba(8,18,32,0.6)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 14, backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 20 }}>🤝</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#60a5fa' }}>Our Commitment</div>
              <div style={{ fontSize: 12.5, color: 'rgba(180,210,245,0.48)', fontWeight: 300 }}>
                Healthy fish. Reliable supply. Long-term partnerships.
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              { color: '#60a5fa', label: 'Neon Tetra' },
              { color: '#f87171', label: 'Cardinal Tetra' },
              { color: '#4ade80', label: 'Rummynose Tetra' },
            ].map(({ color, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: 'rgba(200,225,250,0.55)', fontWeight: 400 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
