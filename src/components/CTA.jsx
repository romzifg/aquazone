import { useInView } from '../hooks/useInView';
import { WA_LINK } from '../data/constants';

export default function CTA() {
  const [ref, inView] = useInView();
  return (
    <section id="kontak" style={{
      padding: 'clamp(80px,10vw,110px) 28px',
      background: 'linear-gradient(180deg, #080f1a 0%, #07111c 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.06) 0%, transparent 55%)',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.18), transparent)',
      }} />

      <div ref={ref} style={{
        maxWidth: 680, margin: '0 auto', textAlign: 'center', position: 'relative',
        opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: 'all 0.75s',
      }}>
        <div style={{ fontSize: 44, marginBottom: 20, filter: 'drop-shadow(0 0 16px rgba(34,211,238,0.4))' }}>🐠</div>

        <h2 style={{
          fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 700,
          color: '#ddeeff', lineHeight: 1.1, marginBottom: 18,
          letterSpacing: '-0.8px',
        }}>
          Tertarik? Langsung<br />
          <span style={{
            background: 'linear-gradient(120deg, #22d3ee, #34d399)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>tanya via WhatsApp aja.</span>
        </h2>

        <p style={{
          fontSize: 15.5, color: 'rgba(185,210,235,0.5)', lineHeight: 1.85,
          marginBottom: 44, fontWeight: 300, maxWidth: 500, margin: '0 auto 44px',
        }}>
          Mau tanya stok, minta sample dulu, atau langsung order partai — semuanya bisa. 
          Kami balas cepat dan nggak ribet.
        </p>

        <a href={WA_LINK} target="_blank" rel="noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          background: 'linear-gradient(135deg, #22d3ee, #34d399)',
          color: '#04111e', padding: '15px 44px', borderRadius: 11,
          fontWeight: 700, fontSize: 16, textDecoration: 'none',
          boxShadow: '0 0 48px rgba(34,211,238,0.28)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 0 70px rgba(34,211,238,0.45)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 0 48px rgba(34,211,238,0.28)'; }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.305-1.507A11.941 11.941 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.667-.5-5.201-1.373l-.373-.22-3.862.923.938-3.773-.242-.388A9.937 9.937 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          Chat WhatsApp Sekarang
        </a>

        <p style={{ marginTop: 18, fontSize: 12.5, color: 'rgba(190,215,240,0.28)', fontWeight: 300 }}>
          +62 822-1056-0885 · Bang Derry
        </p>
      </div>
    </section>
  );
}
