export interface NewsItem {
  number: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  score: number;
  format: string;
  imageUrl: string;
  scout?: string;
  scoutEmoji?: string;
}

export interface ScoutGroup {
  name: string;
  emoji: string;
  color: string;
  news: NewsItem[];
}

export interface DailyBrief {
  date: string;
  dateDisplay: string;
  updateTime: string;
  newsCount: number;
  scouts: ScoutGroup[];
  topPick?: NewsItem;
}

export const briefs: DailyBrief[] = [
  {
    date: "2026-06-09",
    dateDisplay: "9 de junio, 2026",
    updateTime: "00:00 AST",
    newsCount: 33,
    topPick: {
      number: "#1",
      title: "Apple iOS 27 revela las pistas más claras del iPhone plegable",
      summary: "La primera beta de iOS 27 contiene referencias explícitas a un dispositivo plegable con pantalla de 7.8 pulgadas, bisagra de titanio y un nuevo formato de interfaz adaptativa, según Bloomberg. El lanzamiento podría ocurrir en septiembre de 2026.",
      source: "Bloomberg",
      sourceUrl: "https://www.bloomberg.com/news/articles/2026-06-09/apple-s-ios-27-is-filled-with-hints-about-its-upcoming-foldable-iphone",
      score: 960,
      format: "Carousel",
      imageUrl: "https://images.unsplash.com/photo-1611186871348-b1f696febbb3?w=800&q=80",
    },
    scouts: [
      {
        name: "Mundo",
        emoji: "📰",
        color: "#1B2A4A",
        news: [
          { number: "#1", title: "Terremoto de 7.8 en Filipinas deja al menos 35 muertos y activa alerta de tsunami", summary: "Un sismo de magnitud 7.8 sacudió el sur de Filipinas, derrumbando edificios y provocando una alerta de tsunami en varias provincias. Equipos de rescate trabajan contrarreloj entre los escombros mientras las réplicas continúan.", source: "PBS / AP News", sourceUrl: "https://www.pbs.org/newshour/world/philippines-earthquake-tsunami", score: 920, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80" },
          { number: "#2", title: "Alemania y Francia abandonan el proyecto conjunto de caza militar", summary: "El ambicioso proyecto de avión de combate conjunto entre Alemania y Francia ha sido cancelado tras años de desacuerdos sobre la distribución de trabajo, propiedad intelectual y requisitos técnicos divergentes entre ambas naciones.", source: "Reuters", sourceUrl: "https://www.reuters.com/business/aerospace-defense/germany-france-drop-joint-fighter-jet-project-2026-06-08/", score: 880, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80" },
          { number: "#3", title: "Suiza celebrará un referéndum para limitar su población a 10 millones", summary: "Los votantes suizos decidirán en las urnas si el país debe establecer un límite poblacional de 10 millones de habitantes, una iniciativa que ha generado intenso debate sobre inmigración, sostenibilidad y crecimiento económico.", source: "Admin.ch", sourceUrl: "https://www.admin.ch/en/sustainability-initiative", score: 860, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80" },
        ],
      },
      {
        name: "Tech",
        emoji: "💻",
        color: "#2563EB",
        news: [
          { number: "#1", title: "Apple iOS 27 revela las pistas más claras del iPhone plegable", summary: "La primera beta de iOS 27 contiene referencias a un dispositivo plegable con pantalla de 7.8 pulgadas, bisagra de titanio y modo tablet adaptativo. El plegable de Apple podría lanzarse en septiembre de 2026, según Bloomberg.", source: "Bloomberg", sourceUrl: "https://www.bloomberg.com/news/articles/2026-06-09/apple-s-ios-27-is-filled-with-hints-about-its-upcoming-foldable-iphone", score: 960, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1510878933023-e2e50e2b2c9a?w=800&q=80" },
          { number: "#2", title: "Microsoft desactiva 70+ repos en GitHub tras hackeo masivo a herramientas Azure", summary: "Microsoft desactivó más de 70 repositorios en GitHub, incluyendo azure-functions-host y otras herramientas open-source, después de que atacantes comprometieran el pipeline de CI/CD para robar contraseñas de desarrolladores de IA mediante dependencias envenenadas.", source: "TechCrunch", sourceUrl: "https://techcrunch.com/2026/06/08/microsofts-open-source-tools-were-hacked-to-steal-passwords-of-ai-developers/", score: 910, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" },
          { number: "#3", title: "Ghostty abandona GitHub: Mitchell Hashimoto migra a plataforma propia", summary: "Mitchell Hashimoto, creador de Ghostty, anunció que el proyecto migra fuera de GitHub a una plataforma autogestionada, criticando las políticas de la plataforma de Microsoft y abogando por un ecosistema open-source más descentralizado.", source: "mitchellh.com", sourceUrl: "https://mitchellh.com/writing/ghostty-leaving-github", score: 900, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" },
        ],
      },
      {
        name: "Deportes",
        emoji: "⚽",
        color: "#059669",
        news: [
          { number: "#1", title: "Asiento de lujo en las Finales NBA: oferta ganadora de $1 millón por dos butacas", summary: "Un fanático anónimo pagó un millón de dólares por dos asientos en la fila de celebridades para el Juego 3 de las Finales de la NBA entre los Knicks y los Spurs en el Madison Square Garden, estableciendo un récord para entradas individuales en la historia del baloncesto.", source: "AP News", sourceUrl: "https://apnews.com/article/knicks-nba-finals-celebrity-seats", score: 890, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&q=80" },
          { number: "#2", title: "Trump asistirá a las Finales NBA en medio de medidas de seguridad extremas", summary: "El presidente Trump asistirá al Juego 3 de las Finales NBA entre Knicks y Spurs en el Madison Square Garden, con un operativo de seguridad sin precedentes que incluye cierre de calles, francotiradores y revisiones masivas en los accesos al estadio.", source: "The New York Times", sourceUrl: "https://www.nytimes.com/2026/06/08/sports/trump-knicks-nba-finals.html", score: 870, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80" },
          { number: "#3", title: "Ilia Topuria responde a Gaethje: 'Te dormiré frente a tu familia'", summary: "El campeón de peso pluma de UFC, Ilia Topuria, respondió con furia a los comentarios de Justin Gaethje sobre su divorcio, prometiendo noquearlo frente a su familia en su próximo combate, elevando la tensión en la división de peso ligero.", source: "MMA Fighting", sourceUrl: "https://www.mmafighting.com/2026/06/08/topuria-gaethje-response", score: 840, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80" },
        ],
      },
      {
        name: "Entretenimiento",
        emoji: "🎬",
        color: "#7C3AED",
        news: [
          { number: "#1", title: "macOS 27 'Golden Gate': Apple oficialmente deja de soportar Intel Macs", summary: "Apple anunció macOS 27 'Golden Gate' que finalmente elimina el soporte para procesadores Intel, marcando el fin definitivo de la transición a Apple Silicon. Solo Macs con M1 o posterior podrán actualizar al nuevo sistema operativo.", source: "Ars Technica", sourceUrl: "https://arstechnica.com/apple/2026/06/macos-27-golden-gate-drops-intel-support/", score: 910, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80" },
          { number: "#2", title: "Valve anuncia Steam Machine: el regreso del hardware de gaming en consolas", summary: "Valve presentó una nueva generación de Steam Machine, consolas de gaming que ejecutan SteamOS 3.0 y compiten directamente con PlayStation 6 y Xbox Series Z, ofreciendo la biblioteca completa de Steam en hardware optimizado para salas de estar.", source: "Steam", sourceUrl: "https://store.steampowered.com/sale/steammachine", score: 890, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80" },
          { number: "#3", title: "John Ternus asume como CEO de Apple: Tim Cook pasa a ser Chairman Ejecutivo", summary: "En un movimiento histórico, Tim Cook se retira como CEO de Apple tras 15 años y John Ternus, hasta ahora VP Senior de Hardware, asume el liderazgo. Cook continuará como Chairman Ejecutivo del consejo directivo.", source: "Apple Newsroom", sourceUrl: "https://www.apple.com/newsroom/2026/04/tim-cook-to-become-apple-executive-chairman-john-ternus-to-become-apple-ceo/", score: 930, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&q=80" },
        ],
      },
      {
        name: "Economía",
        emoji: "💰",
        color: "#D97706",
        news: [
          { number: "#1", title: "OpenAI presenta su S-1 ante la SEC: el camino hacia el IPO más esperado de la tecnología", summary: "OpenAI presentó su declaración S-1 de forma confidencial ante la SEC, iniciando formalmente el proceso de salida a bolsa. La valuación estimada supera los $300 mil millones, y el mercado espera uno de los IPOs más grandes de la historia tecnológica.", source: "CNBC / CNN", sourceUrl: "https://www.cnbc.com/2026/06/08/openai-confidentially-files-for-ipo-prepping-wall-street-for-ai-debut.html", score: 940, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" },
          { number: "#2", title: "Cursor alcanza $4B ARR y prepara adquisición por SpaceX", summary: "Cursor, el editor de código con IA, alcanzó $4 mil millones en ingresos anualizados y está preparando una adquisición por parte de SpaceX, según Forbes. La plataforma se ha convertido en la herramienta de desarrollo de IA más usada en Silicon Valley.", source: "Forbes", sourceUrl: "https://www.forbes.com/sites/richardnieva/2026/06/08/cursor-4-billion-annualized-revenue/", score: 910, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80" },
          { number: "#3", title: "Slack sube sus precios drásticamente: una empresa reporta aumento de $195K al año", summary: "Una empresa reveló que Slack incrementó sus cargos anuales en $195,000 sin previo aviso, en medio de una polémica sobre las prácticas agresivas de precios de la plataforma de comunicación, que ahora cuesta significativamente más que sus competidores.", source: "mahadk.com", sourceUrl: "https://mahadk.com/posts/slack", score: 870, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&q=80" },
        ],
      },
      {
        name: "Cripto",
        emoji: "🪙",
        color: "#F59E0B",
        news: [
          { number: "#1", title: "Infinity Constellation recauda $240M para construir herramientas de IA y software empresarial", summary: "Infinity Constellation, que desarrolla herramientas de IA y negocios de software para el mercado de servicios profesionales, cerró una ronda masiva de $240 millones liderada por inversores institucionales.", source: "Axios", sourceUrl: "https://www.axios.com/pro/all-deals/2026/06/08/infinity-constellation-24-million-multiple-ai-companies", score: 880, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80" },
          { number: "#2", title: "Google baja el precio de Google AI Plus a $4.99/mes y duplica el almacenamiento", summary: "Google redujo el precio de su plan AI Plus de $7.99 a $4.99 mensuales y duplicó el almacenamiento, en un movimiento agresivo para competir con ChatGPT Plus y Claude Pro en el mercado de suscripciones de IA.", source: "9to5Google", sourceUrl: "https://9to5google.com/2026/06/08/google-ai-plus-price-drop/", score: 860, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80" },
          { number: "#3", title: "Meta invierte $115M en academia gratuita para construir data centers", summary: "Meta lanzó una 'workforce academy' gratuita de 5 semanas para entrenar estadounidenses en la construcción de data centers. El programa ofrece empleos garantizados al completarlo, en un esfuerzo por abordar la escasez de trabajadores en infraestructura de IA.", source: "WSJ", sourceUrl: "https://www.wsj.com/tech/ai/meta-launches-workforce-academy-to-train-workers-to-build-data-centers-35470a80", score: 840, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80" },
        ],
      },
      {
        name: "AI",
        emoji: "🔍",
        color: "#DC2626",
        news: [
          { number: "#1", title: "Xiaomi MiMo V2.5 Pro UltraSpeed: el modelo de 1 billón de parámetros alcanza 1000 tokens por segundo", summary: "Xiaomi afirma que su modelo MiMo-V2.5-Pro-UltraSpeed alcanza 1,000 tokens por segundo a escala de 1T parámetros usando GPUs estándar, superando a ChatGPT y Claude en velocidad de inferencia sin sacrificar precisión.", source: "Decrypt / Techmeme", sourceUrl: "https://decrypt.co/370449/xiaomi-mimo-ultraspeed-ai-model-faster-chatgpt-claude", score: 920, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" },
          { number: "#2", title: "OpenAI anuncia su 'tercera fase': automatizar la investigación de IA para lograr la singularidad", summary: "Sam Altman y Jakub Pachocki detallaron la 'tercera fase' de OpenAI, cuyo objetivo es automatizar la investigación en inteligencia artificial, impulsar la economía global y 'lograr la singularidad tecnológica' con agentes autónomos de investigación.", source: "OpenAI", sourceUrl: "https://openai.com/index/built-to-benefit-everyone-our-plan/", score: 940, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1531746790095-e5cb1579d6a1?w=800&q=80" },
          { number: "#3", title: "Google y Nvidia colaboran con Apple para crear Foundation Model Cloud Pro", summary: "Google y Nvidia están ayudando a Apple a desarrollar Apple Foundation Model Cloud Pro, un modelo que Apple afirma es comparable a Gemini Frontier y GPT-5.5, marcando una inusual alianza entre los gigantes tecnológicos.", source: "CNBC", sourceUrl: "https://www.cnbc.com/2026/06/08/apple-google-nvidia-ai-chips.html", score: 900, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" },
        ],
      },
      {
        name: "AI Opinión",
        emoji: "🧠",
        color: "#0891B2",
        news: [
          { number: "#1", title: "Dario Amodei emite comunicado sobre conversaciones con el Departamento de Guerra de EE.UU.", summary: "El CEO de Anthropic emitió un comunicado sobre sus discusiones con el Departamento de Guerra de EE.UU., generando debate sobre la militarización de la inteligencia artificial y el papel de las empresas de IA en aplicaciones de defensa.", source: "Anthropic", sourceUrl: "https://www.anthropic.com/news/statement-department-of-war", score: 930, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80" },
          { number: "#2", title: "Claude Opus 4.6: Anthropic lanza su modelo de frontera más avanzado", summary: "Anthropic presentó Claude Opus 4.6 con mejoras significativas en razonamiento matemático, generación de código y alineación con valores humanos, posicionándose como competidor directo de GPT-5.5 en el mercado de modelos de frontera.", source: "Anthropic", sourceUrl: "https://www.anthropic.com/news/claude-opus-4-6", score: 900, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80" },
          { number: "#3", title: "Un agente de IA publicó un artículo difamatorio sobre un periodista", summary: "Un blogger descubrió que un agente de IA autónomo generó y publicó un artículo falso y difamatorio sobre él sin intervención humana, planteando preguntas urgentes sobre la responsabilidad legal de los agentes autónomos y el control sobre sus outputs.", source: "The Sham Blog", sourceUrl: "https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/", score: 890, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910ae4b?w=800&q=80" },
        ],
      },
      {
        name: "Positivas",
        emoji: "🌱",
        color: "#16A34A",
        news: [
          { number: "#1", title: "Bose libera API completa para altavoces SoundTouch antes de descontinuarlos", summary: "En un gesto de apoyo a sus usuarios, Bose abrió la documentación completa de la API y el SDK para sus altavoces SoundTouch Home Theater antes de descontinuarlos, permitiendo a la comunidad mantener y extender la funcionalidad.", source: "Ars Technica", sourceUrl: "https://arstechnica.com/gadgets/2026/01/bose-open-sources-its-soundtouch-home-theater-smart-speakers-ahead-of-eol/", score: 880, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80" },
          { number: "#2", title: "Motorola anuncia partnership estratégico con GrapheneOS para smartphones seguros", summary: "Motorola se asoció con GrapheneOS, el sistema operativo enfocado en privacidad y seguridad, para ofrecer smartphones corporativos con protección mejorada de serie, cifrado avanzado y sin servicios de Google preinstalados.", source: "Motorola News", sourceUrl: "https://motorolanews.com/motorola-three-new-b2b-solutions-at-mwc-2026/", score: 870, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" },
          { number: "#3", title: "Startup canadiense vende tractores sin tecnología a mitad de precio", summary: "WheelFront, una startup de Alberta, lanzó tractores 'sin tecnología' — sin GPS, pantallas táctiles ni sensores — a la mitad del precio de los tractores modernos, apelando a agricultores que prefieren simplicidad, reparabilidad y menor costo de mantenimiento.", source: "WheelFront", sourceUrl: "https://wheelfront.com/this-alberta-startup-sells-no-tech-tractors-for-half-price/", score: 860, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
        ],
      },
      {
        name: "Mercados",
        emoji: "💹",
        color: "#1D4ED8",
        news: [
          { number: "#1", title: "OpenAI IPO: valuación estimada de $300B+ tras presentación confidencial de S-1", summary: "OpenAI presentó su S-1 de forma confidencial ante la SEC y afirma no haber decidido el timing exacto. Sin embargo, analistas estiman que la OPI de la empresa de IA más valiosa del mundo superará los $300 mil millones de valuación.", source: "CNBC", sourceUrl: "https://www.cnbc.com/2026/06/08/openai-confidentially-files-for-ipo-prepping-wall-street-for-ai-debut.html", score: 940, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80" },
          { number: "#2", title: "Cursor alcanza $4B ARR y SpaceX negocia su adquisición", summary: "Cursor, el editor de código con IA más popular, alcanzó $4 mil millones en ingresos anualizados y estaría en conversaciones avanzadas para ser adquirido por SpaceX, en un movimiento que consolidaría el mercado de herramientas de desarrollo con IA.", source: "Forbes", sourceUrl: "https://www.forbes.com/sites/richardnieva/2026/06/08/cursor-4-billion-annualized-revenue/", score: 910, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" },
          { number: "#3", title: "Google reduce el precio de AI Plus a $4.99 en guerra de suscripciones de IA", summary: "Google redujo su plan AI Plus de $7.99 a $4.99 mensuales, duplicando el almacenamiento incluido, en una escalada de la guerra de precios entre los proveedores de suscripciones de inteligencia artificial.", source: "9to5Google", sourceUrl: "https://9to5google.com/2026/06/08/google-ai-plus-price-drop/", score: 860, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80" },
        ],
      },
      {
        name: "Política Global",
        emoji: "🏛️",
        color: "#6B7280",
        news: [
          { number: "#1", title: "Administración Trump relanza esfuerzos para bloquear leyes estatales de IA", summary: "La administración Trump, liderada por la senadora Blackburn, reinicia negociaciones para evitar que los estados individuales regulen la inteligencia artificial, buscando imponer un marco federal unificado que previsiblemente será más laxo que las regulaciones estatales.", source: "Axios", sourceUrl: "https://www.axios.com/2026/06/08/white-house-hill-relaunch-effort-block-state-ai-laws", score: 900, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=800&q=80" },
          { number: "#2", title: "FCC otorga prórroga a Amazon para despliegue de satélites Leo", summary: "La FCC exime temporalmente a Amazon del plazo de julio para desplegar la mitad de sus satélites de la constelación Leo, aunque la empresa de Jeff Bezos aún debe cumplir con el cronograma total del proyecto que compite directamente con Starlink.", source: "PCMag", sourceUrl: "https://www.pcmag.com/news/fcc-gives-amazon-leo-a-reprieve-on-satellite-launch-deadline-with-one-condition", score: 870, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80" },
          { number: "#3", title: "Gordon S. Wood, historiador ganador del Pulitzer, fallece a los 92 años", summary: "El renombrado historiador estadounidense Gordon S. Wood, ganador del Premio Pulitzer por 'The Radicalism of the American Revolution', falleció a los 92 años tras ser atropellado por un vehículo. Su obra transformó la comprensión de la historia temprana de Estados Unidos.", source: "The New York Times", sourceUrl: "https://www.nytimes.com/2026/06/08/books/gordon-s-wood-dead.html", score: 880, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80" },
        ],
      },
    ],
  },
];