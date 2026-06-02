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
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.32)',
      backdropFilter: scrolled ? 'blur(20px)' : 'blur(8px)',
      borderBottom: scrolled ? '1px solid rgba(14,165,233,0.16)' : '1px solid transparent',
      boxShadow: scrolled ? '0 10px 30px rgba(14,165,233,0.08)' : 'none',
      transition: 'all 0.35s ease',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 28px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 70,
      }}>
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 11 }}>
          <div style={{
            width: 46, height: 46, borderRadius: 8, flexShrink: 0,
            background: 'linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%)',
            border: '1px solid rgba(14,165,233,0.14)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18,
          }}>
            <img src="./mutiara-tetra.png" alt="Mutiara Tetra" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ lineHeight: 1.15 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#0f2537', letterSpacing: '-0.2px' }}>Mutiara Tetra</div>
            <div style={{ fontSize: 9.5, color: '#0284c7', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Indonesia</div>
          </div>
        </a>

        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {LINKS.map(({ label, href }) => (
            <a key={label} href={href} style={{
              color: 'rgba(15,37,55,0.66)', fontSize: 13.5, fontWeight: 500,
              textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.01em',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#0f2537'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(15,37,55,0.66)'}
            >{label}</a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noreferrer" style={{
            background: '#1d4ed8', color: '#fff',
            padding: '9px 22px', borderRadius: 7,
            fontSize: 13, fontWeight: 700, textDecoration: 'none',
            transition: 'background 0.2s, transform 0.2s',
            letterSpacing: '0.01em',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.transform = ''; }}
          >Contact Us</a>
        </div>

        <button className="show-mobile" onClick={() => setOpen(!open)} style={{
          background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(14,165,233,0.16)', color: '#0f2537',
          fontSize: 22, cursor: 'pointer', padding: 6, borderRadius: 8, display: 'none',
        }}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div style={{
          background: 'rgba(255,255,255,0.96)',
          borderTop: '1px solid rgba(14,165,233,0.16)',
          padding: '8px 28px 24px',
          boxShadow: '0 18px 45px rgba(14,165,233,0.10)',
        }}>
          {LINKS.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '13px 0',
              color: 'rgba(15,37,55,0.78)', fontSize: 15, fontWeight: 500,
              borderBottom: '1px solid rgba(14,165,233,0.10)',
              textDecoration: 'none',
            }}>{label}</a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noreferrer" style={{
            display: 'block', marginTop: 16, textAlign: 'center',
            background: '#1d4ed8', color: '#fff',
            padding: '13px', borderRadius: 8,
            fontWeight: 700, fontSize: 15, textDecoration: 'none',
          }}>Contact Us</a>
        </div>
      )}
    </nav>
  );
}
