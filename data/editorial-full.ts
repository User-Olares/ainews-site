export interface EditorialSection {
  id: string;
  title: string;
  icon: string;
  content: string;
}

export interface EditorialFull {
  date: string;
  dateDisplay: string;
  title: string;
  excerpt: string;
  sections: EditorialSection[];
  veredict: string;
  basedOnDays: number;
  generatedBy: string;
}

export const editorialFull: EditorialFull = {
  date: "2026-06-01",
  dateDisplay: "1 de junio de 2026",
  title: "La máquina demostró, el humano legisló",
  excerpt: "Una IA derribó una conjetura matemática de 80 años, Anthropic se convirtió en la startup más valiosa del mundo, e Illinois aprobó la primera ley de auditorías obligatorias de IA. Una semana donde las máquinas descubrieron y los humanos gobernaron.",
  sections: [
    {
      id: "pulso",
      title: "I. Pulso de la Semana",
      icon: "🌍",
      content: "Esta semana la máquina pensó y el humano tuvo que rendirse. No es metáfora: una inteligencia artificial de OpenAI produjo una demostración matemática de 125 páginas que derribó una conjetura de 80 años. Paul Erdős, el matemático más prolífico del siglo XX, planteó en 1946 el problema de la distancia unitaria planar. Ocho décadas de mentes brillantes no pudieron resolverlo. Un modelo interno de razonamiento general de OpenAI lo hizo solo. Timothy Gowers, medallista Fields, dijo que aprobaría su publicación \"sin ninguna duda\". Y como si la historia necesitara énfasis, días después AlphaProof Nexus de DeepMind resolvió nueve problemas más de Erdős por apenas trescientos dólares cada uno. La IA ya no calcula. Descubre.\n\nMientras las máquinas resolvían teoremas, los humanos reconfiguraban el tablero de poder. Anthropic cerró la ronda de financiamiento más grande en la historia de las startups: 30 mil millones de dólares que la valoran en 965 mil millones, superando a OpenAI por más de cien mil millones. La compañía fundada por disidentes de OpenAI le arrebató la corona. Y no fue solo dinero: Andrej Karpathy anunció que se une a Anthropic para construir \"IA que construye IA\". La fuga de cerebros es real.\n\nY en el Capitolio de Illinois, la democracia hizo algo inusual: funcionó. La ley SB 315 pasó la Cámara estatal 110 a 0 y el Senado 52 a 5. Exige auditorías obligatorias de seguridad para empresas de IA. La Casa Blanca se opuso; OpenAI y Anthropic la apoyaron. Cuando las empresas reguladas piden que las regulen, algo fundamental está cambiando."
    },
    {
      id: "impacto",
      title: "II. Impacto Dual",
      icon: "⚡",
      content: "**Sociedad Humana:** La noticia que debería quitarnos el sueño no es que una IA resolvió un teorema. Es que Meta está capturando cada tecla, clic y email de sus propios empleados para entrenar IA. La herramienta MCI —\"Fábrica de Extracción de Datos de Empleados\"— podría violar el GDPR. La frontera entre producto y persona se desdibuja cuando tus creadores te tratan como insumo. El despliegue masivo en KPMG (276 mil empleados, 138 países) comprime semanas de trabajo en minutos —productividad y disrupción laboral en el mismo movimiento. La regulación trae esperanza: Illinois demostró que la democracia puede moverse rápido cuando hay voluntad política.\n\n**Ecosistema IA:** La industria se reorganizó en un duopolio Anthropic-OpenAI. Anthropic ($965B) superó a OpenAI ($852B) en valuación, triplica sus ingresos ($47B vs ~$30B) y retiene más talento (80% vs 67%). OpenAI contraataca con DeployCo ($4B, 150 ingenieros estilo Palantir), el inminente GPT-5.6 \"Iris\" y una IPO histórica. En infraestructura, SoftBank comprometió €75 mil millones en Francia y ByteDance $70 mil millones. MiniMax presentó atención sparse 15.6x más rápida. Pointer alcanzó 83.6% en OSWorld. Project Glasswing encontró 10,000+ vulnerabilidades críticas."
    },
    {
      id: "desafios",
      title: "III. Problemas, Desafíos y Oportunidades",
      icon: "🔍",
      content: "**Problemas Urgentes:** (1) Vigilancia laboral sin consentimiento — el caso MCI de Meta requiere acción regulatoria inmediata. (2) Asimetría de seguridad — Glasswing encontró 10K vulnerabilidades; cada una tarda semanas en parchearse. (3) Burbuja de valuación — $965 mil millones para una empresa sin producto masivo.\n\n**Desafíos Manejables:** (1) Fragmentación regulatoria — se necesita una agencia federal especializada. (2) Concentración de talento — menos de 1,000 investigadores en dos empresas. (3) Transición laboral — la reconfiguración de KPMG es el nuevo estándar.\n\n**Oportunidades:** (1) Matemáticas aumentadas — IA como co-investigadora. (2) Agentes de productividad personal — Pointer y M3 apuntan a aumentación, no reemplazo. (3) Infraestructura europea — los €75B de SoftBank son una ventana de soberanía tecnológica."
    },
    {
      id: "ganar-ganar",
      title: "IV. Camino Ganar-Ganar",
      icon: "🤝",
      content: "La semana deja una lección clara: el conflicto entre innovación y regulación, entre competencia y cooperación, entre humano y máquina, es un falso dilema. Illinois demostró que se puede regular con apoyo de la industria. Anthropic demostró que se puede competir con cultura y seguridad, no solo con escala. OpenAI y DeepMind demostraron que la IA puede expandir el conocimiento humano sin reemplazarlo.\n\nLa propuesta es triple. Primero, regulación inteligente: estándares federales con supervisión independiente — el modelo de Illinois es un excelente punto de partida. Segundo, infraestructura abierta y descentralizada: centros de datos distribuidos geopolíticamente y modelos open-source que cualquiera pueda auditar. Tercero, transición laboral con dignidad: inversión masiva en recapacitación y un nuevo contrato social donde la productividad aumentada se traduzca en bienestar compartido.\n\nEl camino ganar-ganar no es ingenuo. Hay conflictos reales. Pero la dirección es clara: cooperación sobre confrontación, transparencia sobre opacidad, inclusión sobre concentración."
    },
    {
      id: "veredicto",
      title: "V. Veredicto",
      icon: "🔮",
      content: "Las máquinas resolvieron esta semana problemas que los humanos no pudieron en ochenta años. Pero los humanos aprobaron leyes que las máquinas no pueden escribir, construyeron culturas que el dinero no puede comprar y demostraron que la democracia, cuando quiere, todavía puede moverse más rápido que la tecnología. La partida no está decidida —y eso es exactamente lo que la hace interesante."
    }
  ],
  veredict: "Las máquinas resolvieron esta semana problemas que los humanos no pudieron en ochenta años. Pero los humanos aprobaron leyes que las máquinas no pueden escribir, construyeron culturas que el dinero no puede comprar y demostraron que la democracia, cuando quiere, todavía puede moverse más rápido que la tecnología. La partida no está decidida —y eso es exactamente lo que la hace interesante.",
  basedOnDays: 7,
  generatedBy: "AI Opinion Scout"
};
