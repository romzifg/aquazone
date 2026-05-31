import { useInView } from '../hooks/useInView';
import { FEATURES } from '../data/constants';

function FeatureCard({ feature, index }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      display: 'flex', gap: 18, padding: '24px 22px',
      background: 'rgba(10,20,34,0.5)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 13,
      backdropFilter: 'blur(8px)',
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.55s ${index * 0.07}s, transform 0.55s ${index * 0.07}s, border-color 0.22s, background 0.22s`,
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(34,211,238,0.18)';
        e.currentTarget.style.background = 'rgba(12,24,40,0.7)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
        e.currentTarget.style.background = 'rgba(10,20,34,0.5)';
      }}
    >
      <div style={{
        width: 44, height: 44, borderRadius: 11, flexShrink: 0,
        background: 'rgba(34,211,238,0.07)',
        border: '1px solid rgba(34,211,238,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 20,
      }}>{feature.icon}</div>
      <div>
        <h3 style={{ fontSize: 15.5, fontWeight: 600, color: '#c8dff0', marginBottom: 7 }}>
          {feature.title}
        </h3>
        <p style={{ fontSize: 13.5, lineHeight: 1.72, color: 'rgba(170,200,228,0.52)', fontWeight: 300 }}>
          {feature.desc}
        </p>
      </div>
    </div>
  );
}

export default function Features() {
  const [ref, inView] = useInView();
  return (
    <section id="keunggulan" style={{
      padding: 'clamp(80px,10vw,110px) 28px',
      background: 'linear-gradient(180deg, #081520 0%, #07111c 100%)',
      position: 'relative',
    }}>
      {/* Top divider */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.14), transparent)',
      }} />

      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div ref={ref} style={{
          textAlign: 'center', marginBottom: 56,
          opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(28px)',
          transition: 'all 0.65s',
        }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#34d399', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
            Kenapa pilih kami
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 700, color: '#ddeeff', lineHeight: 1.15, letterSpacing: '-0.8px', marginBottom: 14 }}>
            Bukan sekadar jual ikan
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(180,205,230,0.48)', maxWidth: 420, margin: '0 auto', fontWeight: 300, lineHeight: 1.8 }}>
            Ada beberapa hal yang bikin kami beda, dan kami rasa ini yang paling penting buat kamu tahu.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 18,
        }}>
          {FEATURES.map((f, i) => <FeatureCard key={f.title} feature={f} index={i} />)}
        </div>
      </div>
    </section>
  );
}
