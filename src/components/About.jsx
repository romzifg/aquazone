import { useInView } from '../hooks/useInView';
import { WA_LINK } from '../data/constants';

function TankIllustration() {
  const school = [
    [75,95],[97,88],[112,100],[88,110],[124,92],
    [150,115],[166,106],[182,118],[172,130],[155,122],
    [195,80],[208,74],[222,85],[214,96],[200,88],
    [60,140],[80,135],[100,142],[75,152],
  ];
  return (
    <div style={{
      aspectRatio: '3/4', borderRadius: 18, overflow: 'hidden',
      background: 'linear-gradient(160deg, #061018 0%, #0a1e30 60%, #0d2640 100%)',
      border: '1px solid rgba(34,211,238,0.1)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
    }}>
      {/* Ambient glow inside tank */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 40%, rgba(34,211,238,0.06) 0%, transparent 65%)',
      }} />

      <svg viewBox="0 0 310 400" style={{ width: '88%', position: 'relative', zIndex: 1 }}>
        {/* Back plants */}
        {[30, 50, 270, 285].map((x, i) => (
          <g key={i}>
            <line x1={x} y1="390" x2={x - 5} y2={280 - i * 15} stroke="#34d399" strokeWidth="2" opacity="0.35" />
            <line x1={x} y1="390" x2={x + 6} y2={255 - i * 10} stroke="#34d399" strokeWidth="2.5" opacity="0.45" />
          </g>
        ))}
        {/* Mid plants */}
        {[155, 170].map((x, i) => (
          <g key={i}>
            <line x1={x} y1="395" x2={x - 4} y2={310 - i * 20} stroke="#10b981" strokeWidth="2" opacity="0.4" />
            <line x1={x} y1="395" x2={x + 5} y2={295 - i * 15} stroke="#10b981" strokeWidth="2" opacity="0.5" />
          </g>
        ))}
        {/* Substrate */}
        <ellipse cx="155" cy="393" rx="145" ry="10" fill="rgba(160,130,60,0.28)" />
        {/* Schooling fish */}
        {school.map(([x, y], i) => (
          <g key={i} transform={`translate(${x},${y})`}>
            <ellipse cx="8" cy="0" rx="8" ry="3" fill="#22d3ee" opacity="0.85" />
            <rect x="3" y="-1.4" width="9" height="2" rx="1" fill="rgba(255,255,255,0.35)" />
            <polygon points="-3,-2.5 2,0 -3,2.5" fill="#22d3ee" opacity="0.65" />
            <circle cx="14" cy="-0.8" r="1.4" fill="rgba(255,255,255,0.92)" />
            <circle cx="14.5" cy="-0.8" r="0.7" fill="#0a1e30" />
          </g>
        ))}
        {/* Bubbles */}
        {[[25,320],[25,285],[25,248],[285,330],[285,295],[285,260]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="none" stroke="rgba(34,211,238,0.16)" strokeWidth="1" />
        ))}
        {/* Water surface shimmer */}
        <path d="M 0 40 Q 78 28 155 38 Q 232 48 310 36" stroke="rgba(34,211,238,0.14)" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
}

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="tentang" style={{
      padding: 'clamp(80px,10vw,110px) 28px',
      background: 'linear-gradient(180deg, #07111c 0%, #080f1a 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Top divider */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(52,211,153,0.13), transparent)',
      }} />

      <div ref={ref} style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center',
        }} className="about-grid">

          {/* Left: Tank */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-32px)',
            transition: 'all 0.8s 0.1s',
            position: 'relative',
          }}>
            <TankIllustration />
            {/* Badge */}
            <div style={{
              position: 'absolute', bottom: -14, right: -14,
              background: 'rgba(8,20,34,0.95)',
              border: '1px solid rgba(34,211,238,0.18)',
              borderRadius: 12, padding: '14px 18px',
              backdropFilter: 'blur(12px)',
            }}>
              <div style={{ fontSize: 26, fontWeight: 700, color: '#22d3ee', lineHeight: 1, letterSpacing: '-0.5px' }}>7</div>
              <div style={{ fontSize: 10.5, color: 'rgba(190,215,240,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, marginTop: 2 }}>
                Tahun<br />Pengalaman
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(32px)',
            transition: 'all 0.8s 0.2s',
          }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: '#22d3ee', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16 }}>
              Cerita kami
            </p>
            <h2 style={{
              fontSize: 'clamp(26px, 3.8vw, 42px)', fontWeight: 700,
              color: '#ddeeff', lineHeight: 1.18, marginBottom: 20,
              letterSpacing: '-0.6px',
            }}>
              Tujuh tahun<br />
              <span style={{ color: '#22d3ee' }}>bukan waktu yang sebentar.</span>
            </h2>
            <div style={{ width: 50, height: 2, background: 'linear-gradient(90deg, #22d3ee, transparent)', marginBottom: 28 }} />

            <p style={{ fontSize: 15, lineHeight: 1.88, color: 'rgba(185,210,235,0.6)', marginBottom: 18, fontWeight: 300 }}>
              Awalnya sederhana — kami kenal langsung sama para peternak ikan hias lokal yang sudah puluhan tahun 
              menekuni breeding Neon Tetra. Hasilnya luar biasa, tapi mereka kesulitan di sisi pemasaran. 
              Kami masuk dari sana.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.88, color: 'rgba(185,210,235,0.6)', marginBottom: 32, fontWeight: 300 }}>
              Sekarang kami jadi jembatan antara peternak dan pasar yang lebih luas — toko ikan, aquascaper, 
              sampai pembeli dari luar negeri. Semua bisa dapat ikan berkualitas, dan peternak lokalnya bisa 
              hidup lebih layak.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 36 }}>
              {[
                'Stok langsung dari kolam peternak',
                'Harga lebih bersaing, tanpa banyak perantara',
                'Ikut mensejahterakan peternak ikan hias lokal',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  <div style={{
                    width: 19, height: 19, borderRadius: '50%', flexShrink: 0,
                    background: 'rgba(34,211,238,0.08)',
                    border: '1px solid rgba(34,211,238,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22d3ee' }} />
                  </div>
                  <span style={{ fontSize: 14, color: 'rgba(190,215,240,0.65)', fontWeight: 300 }}>{item}</span>
                </div>
              ))}
            </div>

            <a href={WA_LINK} target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              background: 'linear-gradient(135deg, #22d3ee, #34d399)',
              color: '#04111e', padding: '13px 28px', borderRadius: 9,
              fontWeight: 700, fontSize: 14, textDecoration: 'none',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}
            >
              Ngobrol dengan kami →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
