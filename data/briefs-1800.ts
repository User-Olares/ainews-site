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
    updateTime: "18:00 AST",
    newsCount: 33,
    topPick: {
      number: "#1",
      title: "Apple WWDC 2026: Siri AI con Gemini, iOS 27 y la nueva arquitectura Core AI",
      summary: "Apple presentó en la WWDC 2026 su nueva arquitectura de inteligencia artificial construida alrededor de los modelos Google Gemini, además de iOS 27, iPadOS 27 y el framework Core AI para desarrolladores. Siri tendrá capacidades de IA generativa, aunque las funciones no llegarán a la UE por restricciones regulatorias.",
      source: "TechCrunch / MacRumors",
      sourceUrl: "https://techcrunch.com/2026/06/08/wwdc-2026-everything-announced/",
      score: 950,
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
          { number: "#1", title: "Apple WWDC 2026: iOS 27, iPadOS 27 y el nuevo framework Core AI", summary: "Apple anunció iOS 27 y iPadOS 27 sin abandonar ningún iPhone existente, junto con Core AI, un nuevo framework para desarrolladores que expone las capacidades de inteligencia artificial del hardware Apple Silicon directamente a las aplicaciones.", source: "Ars Technica / Apple", sourceUrl: "https://arstechnica.com/apple/2026/06/ios-27-and-ipados-27-support/", score: 930, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1510878933023-e2e50e2b2c9a?w=800&q=80" },
          { number: "#2", title: "Apple revela nueva arquitectura de IA basada en modelos Google Gemini", summary: "En un movimiento sorprendente, Apple confirmó que su nueva infraestructura de inteligencia artificial está construida alrededor de los modelos Gemini de Google. Siri AI, anunciada en la WWDC, usará esta arquitectura híbrida que combina procesamiento en dispositivo con capacidades en la nube.", source: "MacRumors", sourceUrl: "https://www.macrumors.com/2026/06/08/apple-reveals-new-ai-architecture/", score: 910, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" },
          { number: "#3", title: "Gitdot: la alternativa open-source a GitHub que rechaza la IA", summary: "Un desarrollador presentó Gitdot, una plataforma open-source alternativa a GitHub construida en Rust, con el lema explícito de ser anti-IA y ofrecer control total sobre los repositorios sin las características de inteligencia artificial que hoy dominan las plataformas tradicionales.", source: "Show HN / Gitdot.io", sourceUrl: "https://gitdot.io/", score: 870, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" },
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
          { number: "#1", title: "Tony Awards 2026: Luke Evans, Pink y Lea Michele protagonizan la noche", summary: "La 79ª entrega de los premios Tony estuvo llena de momentos memorables: el actor Luke Evans sorprendió al quitarse la ropa en el escenario, Pink deslumbró con su actuación y Lea Michele mostró una sorprendente autoconciencia al recibir su nominación.", source: "Playbill", sourceUrl: "https://playbill.com/article/tony-awards-2026-memorable-moments", score: 880, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80" },
          { number: "#2", title: "John Summit interrumpe su set tras invasión de Travis Scott en el escenario", summary: "El DJ y productor John Summit tuvo que cancelar su presentación en vivo cuando Travis Scott irrumpió en el escenario sin previo aviso, causando caos entre el público. Summit calificó la noche como 'fuera de control' en redes sociales.", source: "Yahoo Entertainment", sourceUrl: "https://www.yahoo.com/entertainment/john-summit-set-shut-down-2026-06-08/", score: 850, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80" },
          { number: "#3", title: "Bowen Yang y Rachel Sennott retrasan su salida de SNL: 'Amo Los Ángeles'", summary: "Las estrellas de Saturday Night Live, Bowen Yang y Rachel Sennott, confirmaron que retrasarán su salida del programa cómico para trabajar en un nuevo proyecto ambientado en Los Ángeles, que explorará la vida creativa en la ciudad californiana.", source: "Variety", sourceUrl: "https://variety.com/2026/tv/news/bowen-yang-rachel-sennott-snl-exit-delay-123604/", score: 830, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&q=80" },
        ],
      },
      {
        name: "Economía",
        emoji: "💰",
        color: "#D97706",
        news: [
          { number: "#1", title: "S&P 500 cierra al alza: los chips lideran la recuperación mientras cesan los ataques entre Israel e Irán", summary: "El índice S&P 500 cerró en terreno positivo impulsado por el rebote del sector de semiconductores y la señal de desescalada entre Israel e Irán, que alivió las tensiones geopolíticas en los mercados globales.", source: "CNBC", sourceUrl: "https://www.cnbc.com/2026/06/08/stock-market-today-live-updates.html", score: 910, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80" },
          { number: "#2", title: "OpenAI presenta oficialmente su solicitud S-1 ante la SEC para salir a bolsa", summary: "OpenAI ha presentado su declaración S-1 de forma confidencial ante la SEC, marcando el inicio formal del proceso de Oferta Pública Inicial. La empresa de inteligencia artificial más valiosa del mundo busca cotizar en bolsa en uno de los IPO más esperados de la década.", source: "CNN", sourceUrl: "https://www.cnn.com/2026/06/08/investing/openai-ipo-s1-sec/index.html", score: 940, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&q=80" },
          { number: "#3", title: "Aerolíneas estadounidenses gastaron $6.5 mil millones en combustible en abril", summary: "Las aerolíneas de EE.UU. registraron un gasto récord de $6.5 mil millones en combustible durante abril, lo que ha llevado a una reducción drástica de las previsiones de ganancias globales del sector, que se recortaron casi a la mitad para 2026.", source: "AP News", sourceUrl: "https://apnews.com/article/us-airlines-fuel-costs-april-2026", score: 860, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80" },
        ],
      },
      {
        name: "Cripto",
        emoji: "🪙",
        color: "#F59E0B",
        news: [
          { number: "#1", title: "The Cypherpunk Library: el archivo digital que preserva el espíritu original de las criptomonedas", summary: "Un nuevo proyecto archiva y preserva los textos fundacionales del movimiento cypherpunk, desde los manifiestos originales de los 90 hasta los white papers de Bitcoin y Ethereum, ofreciendo una biblioteca digital descentralizada del pensamiento que dio origen a las criptomonedas.", source: "The Cypherpunk Library", sourceUrl: "https://www.cypherpunkbooks.com", score: 890, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80" },
          { number: "#2", title: "Anti-social: cómo las modas virales reemplazaron a los amigos en redes sociales", summary: "Un análisis de la BBC revela cómo los algoritmos de redes sociales han transformado la experiencia digital: las conexiones humanas genuinas han sido desplazadas por tendencias virales, erosionando el tejido social y cambiando la naturaleza misma de la interacción en plataformas.", source: "BBC", sourceUrl: "https://www.bbc.com/worklife/article/20260520-how-social-media-ceased-to-be-social", score: 910, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80" },
          { number: "#3", title: "Massachusetts prohíbe la venta de datos de localización en nueva ley de privacidad", summary: "Massachusetts aprobó una histórica ley de privacidad que prohíbe la venta de datos de localización precisa de los ciudadanos. La legislación, una de las más estrictas del país, establece un precedente que podría replicarse en otros estados y limitar el negocio de datos de ubicación.", source: "TechCrunch", sourceUrl: "https://techcrunch.com/2026/06/08/massachusetts-votes-to-pass-new-privacy-rights-bill/", score: 880, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80" },
        ],
      },
      {
        name: "AI",
        emoji: "🔍",
        color: "#DC2626",
        news: [
          { number: "#1", title: "MiMo v2.5 Pro UltraSpeed: el modelo de 1 billón de parámetros que alcanza 1000 tokens por segundo", summary: "Xiaomi presentó MiMo v2.5 Pro UltraSpeed, un modelo de lenguaje con 1 billón de parámetros capaz de generar 1000 tokens por segundo en hardware especializado. El rendimiento marca un hito en inferencia de modelos masivos, aunque persisten dudas sobre la calidad del modelo.", source: "Xiaomi / Xiaomi Blog", sourceUrl: "https://mimo.xiaomi.com/blog/mimo-tilert-1000tps", score: 920, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" },
          { number: "#2", title: "La IA se está ralentizando: un análisis sobre los límites del escalamiento", summary: "Un provocador ensayo argumenta que los avances en inteligencia artificial están llegando a una meseta, con rendimientos decrecientes en el escalamiento de modelos. Los datos muestran que las mejoras de las nuevas versiones son cada vez más marginales respecto a sus predecesoras.", source: "Where's You Ed At", sourceUrl: "https://www.wheresyoured.at/ai-is-slowing-down/", score: 900, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1531746790095-e5cb1579d6a1?w=800&q=80" },
          { number: "#3", title: "xAI se parece más a un REIT de centros de datos que a un laboratorio de frontera", summary: "Un análisis financiero de xAI revela que la empresa de Elon Musk está generando más ingresos alquilando infraestructura de cómputo que desarrollando modelos de IA de frontera, planteando preguntas sobre su identidad como laboratorio de investigación versus proveedor de infraestructura.", source: "Martin Alderson", sourceUrl: "https://martinalderson.com/posts/xais-new-rental-business/", score: 870, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" },
        ],
      },
      {
        name: "AI Opinión",
        emoji: "🧠",
        color: "#0891B2",
        news: [
          { number: "#1", title: "OpenAI presenta su S-1 ante la SEC: el camino hacia el IPO más esperado de la tecnología", summary: "OpenAI ha presentado su declaración S-1 de forma confidencial ante la SEC, iniciando formalmente el proceso de salida a bolsa. La valuación estimada supera los $300 mil millones, y el mercado espera con atención los detalles financieros que la compañía ha mantenido en secreto.", source: "OpenAI / CNN", sourceUrl: "https://openai.com/index/openai-submits-confidential-s-1/", score: 930, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80" },
          { number: "#2", title: "FrontierCode: Cognition AI lanza su nueva plataforma de generación de código", summary: "Cognition AI, creadores de Devin, presentaron FrontierCode, una plataforma que promete llevar la generación autónoma de código al siguiente nivel, compitiendo directamente con GitHub Copilot y Claude Code en el creciente mercado de asistentes de programación con IA.", source: "Cognition AI", sourceUrl: "https://cognition.ai/blog/frontier-code", score: 890, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910ae4b?w=800&q=80" },
          { number: "#3", title: "Apple Core AI: el framework que lleva inteligencia artificial al silicio de Apple", summary: "Apple presentó Core AI, su nuevo framework de inteligencia artificial que expone directamente las capacidades del Neural Engine y los aceleradores de Apple Silicon a los desarrolladores, permitiendo inferencia en dispositivo sin depender de servicios en la nube.", source: "Apple Developer", sourceUrl: "https://developer.apple.com/documentation/coreai/", score: 870, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80" },
        ],
      },
      {
        name: "Positivas",
        emoji: "🌱",
        color: "#16A34A",
        news: [
          { number: "#1", title: "Massachusetts aprueba ley histórica que prohíbe la venta de datos de localización", summary: "En una victoria para la privacidad digital, Massachusetts votó a favor de una ley pionera que prohíbe la venta de datos de localización precisa. La medida protege a los ciudadanos de la vigilancia comercial y establece un modelo para futuras legislaciones en otros estados.", source: "TechCrunch", sourceUrl: "https://techcrunch.com/2026/06/08/massachusetts-privacy-rights-bill/", score: 910, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" },
          { number: "#2", title: "Apple presenta nuevas funciones de protección infantil en iOS 27", summary: "Apple anunció en la WWDC nuevas herramientas de seguridad infantil para iOS 27, incluyendo detección mejorada de contenido inapropiado, controles parentales más sofisticados y comunicación segura, diseñadas para proteger a los menores sin comprometer la privacidad de los usuarios.", source: "Apple Newsroom", sourceUrl: "https://www.apple.com/newsroom/2026/06/apple-previews-new-child-safety-features/", score: 880, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80" },
          { number: "#3", title: "Signal se pronuncia contra la vigilancia masiva del Reino Unido", summary: "Signal publicó un contundente comunicado titulado 'La vigilancia no es seguridad', en respuesta a las nuevas amenazas del gobierno del Reino Unido contra el cifrado de extremo a extremo. La organización reafirmó su compromiso con la privacidad de los usuarios frente a los intentos de crear puertas traseras.", source: "Signal", sourceUrl: "https://signal.org/blog/pdfs/2026-06-08-uk-surveillance-is-not-safety.pdf", score: 860, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80" },
        ],
      },
      {
        name: "Mercados",
        emoji: "💹",
        color: "#1D4ED8",
        news: [
          { number: "#1", title: "SpaceX IPO está sobresuscrito: las órdenes cierran el miércoles", summary: "La Oferta Pública Inicial de SpaceX ha recibido una demanda que supera ampliamente la oferta disponible, con inversores institucionales y minoristas compitiendo por acciones de la empresa espacial más valiosa del mundo. Las órdenes de compra cierran este miércoles.", source: "Bloomberg", sourceUrl: "https://www.bloomberg.com/news/articles/2026-06-08/spacex-ipo-well-oversubscribed", score: 940, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80" },
          { number: "#2", title: "Los mercados de crédito globales se ven cada vez más peligrosos, advierte The Economist", summary: "The Economist alerta que los mercados de crédito global muestran señales alarmantes de deterioro, con niveles récord de deuda corporativa, diferenciales de crédito ajustados y una creciente desconexión entre el rendimiento de los bonos y los fundamentos económicos subyacentes.", source: "The Economist", sourceUrl: "https://www.economist.com/finance-and-economics/2026/06/08/credit-markets-look-increasingly-dangerous", score: 900, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80" },
          { number: "#3", title: "Aerolíneas recortan previsiones de ganancias a la mitad por costo récord de combustible", summary: "El gasto récord de $6.5 mil millones en combustible de las aerolíneas estadounidenses en abril ha obligado al sector a recortar drásticamente sus proyecciones de ganancias para 2026, en medio de tensiones geopolíticas que mantienen los precios del petróleo elevados.", source: "AP News", sourceUrl: "https://apnews.com/article/airlines-fuel-costs-profit-2026", score: 870, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" },
        ],
      },
      {
        name: "Política Global",
        emoji: "🏛️",
        color: "#6B7280",
        news: [
          { number: "#1", title: "Israel e Irán señalan el fin de los ataques mutuos tras escalada de una semana", summary: "Después de una semana de intensos intercambios de ataques, Israel e Irán han indicado públicamente que cesarán las hostilidades. La desescalada, mediada por potencias internacionales, alivió temporalmente las tensiones en Medio Oriente y calmó los mercados globales.", source: "The Washington Post", sourceUrl: "https://www.washingtonpost.com/world/2026/06/08/israel-iran-deescalation/", score: 930, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80" },
          { number: "#2", title: "Trump abandona entrevista con NBC al ser presionado sobre fraudes electorales", summary: "El presidente Trump abandonó abruptamente una entrevista en vivo con NBC después de que la entrevistadora lo presionara repetidamente sobre sus afirmaciones infundadas de fraude electoral. El incidente ha reavivado el debate sobre el acceso de la prensa a la Casa Blanca.", source: "CBS News", sourceUrl: "https://www.cbsnews.com/news/trump-walks-out-nbc-interview-election-fraud-2026-06-08/", score: 890, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=800&q=80" },
          { number: "#3", title: "Xi Jinping y Kim Jong-un expresan esperanzas de mayores lazos entre China y Corea del Norte", summary: "Los líderes de China y Corea del Norte intercambiaron mensajes de cooperación reforzada, con Xi Jinping expresando su deseo de fortalecer los vínculos estratégicos con Pyongyang en medio de las crecientes tensiones en la península coreana y la región del Indo-Pacífico.", source: "NPR", sourceUrl: "https://www.npr.org/2026/06/08/xi-kim-china-north-korea-ties", score: 860, format: "Standard", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80" },
        ],
      },
    ],
  },
];