import { useInView } from '../hooks/useInView';
import { WHY_CHOOSE } from '../data/content';

function Card({ item, index }) {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} style={{
      background: 'rgba(255,255,255,0.82)',
      border: '1px solid rgba(14,165,233,0.14)',
      borderRadius: 14,
      padding: '26px 22px',
      backdropFilter: 'blur(8px)',
      boxShadow: '0 14px 36px rgba(14,165,233,0.07)',
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.55s ${index * 0.08}s, transform 0.55s ${index * 0.08}s, border-color 0.22s, background 0.22s, box-shadow 0.22s`,
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(14,165,233,0.34)';
        e.currentTarget.style.background = 'rgba(255,255,255,0.95)';
        e.currentTarget.style.boxShadow = '0 20px 46px rgba(14,165,233,0.13)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(14,165,233,0.14)';
        e.currentTarget.style.background = 'rgba(255,255,255,0.82)';
        e.currentTarget.style.boxShadow = '0 14px 36px rgba(14,165,233,0.07)';
      }}
    >
      <div style={{
        width: 46,
        height: 46,
        borderRadius: 12,
        marginBottom: 18,
        flexShrink: 0,
        background: 'rgba(14,165,233,0.1)',
        border: '1px solid rgba(14,165,233,0.22)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 22,
      }}>
        {item.icon}
      </div>

      <h3 style={{
        fontSize: 15.5,
        fontWeight: 700,
        color: '#0f2537',
        marginBottom: 10,
      }}>
        {item.title}
      </h3>

      <p style={{
        fontSize: 13.5,
        lineHeight: 1.75,
        color: 'rgba(35,74,100,0.7)',
        fontWeight: 400,
      }}>
        {item.desc}
      </p>

      <div style={{
        marginTop: 18,
        width: 36,
        height: 2,
        background: 'rgba(14,165,233,0.45)',
        borderRadius: 2,
      }} />
    </div>
  );
}

export default function WhyChoose() {
  const [ref, inView] = useInView();

  return (
    <section id="why" style={{
      padding: 'clamp(80px,10vw,110px) 28px',
      background: 'linear-gradient(180deg, #f8fcff 0%, #eaf7ff 100%)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.22), transparent)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={ref} style={{
          textAlign: 'center',
          marginBottom: 56,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(28px)',
          transition: 'all 0.65s',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            marginBottom: 16,
          }}>
            <div style={{ height: 1, width: 40, background: 'rgba(14,165,233,0.38)' }} />
            <p style={{
              fontSize: 11,
              fontWeight: 700,
              color: '#0284c7',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}>
              Why Tetra Specialist
            </p>
            <div style={{ height: 1, width: 40, background: 'rgba(14,165,233,0.38)' }} />
          </div>

          <h2 style={{
            fontSize: 'clamp(28px,4.5vw,48px)',
            fontWeight: 800,
            color: '#0f2537',
            lineHeight: 1.12,
            letterSpacing: '-0.8px',
            marginBottom: 16,
          }}>
            Why Choose a Tetra Specialist?
          </h2>

          <p style={{
            fontSize: 15.5,
            color: 'rgba(35,74,100,0.72)',
            maxWidth: 560,
            margin: '0 auto',
            fontWeight: 400,
            lineHeight: 1.8,
          }}>
            While many exporters offer a wide range of ornamental fish, we focus exclusively
            on tetra species. This specialization allows us to deliver higher quality,
            consistent supply, and true expertise you can trust.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {WHY_CHOOSE.map((item, i) => (
            <Card key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}