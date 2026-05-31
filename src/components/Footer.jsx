import { WA_LINK } from '../data/constants';

export default function Footer() {
  return (
    <footer style={{
      background: '#060e18',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '36px 28px',
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: 20,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg, #22d3ee, #34d399)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 15, flexShrink: 0,
          }}>🐠</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#c8dff0' }}>AquaZone</div>
            <div style={{ fontSize: 10, color: 'rgba(190,215,240,0.3)', letterSpacing: '0.12em', fontWeight: 400 }}>
              Neon Tetra · Indonesia
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <a href="#beranda" style={{ fontSize: 13, color: 'rgba(190,215,240,0.35)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(190,215,240,0.7)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(190,215,240,0.35)'}
          >Kembali ke atas</a>
          <a href={WA_LINK} target="_blank" rel="noreferrer"
            style={{ fontSize: 13, color: '#22d3ee', textDecoration: 'none', fontWeight: 500 }}>
            WhatsApp
          </a>
        </div>

        <p style={{ fontSize: 12, color: 'rgba(190,215,240,0.2)', fontWeight: 300 }}>
          © 2025 AquaZone · Bersama peternak ikan hias lokal sejak 2018
        </p>
      </div>
    </footer>
  );
}
