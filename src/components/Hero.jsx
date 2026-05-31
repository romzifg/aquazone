import { WA_LINK } from '../data/constants';
import FishParticles from './FishParticles';

// Subtle ambient glow blobs — no grid, no lines
function AmbientOrbs() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <div style={{
        position: 'absolute', top: '5%', left: '8%',
        width: 480, height: 480, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 68%)',
        animation: 'floatOrb 9s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '6%',
        width: 560, height: 560, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(52,211,153,0.055) 0%, transparent 68%)',
        animation: 'floatOrb 12s ease-in-out 4s infinite',
      }} />
      <div style={{
        position: 'absolute', top: '45%', right: '30%',
        width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(125,211,252,0.04) 0%, transparent 68%)',
        animation: 'floatOrb 15s ease-in-out 2s infinite',
      }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="beranda"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(160deg, #07111c 0%, #091826 55%, #071520 100%)',
        overflow: 'hidden',
      }}
    >
      <AmbientOrbs />
      <FishParticles />

      {/* Faint decorative ring */}
      <div style={{
        position: 'absolute', right: '-8%', top: '8%',
        width: 700, height: 700, borderRadius: '50%',
        border: '1px solid rgba(34,211,238,0.055)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: '-3%', top: '14%',
        width: 520, height: 520, borderRadius: '50%',
        border: '1px solid rgba(52,211,153,0.04)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1180, margin: '0 auto',
        padding: 'clamp(100px,14vw,130px) 28px 80px',
        position: 'relative', zIndex: 2,
      }}>
        <div style={{ maxWidth: 660 }}>
          {/* Live badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 9,
            background: 'rgba(34,211,238,0.07)',
            border: '1px solid rgba(34,211,238,0.18)',
            borderRadius: 100, padding: '6px 18px', marginBottom: 36,
            animation: 'fadeUp 0.7s 0.05s both',
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%', background: '#22d3ee',
              display: 'inline-block', animation: 'blinkDot 2.2s infinite',
            }} />
            <span style={{ fontSize: 11.5, color: '#22d3ee', fontWeight: 500, letterSpacing: '0.08em' }}>
              Stok tersedia · Kirim ke seluruh Indonesia
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(40px, 7.5vw, 78px)',
            fontWeight: 700,
            lineHeight: 1.06,
            color: '#ddeeff',
            marginBottom: 10,
            animation: 'fadeUp 0.8s 0.1s both',
            letterSpacing: '-1.5px',
          }}>
            Neon Tetra
          </h1>
          <h1 style={{
            fontSize: 'clamp(40px, 7.5vw, 78px)',
            fontWeight: 700,
            lineHeight: 1.06,
            background: 'linear-gradient(120deg, #22d3ee 10%, #34d399 55%, #7dd3fc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 28,
            animation: 'fadeUp 0.8s 0.15s both',
            letterSpacing: '-1.5px',
          }}>
            untuk Aquascape kamu.
          </h1>

          {/* Subtext */}
          <p style={{
            fontSize: 'clamp(15px, 1.8vw, 17.5px)',
            lineHeight: 1.85,
            color: 'rgba(190,215,240,0.65)',
            maxWidth: 510,
            marginBottom: 44,
            fontWeight: 300,
            animation: 'fadeUp 0.8s 0.2s both',
          }}>
            Kami supplier Neon Tetra yang beli langsung dari peternak lokal. 
            Sudah 7 tahun nyuplai toko ikan, aquascaper, sampai eksportir — 
            jadi soal kualitas dan harga, kami nggak main-main.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: 14, flexWrap: 'wrap',
            animation: 'fadeUp 0.8s 0.25s both',
          }}>
            <a href={WA_LINK} target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              background: 'linear-gradient(135deg, #22d3ee, #34d399)',
              color: '#04111e', padding: '13px 30px', borderRadius: 9,
              fontWeight: 700, fontSize: 14, textDecoration: 'none',
              animation: 'glowPulse 3s ease-in-out infinite',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = ''}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.305-1.507A11.941 11.941 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.667-.5-5.201-1.373l-.373-.22-3.862.923.938-3.773-.242-.388A9.937 9.937 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Chat WhatsApp
            </a>
            <a href="#ikan" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1px solid rgba(34,211,238,0.25)', color: 'rgba(190,215,240,0.75)',
              padding: '13px 28px', borderRadius: 9,
              fontSize: 14, textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,211,238,0.55)'; e.currentTarget.style.color = '#ddeeff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(34,211,238,0.25)'; e.currentTarget.style.color = 'rgba(190,215,240,0.75)'; }}
            >
              Lihat koleksi ↓
            </a>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex', gap: 48, marginTop: 60, flexWrap: 'wrap',
            animation: 'fadeUp 0.8s 0.35s both',
          }}>
            {[
              ['7+', 'tahun pengalaman'],
              ['100rb+', 'ikan terjual'],
              ['50+', 'mitra toko ikan'],
            ].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontSize: 28, fontWeight: 700, color: '#22d3ee', lineHeight: 1, letterSpacing: '-0.5px' }}>{num}</div>
                <div style={{ fontSize: 12, color: 'rgba(190,215,240,0.45)', marginTop: 4, fontWeight: 400 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: 'absolute', bottom: 30, left: '50%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        animation: 'bounceDown 2.4s infinite',
      }}>
        <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, transparent, rgba(34,211,238,0.5))' }} />
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(34,211,238,0.6)' }} />
      </div>
    </section>
  );
}
