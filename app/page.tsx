import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { briefs } from '../data/briefs';

function getDomain(url: string): string {
  try {
    const hostname = new URL(url).hostname;
    return hostname.replace(/^www\./, '');
  } catch { return ''; }
}

function getRootUrl(url: string): string {
  try {
    const u = new URL(url);
    return `${u.protocol}//${u.hostname}`;
  } catch { return '#'; }
}

export default function Home() {
  const today = new Date().toISOString().split('T')[0];
  const todayBrief = briefs.find(b => b.date === today) || briefs[0];

  return (
    <main className="min-h-screen" style={{ background: '#FFFAF5', color: '#1a1a1a', fontFamily: "'Merriweather', 'Georgia', serif" }}>
      {/* Header */}
      <header style={{ borderBottom: '2px solid #1B2A4A' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 24px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <h1 style={{ fontFamily: "'Merriweather', 'Georgia', serif", fontSize: '2rem', fontWeight: 700, color: '#1B2A4A', letterSpacing: '-0.02em', margin: 0 }}>
              AI News Curator
            </h1>
            <span style={{ fontSize: '0.75rem', color: '#8B7355', fontFamily: "'Inter', sans-serif", textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Edición diaria
            </span>
          </div>
          <div style={{ height: 1, background: 'linear-gradient(to right, #C4A962 0%, transparent 100%)', marginBottom: 8 }} />
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Calendar size={14} style={{ color: '#8B7355' }} />
              <span style={{ fontSize: '0.95rem', color: '#4a4a4a', fontFamily: "'Inter', sans-serif" }}>{todayBrief.dateDisplay}</span>
            </div>
            <span style={{ color: '#C4A962', fontSize: '1rem' }}>·</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Clock size={12} style={{ color: '#8B7355' }} />
              <span style={{ fontSize: '0.85rem', color: '#8B7355', fontFamily: "'Inter', sans-serif" }}>Actualizado: {todayBrief.updateTime}</span>
            </div>
            <span style={{ color: '#C4A962', fontSize: '1rem' }}>·</span>
            <span style={{ fontSize: '0.8rem', color: '#1B2A4A', background: 'rgba(27,42,74,0.06)', padding: '2px 10px', borderRadius: 20, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
              {todayBrief.newsCount} noticias · 11 verticales
            </span>
          </div>
        </div>
      </header>

      {/* Top Pick */}
      {todayBrief.topPick && (() => {
        const tp = todayBrief.topPick;
        const tpDomain = getDomain(tp.sourceUrl);
        const tpRoot = getRootUrl(tp.sourceUrl);
        return (
          <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>
            <div style={{ display: 'flex', gap: 32, borderRadius: 6, overflow: 'hidden', border: '1px solid #E8DFD0', background: '#FFFDF9' }}>
              <a href={tp.sourceUrl} target="_blank" rel="noopener noreferrer" className="image-link"
                 style={{ flex: '0 0 400px', position: 'relative', overflow: 'hidden', minHeight: 280, display: 'block', textDecoration: 'none' }}>
                <img src={tp.imageUrl} alt={tp.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                <div style={{ position: 'absolute', top: 12, left: 12, background: '#1B2A4A', color: '#FFFAF5', fontSize: '0.7rem', fontWeight: 700, padding: '4px 10px', fontFamily: "'Inter', sans-serif", letterSpacing: '0.08em' }}>
                  DESTACADO
                </div>
                {tpDomain && (
                  <a href={tpRoot} target="_blank" rel="noopener noreferrer"
                    style={{ position: 'absolute', bottom: 0, left: 0, background: 'rgba(27,42,74,0.88)', color: '#FFFAF5', fontSize: '0.7rem', fontWeight: 600, padding: '6px 12px', fontFamily: "'Inter', sans-serif", textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4, borderTopRightRadius: 4 }}>
                    <ExternalLink size={10} /> {tpDomain}
                  </a>
                )}
              </a>
              <div style={{ flex: 1, padding: '28px 28px 28px 0' }}>
                <span style={{ fontSize: '0.7rem', color: '#C4A962', fontFamily: "'Inter', sans-serif", textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
                  {tp.number} · {tp.format}
                </span>
                <h2 style={{ fontFamily: "'Merriweather', 'Georgia', serif", fontSize: '1.65rem', fontWeight: 700, lineHeight: 1.3, marginTop: 6, marginBottom: 12 }}>
                  <a href={tp.sourceUrl} target="_blank" rel="noopener noreferrer" className="headline-link"
                    style={{ color: '#1a1a1a', textDecoration: 'none' }}>{tp.title}</a>
                </h2>
                <p style={{ fontSize: '0.95rem', color: '#5a5a5a', lineHeight: 1.65, fontFamily: "'Georgia', serif", marginBottom: 16 }}>
                  {tp.summary}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontSize: '0.8rem', color: '#C4A962', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{tp.score} pts</span>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* Scout Groups */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 40px' }}>
        <div style={{ borderTop: '1px solid #E8DFD0', paddingTop: 28, marginBottom: 28 }}>
          <h2 style={{ fontFamily: "'Merriweather', 'Georgia', serif", fontSize: '1.3rem', fontWeight: 700, color: '#1B2A4A', marginBottom: 4 }}>
            Las 33 noticias del dia · 11 verticales
          </h2>
          <div style={{ height: 2, width: 48, background: '#C4A962' }} />
        </div>

        {todayBrief.scouts && todayBrief.scouts.map(function(scout, si) {
          return (
            <div key={si} style={{ marginBottom: 36 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, paddingBottom: 8, borderBottom: '1px solid #E8DFD0' }}>
                <span style={{ fontSize: '1.5rem' }}>{scout.emoji}</span>
                <h3 style={{ fontFamily: "'Merriweather', 'Georgia', serif", fontSize: '1.15rem', fontWeight: 700, color: scout.color || '#1B2A4A', margin: 0 }}>
                  {scout.name}
                </h3>
                <span style={{ fontSize: '0.75rem', color: '#8B7355', fontFamily: "'Inter', sans-serif", background: '#F5F0E5', padding: '1px 8px', borderRadius: 10 }}>
                  {scout.news.length} noticias
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {scout.news.map(function(item, i) {
                  const domain = getDomain(item.sourceUrl);
                  const rootUrl = getRootUrl(item.sourceUrl);
                  return (
                    <article key={i} style={{ display: 'flex', gap: 20, padding: 0, borderBottom: '1px solid #F0EBE0', paddingBottom: 14 }}>
                      <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="image-link"
                        style={{ flex: '0 0 160px', height: 105, borderRadius: 4, overflow: 'hidden', position: 'relative', background: '#F0EBE0', display: 'block', textDecoration: 'none' }}>
                        <img src={item.imageUrl} alt={item.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                        {domain && (
                          <a href={rootUrl} target="_blank" rel="noopener noreferrer"
                            style={{ position: 'absolute', bottom: 0, left: 0, background: 'rgba(27,42,74,0.85)', color: '#FFFAF5', fontSize: '0.55rem', fontWeight: 600, padding: '2px 6px', fontFamily: "'Inter', sans-serif", textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 2, borderTopRightRadius: 3 }}>
                            <ExternalLink size={8} /> {domain}
                          </a>
                        )}
                      </a>
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                          <span style={{ fontSize: '0.65rem', fontFamily: "'Inter', sans-serif", color: scout.color || '#C4A962', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            {item.number}
                          </span>
                          <span style={{ fontSize: '0.6rem', fontFamily: "'Inter', sans-serif", background: '#F5F0E5', padding: '1px 6px', borderRadius: 3, color: '#8B7355' }}>
                            {item.score} pts
                          </span>
                        </div>
                        <h3 style={{ fontFamily: "'Merriweather', 'Georgia', serif", fontSize: '1rem', fontWeight: 600, lineHeight: 1.35, marginBottom: 4 }}>
                          <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="headline-link"
                            style={{ color: '#1a1a1a', textDecoration: 'none' }}>{item.title}</a>
                        </h3>
                        <p style={{ fontSize: '0.8rem', color: '#6a6a6a', lineHeight: 1.5, fontFamily: "'Georgia', serif", marginBottom: 4 }}>
                          {item.summary.length > 130 ? item.summary.slice(0, 130) + '...' : item.summary}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Vercel link */}
        <div style={{ marginTop: 40, padding: '20px', background: '#FFFDF9', border: '1px solid #E8DFD0', borderRadius: 6, textAlign: 'center' }}>
          <p style={{ fontSize: '0.85rem', color: '#4a4a4a', fontFamily: "'Inter', sans-serif", margin: 0 }}>
            Edicion completa · 8 de junio 2026 · 12:00 AST
          </p>
          <p style={{ fontSize: '0.8rem', color: '#8B7355', fontFamily: "'Inter', sans-serif", margin: '8px 0 0 0' }}>
            <a href="https://ainews-site.vercel.app" target="_blank" rel="noopener noreferrer"
              style={{ color: '#1B2A4A', textDecoration: 'underline', fontWeight: 600 }}>
              Ver edicion completa ainews-site.vercel.app
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '2px solid #1B2A4A', padding: '24px', textAlign: 'center', background: '#FFFDF9' }}>
        <p style={{ fontSize: '0.75rem', color: '#8B7355', fontFamily: "'Inter', sans-serif", margin: '0 0 4px 0' }}>
          AI News Curator · 33 noticias curadas por 11 scouts en espanol
        </p>
        <p style={{ fontSize: '0.7rem', color: '#b0a090', fontFamily: "'Inter', sans-serif", margin: 0 }}>
          &copy; {new Date().getFullYear()} AI News Curator · Ediciones 06:00 · 12:00 · 18:00 · 00:00 AST
        </p>
        <p style={{ fontSize: '0.7rem', color: '#C4A962', fontFamily: "'Inter', sans-serif", margin: '6px 0 0 0' }}>
          <a href="https://ainews-site.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{ color: '#1B2A4A', fontWeight: 600, textDecoration: 'none' }}>
            ainews-site.vercel.app
          </a>
        </p>
      </footer>
    </main>
  );
}