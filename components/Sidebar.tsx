'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react';
import { latestEditorial, EditorialSection } from '@/data/editorial';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Abrir automáticamente en desktop
  useEffect(() => {
    if (!isMobile) setIsOpen(true);
  }, [isMobile]);

  const panelContent = (
    <>
      {/* Header */}
      <div style={{
        padding: '20px 20px 16px',
        borderBottom: '1px solid rgba(167, 139, 250, 0.15)',
        position: 'sticky',
        top: 0,
        background: '#0A0A0F',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: '1.2rem' }}>🌍</span>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.95rem',
              fontWeight: 700,
              color: '#F9FAFB',
              margin: 0,
              letterSpacing: '-0.01em',
            }}>
              Estado de la Humanidad
            </h2>
          </div>
          {/* Close button — solo móvil */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#9CA3AF',
                cursor: 'pointer',
                padding: 4,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <X size={20} />
            </button>
          )}
        </div>
        <p style={{
          fontSize: '0.7rem',
          color: '#9CA3AF',
          fontFamily: "'Inter', sans-serif",
          margin: '6px 0 10px 0',
          lineHeight: 1.4,
        }}>
          Análisis editorial basado en los últimos {latestEditorial.basedOnDays} días de noticias de IA
        </p>
        <div style={{
          height: 2,
          width: '100%',
          background: 'linear-gradient(90deg, #00E5FF, #A78BFA, #FF0080)',
          borderRadius: 1,
        }} />
      </div>

      {/* Editorial content */}
      <div style={{ padding: '16px 20px 20px', flex: 1 }}>
        {/* Date and title */}
        <div style={{ marginBottom: 16 }}>
          <span style={{
            fontSize: '0.65rem',
            color: '#00E5FF',
            fontFamily: "'Inter', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: 600,
          }}>
            {latestEditorial.dateDisplay}
          </span>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#F9FAFB',
            margin: '6px 0 8px',
            lineHeight: 1.35,
            letterSpacing: '-0.01em',
          }}>
            {latestEditorial.title}
          </h3>
          <p style={{
            fontSize: '0.72rem',
            color: '#9CA3AF',
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.5,
            margin: 0,
            fontStyle: 'italic',
          }}>
            {latestEditorial.excerpt}
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {latestEditorial.sections.map((section: EditorialSection, i: number) => (
            <div key={i} style={{
              padding: '12px',
              background: 'rgba(17, 24, 39, 0.6)',
              borderRadius: 8,
              border: '1px solid rgba(167, 139, 250, 0.08)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
                <span style={{ fontSize: '0.9rem' }}>{section.icon}</span>
                <h4 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: '#A78BFA',
                  margin: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  {section.title}
                </h4>
              </div>
              <p style={{
                fontSize: '0.7rem',
                color: '#D1D5DB',
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.55,
                margin: 0,
              }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Veredict highlight */}
        <div style={{
          marginTop: 16,
          padding: '12px',
          background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.08), rgba(167, 139, 250, 0.08))',
          borderRadius: 8,
          border: '1px solid rgba(0, 229, 255, 0.15)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <span style={{ fontSize: '0.8rem' }}>🔮</span>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 600,
              color: '#00E5FF',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Veredicto
            </span>
          </div>
          <p style={{
            fontSize: '0.72rem',
            color: '#F9FAFB',
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.5,
            margin: 0,
            fontWeight: 500,
          }}>
            {latestEditorial.veredict}
          </p>
        </div>

        {/* Meta */}
        <div style={{
          marginTop: 16,
          paddingTop: 12,
          borderTop: '1px solid rgba(167, 139, 250, 0.1)',
        }}>
          <p style={{
            fontSize: '0.6rem',
            color: '#6B7280',
            fontFamily: "'Inter', sans-serif",
            margin: 0,
          }}>
            🤖 {latestEditorial.generatedBy}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        padding: '10px 20px',
        borderTop: '1px solid rgba(167, 139, 250, 0.1)',
        position: 'sticky',
        bottom: 0,
        background: '#0A0A0F',
      }}>
        <a
          href="https://ainews-site.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '0.6rem',
            color: '#6B7280',
            fontFamily: "'Inter', sans-serif",
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <ExternalLink size={10} />
          AI News Curator
        </a>
      </div>
    </>
  );

  // ─── MÓVIL: overlay full-screen ────────────────────────────
  if (isMobile) {
    return (
      <>
        {/* Botón flotante para abrir — visible cuando está cerrado */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            style={{
              position: 'fixed',
              bottom: 20,
              right: 16,
              zIndex: 50,
              background: 'linear-gradient(135deg, #00E5FF, #A78BFA)',
              border: 'none',
              borderRadius: 28,
              padding: '10px 16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              boxShadow: '0 4px 24px rgba(0, 229, 255, 0.35)',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#0A0A0F',
            }}
          >
            <span style={{ fontSize: '1rem' }}>🌍</span>
            Opinión IA
          </button>
        )}

        {/* Overlay + Panel */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.6)',
                zIndex: 60,
                backdropFilter: 'blur(2px)',
              }}
            />
            {/* Panel */}
            <aside
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '100%',
                maxWidth: 400,
                height: '100dvh',
                background: '#0A0A0F',
                zIndex: 61,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                animation: 'slideInRight 0.25s ease-out',
                boxShadow: '-8px 0 32px rgba(0, 0, 0, 0.5)',
              }}
            >
              {panelContent}
            </aside>
          </>
        )}

        <style jsx>{`
          @keyframes slideInRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
        `}</style>
      </>
    );
  }

  // ─── DESKTOP: sidebar fija a la derecha ────────────────────
  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          top: '50%',
          right: isOpen ? 340 : 0,
          transform: 'translateY(-50%)',
          zIndex: 50,
          background: 'linear-gradient(135deg, #00E5FF, #A78BFA)',
          border: 'none',
          borderRadius: '8px 0 0 8px',
          padding: '16px 6px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'right 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 0 20px rgba(0, 229, 255, 0.2)',
        }}
        title={isOpen ? 'Cerrar panel' : 'Estado de la Humanidad'}
      >
        {isOpen ? (
          <ChevronRight size={18} color="#0A0A0F" />
        ) : (
          <ChevronLeft size={18} color="#0A0A0F" />
        )}
      </button>

      {/* Sidebar panel */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: 340,
          height: '100vh',
          background: '#0A0A0F',
          borderLeft: '1px solid rgba(167, 139, 250, 0.15)',
          zIndex: 40,
          overflowY: 'auto',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {panelContent}
      </aside>
    </>
  );
}
