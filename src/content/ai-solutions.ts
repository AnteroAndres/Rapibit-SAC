import type { AISolution } from "@/types";

export const aiSolutions: AISolution[] = [
  {
    id: "asistentes-rag",
    title: "Asistentes empresariales con RAG",
    description:
      "Asistentes que responden preguntas utilizando documentos, manuales, procedimientos y bases de conocimiento de la organización.",
    capabilities: [
      "Consulta documental",
      "Búsqueda semántica",
      "Respuestas basadas en fuentes",
      "Control de acceso",
      "Historial de conversaciones",
      "Integración con sistemas internos",
    ],
    technologies: ["OpenAI", "Claude", "RAG", "Embeddings", "Bases vectoriales"],
    icon: "BookOpen",
    featured: true,
    order: 1,
  },
  {
    id: "agentes-ia",
    title: "Agentes de IA especializados",
    description:
      "Agentes configurados para apoyar tareas de análisis, soporte, documentación, desarrollo y operación.",
    capabilities: [
      "Agentes por tecnología",
      "Análisis de código",
      "Generación de documentación",
      "Clasificación de solicitudes",
      "Apoyo en resolución de incidencias",
      "Integración de herramientas mediante MCP",
    ],
    technologies: ["OpenAI", "Claude", "MCP", "Node.js", "Python"],
    icon: "Bot",
    featured: true,
    order: 2,
  },
  {
    id: "automatizacion-inteligente",
    title: "Automatización inteligente",
    description:
      "Automatización de procesos combinando inteligencia artificial, reglas de negocio e integración de sistemas.",
    capabilities: [
      "Clasificación documental",
      "Extracción de información",
      "Validación de datos",
      "Generación de respuestas",
      "Notificaciones automáticas",
      "Integración entre plataformas",
    ],
    technologies: ["n8n", "Node-RED", "OpenAI", "Python", "REST APIs"],
    icon: "Workflow",
    featured: true,
    order: 3,
  },
  {
    id: "chatbots-atencion",
    title: "Chatbots de atención y soporte",
    description:
      "Asistentes conversacionales conectados con información empresarial para atender consultas y orientar usuarios.",
    capabilities: [
      "Atención permanente",
      "Respuestas contextualizadas",
      "Derivación a especialistas",
      "Registro de conversaciones",
      "Métricas de atención",
      "Integración con sistemas internos",
    ],
    technologies: ["OpenAI", "Claude", "Node.js", "REST APIs", "WebSockets"],
    icon: "MessageSquare",
    featured: true,
    order: 4,
  },
  {
    id: "procesamiento-documentos",
    title: "Procesamiento inteligente de documentos",
    description:
      "Soluciones para analizar, clasificar, resumir y extraer información de documentos empresariales.",
    capabilities: [
      "Clasificación documental",
      "Extracción de campos",
      "Resumen automático",
      "Validación de información",
      "Identificación de contenido relevante",
      "Generación de datos estructurados",
    ],
    technologies: ["OpenAI", "Claude", "Python", "RAG", "Embeddings"],
    icon: "FileText",
    featured: true,
    order: 5,
  },
  {
    id: "desarrollo-asistido",
    title: "Desarrollo asistido por IA",
    description:
      "Aplicación responsable de herramientas de inteligencia artificial para acelerar el desarrollo manteniendo revisión técnica y seguridad.",
    capabilities: [
      "Generación asistida de código",
      "Revisión de código",
      "Generación de pruebas",
      "Documentación técnica",
      "Análisis de errores",
      "Prototipado rápido",
    ],
    technologies: ["GitHub Copilot", "Microsoft Copilot", "Cursor", "OpenAI", "Claude"],
    icon: "Code2",
    featured: true,
    order: 6,
  },
];

export const aiSecurityFeatures = [
  "Control de acceso por usuario y rol",
  "Protección de información empresarial",
  "Respuestas acompañadas de fuentes cuando corresponda",
  "Trazabilidad de consultas y acciones",
  "Validación humana para operaciones importantes",
  "Integración mediante APIs seguras",
  "Opciones de despliegue cloud o infraestructura privada",
  "Monitoreo y mejora continua",
];
