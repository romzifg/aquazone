import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { FAQ } from '../data/content';

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.82)',
      border: `1px solid ${isOpen ? 'rgba(14,165,233,0.35)' : 'rgba(14,165,233,0.14)'}`,
      borderRadius: 12,
      overflow: 'hidden',
      transition: 'border-color 0.25s, box-shadow 0.25s',
      boxShadow: isOpen ? '0 16px 38px rgba(14,165,233,0.12)' : '0 10px 28px rgba(14,165,233,0.06)',
    }}>
      <button onClick={onToggle} style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer',
        textAlign: 'left', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 7, flexShrink: 0,
            background: isOpen ? 'rgba(14,165,233,0.14)' : 'rgba(14,165,233,0.08)',
            border: `1px solid ${isOpen ? 'rgba(14,165,233,0.35)' : 'rgba(14,165,233,0.16)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 11, fontWeight: 800,
            color: isOpen ? '#0284c7' : 'rgba(15,37,55,0.55)',
            transition: 'all 0.25s',
          }}>
            {String(index + 1).padStart(2, '0')}
          </div>

          <span style={{
            fontSize: 14.5,
            fontWeight: isOpen ? 700 : 600,
            color: isOpen ? '#0f2537' : 'rgba(15,37,55,0.78)',
            transition: 'color 0.25s',
            lineHeight: 1.45,
          }}>{item.q}</span>
        </div>

        <div style={{
          width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
          background: isOpen ? 'rgba(14,165,233,0.14)' : 'rgba(14,165,233,0.08)',
          border: `1px solid ${isOpen ? 'rgba(14,165,233,0.32)' : 'rgba(14,165,233,0.14)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: isOpen ? '#0284c7' : 'rgba(15,37,55,0.52)',
          fontSize: 14, transition: 'all 0.3s',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
        }}>
          ↓
        </div>
      </button>

      <div style={{
        maxHeight: isOpen ? '300px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.35s ease',
      }}>
        <div style={{
          padding: '0 22px 20px 64px',
          borderTop: '1px solid rgba(14,165,233,0.12)',
          paddingTop: 16,
        }}>
          <p style={{
            fontSize: 13.5,
            lineHeight: 1.82,
            color: 'rgba(35,74,100,0.72)',
            fontWeight: 400,
          }}>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [ref, inView] = useInView();
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" style={{
      padding: 'clamp(80px,10vw,110px) 28px',
      background: 'linear-gradient(180deg, #eaf7ff 0%, #f8fcff 100%)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.22), transparent)',
      }} />

      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div ref={ref} style={{
          textAlign: 'center', marginBottom: 52,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(28px)',
          transition: 'all 0.65s',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 40, background: 'rgba(14,165,233,0.38)' }} />
            <p style={{
              fontSize: 11,
              fontWeight: 700,
              color: '#0284c7',
              letterSpacing: '0.2em',
              textTransform: 'uppercase'
            }}>
              FAQ
            </p>
            <div style={{ height: 1, width: 40, background: 'rgba(14,165,233,0.38)' }} />
          </div>

          <h2 style={{
            fontSize: 'clamp(26px,4vw,44px)',
            fontWeight: 800,
            color: '#0f2537',
            lineHeight: 1.15,
            letterSpacing: '-0.7px',
            marginBottom: 14,
          }}>
            Common Questions
          </h2>

          <p style={{
            fontSize: 15,
            color: 'rgba(35,74,100,0.72)',
            maxWidth: 440,
            margin: '0 auto',
            fontWeight: 400,
            lineHeight: 1.8,
          }}>
            Everything you need to know before placing an inquiry or order.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {FAQ.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}