import { useMemo } from 'react';
import { WA_LINK } from '../data/content';

function FishParticles() {
  const fish = useMemo(() => Array.from({ length: 12 }, (_, i) => ({
    id: i,
    w: Math.random() * 18 + 10,
    top: Math.random() * 88 + 2,
    delay: Math.random() * 20,
    dur: Math.random() * 14 + 20,
    op: Math.random() * 0.18 + 0.05,
    col: ['#0ea5e9', '#34d399', '#0369a1', '#6ee7b7'][i % 4],
  })), []);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {fish.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          top: `${p.top}%`,
          left: '-80px',
          width: p.w,
          height: p.w * 0.38,
          opacity: p.op,
          animation: `swimRight ${p.dur}s ${p.delay}s infinite linear`,
        }}>
          <svg viewBox="0 0 28 10" width={p.w} height={p.w * 0.38}>
            <ellipse cx="17" cy="5" rx="11" ry="4" fill={p.col} />
            <polygon points="1,1 8,5 1,9" fill={p.col} />
          </svg>
        </div>
      ))}
    </div>
  );
}

function HeroLogoVisual() {
  return (
    <div className="hero-logo-visual" style={{
      position: 'absolute',
      right: '6%',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 'clamp(280px, 32vw, 430px)',
      height: 'clamp(280px, 32vw, 430px)',
      zIndex: 6,
      pointerEvents: 'none',
      animation: 'fadeIn 0.9s 0.2s both',
    }}>
      <div style={{
        position: 'absolute',
        inset: -48,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14,165,233,0.28), transparent 68%)',
        filter: 'blur(34px)',
        zIndex: 0,
      }} />

      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.72), rgba(255,255,255,0.22))',
        border: '1px solid rgba(255,255,255,0.78)',
        boxShadow: `
          0 34px 90px rgba(14,165,233,0.22),
          inset 0 1px 0 rgba(255,255,255,0.95),
          inset 0 -18px 40px rgba(14,165,233,0.08)
        `,
        backdropFilter: 'blur(26px)',
        WebkitBackdropFilter: 'blur(26px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 34,
          left: 46,
          width: 110,
          height: 46,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.55)',
          filter: 'blur(10px)',
          transform: 'rotate(-22deg)',
        }} />

        <div style={{
          position: 'absolute',
          inset: 22,
          borderRadius: '50%',
          border: '1px solid rgba(14,165,233,0.16)',
        }} />

        <img
          src="./mutiara-tetra.png"
          alt="Mutiara Tetra Indonesia"
          style={{
            width: '74%',
            height: '74%',
            objectFit: 'contain',
            position: 'relative',
            zIndex: 2,
            filter: 'drop-shadow(0 18px 28px rgba(15,37,55,0.18))',
          }}
        />
      </div>

      <div style={{
        position: 'absolute',
        right: 18,
        bottom: 34,
        background: 'rgba(255,255,255,0.74)',
        border: '1px solid rgba(14,165,233,0.18)',
        borderRadius: 999,
        padding: '8px 15px',
        boxShadow: '0 14px 32px rgba(14,165,233,0.12)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
      }}>
        <span style={{
          fontSize: 11,
          fontWeight: 800,
          color: '#0284c7',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
        }}>
          Export Grade
        </span>
      </div>
    </div>
  );
}

function SchoolingFishSVG() {
  const positions = [
    [0, 30], [40, 10], [80, 0], [120, 15], [155, 5],
    [20, 60], [60, 50], [100, 42], [140, 55], [170, 40],
    [10, 90], [50, 82], [90, 75], [130, 88], [165, 72],
    [30, 118], [70, 108], [110, 100], [148, 114], [178, 99],
    [5, 148], [45, 138], [85, 130], [125, 143], [160, 128],
  ];

  return (
    <div className="hero-fish-area" style={{
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: '56%',
      overflow: 'hidden',
      pointerEvents: 'none',
    }}>
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '42%',
        zIndex: 4,
        background: 'linear-gradient(to right, #f4fbff 0%, rgba(244,251,255,0.72) 35%, transparent 100%)',
      }} />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(160deg, #eaf7ff 0%, #d7f0ff 50%, #eaf7ff 100%)',
      }} />

      <svg viewBox="0 0 500 600" style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.28,
      }}>
        {[30, 60, 80, 420, 450, 470].map((x, i) => (
          <g key={i}>
            <line x1={x} y1="600" x2={x - 8} y2={250 - i * 15} stroke="#1a5c3a" strokeWidth="4" />
            <line x1={x} y1="600" x2={x + 10} y2={220 - i * 12} stroke="#1e6b44" strokeWidth="5" />
            <line x1={x} y1="600" x2={x - 3} y2={310 - i * 10} stroke="#165233" strokeWidth="3" />
          </g>
        ))}
        {[200, 230, 260, 290].map((x, i) => (
          <g key={`m${i}`}>
            <line x1={x} y1="600" x2={x - 5} y2={350 - i * 20} stroke="#1a5c3a" strokeWidth="3" />
            <line x1={x} y1="600" x2={x + 7} y2={330 - i * 15} stroke="#1e6b44" strokeWidth="4" />
          </g>
        ))}
      </svg>

      <svg viewBox="0 0 500 600" style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        opacity: 0.72,
      }}>
        {positions.map(([x, y], i) => {
          const isBlue = i % 3 !== 2;
          const scale = 0.85 + (i % 4) * 0.08;

          return (
            <g key={i} transform={`translate(${x + 60},${y + 120}) scale(${scale})`}>
              <ellipse cx="12" cy="0" rx="14" ry="5.5"
                fill={isBlue ? '#0f2537' : '#d1d5db'} opacity="0.72" />
              {isBlue && (
                <rect x="4" y="-2" width="16" height="3" rx="1.5"
                  fill="#0ea5e9" opacity="0.9" />
              )}
              <rect x="4" y="1" width="16" height="2.5" rx="1.2"
                fill="#ef4444" opacity={isBlue ? '0.85' : '0.75'} />
              <polygon points="-6,-5 2,0 -6,5" fill={isBlue ? '#d1d5db' : '#9ca3af'} opacity="0.7" />
              <circle cx="22" cy="-1.5" r="2.2" fill="rgba(255,255,255,0.95)" />
              <circle cx="22.5" cy="-1.5" r="1.1" fill="#0f172a" />
              <path d="M 8 -5.5 Q 14 -10 20 -5.5 Q 14 -3 8 -5.5 Z"
                fill={isBlue ? '#bfdbfe' : '#d1d5db'} opacity="0.45" />
            </g>
          );
        })}
      </svg>

      <HeroLogoVisual />

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '25%',
        background: 'linear-gradient(to top, #f4fbff 0%, transparent 100%)',
        zIndex: 5,
      }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(160deg, #f4fbff 0%, #e7f6ff 60%, #f4fbff 100%)',
    }}>
      <FishParticles />
      <SchoolingFishSVG />

      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: 500,
        height: 500,
        borderRadius: '50%',
        pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 65%)',
        animation: 'floatOrb 10s ease-in-out infinite',
      }} />

      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: 'clamp(100px,14vw,130px) 28px 110px',
        position: 'relative',
        zIndex: 10,
        width: '100%',
      }}>
        <div style={{ maxWidth: 580 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(14,165,233,0.12)',
            border: '1px solid rgba(14,165,233,0.28)',
            borderRadius: 100,
            padding: '5px 16px',
            marginBottom: 32,
            animation: 'fadeUp 0.7s 0.05s both',
          }}>
            <span style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#0ea5e9',
              display: 'inline-block',
              animation: 'blinkDot 2s infinite',
              flexShrink: 0,
            }} />
            <span style={{
              fontSize: 11.5,
              color: '#0369a1',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              Tetra Specialist · Indonesia
            </span>
          </div>

          <p style={{
            fontSize: 13,
            fontWeight: 700,
            color: '#f59e0b',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: 14,
            animation: 'fadeUp 0.7s 0.08s both',
          }}>
            Premium
          </p>

          <h1 style={{
            fontSize: 'clamp(38px, 7vw, 72px)',
            fontWeight: 800,
            color: '#0f2537',
            lineHeight: 1.04,
            letterSpacing: '-1.5px',
            marginBottom: 6,
            animation: 'fadeUp 0.8s 0.1s both',
          }}>
            Indonesian Tetra
          </h1>

          <h1 style={{
            fontSize: 'clamp(38px, 7vw, 72px)',
            fontWeight: 800,
            color: '#0f2537',
            lineHeight: 1.04,
            letterSpacing: '-1.5px',
            marginBottom: 6,
            animation: 'fadeUp 0.8s 0.13s both',
          }}>
            Breeder <span style={{ color: '#f59e0b' }}>&</span> Exporter
          </h1>

          <div style={{
            width: 52,
            height: 3,
            background: '#f59e0b',
            borderRadius: 2,
            marginBottom: 22,
            animation: 'fadeUp 0.7s 0.15s both',
          }} />

          <p style={{
            fontSize: 'clamp(14px, 1.6vw, 16.5px)',
            lineHeight: 1.85,
            color: 'rgba(35,74,100,0.76)',
            maxWidth: 480,
            fontWeight: 400,
            marginBottom: 40,
            animation: 'fadeUp 0.8s 0.18s both',
          }}>
            Specializing in Neon Tetra, Cardinal Tetra, and Rummynose Tetra
            for global ornamental fish markets.
          </p>

          <div style={{
            display: 'flex',
            gap: 14,
            flexWrap: 'wrap',
            animation: 'fadeUp 0.8s 0.22s both',
          }}>
            <a href="#species" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              background: '#0ea5e9',
              color: '#fff',
              padding: '13px 28px',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.2s',
              boxShadow: '0 14px 30px rgba(14,165,233,0.2)',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#0284c7';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#0ea5e9';
                e.currentTarget.style.transform = '';
              }}
            >
              🐠 View Our Tetra Collection
            </a>

            <a href={WA_LINK} target="_blank" rel="noreferrer" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              border: '1px solid rgba(245,158,11,0.55)',
              color: '#d97706',
              background: 'rgba(255,255,255,0.55)',
              padding: '13px 26px',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: 'none',
              transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#f59e0b';
                e.currentTarget.style.background = 'rgba(245,158,11,0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(245,158,11,0.55)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.55)';
                e.currentTarget.style.transform = '';
              }}
            >
              ✉ Contact Export Team
            </a>
          </div>

          <div style={{
            display: 'flex',
            gap: 40,
            marginTop: 56,
            flexWrap: 'wrap',
            animation: 'fadeUp 0.8s 0.3s both',
          }}>
            {[
              ['~2M', 'fish / month'],
              ['20+', 'partner farmers'],
              ['<2%', 'shipping mortality'],
              ['Since 2017', 'in the industry'],
            ].map(([v, l]) => (
              <div key={l}>
                <div style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: '#0284c7',
                  lineHeight: 1,
                  letterSpacing: '-0.4px',
                }}>
                  {v}
                </div>
                <div style={{
                  fontSize: 11.5,
                  color: 'rgba(35,74,100,0.68)',
                  marginTop: 4,
                  fontWeight: 500,
                }}>
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(14,165,233,0.18)',
        boxShadow: '0 -12px 30px rgba(14,165,233,0.08)',
        padding: '14px 28px',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: 40,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {[
            { icon: '🧬', label: 'SPECIALIZED BREEDING', sub: 'Focus on quality & consistency' },
            { icon: '🛡️', label: 'HEALTH ASSURANCE', sub: 'Strict monitoring & quarantine' },
            { icon: '🌍', label: 'GLOBAL EXPORT', sub: 'Experienced in intl. shipping' },
            { icon: '🏅', label: 'PREMIUM QUALITY', sub: 'Export-grade for every batch' },
          ].map(({ icon, label, sub }) => (
            <div key={label} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}>
              <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
              <div>
                <div style={{
                  fontSize: 10.5,
                  fontWeight: 800,
                  color: 'rgba(15,37,55,0.78)',
                  letterSpacing: '0.12em',
                }}>
                  {label}
                </div>
                <div style={{
                  fontSize: 11.5,
                  color: 'rgba(35,74,100,0.66)',
                  fontWeight: 400,
                }}>
                  {sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: 80,
        left: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        animation: 'bounceDown 2.4s infinite',
        zIndex: 11,
      }}>
        <div style={{
          width: 1,
          height: 30,
          background: 'linear-gradient(to bottom, transparent, rgba(14,165,233,0.55))',
        }} />
        <div style={{
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: 'rgba(14,165,233,0.7)',
        }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-fish-area {
            opacity: 0.25;
            width: 100% !important;
          }

          .hero-logo-visual {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}