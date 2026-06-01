import { useInView } from '../hooks/useInView';
import { WA_LINK, EMAIL } from '../data/content';

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section id="contact" style={{
      padding:'clamp(80px,10vw,110px) 28px',
      background:'linear-gradient(180deg, #071326 0%, #050d16 100%)',
      position:'relative', overflow:'hidden',
    }}>
      {/* Ambient */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        background:'radial-gradient(ellipse at 50% 0%, rgba(29,78,216,0.08) 0%, transparent 55%)',
      }}/>
      <div style={{
        position:'absolute', top:0, left:0, right:0, height:1,
        background:'linear-gradient(90deg, transparent, rgba(59,130,246,0.22), transparent)',
      }}/>

      <div style={{ maxWidth:1200, margin:'0 auto', position:'relative' }}>
        {/* Main CTA card */}
        <div ref={ref} style={{
          background:'linear-gradient(135deg, rgba(8,20,40,0.85) 0%, rgba(10,24,48,0.85) 100%)',
          border:'1px solid rgba(59,130,246,0.18)',
          borderRadius:20, padding:'clamp(36px,5vw,60px)',
          backdropFilter:'blur(16px)',
          marginBottom:48,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(28px)',
          transition:'all 0.75s',
        }}>
          <div style={{
            display:'grid', gridTemplateColumns:'1fr auto',
            gap:'clamp(28px,4vw,56px)', alignItems:'center',
          }} className="contact-grid">
            <div>
              <p style={{ fontSize:11, fontWeight:600, color:'#f59e0b', letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:14 }}>
                Ready to work together?
              </p>
              <h2 style={{
                fontSize:'clamp(26px,4vw,46px)', fontWeight:700,
                color:'#e8f4ff', lineHeight:1.1, marginBottom:16, letterSpacing:'-0.7px',
              }}>
                Let's talk about<br/>
                <span style={{ background:'linear-gradient(120deg,#3b82f6,#60a5fa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                  your tetra needs.
                </span>
              </h2>
              <p style={{
                fontSize:15, color:'rgba(185,212,242,0.5)', lineHeight:1.82,
                maxWidth:480, fontWeight:300, marginBottom:32,
              }}>
                Whether you're a wholesaler, importer, or aquascape supplier — we'd love to
                discuss how we can be your reliable tetra source. Reach out and we'll get back to
                you promptly.
              </p>
              <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
                <a href={WA_LINK} target="_blank" rel="noreferrer" style={{
                  display:'inline-flex', alignItems:'center', gap:10,
                  background:'#1d4ed8', color:'#fff',
                  padding:'14px 30px', borderRadius:9,
                  fontWeight:700, fontSize:14, textDecoration:'none',
                  transition:'background 0.2s, transform 0.2s',
                  boxShadow:'0 0 32px rgba(29,78,216,0.35)',
                }}
                  onMouseEnter={e=>{ e.currentTarget.style.background='#2563eb'; e.currentTarget.style.transform='translateY(-2px)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.background='#1d4ed8'; e.currentTarget.style.transform=''; }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.305-1.507A11.941 11.941 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.667-.5-5.201-1.373l-.373-.22-3.862.923.938-3.773-.242-.388A9.937 9.937 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  WhatsApp Us
                </a>
                <a href={`mailto:${EMAIL}`} style={{
                  display:'inline-flex', alignItems:'center', gap:9,
                  border:'1px solid rgba(255,255,255,0.14)', color:'rgba(200,225,255,0.7)',
                  padding:'14px 26px', borderRadius:9,
                  fontSize:14, fontWeight:500, textDecoration:'none',
                  transition:'border-color 0.2s, color 0.2s',
                }}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor='rgba(255,255,255,0.3)'; e.currentTarget.style.color='#e8f4ff'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(255,255,255,0.14)'; e.currentTarget.style.color='rgba(200,225,255,0.7)'; }}
                >
                  ✉ Send Email
                </a>
              </div>
            </div>

            {/* Right side contact info */}
            <div style={{ minWidth:220 }} className="hide-mobile">
              <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
                {[
                  { icon:'📱', label:'WhatsApp', val:'+62 822-1056-0885' },
                  { icon:'✉️', label:'Email', val: EMAIL },
                  { icon:'📍', label:'Location', val:'Bojongsari, Depok, Indonesia' },
                  { icon:'🕐', label:'Response Time', val:'Within 24 hours' },
                ].map(({ icon, label, val }) => (
                  <div key={label} style={{ display:'flex', alignItems:'flex-start', gap:12 }}>
                    <div style={{
                      width:36, height:36, borderRadius:8, flexShrink:0,
                      background:'rgba(29,78,216,0.12)', border:'1px solid rgba(59,130,246,0.18)',
                      display:'flex', alignItems:'center', justifyContent:'center', fontSize:16,
                    }}>{icon}</div>
                    <div>
                      <div style={{ fontSize:10.5, color:'rgba(190,215,245,0.38)', fontWeight:500, letterSpacing:'0.08em', textTransform:'uppercase' }}>{label}</div>
                      <div style={{ fontSize:13, color:'rgba(200,225,250,0.72)', fontWeight:400, marginTop:2 }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3 mini cards */}
        <div style={{
          display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px,1fr))',
          gap:16,
          opacity: inView ? 1 : 0,
          transition:'opacity 0.7s 0.3s',
        }}>
          {[
            { icon:'📋', title:'Sample Order', desc:'Request a small sample batch to evaluate fish quality before committing to larger volumes.' },
            { icon:'📦', title:'Bulk Supply', desc:'For regular, large-volume supply with scheduled shipment — we structure a dedicated partnership agreement.' },
            { icon:'🌐', title:'Export Documentation', desc:'We handle health certificates, CITES documentation (if required), and all export paperwork.' },
          ].map(c=>(
            <div key={c.title} style={{
              background:'rgba(7,16,30,0.65)',
              border:'1px solid rgba(255,255,255,0.07)',
              borderRadius:13, padding:'22px 20px',
            }}>
              <div style={{ fontSize:22, marginBottom:12 }}>{c.icon}</div>
              <div style={{ fontSize:14, fontWeight:600, color:'#c8dff5', marginBottom:8 }}>{c.title}</div>
              <p style={{ fontSize:12.5, lineHeight:1.72, color:'rgba(170,200,235,0.48)', fontWeight:300 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
