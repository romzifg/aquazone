import { useInView } from '../hooks/useInView';
import { FISH, WA_LINK } from '../data/constants';

function AquariumSVG({ accent }) {
  const fishPositions = [
    [70,90],[92,84],[108,96],[82,107],[122,88],
    [148,112],[164,103],[178,116],[169,128],[152,120],
    [190,78],[204,72],[218,82],[210,93],[196,86],
  ];
  return (
    <svg viewBox="0 0 300 200" style={{ width: '100%', maxWidth: 260, filter: `drop-shadow(0 0 14px ${accent}55)` }}>
      {/* Plants */}
      <line x1="35" y1="190" x2="28" y2="140" stroke="#34d399" strokeWidth="2.5" opacity="0.5" />
      <line x1="35" y1="190" x2="40" y2="125" stroke="#34d399" strokeWidth="2.5" opacity="0.6" />
      <line x1="35" y1="190" x2="22" y2="160" stroke="#34d399" strokeWidth="2" opacity="0.4" />
      <line x1="265" y1="190" x2="258" y2="138" stroke="#34d399" strokeWidth="2.5" opacity="0.5" />
      <line x1="265" y1="190" x2="272" y2="122" stroke="#34d399" strokeWidth="2.5" opacity="0.6" />
      <line x1="265" y1="190" x2="279" y2="158" stroke="#34d399" strokeWidth="2" opacity="0.4" />
      {/* Substrate */}
      <ellipse cx="150" cy="192" rx="130" ry="8" fill="rgba(160,130,70,0.3)" />
      {/* Schooling fish */}
      {fishPositions.map(([x, y], i) => (
        <g key={i} transform={`translate(${x},${y})`}>
          <ellipse cx="8" cy="0" rx="7" ry="2.8" fill={accent} opacity="0.88" />
          <rect x="3" y="-1.2" width="8" height="1.8" rx="0.9" fill="rgba(255,255,255,0.38)" />
          <polygon points="-3,-2.5 2,0 -3,2.5" fill={accent} opacity="0.7" />
          <circle cx="13" cy="-0.8" r="1.3" fill="rgba(255,255,255,0.9)" />
          <circle cx="13.4" cy="-0.8" r="0.7" fill="#111" />
        </g>
      ))}
      {/* Bubbles */}
      {[[30,160],[30,130],[30,100],[270,150],[270,120],[270,90]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="none" stroke="rgba(34,211,238,0.18)" strokeWidth="1" />
      ))}
    </svg>
  );
}

function FishCard({ fish, index }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      background: 'rgba(10,22,36,0.65)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 16, overflow: 'hidden',
      backdropFilter: 'blur(12px)',
      transition: `opacity 0.6s ${index * 0.1}s, transform 0.6s ${index * 0.1}s, border-color 0.25s, box-shadow 0.25s`,
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(36px)',
      cursor: 'default',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = fish.accent + '44';
        e.currentTarget.style.boxShadow = `0 20px 44px ${fish.accent}18`;
        e.currentTarget.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Accent top bar */}
      <div style={{ height: 2, background: `linear-gradient(90deg, transparent 0%, ${fish.accent} 50%, transparent 100%)` }} />

      <div style={{ padding: '28px 24px' }}>
        {/* Tag */}
        <span style={{
          display: 'inline-block', fontSize: 10.5, fontWeight: 600,
          color: fish.accent, background: fish.accentDim,
          border: `1px solid ${fish.accent}33`,
          borderRadius: 5, padding: '3px 10px', marginBottom: 20,
          letterSpacing: '0.06em',
        }}>{fish.tag}</span>

        {/* Aquarium illustration */}
        <div style={{
          height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 22, position: 'relative',
        }}>
          <AquariumSVG accent={fish.accent} />
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(circle, ${fish.accent}0a 0%, transparent 70%)`,
            borderRadius: 10,
          }} />
        </div>

        {/* Name & latin */}
        <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ddeeff', marginBottom: 3, letterSpacing: '-0.3px' }}>
          {fish.name}
        </h3>
        <p style={{ fontSize: 12, color: fish.accent, fontStyle: 'italic', fontWeight: 300, marginBottom: 14, opacity: 0.8 }}>
          {fish.latin}
        </p>
        <p style={{ fontSize: 13.5, lineHeight: 1.72, color: 'rgba(180,205,230,0.58)', marginBottom: 24, fontWeight: 300 }}>
          {fish.desc}
        </p>

        {/* Price + CTA */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderTop: '1px solid rgba(255,255,255,0.055)', paddingTop: 18,
        }}>
          <div>
            <div style={{ fontSize: 10.5, color: 'rgba(190,215,240,0.35)', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>
              Harga / ekor
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, color: fish.accent }}>{fish.price}</div>
          </div>
          <a href={WA_LINK} target="_blank" rel="noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            background: fish.accentDim, border: `1px solid ${fish.accent}35`,
            color: fish.accent, padding: '8px 16px', borderRadius: 7,
            fontSize: 12, fontWeight: 600, textDecoration: 'none',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = fish.accent + '22'}
            onMouseLeave={e => e.currentTarget.style.background = fish.accentDim}
          >Tanya stok →</a>
        </div>
      </div>
    </div>
  );
}

export default function FishSection() {
  const [ref, inView] = useInView();
  return (
    <section id="ikan" style={{
      padding: 'clamp(80px,10vw,110px) 28px',
      background: 'linear-gradient(180deg, #07111c 0%, #081520 100%)',
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        {/* Header */}
        <div ref={ref} style={{
          textAlign: 'center', marginBottom: 60,
          opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(28px)',
          transition: 'all 0.65s',
        }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#22d3ee', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
            Koleksi kami
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 700, color: '#ddeeff', lineHeight: 1.15, marginBottom: 16, letterSpacing: '-0.8px' }}>
            Pilih yang cocok untuk<br />
            <span style={{ background: 'linear-gradient(120deg, #22d3ee, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              setup aquascape kamu
            </span>
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(180,205,230,0.5)', maxWidth: 440, margin: '0 auto', fontWeight: 300, lineHeight: 1.8 }}>
            Setiap jenis punya karakternya masing-masing. Kalau ragu, tanya langsung aja — kami senang bantu pilihkan.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: 22,
        }}>
          {FISH.map((f, i) => <FishCard key={f.name} fish={f} index={i} />)}
        </div>

        <p style={{ textAlign: 'center', marginTop: 40, fontSize: 13, color: 'rgba(180,205,230,0.3)', fontWeight: 300 }}>
          Harga bisa berubah tergantung stok. Hubungi kami untuk pembelian kuantitas besar.
        </p>
      </div>
    </section>
  );
}
