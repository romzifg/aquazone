import { useInView } from '../hooks/useInView';
import { FACILITY, STATS } from '../data/content';

export default function Facility() {
  const [ref, inView] = useInView();
  const [statsRef, statsInView] = useInView();

  return (
    <section id="facility" style={{
      padding:'clamp(80px,10vw,110px) 28px',
      background:'linear-gradient(180deg, #050d16 0%, #071326 100%)',
      position:'relative',
    }}>
      <div style={{
        position:'absolute', top:0, left:0, right:0, height:1,
        background:'linear-gradient(90deg, transparent, rgba(245,158,11,0.18), transparent)',
      }}/>

      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        {/* Header */}
        <div ref={ref} style={{
          textAlign:'center', marginBottom:60,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(28px)',
          transition:'all 0.65s',
        }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:12, marginBottom:16 }}>
            <div style={{ height:1, width:40, background:'rgba(245,158,11,0.4)' }}/>
            <p style={{ fontSize:11, fontWeight:600, color:'#f59e0b', letterSpacing:'0.2em', textTransform:'uppercase' }}>
              Our Facility
            </p>
            <div style={{ height:1, width:40, background:'rgba(245,158,11,0.4)' }}/>
          </div>
          <h2 style={{
            fontSize:'clamp(28px,4.5vw,48px)', fontWeight:700,
            color:'#e8f4ff', lineHeight:1.12, letterSpacing:'-0.8px', marginBottom:16,
          }}>
            Built for Quality & Scale
          </h2>
          <p style={{
            fontSize:15.5, color:'rgba(180,210,245,0.5)',
            maxWidth:520, margin:'0 auto', fontWeight:300, lineHeight:1.8,
          }}>
            Our holding and quarantine facility in Bojongsari serves as the consolidation
            hub for all partner farmer fish before domestic or international shipment.
          </p>
        </div>

        {/* Two column layout */}
        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1fr',
          gap:'clamp(32px,5vw,64px)', alignItems:'center',
        }} className="facility-grid">
          {/* Left: facility illustration */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-28px)',
            transition:'all 0.8s 0.1s',
          }}>
            {/* Tank rack illustration */}
            <div style={{
              background:'linear-gradient(160deg, #061220 0%, #0a1c34 100%)',
              border:'1px solid rgba(59,130,246,0.12)',
              borderRadius:18, overflow:'hidden', position:'relative',
              aspectRatio:'4/3',
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 30%, rgba(29,78,216,0.07) 0%, transparent 65%)' }}/>
              <svg viewBox="0 0 420 320" style={{ width:'92%', position:'relative', zIndex:1 }}>
                {/* Tank rack rows — 3 rows × 5 tanks */}
                {[0,1,2].map(row => (
                  <g key={row} transform={`translate(0, ${row * 96})`}>
                    {/* Shelf */}
                    <rect x="10" y="85" width="400" height="6" rx="2" fill="rgba(30,50,80,0.8)"/>
                    {/* Support legs */}
                    <rect x="15" y="85" width="4" height={row < 2 ? 11 : 30} fill="rgba(30,50,80,0.6)"/>
                    <rect x="401" y="85" width="4" height={row < 2 ? 11 : 30} fill="rgba(30,50,80,0.6)"/>
                    {/* 5 tanks per row */}
                    {[0,1,2,3,4].map(col => {
                      const x = 18 + col * 78;
                      const fishColors = ['#3b82f6','#ef4444','#4ade80','#3b82f6','#f59e0b'];
                      const fc = fishColors[col];
                      return (
                        <g key={col}>
                          {/* Tank outline */}
                          <rect x={x} y="8" width="72" height="74" rx="4"
                            fill="rgba(10,30,55,0.7)" stroke="rgba(59,130,246,0.22)" strokeWidth="1"/>
                          {/* Water fill */}
                          <rect x={x+1} y="20" width="70" height="62" rx="3"
                            fill={`${fc}08`}/>
                          {/* Water surface shimmer */}
                          <line x1={x+4} y1="24" x2={x+68} y2="24"
                            stroke={`${fc}30`} strokeWidth="1.2"/>
                          {/* Mini fish school */}
                          {[0,1,2,3,4,5].map(fi => {
                            const fx = x + 10 + (fi%3)*19;
                            const fy = 35 + Math.floor(fi/3)*20;
                            return (
                              <g key={fi} transform={`translate(${fx},${fy})`}>
                                <ellipse cx="5" cy="0" rx="6" ry="2.2" fill={fc} opacity="0.75"/>
                                <polygon points="-2,-1.8 1,0 -2,1.8" fill={fc} opacity="0.55"/>
                                <circle cx="9.5" cy="-0.5" r="0.9" fill="rgba(255,255,255,0.85)"/>
                              </g>
                            );
                          })}
                          {/* Sponge filter */}
                          <rect x={x+58} y="55" width="8" height="18" rx="2"
                            fill="rgba(16,185,129,0.35)" stroke="rgba(16,185,129,0.4)" strokeWidth="0.8"/>
                          {/* Bubble line */}
                          {[0,1,2].map(bi=>(
                            <circle key={bi} cx={x+62} cy={40+bi*8} r="1.5"
                              fill="none" stroke="rgba(147,197,253,0.2)" strokeWidth="0.8"/>
                          ))}
                          {/* Tank number */}
                          <text x={x+5} y="18" fontSize="6" fill="rgba(147,197,253,0.4)"
                            fontFamily="Poppins, sans-serif">
                            {String(row*5+col+1).padStart(3,'0')}
                          </text>
                        </g>
                      );
                    })}
                  </g>
                ))}
                {/* Floor */}
                <rect x="10" y="285" width="400" height="6" rx="2" fill="rgba(20,40,70,0.6)"/>
                {/* Label */}
                <text x="210" y="308" fontSize="9" fill="rgba(147,197,253,0.3)"
                  textAnchor="middle" fontFamily="Poppins, sans-serif" letterSpacing="2">
                  HOLDING & QUARANTINE FACILITY · ±300 m²
                </text>
              </svg>
              {/* Corner badge */}
              <div style={{
                position:'absolute', top:14, right:14,
                background:'rgba(5,13,22,0.9)', border:'1px solid rgba(59,130,246,0.2)',
                borderRadius:9, padding:'10px 14px', backdropFilter:'blur(10px)',
              }}>
                <div style={{ fontSize:22, fontWeight:700, color:'#60a5fa', lineHeight:1, letterSpacing:'-0.4px' }}>500</div>
                <div style={{ fontSize:9.5, color:'rgba(190,215,245,0.42)', letterSpacing:'0.1em', textTransform:'uppercase', fontWeight:500, marginTop:2 }}>Tanks</div>
              </div>
            </div>
          </div>

          {/* Right: specs grid */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(28px)',
            transition:'all 0.8s 0.2s',
          }}>
            <p style={{ fontSize:11, fontWeight:600, color:'#f59e0b', letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:16 }}>
              Facility specs
            </p>
            <h3 style={{
              fontSize:'clamp(22px,3vw,34px)', fontWeight:700,
              color:'#e8f4ff', lineHeight:1.2, marginBottom:12, letterSpacing:'-0.4px',
            }}>
              Every detail is set up<br/>
              <span style={{ color:'#60a5fa' }}>for fish health.</span>
            </h3>
            <div style={{ width:44, height:2, background:'linear-gradient(90deg,#3b82f6,transparent)', marginBottom:28 }}/>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:32 }}>
              {FACILITY.map(f=>(
                <div key={f.label} style={{
                  background:'rgba(8,18,32,0.6)',
                  border:'1px solid rgba(255,255,255,0.07)',
                  borderRadius:11, padding:'16px 18px',
                }}>
                  <div style={{ fontSize:18, fontWeight:700, color:'#60a5fa', letterSpacing:'-0.3px', lineHeight:1 }}>{f.value}</div>
                  <div style={{ fontSize:11.5, fontWeight:600, color:'rgba(200,225,250,0.65)', marginTop:4 }}>{f.label}</div>
                  <div style={{ fontSize:11, color:'rgba(170,200,235,0.38)', fontWeight:300, marginTop:2 }}>{f.desc}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize:13.5, lineHeight:1.82, color:'rgba(180,210,245,0.5)', fontWeight:300 }}>
              Our facility is not just a holding area — it's a full conditioning and
              quarantine center. Every fish is observed, graded, and prepared before
              it leaves for any destination.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div ref={statsRef} style={{
          display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))',
          gap:18, marginTop:48,
          opacity: statsInView ? 1 : 0,
          transform: statsInView ? 'translateY(0)' : 'translateY(24px)',
          transition:'all 0.7s 0.1s',
        }}>
          {STATS.map(s=>(
            <div key={s.label} style={{
              background:'rgba(8,18,32,0.55)',
              border:'1px solid rgba(255,255,255,0.07)',
              borderRadius:13, padding:'24px 22px', textAlign:'center',
            }}>
              <div style={{ fontSize:32, fontWeight:800, color:'#f59e0b', letterSpacing:'-0.8px', lineHeight:1 }}>{s.value}</div>
              <div style={{ fontSize:13, fontWeight:600, color:'rgba(200,225,250,0.6)', marginTop:6 }}>{s.label}</div>
              <div style={{ fontSize:11.5, color:'rgba(170,200,235,0.36)', fontWeight:300, marginTop:3 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .facility-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
