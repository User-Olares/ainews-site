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
    date: "2026-06-08",
    dateDisplay: "8 de junio, 2026",
    updateTime: "12:00 AST",
    newsCount: 33,
    topPick: {
      number: "#1",
      title: "La escasez de RAM podría durar años y afecta a toda la industria tecnológica",
      summary: "Analistas advierten que la escasez global de memoria RAM podría extenderse por varios años, afectando la producción de servidores, PCs, smartphones y aceleradores de IA, en un cuello de botella que redefine las cadenas de suministro tecnológicas.",
      source: "The Verge",
      sourceUrl: "https://www.theverge.com/ai-artificial-intelligence/914672/the-ram-shortage-could-last-years",
      score: 940,
      format: "Carousel",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    },
    scouts: [
      {
        name: "Mundo",
        emoji: "📰",
        color: "#1B2A4A",
        news: [
          { number: "#1", title: "NASA se niega a publicar informe clave sobre cambio climático", summary: "La agencia espacial estadounidense ha decidido no publicar un informe crítico sobre cambio climático, argumentando que no existe obligación legal para hacerlo. La decisión ha generado controversia en la comunidad científica internacional que advierte sobre las consecuencias de ocultar datos climáticos fundamentales.", source: "NASA / HN", sourceUrl: "https://news.ycombinator.com/", score: 870, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1611270418597-a52a5f5f7623?w=800&q=80" },
          { number: "#2", title: "Científicos del clima organizan maratón de 100 horas en vivo para educar al público", summary: "En respuesta a los recortes de financiación científica global, climatólogos de todo el mundo están transmitiendo en vivo durante 100 horas consecutivas para educar al público sobre la crisis climática y contrarrestar la desinformación.", source: "Climate Scientists / HN", sourceUrl: "https://news.ycombinator.com/", score: 840, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
          { number: "#3", title: "Satélites de la NASA descubren nueva isla en Alaska formada por deshielo glaciar", summary: "El retroceso acelerado de un glaciar en Alaska ha revelado una nueva isla, detectada por satélites de la NASA. El hallazgo evidencia los cambios geológicos rápidos provocados por el calentamiento global en las regiones polares.", source: "NASA / HN", sourceUrl: "https://news.ycombinator.com/", score: 820, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" },
        ],
      },
      {
        name: "Tech",
        emoji: "💻",
        color: "#2563EB",
        news: [
          { number: "#1", title: "La escasez de RAM podría durar años – impacto en toda la industria", summary: "Analistas de The Verge advierten que la escasez global de memoria RAM podría durar varios años más, afectando la producción de servidores, PCs, dispositivos móviles y aceleradores de IA, con graves consecuencias para la cadena de suministro tecnológica.", source: "The Verge", sourceUrl: "https://www.theverge.com/ai-artificial-intelligence/914672/the-ram-shortage-could-last-years", score: 940, format: "Carousel", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" },
          { number: "#2", title: "1,000 filtraciones de datos después: el retraso en divulgación empeora", summary: "El experto en seguridad Troy Hunt reporta que el tiempo entre la detección de brechas de datos y su divulgación pública sigue aumentando, poniendo en riesgo a millones de usuarios que permanecen ignorantes de compromisos de seguridad críticos.", source: "Troy Hunt", sourceUrl: "https://www.troyhunt.com/1000-data-breaches-later-the-disclosure-lag-is-worse-than-ever/", score: 890, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80" },
          { number: "#3", title: "Performative-UI: la librería React que satiriza los tropos de diseño web", summary: "Un nuevo proyecto open source expone y satiriza los patrones de diseño más comunes y sobreutilizados en la web moderna, desde loaders esqueuomorfos hasta modales de newsletter, generando debate sobre originalidad en el diseño de interfaces.", source: "GitHub / HN", sourceUrl: "https://vorpus.github.io/performativeUI/", score: 860, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" },
        ],
      },
      {
        name: "Deportes",
        emoji: "⚽",
        color: "#059669",
        news: [
          { number: "#1", title: "Selección femenina de EE.UU. alcanza acuerdo histórico sobre igualdad salarial", summary: "El equipo nacional femenino de fútbol de Estados Unidos ha llegado a un acuerdo histórico con la US Soccer para garantizar igualdad salarial plena, marcando un precedente en la lucha por la equidad de género en el deporte profesional mundial.", source: "US Soccer / HN", sourceUrl: "https://news.ycombinator.com/", score: 910, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80" },
          { number: "#2", title: "Nueva app para amantes del deporte promete revolución en comunidad deportiva", summary: "Una innovadora aplicación móvil promete transformar la experiencia de los aficionados al deporte, ofreciendo seguimiento en tiempo real, comunidades por equipo y funcionalidades sociales que compiten con las grandes plataformas establecidas.", source: "HN", sourceUrl: "https://news.ycombinator.com/", score: 810, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80" },
          { number: "#3", title: "Crece el debate sobre videojuegos deportivos open source", summary: "La comunidad de desarrolladores debate la viabilidad de crear simulaciones deportivas open source que compitan con títulos AAA como EA Sports FC y NBA 2K, buscando democratizar el acceso a juegos de calidad sin suscripciones ni microtransacciones.", source: "HN", sourceUrl: "https://news.ycombinator.com/", score: 790, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&q=80" },
        ],
      },
      {
        name: "Entretenimiento",
        emoji: "🎬",
        color: "#7C3AED",
        news: [
          { number: "#1", title: "El fin del pasatiempo favorito de EE.UU.: la TV tradicional se apaga", summary: "Un análisis profundo revela cómo el streaming, las redes sociales y el contenido generado por usuarios están desplazando definitivamente a la televisión tradicional como principal fuente de entretenimiento, marcando el fin de una era.", source: "HN", sourceUrl: "https://news.ycombinator.com/", score: 880, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80" },
          { number: "#2", title: "Anti-social: las modas virales reemplazan a los amigos en redes sociales", summary: "Un reportaje de BBC analiza cómo los algoritmos de redes sociales han pasado de conectar personas a promover tendencias virales, erosionando las conexiones humanas genuinas y transformando la naturaleza misma de la interacción social digital.", source: "BBC", sourceUrl: "https://www.bbc.com/worklife/article/20260520-how-social-media-ceased-to-be-social", score: 870, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80" },
          { number: "#3", title: "APC-2: Teenage Engineering lanza cortador profesional de discos de vinilo", summary: "La compañía sueca Teenage Engineering presenta el APC-2, un cortador profesional de discos de vinilo que permite a músicos y productores crear discos de reproducción originales desde casa, democratizando la producción analógica.", source: "Teenage Engineering", sourceUrl: "https://teenage.engineering/products/apc-2", score: 850, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&q=80" },
        ],
      },
      {
        name: "Economía",
        emoji: "💰",
        color: "#D97706",
        news: [
          { number: "#1", title: "Mercados de crédito globales: señales de peligro creciente", summary: "The Economist advierte que los mercados de crédito globales muestran señales alarmantes de deterioro, con niveles de deuda corporativa en máximos históricos y riesgos crecientes de impagos que podrían desencadenar una crisis financiera sistémica.", source: "The Economist", sourceUrl: "https://www.economist.com/finance-and-economics/2025/10/02/credit-markets-look-increasingly-dangerous", score: 930, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80" },
          { number: "#2", title: "Mercados energéticos globales al borde del desastre", summary: "La combinación de tensiones geopolíticas en Medio Oriente, la transición energética acelerada y la infraestructura envejecida están empujando a los mercados globales de energía hacia una crisis sin precedentes, según advierte The Economist.", source: "The Economist", sourceUrl: "https://www.economist.com/finance-and-economics/2026/04/21/global-energy-markets-are-on-the-verge-of", score: 900, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80" },
          { number: "#3", title: "El mercado inmobiliario de EE.UU. tiembla: señales de contracción", summary: "El mercado de vivienda estadounidense muestra señales de contracción con precios elevados, demanda decreciente y tasas de interés que mantienen a compradores potenciales al margen, generando preocupación entre economistas y agentes del sector.", source: "The Economist", sourceUrl: "https://www.economist.com/finance-and-economics/2025/08/10/americas-housing-market-is-shuddering", score: 870, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1560520031-3a4dc6b0c0c0?w=800&q=80" },
        ],
      },
      {
        name: "Cripto",
        emoji: "🪙",
        color: "#F59E0B",
        news: [
          { number: "#1", title: "Stablecoins demasiado estables: la paradoja del mercado cripto", summary: "The Economist analiza cómo la estabilidad excesiva de las stablecoins está generando paradojas en el mercado de criptomonedas, con implicaciones profundas para la regulación financiera global y el futuro de las monedas digitales.", source: "The Economist", sourceUrl: "https://www.economist.com/finance-and-economics/2026/04/21/the-stablecoin-market-has-got-too-stable", score: 860, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80" },
          { number: "#2", title: "¿Es Bitcoin Halal? Un análisis Shariah genera debate global", summary: "Un estudio académico exhaustivo examina la compatibilidad de Bitcoin y las criptomonedas con los principios financieros islámicos (Shariah), generando intenso debate en comunidades musulmanas globales sobre la legitimidad religiosa de las criptomonedas.", source: "HN", sourceUrl: "https://news.ycombinator.com/", score: 830, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80" },
          { number: "#3", title: "Wikipedia dedica portada a criptomonedas y blockchains", summary: "Wikipedia Signpost publica un extenso y detallado artículo explorando el impacto cultural, tecnológico y económico de las criptomonedas y la tecnología blockchain, desde sus orígenes hasta las controversias regulatorias actuales.", source: "Wikipedia / HN", sourceUrl: "https://news.ycombinator.com/", score: 820, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&q=80" },
        ],
      },
      {
        name: "AI",
        emoji: "🔍",
        color: "#DC2626",
        news: [
          { number: "#1", title: "Google y Pentágono acuerdan uso de IA para fines 'legalmente permitidos'", summary: "Un acuerdo clasificado entre Google y el Departamento de Defensa de EE.UU. permitiría el uso de inteligencia artificial en operaciones militares, generando preocupación entre activistas de derechos digitales y expertos en ética tecnológica.", source: "The Verge", sourceUrl: "https://www.theverge.com/ai-artificial-intelligence/919494/google-pentagon-classified-ai-deal", score: 920, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" },
          { number: "#2", title: "Shift limpiará hogares gratis para entrenar a sus futuros robots", summary: "Una startup de robótica ofrece servicios gratuitos de limpieza del hogar a cambio de que sus robots aprendan tareas domésticas del mundo real. El modelo plantea preguntas sobre privacidad, compensación laboral y el valor de los datos de entrenamiento.", source: "The Verge", sourceUrl: "https://www.theverge.com/ai-artificial-intelligence/939765/ai-training-data-startup-shift-free-clean", score: 880, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
          { number: "#3", title: "Mayoría de estadounidenses no confía en la IA ni en sus responsables", summary: "Encuestas de Pew Research y Gallup revelan que la desconfianza hacia la inteligencia artificial sigue siendo mayoritaria en Estados Unidos, con escepticismo tanto hacia la tecnología misma como hacia las empresas y gobiernos que la desarrollan y regulan.", source: "The Verge", sourceUrl: "https://www.theverge.com/ai-artificial-intelligence/644853/pew-gallup-data-americans-dont-trust-ai", score: 850, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1531746790095-e5cb1579d6a1?w=800&q=80" },
        ],
      },
      {
        name: "AI Opinión",
        emoji: "🧠",
        color: "#0891B2",
        news: [
          { number: "#1", title: "Teoría del fin del juego de la IA: el análisis que nadie quiere ver", summary: "Un analista anónimo propone una teoría integral sobre el destino final de la inteligencia artificial, explorando escenarios de singularidad tecnológica, problemas de alineación de valores y riesgos existenciales que la industria prefiere ignorar.", source: "HN", sourceUrl: "https://news.ycombinator.com/", score: 890, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&q=80" },
          { number: "#2", title: "Exigen a DARPA transparencia sobre autonomía en sistemas de IA militar", summary: "Crece la presión sobre la agencia de investigación militar DARPA para que revele los niveles de autonomía de sus sistemas de IA, especialmente en aplicaciones de defensa donde decisiones automatizadas podrían tener consecuencias letales sin supervisión humana.", source: "HN", sourceUrl: "https://news.ycombinator.com/", score: 860, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?w=800&q=80" },
          { number: "#3", title: "IA: ¿Inteligencia Artificial o simplemente Mejora Improvisada?", summary: "Un provocador artículo cuestiona si los avances recientes en IA representan verdadera inteligencia o simplemente mejoras incrementales en modelos de predicción estadística, sugiriendo que la industria ha estado moviendo los postes de la meta conceptual.", source: "HN", sourceUrl: "https://news.ycombinator.com/", score: 840, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80" },
        ],
      },
      {
        name: "Positivas",
        emoji: "🌱",
        color: "#16A34A",
        news: [
          { number: "#1", title: "De la adicción y la prisión a construir desde cero: la historia de Gavin Ray", summary: "La inspiradora historia de Gavin Ray, quien tras superar una adicción, cumplir condena en prisión y enfrentar un delito grave, reconstruyó su vida desde cero. Ahora comparte su experiencia como desarrollador y mentor para ayudar a otros en situaciones similares.", source: "Gavin Ray", sourceUrl: "https://gavinray97.github.io/blog/building-from-zero-after-addiction-prison-felony", score: 950, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80" },
          { number: "#2", title: "Crea un newsletter automático para difundir noticias positivas", summary: "Un desarrollador crea una herramienta automatizada que recopila y distribuye noticias positivas de todo el mundo, demostrando que la tecnología puede ser un vehículo para el optimismo y la esperanza en un panorama mediático dominado por malas noticias.", source: "HN", sourceUrl: "https://news.ycombinator.com/", score: 840, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" },
          { number: "#3", title: "Cómo usar IA para automatizar un podcast de noticias tecnológicas", summary: "Un creador comparte su experiencia usando inteligencia artificial para automatizar la producción de un podcast de noticias tecnológicas, reduciendo drásticamente costos y tiempo de producción mientras mantiene calidad editorial.", source: "HN", sourceUrl: "https://news.ycombinator.com/", score: 820, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80" },
        ],
      },
      {
        name: "Mercados",
        emoji: "💹",
        color: "#1D4ED8",
        news: [
          { number: "#1", title: "El mercado laboral de EE.UU. se acerca a un precipicio", summary: "The Economist analiza señales de desaceleración severa en el mercado laboral estadounidense que podrían indicar una contracción significativa en los próximos meses, con implicaciones para la política monetaria de la Reserva Federal y la economía global.", source: "The Economist", sourceUrl: "https://www.economist.com/finance-and-economics/2025/11/30/is-americas-jobs-market-nearing-a-cliff", score: 910, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" },
          { number: "#2", title: "Comentarios sobre dividendos ciudadanos de IA agitan mercados coreanos", summary: "Declaraciones en Facebook sobre posibles 'dividendos ciudadanos' financiados por IA provocaron una ola de volatilidad en los mercados financieros de Corea del Sur, reflejando la sensibilidad de los inversores asiáticos a temas de redistribución tecnológica.", source: "Yahoo Finance", sourceUrl: "https://finance.yahoo.com/economy/policy/articles/korea-roils-market-floating-citizen-081026940.html", score: 870, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80" },
          { number: "#3", title: "Fin de la economía del 'rip-off': la IA mejora la eficiencia del mercado", summary: "The Economist argumenta que la inteligencia artificial está eliminando las prácticas de sobreprecio al mejorar la transparencia y eficiencia de los mercados, permitiendo a los consumidores tomar decisiones más informadas y forzando a las empresas a competir en valor real.", source: "The Economist", sourceUrl: "https://www.economist.com/finance-and-economics/2025/10/27/the-end-of-the-rip-off-economy", score: 850, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" },
        ],
      },
      {
        name: "Política Global",
        emoji: "🏛️",
        color: "#6B7280",
        news: [
          { number: "#1", title: "China eleva el estatus de los estudios de derecho internacional", summary: "En un movimiento estratégico de largo plazo, China está impulsando masivamente la formación en derecho internacional para fortalecer su influencia en foros globales, disputas comerciales y tribunales internacionales, buscando reconfigurar el orden legal global.", source: "HN", sourceUrl: "https://news.ycombinator.com/", score: 860, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80" },
          { number: "#2", title: "Corea del Norte: el debate sobre una revolución como proyecto global", summary: "Un provocador debate en la comunidad tecnológica internacional explora escenarios hipotéticos sobre una revolución en Corea del Norte como proyecto de colaboración global, generando discusiones sobre diplomacia, cambio de régimen y el rol de la tecnología en la transformación política.", source: "HN", sourceUrl: "https://news.ycombinator.com/", score: 810, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80" },
          { number: "#3", title: "¿Qué es un 'reportero de desinformación'? El debate sobre límites a la prensa", summary: "Un intenso debate en la comunidad hacker cuestiona el polémico rol de los 'reporteros de desinformación', su impacto en la libertad de prensa, los límites de la regulación de contenido en plataformas digitales y quién decide qué es desinformación.", source: "HN", sourceUrl: "https://news.ycombinator.com/", score: 800, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=800&q=80" },
        ],
      },
    ],
  },
];