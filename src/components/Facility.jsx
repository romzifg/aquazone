import { useInView } from '../hooks/useInView';
import { FACILITY, STATS } from '../data/content';

export default function Facility() {
  const [ref, inView] = useInView();
  const [statsRef, statsInView] = useInView();

  return (
    <section id="facility" style={{
      padding: 'clamp(80px,10vw,110px) 28px',
      background: 'linear-gradient(180deg, #f8fcff 0%, #eaf7ff 100%)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.22), transparent)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={ref} style={{
          textAlign: 'center', marginBottom: 60,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(28px)',
          transition: 'all 0.65s',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 40, background: 'rgba(245,158,11,0.45)' }} />
            <p style={{ fontSize: 11, fontWeight: 700, color: '#f59e0b', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Our Facility
            </p>
            <div style={{ height: 1, width: 40, background: 'rgba(245,158,11,0.45)' }} />
          </div>

          <h2 style={{
            fontSize: 'clamp(28px,4.5vw,48px)', fontWeight: 800,
            color: '#0f2537', lineHeight: 1.12, letterSpacing: '-0.8px', marginBottom: 16,
          }}>
            Built for Quality & Scale
          </h2>

          <p style={{
            fontSize: 15.5, color: 'rgba(35,74,100,0.72)',
            maxWidth: 520, margin: '0 auto', fontWeight: 400, lineHeight: 1.8,
          }}>
            Our holding and quarantine facility in Bojongsari serves as the consolidation
            hub for all partner farmer fish before domestic or international shipment.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(32px,5vw,64px)', alignItems: 'center',
        }} className="facility-grid">
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-28px)',
            transition: 'all 0.8s 0.1s',
          }}>
            <div style={{
              background: 'linear-gradient(160deg, #dff3ff 0%, #f8fcff 100%)',
              border: '1px solid rgba(14,165,233,0.2)',
              borderRadius: 18, overflow: 'hidden', position: 'relative',
              aspectRatio: '4/3',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 24px 60px rgba(14,165,233,0.12)',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 30%, rgba(14,165,233,0.18) 0%, transparent 65%)' }} />
              <svg viewBox="0 0 420 320" style={{ width: '92%', position: 'relative', zIndex: 1 }}>
                {[0, 1, 2].map(row => (
                  <g key={row} transform={`translate(0, ${row * 96})`}>
                    <rect x="10" y="85" width="400" height="6" rx="2" fill="rgba(35,74,100,0.35)" />
                    <rect x="15" y="85" width="4" height={row < 2 ? 11 : 30} fill="rgba(35,74,100,0.28)" />
                    <rect x="401" y="85" width="4" height={row < 2 ? 11 : 30} fill="rgba(35,74,100,0.28)" />

                    {[0, 1, 2, 3, 4].map(col => {
                      const x = 18 + col * 78;
                      const fishColors = ['#0ea5e9', '#ef4444', '#22c55e', '#0284c7', '#f59e0b'];
                      const fc = fishColors[col];

                      return (
                        <g key={col}>
                          <rect x={x} y="8" width="72" height="74" rx="4"
                            fill="rgba(255,255,255,0.65)" stroke="rgba(14,165,233,0.34)" strokeWidth="1" />
                          <rect x={x + 1} y="20" width="70" height="62" rx="3"
                            fill={`${fc}12`} />
                          <line x1={x + 4} y1="24" x2={x + 68} y2="24"
                            stroke={`${fc}55`} strokeWidth="1.2" />

                          {[0, 1, 2, 3, 4, 5].map(fi => {
                            const fx = x + 10 + (fi % 3) * 19;
                            const fy = 35 + Math.floor(fi / 3) * 20;
                            return (
                              <g key={fi} transform={`translate(${fx},${fy})`}>
                                <ellipse cx="5" cy="0" rx="6" ry="2.2" fill={fc} opacity="0.85" />
                                <polygon points="-2,-1.8 1,0 -2,1.8" fill={fc} opacity="0.65" />
                                <circle cx="9.5" cy="-0.5" r="0.9" fill="rgba(15,37,55,0.8)" />
                              </g>
                            );
                          })}

                          <rect x={x + 58} y="55" width="8" height="18" rx="2"
                            fill="rgba(16,185,129,0.28)" stroke="rgba(16,185,129,0.55)" strokeWidth="0.8" />

                          {[0, 1, 2].map(bi => (
                            <circle key={bi} cx={x + 62} cy={40 + bi * 8} r="1.5"
                              fill="none" stroke="rgba(14,165,233,0.32)" strokeWidth="0.8" />
                          ))}

                          <text x={x + 5} y="18" fontSize="6" fill="rgba(15,37,55,0.42)"
                            fontFamily="Poppins, sans-serif">
                            {String(row * 5 + col + 1).padStart(3, '0')}
                          </text>
                        </g>
                      );
                    })}
                  </g>
                ))}

                <rect x="10" y="285" width="400" height="6" rx="2" fill="rgba(35,74,100,0.28)" />
                <text x="210" y="308" fontSize="9" fill="rgba(15,37,55,0.45)"
                  textAnchor="middle" fontFamily="Poppins, sans-serif" letterSpacing="2">
                  HOLDING & QUARANTINE FACILITY · ±300 m²
                </text>
              </svg>

              <div style={{
                position: 'absolute', top: 14, right: 14,
                background: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(14,165,233,0.22)',
                borderRadius: 9, padding: '10px 14px', backdropFilter: 'blur(10px)',
                boxShadow: '0 12px 32px rgba(14,165,233,0.12)',
              }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#0284c7', lineHeight: 1, letterSpacing: '-0.4px' }}>500</div>
                <div style={{ fontSize: 9.5, color: 'rgba(35,74,100,0.62)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, marginTop: 2 }}>Tanks</div>
              </div>
            </div>
          </div>

          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(28px)',
            transition: 'all 0.8s 0.2s',
          }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#f59e0b', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16 }}>
              Facility specs
            </p>

            <h3 style={{
              fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800,
              color: '#0f2537', lineHeight: 1.2, marginBottom: 12, letterSpacing: '-0.4px',
            }}>
              Every detail is set up<br />
              <span style={{ color: '#0284c7' }}>for fish health.</span>
            </h3>

            <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg,#0ea5e9,transparent)', marginBottom: 28 }} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
              {FACILITY.map(f => (
                <div key={f.label} style={{
                  background: 'rgba(255,255,255,0.78)',
                  border: '1px solid rgba(14,165,233,0.16)',
                  borderRadius: 11, padding: '16px 18px',
                  boxShadow: '0 14px 36px rgba(14,165,233,0.07)',
                }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: '#0284c7', letterSpacing: '-0.3px', lineHeight: 1 }}>{f.value}</div>
                  <div style={{ fontSize: 11.5, fontWeight: 700, color: 'rgba(15,37,55,0.78)', marginTop: 4 }}>{f.label}</div>
                  <div style={{ fontSize: 11, color: 'rgba(35,74,100,0.58)', fontWeight: 400, marginTop: 2 }}>{f.desc}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 13.5, lineHeight: 1.82, color: 'rgba(35,74,100,0.72)', fontWeight: 400 }}>
              Our facility is not just a holding area — it's a full conditioning and
              quarantine center. Every fish is observed, graded, and prepared before
              it leaves for any destination.
            </p>
          </div>
        </div>

        <div ref={statsRef} style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))',
          gap: 18, marginTop: 48,
          opacity: statsInView ? 1 : 0,
          transform: statsInView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s 0.1s',
        }}>
          {STATS.map(s => (
            <div key={s.label} style={{
              background: 'rgba(255,255,255,0.8)',
              border: '1px solid rgba(14,165,233,0.16)',
              borderRadius: 13, padding: '24px 22px', textAlign: 'center',
              boxShadow: '0 16px 38px rgba(14,165,233,0.08)',
            }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#f59e0b', letterSpacing: '-0.8px', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(15,37,55,0.78)', marginTop: 6 }}>{s.label}</div>
              <div style={{ fontSize: 11.5, color: 'rgba(35,74,100,0.56)', fontWeight: 400, marginTop: 3 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .facility-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}