import { useState, useEffect } from 'react';
import { WA_LINK } from '../data/constants';

const NAV_LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Ikan', href: '#ikan' },
  { label: 'Kenapa Kami', href: '#keunggulan' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBg = scrolled
    ? 'rgba(7,17,28,0.94)'
    : 'transparent';
  const navBorder = scrolled
    ? '1px solid rgba(255,255,255,0.06)'
    : '1px solid transparent';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: navBg,
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      borderBottom: navBorder,
      transition: 'background 0.35s, border-color 0.35s, backdrop-filter 0.35s',
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto', padding: '0 28px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 68,
      }}>
        {/* Logo */}
        <a href="#beranda" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 34, height: 34, borderRadius: 9,
            background: 'linear-gradient(135deg, #22d3ee 0%, #34d399 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 17, flexShrink: 0,
          }}>🐠</div>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: '#ddeeff', letterSpacing: '-0.3px' }}>AquaZone</div>
            <div style={{ fontSize: 9.5, color: '#22d3ee', letterSpacing: '0.15em', fontWeight: 500, textTransform: 'uppercase' }}>Neon Tetra</div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} style={{
              color: 'rgba(200,220,240,0.65)', fontSize: 14, fontWeight: 400,
              textDecoration: 'none', transition: 'color 0.2s',
              letterSpacing: '0.01em',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#ddeeff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(200,220,240,0.65)'}
            >{label}</a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noreferrer" style={{
            background: 'linear-gradient(135deg, #22d3ee, #34d399)',
            color: '#04111e', padding: '9px 22px', borderRadius: 7,
            fontSize: 13, fontWeight: 700, textDecoration: 'none',
            letterSpacing: '0.01em',
            transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >Pesan Sekarang</a>
        </div>

        {/* Hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'none', border: 'none', color: '#ddeeff',
            fontSize: 22, cursor: 'pointer', padding: 4, display: 'none',
          }}
          aria-label="Menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(7,17,28,0.98)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '12px 28px 28px',
        }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block', padding: '13px 0',
                color: 'rgba(200,220,240,0.75)', fontSize: 15,
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                textDecoration: 'none',
              }}
            >{label}</a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noreferrer"
            style={{
              display: 'block', marginTop: 18, textAlign: 'center',
              background: 'linear-gradient(135deg, #22d3ee, #34d399)',
              color: '#04111e', padding: '13px', borderRadius: 8,
              fontWeight: 700, fontSize: 15, textDecoration: 'none',
            }}
          >Pesan Sekarang</a>
        </div>
      )}
    </nav>
  );
}
