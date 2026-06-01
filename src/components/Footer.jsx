import { WA_LINK, EMAIL } from '../data/content';

export default function Footer() {
  return (
    <footer style={{
      background: '#040b13',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '48px 28px 28px',
        display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: 'clamp(24px,4vw,48px)', flexWrap: 'wrap',
      }} className="footer-grid">
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{
              width: 46, height: 46, borderRadius: 8, flexShrink: 0,
              background: 'linear-gradient(135deg, #ffff 0%, #b3b3b3 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18,
            }}>
              <img src="./mutiara-tetra.png" alt="Mutiara Tetra" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ lineHeight: 1.15 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#e8f4ff', letterSpacing: '-0.2px' }}>Mutiara Tetra</div>
              <div style={{ fontSize: 9.5, color: '#60a5fa', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Indonesia</div>
            </div>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.78, color: 'rgba(180,210,245,0.38)', fontWeight: 300, maxWidth: 260, marginBottom: 18 }}>
            PT. Mutiara Tetra Indonesia — Premium tetra breeder & exporter specializing in
            Neon, Cardinal, and Rummynose Tetra for global ornamental fish markets.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href={WA_LINK} target="_blank" rel="noreferrer" style={{
              width: 34, height: 34, borderRadius: 8,
              background: 'rgba(29,78,216,0.12)', border: '1px solid rgba(59,130,246,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              textDecoration: 'none', fontSize: 16, transition: 'background 0.2s',
            }}
              title="WhatsApp"
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(29,78,216,0.25)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(29,78,216,0.12)'}
            >💬</a>
            <a href={`mailto:${EMAIL}`} style={{
              width: 34, height: 34, borderRadius: 8,
              background: 'rgba(29,78,216,0.12)', border: '1px solid rgba(59,130,246,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              textDecoration: 'none', fontSize: 16, transition: 'background 0.2s',
            }}
              title="Email"
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(29,78,216,0.25)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(29,78,216,0.12)'}
            >✉️</a>
          </div>
        </div>

        {/* Species */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(200,225,250,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Species</div>
          {['Neon Tetra', 'Cardinal Tetra', 'Rummynose Tetra'].map(s => (
            <a key={s} href="#species" style={{ display: 'block', fontSize: 13, color: 'rgba(180,210,245,0.42)', textDecoration: 'none', marginBottom: 10, fontWeight: 300, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(200,225,250,0.8)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(180,210,245,0.42)'}
            >{s}</a>
          ))}
        </div>

        {/* Company */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(200,225,250,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Company</div>
          {[
            { l: 'Why Us', h: '#why' },
            { l: 'Our Facility', h: '#facility' },
            { l: 'FAQ', h: '#faq' },
            { l: 'Contact', h: '#contact' },
          ].map(({ l, h }) => (
            <a key={l} href={h} style={{ display: 'block', fontSize: 13, color: 'rgba(180,210,245,0.42)', textDecoration: 'none', marginBottom: 10, fontWeight: 300, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(200,225,250,0.8)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(180,210,245,0.42)'}
            >{l}</a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(200,225,250,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Contact</div>
          <div style={{ fontSize: 13, color: 'rgba(180,210,245,0.42)', fontWeight: 300, lineHeight: 1.7 }}>
            <div style={{ marginBottom: 8 }}>📍 Bojongsari, Depok<br />West Java, Indonesia</div>
            <div style={{ marginBottom: 8 }}>📱 +62 822-1056-0885</div>
            <div>{EMAIL}</div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '18px 28px',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 12, color: 'rgba(180,210,245,0.25)', fontWeight: 300 }}>
            © 2025 PT. Mutiara Tetra Indonesia. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(180,210,245,0.2)', fontWeight: 300 }}>
            Premium Tetra Breeder & Exporter · Est. 2017
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
