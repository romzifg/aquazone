import { useState, useEffect } from 'react';
import { WA_LINK } from '../data/content';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Species', href: '#species' },
  { label: 'Why Us', href: '#why' },
  { label: 'Facility', href: '#facility' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: scrolled ? 'rgba(5,13,22,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'all 0.35s ease',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 28px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 70,
      }}>
        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 11 }}>
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
        </a>

        {/* Desktop nav */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {LINKS.map(({ label, href }) => (
            <a key={label} href={href} style={{
              color: 'rgba(200,220,245,0.6)', fontSize: 13.5, fontWeight: 400,
              textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.01em',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#e8f4ff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(200,220,245,0.6)'}
            >{label}</a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noreferrer" style={{
            background: '#1d4ed8', color: '#fff',
            padding: '9px 22px', borderRadius: 7,
            fontSize: 13, fontWeight: 600, textDecoration: 'none',
            transition: 'background 0.2s',
            letterSpacing: '0.01em',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#2563eb'}
            onMouseLeave={e => e.currentTarget.style.background = '#1d4ed8'}
          >Contact Us</a>
        </div>

        {/* Hamburger */}
        <button className="show-mobile" onClick={() => setOpen(!open)} style={{
          background: 'none', border: 'none', color: '#e8f4ff',
          fontSize: 22, cursor: 'pointer', padding: 4, display: 'none',
        }}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(5,13,22,0.98)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '8px 28px 24px',
        }}>
          {LINKS.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '13px 0',
              color: 'rgba(200,220,245,0.75)', fontSize: 15,
              borderBottom: '1px solid rgba(255,255,255,0.04)',
              textDecoration: 'none',
            }}>{label}</a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noreferrer" style={{
            display: 'block', marginTop: 16, textAlign: 'center',
            background: '#1d4ed8', color: '#fff',
            padding: '13px', borderRadius: 8,
            fontWeight: 600, fontSize: 15, textDecoration: 'none',
          }}>Contact Us</a>
        </div>
      )}
    </nav>
  );
}
