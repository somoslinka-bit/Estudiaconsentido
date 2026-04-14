export interface Tecnica {
  slug: string
  nombre: string
  icono: string
  descripcion: string
  paraQueSirve: string
  comoSeAplica: string[]
  ejemploPractico: string
  nivelIdeal: string
  keywords: string[]
}

export const tecnicas: Tecnica[] = [
  {
    slug: "subrayado-y-resumen",
    nombre: "Subrayado y Resumen",
    icono: "Highlighter",
    descripcion:
      "Aprendé a identificar las ideas principales de un texto y resumirlas con tus propias palabras.",
    paraQueSirve:
      "El subrayado y el resumen te ayudan a procesar la información activamente en lugar de leer de forma pasiva. Al subrayar solo lo esencial y luego escribirlo con tus palabras, consolidás la comprensión y facilitás el repaso.",
    comoSeAplica: [
      "Leé el texto completo una vez sin subrayar, solo para entender el sentido general.",
      "En la segunda lectura, subrayá únicamente las ideas principales (no más del 20% del texto).",
      "Identificá palabras clave y conceptos centrales con un color diferente.",
      "Con el texto tapado, escribí con tus propias palabras un resumen usando las ideas subrayadas, sin copiar frases del texto.",
    ],
    ejemploPractico:
      "En un capítulo de historia sobre la Revolución Francesa, subrayás las causas, los principales actores y las consecuencias. Luego escribís un párrafo propio que conecta esos puntos sin mirar el libro.",
    nivelIdeal: "Secundario y universitario",
    keywords: ["subrayado", "resumen", "técnicas de estudio", "comprensión lectora"],
  },
  {
    slug: "mapa-conceptual",
    nombre: "Mapa Conceptual",
    icono: "Network",
    descripcion:
      "Organizá el conocimiento visualmente conectando conceptos con relaciones claras y jerarquías.",
    paraQueSirve:
      "Los mapas conceptuales te permiten ver cómo se relacionan los conceptos entre sí, facilitando la comprensión profunda y la retención a largo plazo. Son ideales para materias con mucho contenido teórico.",
    comoSeAplica: [
      "Identificá el concepto central del tema y escribilo en el centro o arriba del mapa.",
      "Buscá los conceptos secundarios que se desprenden del central y ubicalos alrededor.",
      "Conectá los conceptos con líneas y escribí sobre cada línea la relación que los une.",
      "Agregá ejemplos concretos en los extremos del mapa para anclar los conceptos abstractos.",
    ],
    ejemploPractico:
      "Para estudiar el sistema circulatorio, el concepto central es 'corazón'. De ahí se desprenden: arterias, venas, capilares, sangre, oxígeno. Cada uno se conecta con palabras como 'transporta', 'lleva', 'filtra'.",
    nivelIdeal: "Secundario, terciario y universitario",
    keywords: ["mapa conceptual", "organización visual", "relaciones conceptuales", "técnicas de estudio"],
  },
  {
    slug: "linea-de-tiempo",
    nombre: "Línea de Tiempo",
    icono: "Clock",
    descripcion:
      "Organizá eventos históricos o procesos cronológicos de forma visual para entender la secuencia y el contexto.",
    paraQueSirve:
      "La línea de tiempo es perfecta para materias con contenido histórico o procesos que ocurren en etapas. Te permite ver la secuencia temporal de eventos, identificar causas y consecuencias, y recordar fechas de forma contextualizada.",
    comoSeAplica: [
      "Identificá el período o proceso que vas a representar y establecé el inicio y el fin.",
      "Trazá una línea horizontal y dividila en intervalos de tiempo proporcionales.",
      "Ubicá los eventos principales en la línea, con fecha y una descripción breve.",
      "Usá colores o íconos para diferenciar tipos de eventos (políticos, sociales, económicos).",
    ],
    ejemploPractico:
      "Para estudiar la Segunda Guerra Mundial, trazás una línea desde 1939 hasta 1945. Marcás los hitos clave: invasión de Polonia, caída de Francia, ataque a Pearl Harbor, Día D, bombas atómicas, rendición.",
    nivelIdeal: "Secundario y terciario",
    keywords: ["línea de tiempo", "historia", "cronología", "técnicas de estudio"],
  },
  {
    slug: "pregunta-y-respuesta",
    nombre: "Pregunta y Respuesta",
    icono: "HelpCircle",
    descripcion:
      "Transformá el contenido en preguntas y respondelas de memoria para reforzar el aprendizaje activo.",
    paraQueSirve:
      "La técnica de pregunta y respuesta (también llamada auto-evaluación) es una de las más efectivas según la ciencia cognitiva. Al intentar recuperar información de la memoria, la consolidás mucho más que releyendo pasivamente.",
    comoSeAplica: [
      "Después de estudiar un tema, cerrá el libro y hacete preguntas sobre el contenido.",
      "Escribí las preguntas en un lado de una tarjeta y las respuestas en el otro (flashcards).",
      "Respondé cada pregunta de memoria antes de mirar la respuesta.",
      "Clasificá las tarjetas en 'dominadas' y 'a repasar' y concentrá el esfuerzo en las segundas.",
    ],
    ejemploPractico:
      "Estudiando química: escribís en una tarjeta '¿Cuál es la fórmula del agua?' y en el reverso 'H₂O'. Después de repasar todas las tarjetas, te quedás solo con las que contestaste mal.",
    nivelIdeal: "Secundario, terciario y universitario",
    keywords: ["pregunta y respuesta", "flashcards", "auto-evaluación", "técnicas de estudio"],
  },
  {
    slug: "tecnica-pomodoro",
    nombre: "Técnica Pomodoro",
    icono: "Timer",
    descripcion:
      "Estudiá en bloques de 25 minutos con pausas estratégicas para mantener la concentración sin agotarte.",
    paraQueSirve:
      "La técnica Pomodoro mejora el enfoque y combate la procrastinación dividiendo el trabajo en intervalos manejables. Las pausas regulares evitan el agotamiento mental y mantienen la productividad alta durante sesiones largas.",
    comoSeAplica: [
      "Elegí una tarea específica que vas a hacer durante el Pomodoro (ej: leer el capítulo 3).",
      "Configurá un temporizador en 25 minutos y trabajá sin interrupciones hasta que suene.",
      "Cuando suena, tomá 5 minutos de descanso real: alejate del material, tomá agua, estirá.",
      "Después de 4 Pomodoros completos, tomá una pausa larga de 15-30 minutos.",
    ],
    ejemploPractico:
      "Para preparar un parcial, dividís el material: Pomodoro 1 → lectura del capítulo 1, Pomodoro 2 → resumen del capítulo 1, Pomodoro 3 → lectura del capítulo 2, y así. Al final del día tenés bloques concretos terminados.",
    nivelIdeal: "Secundario, terciario y universitario",
    keywords: ["técnica pomodoro", "gestión del tiempo", "concentración", "productividad", "técnicas de estudio"],
  },
  {
    slug: "metodo-feynman",
    nombre: "Método Feynman",
    icono: "Lightbulb",
    descripcion:
      "Explicá un concepto como si se lo enseñaras a alguien que no sabe nada del tema para detectar qué no entendés realmente.",
    paraQueSirve:
      "El método Feynman, creado por el físico Richard Feynman, se basa en que si no podés explicar algo de forma simple, es porque no lo entendés del todo. Te fuerza a ir a las fuentes y clarificar las lagunas de conocimiento.",
    comoSeAplica: [
      "Elegí el concepto que querés aprender y escribí el título en una hoja en blanco.",
      "Explicalo con palabras simples como si se lo contaras a un nene de 12 años.",
      "Identificá los puntos donde te trabaste o usaste términos que no podías explicar.",
      "Volvé al material original, estudiá esas partes difíciles y repetí la explicación.",
    ],
    ejemploPractico:
      "Intentás explicar la fotosíntesis. Te trabás en 'clorofila'. Volvés al libro, entendés que la clorofila es el pigmento que captura la luz solar. Ahora podés decir: 'las plantas tienen un ingrediente especial que atrapa la luz del sol como una esponja'.",
    nivelIdeal: "Terciario y universitario",
    keywords: ["método feynman", "comprensión profunda", "explicar para aprender", "técnicas de estudio"],
  },
  {
    slug: "cuadro-comparativo",
    nombre: "Cuadro Comparativo",
    icono: "Table2",
    descripcion:
      "Organizá información de múltiples elementos en una tabla para identificar similitudes y diferencias con claridad.",
    paraQueSirve:
      "El cuadro comparativo es ideal cuando tenés que estudiar varios conceptos, corrientes, teorías o períodos históricos que se pueden analizar desde las mismas categorías. Facilita la comprensión de diferencias y similitudes complejas.",
    comoSeAplica: [
      "Identificá los elementos que vas a comparar (ej: tres teorías, cuatro autores, dos períodos).",
      "Definí los criterios de comparación (ej: características, ventajas, contexto histórico, autores).",
      "Construí la tabla: elementos en columnas, criterios en filas (o al revés).",
      "Completá cada celda con información precisa y usá la tabla para repasar.",
    ],
    ejemploPractico:
      "Para estudiar distintas corrientes psicológicas (conductismo, cognitivismo, humanismo), hacés una tabla con columnas para cada corriente y filas para: fundador, concepto central, método, aplicación práctica.",
    nivelIdeal: "Secundario, terciario y universitario",
    keywords: ["cuadro comparativo", "tabla", "comparación", "organización", "técnicas de estudio"],
  },
]
