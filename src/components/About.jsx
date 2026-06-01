import { useInView } from '../hooks/useInView';
import { WA_LINK } from '../data/content';

const TIMELINE = [
  { year:'2015', title:'Started as a Farmer', desc:'Began as a tetra fish farmer in Bojongsari, learning the craft firsthand from the ground up.' },
  { year:'2017', title:'Expanded to Industry', desc:'Entered the ornamental fish industry more formally, building relationships with local farmers and understanding the supply chain.' },
  { year:'2018', title:'Became a Supplier', desc:'Started working with partner farmers and supplying tetra fish to various exporters across Indonesia.' },
  { year:'2024', title:'Building for Export', desc:'Established PT. Mutiara Tetra Indonesia with the goal of directly serving international buyers and building long-term global partnerships.' },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" style={{
      padding:'clamp(80px,10vw,110px) 28px',
      background:'linear-gradient(180deg, #071326 0%, #050d16 100%)',
      position:'relative', overflow:'hidden',
    }}>
      <div style={{
        position:'absolute', top:0, left:0, right:0, height:1,
        background:'linear-gradient(90deg, transparent, rgba(59,130,246,0.14), transparent)',
      }}/>

      <div ref={ref} style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1fr',
          gap:'clamp(36px,5vw,72px)', alignItems:'start',
        }} className="about-grid">

          {/* Left: story */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-28px)',
            transition:'all 0.8s 0.1s',
          }}>
            <p style={{ fontSize:11, fontWeight:600, color:'#60a5fa', letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:16 }}>
              Our Story
            </p>
            <h2 style={{
              fontSize:'clamp(26px,3.6vw,42px)', fontWeight:700,
              color:'#e8f4ff', lineHeight:1.18, marginBottom:18, letterSpacing:'-0.5px',
            }}>
              From a farm in Bojongsari<br/>
              <span style={{ color:'#60a5fa' }}>to the global market.</span>
            </h2>
            <div style={{ width:44, height:2, background:'linear-gradient(90deg,#3b82f6,transparent)', marginBottom:26 }}/>

            <p style={{ fontSize:14.5, lineHeight:1.9, color:'rgba(185,212,242,0.58)', marginBottom:18, fontWeight:300 }}>
              Our journey started in 2015 as a tetra fish farmer in Bojongsari — one of Indonesia's
              most established tetra breeding regions. Over the years, we grew from a single farm
              into a network-based supplier supporting over 20 partner farmers and breeders.
            </p>
            <p style={{ fontSize:14.5, lineHeight:1.9, color:'rgba(185,212,242,0.58)', marginBottom:28, fontWeight:300 }}>
              We know this industry from the inside. We've seen how local farmers — despite producing
              world-class fish — often lack access to international markets and end up selling at prices
              set by large exporters. That's why we built PT. Mutiara Tetra Indonesia: to bring
              Indonesian tetra directly to global buyers, at fair value for everyone in the chain.
            </p>

            {/* Why Indonesia box */}
            <div style={{
              background:'rgba(8,20,38,0.7)',
              border:'1px solid rgba(59,130,246,0.15)',
              borderRadius:12, padding:'20px 22px', marginBottom:28,
            }}>
              <div style={{ fontSize:13, fontWeight:600, color:'#93c5fd', marginBottom:10 }}>
                🌏 Why Indonesian Tetra?
              </div>
              <p style={{ fontSize:13, lineHeight:1.78, color:'rgba(180,210,245,0.52)', fontWeight:300 }}>
                Indonesia's tropical climate provides naturally stable temperatures year-round.
                The Bojongsari area specifically has decades of tetra farming history — producing
                experienced farmers, strong breeding techniques, consistent coloration, and
                large-scale capacity that few regions in the world can match.
              </p>
            </div>

            <a href={WA_LINK} target="_blank" rel="noreferrer" style={{
              display:'inline-flex', alignItems:'center', gap:9,
              background:'#1d4ed8', color:'#fff',
              padding:'13px 28px', borderRadius:8,
              fontWeight:600, fontSize:14, textDecoration:'none',
              transition:'background 0.2s, transform 0.2s',
            }}
              onMouseEnter={e=>{ e.currentTarget.style.background='#2563eb'; e.currentTarget.style.transform='translateY(-2px)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.background='#1d4ed8'; e.currentTarget.style.transform=''; }}
            >
              Get in Touch →
            </a>
          </div>

          {/* Right: timeline */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(28px)',
            transition:'all 0.8s 0.2s',
          }}>
            <p style={{ fontSize:11, fontWeight:600, color:'#f59e0b', letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:24 }}>
              Timeline
            </p>

            <div style={{ position:'relative', paddingLeft:36 }}>
              {/* Vertical line */}
              <div style={{
                position:'absolute', left:10, top:8, bottom:8,
                width:1, background:'linear-gradient(to bottom, #3b82f6, rgba(59,130,246,0.1))',
              }}/>

              {TIMELINE.map((item, i) => (
                <div key={item.year} style={{ marginBottom: i < TIMELINE.length-1 ? 36 : 0, position:'relative' }}>
                  {/* Dot */}
                  <div style={{
                    position:'absolute', left:-36+10-6, top:4,
                    width:12, height:12, borderRadius:'50%',
                    background: i === TIMELINE.length-1 ? '#f59e0b' : '#1d4ed8',
                    border:`2px solid ${i === TIMELINE.length-1 ? '#f59e0b' : '#3b82f6'}`,
                    boxShadow:`0 0 8px ${i === TIMELINE.length-1 ? 'rgba(245,158,11,0.4)' : 'rgba(59,130,246,0.35)'}`,
                  }}/>
                  <div style={{ fontSize:11.5, fontWeight:600, color: i === TIMELINE.length-1 ? '#f59e0b' : '#60a5fa', letterSpacing:'0.1em', marginBottom:4 }}>
                    {item.year}
                  </div>
                  <div style={{ fontSize:15, fontWeight:600, color:'#c8dff5', marginBottom:6 }}>{item.title}</div>
                  <p style={{ fontSize:13.5, lineHeight:1.72, color:'rgba(170,200,235,0.5)', fontWeight:300 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Capacity highlight */}
            <div style={{
              marginTop:36, padding:'20px 22px',
              background:'linear-gradient(135deg, rgba(29,78,216,0.12), rgba(29,78,216,0.06))',
              border:'1px solid rgba(59,130,246,0.2)',
              borderRadius:12,
            }}>
              <div style={{ display:'flex', gap:24, flexWrap:'wrap' }}>
                <div>
                  <div style={{ fontSize:26, fontWeight:800, color:'#60a5fa', letterSpacing:'-0.5px', lineHeight:1 }}>~2M</div>
                  <div style={{ fontSize:11, color:'rgba(190,215,245,0.45)', marginTop:4, fontWeight:400 }}>fish / month capacity</div>
                </div>
                <div style={{ width:1, background:'rgba(59,130,246,0.2)' }}/>
                <div>
                  <div style={{ fontSize:26, fontWeight:800, color:'#60a5fa', letterSpacing:'-0.5px', lineHeight:1 }}>20+</div>
                  <div style={{ fontSize:11, color:'rgba(190,215,245,0.45)', marginTop:4, fontWeight:400 }}>partner farmers & breeders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
