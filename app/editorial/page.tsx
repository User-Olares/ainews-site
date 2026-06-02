import { Calendar, ArrowLeft } from "lucide-react";
import { editorialFull } from "@/data/editorial-full";
import Link from "next/link";

export default function EditorialPage() {
  const ed = editorialFull;

  return (
    <main style={{ minHeight: "100vh", background: "#FFFAF5", color: "#1a1a1a", fontFamily: "'Merriweather', Georgia, serif" }}>
      <div style={{ borderBottom: "1px solid rgba(27,42,74,0.1)", background: "white", padding: "12px 24px", position: "sticky", top: 0, zIndex: 10 }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#1B2A4A", textDecoration: "none", fontSize: "0.85rem", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
          <ArrowLeft size={16} /> AI News Curator
        </Link>
      </div>

      <article style={{ maxWidth: "720px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <header style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: "0.75rem", color: "#C4A962", fontFamily: "'Inter', sans-serif", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, background: "rgba(196,169,98,0.08)", padding: "4px 12px", borderRadius: 4 }}>Opinion IA</span>
            <span style={{ fontSize: "0.75rem", color: "#8B7355", fontFamily: "'Inter', sans-serif" }}>{ed.dateDisplay}</span>
          </div>
          <h1 style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: "2.5rem", fontWeight: 700, color: "#1B2A4A", lineHeight: 1.25, letterSpacing: "-0.02em", margin: "0 0 16px 0" }}>{ed.title}</h1>
          <p style={{ fontSize: "1.15rem", color: "#5a5a5a", lineHeight: 1.7, fontStyle: "italic", marginBottom: 24 }}>{ed.excerpt}</p>
          <div style={{ height: 2, background: "linear-gradient(to right, #C4A962, transparent)", marginBottom: 8 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "0.8rem", color: "#8B7355", fontFamily: "'Inter', sans-serif" }}>
            <Calendar size={14} />
            <span>Basado en {ed.basedOnDays} dias de noticias de IA</span>
            <span>·</span>
            <span>🤖 {ed.generatedBy}</span>
          </div>
        </header>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {ed.sections.map((section) => (
            <section key={section.id}>
              <h2 style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: "1.4rem", fontWeight: 600, color: "#1B2A4A", margin: "0 0 14px 0", display: "flex", alignItems: "center", gap: 10, paddingBottom: 8, borderBottom: "1px solid rgba(196,169,98,0.2)" }}>
                <span style={{ fontSize: "1.3rem" }}>{section.icon}</span>
                {section.title.replace(/^[IVX]+\.\s*/, "")}
              </h2>
              <div style={{ fontSize: "1.05rem", lineHeight: 1.85, color: "#2d2d2d" }}>
                {section.content.split("\n\n").map((paragraph, j) => {
                  const formatted = paragraph.replace(/\*\*(.+?)\*\*/g, '<strong style="color:#1B2A4A;font-weight:600">$1</strong>');
                  return <p key={j} style={{ marginTop: j === 0 ? 0 : 16, marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: formatted }} />;
                })}
              </div>
            </section>
          ))}
        </div>

        <div style={{ marginTop: 40, padding: "28px", background: "linear-gradient(135deg, rgba(27,42,74,0.03), rgba(196,169,98,0.06))", borderRadius: 8, border: "1px solid rgba(196,169,98,0.25)", borderLeft: "4px solid #C4A962" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: "1.2rem" }}>🔮</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#C4A962", textTransform: "uppercase", letterSpacing: "0.1em" }}>Veredicto</span>
          </div>
          <p style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: "1.15rem", color: "#1B2A4A", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{ed.veredict}</p>
        </div>

        <footer style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid rgba(27,42,74,0.1)", textAlign: "center" }}>
          <p style={{ fontSize: "0.8rem", color: "#8B7355", fontFamily: "'Inter', sans-serif", margin: "0 0 8px 0" }}>🤖 Generado por {ed.generatedBy}</p>
          <Link href="/" style={{ fontSize: "0.85rem", color: "#1B2A4A", fontFamily: "'Inter', sans-serif", textDecoration: "none", fontWeight: 500 }}>← Volver a AI News Curator</Link>
        </footer>
      </article>
    </main>
  );
}
