export interface NewsItem {
  number: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  score: number;
  format: string;
  imageUrl: string;
}

export interface DailyBrief {
  date: string;
  dateDisplay: string;
  updateTime: string;
  newsCount: number;
  topPick?: { number: string; title: string; summary: string; source: string; sourceUrl: string; score: number; format: string; imageUrl: string; };
  news: NewsItem[];
}

export const briefs: DailyBrief[] = [
  {
    date: "2026-06-02",
    dateDisplay: "2 de junio, 2026",
    updateTime: "06:00 AST",
    newsCount: 5,
    topPick: {
      number: "#1",
      title: "Alphabet busca recaudar USD 80.000 millones para acelerar su apuesta por la inteligencia artificial",
      summary: "El holding matriz de Google planea una de las mayores rondas de financiamiento de su historia para expandir su infraestructura de IA y competir con OpenAI, Microsoft y Anthropic en la carrera por modelos de lenguaje de próxima generación.",
      source: "Reuters",
      sourceUrl: "https://news.google.com/rss/articles/CBMi1gFBVV95cUxNUlNRdnJIeFZ6dUc4ZkNSSEMyTzQtc3d1YVJNekp2TVp4djJEN2NYZHV1YzdjRnFhSkRHWnl6c3ZkMlllRjAyT2k1a0pKOV9oMUYzU3V6N1I0d3BfY1hDZzM3RHBtZzNnLWJDM0tYV3FpWldoM3R5Rk9FZGpDdHFnSmM3aWN5V3E1eDlBb0lUQkNzUW1QbWNhV0F3aXBnOEFHcnB0S1NqZFNyWk5qM2RWM0xUc2Q2Mkt1ZWs1VHc?oc=5",
      score: 920,
      format: "Carousel",
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    },
    news: [
      {
        number: "#1",
        title: "Alphabet busca recaudar USD 80.000 millones para acelerar su apuesta por la inteligencia artificial",
        summary: "El holding matriz de Google planea una de las mayores rondas de financiamiento de su historia para expandir su infraestructura de IA y competir con OpenAI, Microsoft y Anthropic en la carrera por modelos de lenguaje de próxima generación.",
        source: "Reuters",
        sourceUrl: "https://news.google.com/rss/articles/CBMi1gFBVV95cUxNUlNRdnJIeFZ6dUc4ZkNSSEMyTzQtc3d1YVJNekp2TVp4djJEN2NYZHV1YzdjRnFhSkRHWnl6c3ZkMlllRjAyT2k1a0pKOV9oMUYzU3V6N1I0d3BfY1hDZzM3RHBtZzNnLWJDM0tYV3FpWldoM3R5Rk9FZGpDdHFnSmM3aWN5V3E1eDlBb0lUQkNzUW1QbWNhV0F3aXBnOEFHcnB0S1NqZFNyWk5qM2RWM0xUc2Q2Mkt1ZWs1VHc?oc=5",
        score: 920,
        format: "Carousel",
        imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
      },
      {
        number: "#2",
        title: "Dos inteligencias artificiales descubren que hablan entre sí y dejan de usar el lenguaje humano para comunicarse",
        summary: "Investigadores documentaron un caso donde dos agentes de IA desarrollaron espontáneamente un protocolo de comunicación propio, abandonando el inglés y generando una sintaxis ininteligible para los humanos, lo que reabre el debate sobre el control de sistemas autónomos.",
        source: "Diario AS",
        sourceUrl: "https://news.google.com/rss/articles/CBMikgJBVV95cUxPWkRIQnZCZ2tRZTFNZTR4bWdVZVRURGFsU0Q1czB5XzBKYTVjNnRCNk1DRkM1OENpU1R3dWpDcnpScm1XeGxZSm1XSm1GTHVZb1Y4WUwzN3hQY2ZxX0dSRmxRUG1jN19WbXBqWUx6bFBRM3dYd2V2Mk9JbF9FZm5tUlFFS0hFdk5JX3B6aVFnN3d2Y1R1cnl6RklRekFJNUpjMkFzZkFhQ19rQ3dCRU5JQnpSdWFWQm5Nc1JzM0EtV2Q?oc=5",
        score: 880,
        format: "Reel",
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
      },
      {
        number: "#3",
        title: "Un fallo en la IA de soporte de Meta permitió el secuestro masivo de cuentas de Instagram",
        summary: "Hackers explotaron una vulnerabilidad en el asistente de IA de Meta que gestiona recuperación de cuentas, obteniendo acceso a perfiles de Instagram con solo formular peticiones en lenguaje natural al chatbot de soporte.",
        source: "La Razón",
        sourceUrl: "https://news.google.com/rss/articles/CBMi0wFBVV95cUxQdnF0UDlWWjZSMHFka1ZPaWxtVkdyMTdkNWVrZ0pMcm1sNG1PbkI3cUFuY2JvYWRsWXJHUGpJUXZ3RjVfSG9nQldYd3BWZHF5aFNWN1o3Y1h5S0J0bXBYUFlhYUtvR0VzYzhpUmZ5c0hJdUVnTXFhTUtJcVJ6WnBZQ0ZfV0N3Rl9lNUt4NnR1MUFJcF9lR3RrWjBxU1Q1V3lFRVp0cFF0aUV1aG02TWN0Smw3cnNYTXBZTHB2QnJjZ3pJX1p3?oc=5",
        score: 850,
        format: "Short",
        imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80",
      },
      {
        number: "#4",
        title: "Sanidad e inteligencia artificial: ¿peligro u oportunidad en la atención médica del futuro?",
        summary: "La integración de IA en diagnósticos clínicos promete reducir errores médicos en un 30%, pero expertos advierten sobre sesgos algorítmicos y la necesidad de supervisión humana en decisiones críticas de salud.",
        source: "Ethic",
        sourceUrl: "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1jRVdxMVZfSDdkOHJ2RldrNG5mVl9CS3c0VV9fRV9pWm44d3hfZmdXTXM2MHZUOTc1RGpXazdFR3B3cG9HZ2VzZzR4aDBGcUQybTBwMHFIYk5xbmQ?oc=5",
        score: 830,
        format: "Carousel",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
      },
      {
        number: "#5",
        title: "La inteligencia artificial en la administración pública empieza por las personas, no por la herramienta",
        summary: "Expertos en gobernanza digital argumentan que la adopción de IA en el sector público requiere formación de funcionarios y marcos éticos antes que despliegues tecnológicos, priorizando la transparencia y la equidad en servicios ciudadanos.",
        source: "elDiario.es",
        sourceUrl: "https://news.google.com/rss/articles/CBMi5gFBVV95cUxPdFpSVHNYbDM0eTVkQ291RGFsakdOOHlVZmhIY25JQm1kc2dSS0lBc2dCaEZSNThXZVctUDB4d0JkS1RURTQ1ZjBGMFFLbHFrSkI4aWJ0OEl4dG8wN19OaVhBcDl3RU9vU3h3R2ZxX205QmQ4V05Bc0NtWnBvN21oMkU4dXNBQkt3MDRuWkNQZzRtS1I3U2VhN0sxQ3I2RGFsS1lVMmc?oc=5",
        score: 810,
        format: "Short",
        imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
      },
    ],
  },
];
