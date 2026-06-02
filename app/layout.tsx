import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'AI News Curator — Daily AI News',
  description: 'Las noticias de inteligencia artificial más impactantes, curadas y entregadas cada día en español.',
  keywords: ['AI', 'inteligencia artificial', 'noticias IA', 'news', 'curaduría'],
  openGraph: {
    title: 'AI News Curator',
    description: 'Noticias de IA curadas diariamente.',
    siteName: 'AI News Curator',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;600;700&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, background: '#FFFAF5', color: '#1a1a1a', fontFamily: "'Merriweather', 'Georgia', serif" }}>
        <div className="main-content" style={{ transition: 'padding-right 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
          {children}
        </div>
        <Sidebar />
      </body>
    </html>
  );
}
