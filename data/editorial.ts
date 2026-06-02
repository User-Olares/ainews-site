export interface EditorialSection {
  title: string;
  content: string;
  icon: string;
}

export interface Editorial {
  date: string;
  dateDisplay: string;
  title: string;
  excerpt: string;
  sections: EditorialSection[];
  veredict: string;
  basedOnDays: number;
  generatedBy: string;
}

export const latestEditorial: Editorial = {
  date: "2026-06-01",
  dateDisplay: "1 de junio de 2026",
  title: "La máquina demostró, el humano legisló",
  excerpt: "Las máquinas resolvieron esta semana problemas que los humanos no pudieron en ochenta años.",
  sections: [
    {
      title: "I. Pulso de la Semana",
      icon: "🌍",
      content: "Esta semana la máquina pensó y el humano tuvo que rendirse. No es metáfora: una inteligencia artificial de OpenAI produjo una demostración matemática de 125 páginas que derribó una conjetura de 80 años. Paul Erdős, el matemático más prolífico del siglo XX, planteó en 1946 el problema de la distancia"
    },
    {
      title: "II. Impacto Dual",
      icon: "⚡",
      content: "**Sociedad Humana:** La noticia que debería quitarnos el sueño no es que una IA resolvió un teorema. Es que Meta está capturando cada tecla, clic y email de sus propios empleados para entrenar IA. La herramienta MCI —\"Fábrica de Extracción de Datos de Empleados\"— podría violar el GDPR. La frontera e"
    },
    {
      title: "III. Problemas, Desafíos y Oportunidades",
      icon: "🔍",
      content: "**Problemas Urgentes:** (1) Vigilancia laboral sin consentimiento — el caso MCI de Meta requiere acción regulatoria inmediata. (2) Asimetría de seguridad — Glasswing encontró 10K vulnerabilidades; cada una tarda semanas en parchearse. (3) Burbuja de valuación — $965 mil millones para una empresa sin p"
    }
  ],
  veredict: "Las máquinas resolvieron esta semana problemas que los humanos no pudieron en ochenta años. Pero los humanos aprobaron leyes que las máquinas no pueden escribir, construyeron culturas que el dinero no puede comprar y demostraron que la democracia, cuando quiere, todavía puede moverse más rápido que la tecnología. La partida no está decidida —y eso es exactamente lo que la hace interesante.",
  basedOnDays: 7,
  generatedBy: "AI Opinion Scout"
};
