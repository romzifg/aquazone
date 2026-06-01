import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { FAQ } from '../data/content';

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <div style={{
      background:'rgba(7,16,30,0.65)',
      border:`1px solid ${isOpen ? 'rgba(59,130,246,0.28)' : 'rgba(255,255,255,0.07)'}`,
      borderRadius:12, overflow:'hidden',
      transition:'border-color 0.25s',
    }}>
      <button onClick={onToggle} style={{
        width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'18px 22px', background:'none', border:'none', cursor:'pointer',
        textAlign:'left', gap:16,
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:14 }}>
          <div style={{
            width:28, height:28, borderRadius:7, flexShrink:0,
            background: isOpen ? 'rgba(29,78,216,0.2)' : 'rgba(255,255,255,0.04)',
            border:`1px solid ${isOpen ? 'rgba(59,130,246,0.35)' : 'rgba(255,255,255,0.08)'}`,
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:11, fontWeight:700, color: isOpen ? '#60a5fa' : 'rgba(190,215,245,0.4)',
            transition:'all 0.25s',
          }}>
            {String(index+1).padStart(2,'0')}
          </div>
          <span style={{
            fontSize:14.5, fontWeight: isOpen ? 600 : 400,
            color: isOpen ? '#e8f4ff' : 'rgba(200,225,250,0.72)',
            transition:'color 0.25s',
            lineHeight:1.45,
          }}>{item.q}</span>
        </div>
        <div style={{
          width:22, height:22, borderRadius:'50%', flexShrink:0,
          background: isOpen ? 'rgba(29,78,216,0.2)' : 'rgba(255,255,255,0.04)',
          border:`1px solid ${isOpen ? 'rgba(59,130,246,0.3)' : 'rgba(255,255,255,0.08)'}`,
          display:'flex', alignItems:'center', justifyContent:'center',
          color: isOpen ? '#60a5fa' : 'rgba(190,215,245,0.4)',
          fontSize:14, transition:'all 0.3s',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
        }}>
          ↓
        </div>
      </button>

      <div style={{
        maxHeight: isOpen ? '300px' : '0',
        overflow:'hidden',
        transition:'max-height 0.35s ease',
      }}>
        <div style={{
          padding:'0 22px 20px 64px',
          borderTop:`1px solid rgba(255,255,255,0.05)`,
          paddingTop:16,
        }}>
          <p style={{
            fontSize:13.5, lineHeight:1.82,
            color:'rgba(175,205,240,0.55)', fontWeight:300,
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
      padding:'clamp(80px,10vw,110px) 28px',
      background:'linear-gradient(180deg, #050d16 0%, #071326 100%)',
      position:'relative',
    }}>
      <div style={{
        position:'absolute', top:0, left:0, right:0, height:1,
        background:'linear-gradient(90deg, transparent, rgba(59,130,246,0.14), transparent)',
      }}/>

      <div style={{ maxWidth:860, margin:'0 auto' }}>
        <div ref={ref} style={{
          textAlign:'center', marginBottom:52,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(28px)',
          transition:'all 0.65s',
        }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:12, marginBottom:16 }}>
            <div style={{ height:1, width:40, background:'rgba(59,130,246,0.4)' }}/>
            <p style={{ fontSize:11, fontWeight:600, color:'#60a5fa', letterSpacing:'0.2em', textTransform:'uppercase' }}>
              FAQ
            </p>
            <div style={{ height:1, width:40, background:'rgba(59,130,246,0.4)' }}/>
          </div>
          <h2 style={{
            fontSize:'clamp(26px,4vw,44px)', fontWeight:700,
            color:'#e8f4ff', lineHeight:1.15, letterSpacing:'-0.7px', marginBottom:14,
          }}>
            Common Questions
          </h2>
          <p style={{
            fontSize:15, color:'rgba(180,210,245,0.48)',
            maxWidth:440, margin:'0 auto', fontWeight:300, lineHeight:1.8,
          }}>
            Everything you need to know before placing an inquiry or order.
          </p>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          {FAQ.map((item, i) => (
            <FAQItem
              key={i} item={item} index={i}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
