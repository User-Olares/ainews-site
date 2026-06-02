import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { briefs } from '../data/briefs';

function getDomain(url: string): string {
  try {
    const hostname = new URL(url).hostname;
    return hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

function getRootUrl(url: string): string {
  try {
    const u = new URL(url);
    return `${u.protocol}//${u.hostname}`;
  } catch {
    return '#';
  }
}

export default function Home() {
  const today = new Date().toISOString().split('T')[0];
  const todayBrief = briefs.find(b => b.date === today) || briefs[0];

  return (
    <main className="min-h-screen" style={{ background: '#FFFAF5', color: '#1a1a1a', fontFamily: "'Merriweather', 'Georgia', serif" }}>
      {/* Header — elegante, tipo periódico premium */}
      <header style={{ borderBottom: '2px solid #1B2A4A' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 24px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <h1 style={{
              fontFamily: "'Merriweather', 'Georgia', serif",
              fontSize: '2rem',
              fontWeight: 700,
              color: '#1B2A4A',
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              AI News Curator
            </h1>
            <span style={{
              fontSize: '0.75rem',
              color: '#8B7355',
              fontFamily: "'Inter', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              Edición diaria
            </span>
          </div>
          <div style={{
            height: 1,
            background: 'linear-gradient(to right, #C4A962 0%, transparent 100%)',
            marginBottom: 8
          }} />
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Calendar size={14} style={{ color: '#8B7355' }} />
              <span style={{ fontSize: '0.95rem', color: '#4a4a4a', fontFamily: "'Inter', sans-serif" }}>
                {todayBrief.dateDisplay}
              </span>
            </div>
            <span style={{ color: '#C4A962', fontSize: '1rem' }}>·</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Clock size={12} style={{ color: '#8B7355' }} />
              <span style={{ fontSize: '0.85rem', color: '#8B7355', fontFamily: "'Inter', sans-serif" }}>
                Actualizado: {todayBrief.updateTime}
              </span>
            </div>
            <span style={{ color: '#C4A962', fontSize: '1rem' }}>·</span>
            <span style={{
              fontSize: '0.8rem',
              color: '#1B2A4A',
              background: 'rgba(27,42,74,0.06)',
              padding: '2px 10px',
              borderRadius: 20,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500
            }}>
              {todayBrief.newsCount} noticias
            </span>
          </div>
        </div>
      </header>

      {/* Top Pick — destacado con imagen grande */}
      {todayBrief.topPick && (() => {
        const tp = todayBrief.topPick;
        const tpDomain = getDomain(tp.sourceUrl);
        const tpRoot = getRootUrl(tp.sourceUrl);
        return (
          <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>
            <div style={{
              display: 'flex',
              gap: 32,
              borderRadius: 6,
              overflow: 'hidden',
              border: '1px solid #E8DFD0',
              background: '#FFFDF9',
            }}>
              {/* Imagen clickeable → artículo completo */}
              <a
                href={tp.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="image-link"
                style={{
                  flex: '0 0 400px',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: 280,
                  display: 'block',
                  textDecoration: 'none'
                }}
              >
                <img
                  src={tp.imageUrl}
                  alt={tp.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  background: '#1B2A4A',
                  color: '#FFFAF5',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '4px 10px',
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.08em',
                }}>
                  🔥 TOP PICK
                </div>
                {/* Badge de fuente en esquina inferior izquierda de la imagen */}
                {tpDomain && (
                  <a
                    href={tpRoot}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      background: 'rgba(27, 42, 74, 0.88)',
                      color: '#FFFAF5',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      padding: '6px 12px',
                      fontFamily: "'Inter', sans-serif",
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      borderTopRightRadius: 4,
                    }}
                    title={`Ir a ${tpDomain}`}
                  >
                    <ExternalLink size={10} /> {tpDomain}
                  </a>
                )}
              </a>
              <div style={{ flex: 1, padding: '28px 28px 28px 0' }}>
                <span style={{
                  fontSize: '0.7rem',
                  color: '#C4A962',
                  fontFamily: "'Inter', sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  fontWeight: 600
                }}>
                  {tp.number} · {tp.format}
                </span>
                {/* Titular clickeable → artículo completo */}
                <h2 style={{
                  fontFamily: "'Merriweather', 'Georgia', serif",
                  fontSize: '1.65rem',
                  fontWeight: 700,
                  lineHeight: 1.3,
                  marginTop: 6,
                  marginBottom: 12
                }}>
                  <a
                    href={tp.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="headline-link"
                    style={{ color: '#1a1a1a', textDecoration: 'none' }}
                  >
                    {tp.title}
                  </a>
                </h2>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#5a5a5a',
                  lineHeight: 1.65,
                  fontFamily: "'Georgia', serif",
                  marginBottom: 16
                }}>
                  {tp.summary}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontSize: '0.8rem', color: '#C4A962', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                    🏆 {tp.score} pts
                  </span>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* News Grid — tarjetas con imagen a la izquierda */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 40px' }}>
        <div style={{
          borderTop: '1px solid #E8DFD0',
          paddingTop: 28,
          marginBottom: 20
        }}>
          <h2 style={{
            fontFamily: "'Merriweather', 'Georgia', serif",
            fontSize: '1.3rem',
            fontWeight: 700,
            color: '#1B2A4A',
            marginBottom: 4
          }}>
            Más noticias
          </h2>
          <div style={{ height: 2, width: 48, background: '#C4A962' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {todayBrief.news.map((item, i) => {
            const domain = getDomain(item.sourceUrl);
            const rootUrl = getRootUrl(item.sourceUrl);
            return (
              <article
                key={i}
                style={{
                  display: 'flex',
                  gap: 20,
                  padding: 0,
                  borderBottom: '1px solid #EEE5D5',
                  paddingBottom: 20,
                }}
              >
                {/* Imagen clickeable → artículo completo */}
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="image-link"
                  style={{
                    flex: '0 0 180px',
                    height: 120,
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                    background: '#F0EBE0',
                    display: 'block',
                    textDecoration: 'none'
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      top: 0,
                      left: 0
                    }}
                  />
                  {/* Badge de fuente en esquina inferior izquierda de la imagen */}
                  {domain && (
                    <a
                      href={rootUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        background: 'rgba(27, 42, 74, 0.85)',
                        color: '#FFFAF5',
                        fontSize: '0.6rem',
                        fontWeight: 600,
                        padding: '3px 8px',
                        fontFamily: "'Inter', sans-serif",
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        borderTopRightRadius: 3,
                      }}
                      title={`Ir a ${domain}`}
                    >
                      <ExternalLink size={9} /> {domain}
                    </a>
                  )}
                </a>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <span style={{
                      fontSize: '0.65rem',
                      fontFamily: "'Inter', sans-serif",
                      color: '#C4A962',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}>
                      {item.number}
                    </span>
                    <span style={{
                      fontSize: '0.65rem',
                      fontFamily: "'Inter', sans-serif",
                      background: '#F5F0E5',
                      padding: '1px 8px',
                      borderRadius: 3,
                      color: '#8B7355'
                    }}>
                      {item.score} pts
                    </span>
                  </div>
                  {/* Titular clickeable → artículo completo */}
                  <h3 style={{
                    fontFamily: "'Merriweather', 'Georgia', serif",
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    lineHeight: 1.35,
                    marginBottom: 6
                  }}>
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="headline-link"
                      style={{ color: '#1a1a1a', textDecoration: 'none' }}
                    >
                      {item.title}
                    </a>
                  </h3>
                  <p style={{
                    fontSize: '0.82rem',
                    color: '#6a6a6a',
                    lineHeight: 1.5,
                    fontFamily: "'Georgia', serif",
                    marginBottom: 8
                  }}>
                    {item.summary.length > 150 ? item.summary.slice(0, 150) + '...' : item.summary}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{
                      fontSize: '0.65rem',
                      color: '#8B7355',
                      fontFamily: "'Inter', sans-serif",
                      background: '#F5F0E5',
                      padding: '1px 8px',
                      borderRadius: 3
                    }}>
                      {item.format}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Subtle footer */}
      <footer style={{
        borderTop: '2px solid #1B2A4A',
        padding: '24px',
        textAlign: 'center',
        background: '#FFFDF9'
      }}>
        <p style={{
          fontSize: '0.75rem',
          color: '#8B7355',
          fontFamily: "'Inter', sans-serif",
          margin: '0 0 4px 0'
        }}>
          AI News Curator · Las noticias de inteligencia artificial que importan
        </p>
        <p style={{
          fontSize: '0.7rem',
          color: '#b0a090',
          fontFamily: "'Inter', sans-serif",
          margin: 0
        }}>
          © {new Date().getFullYear()} AI News Curator
        </p>
      </footer>
    </main>
  );
}
