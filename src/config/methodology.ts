import type { MethodologyStep } from "@/types";

export const methodologySteps: MethodologyStep[] = [
  {
    step: 1,
    title: "Descubrimiento",
    description: "Comprendemos el contexto, los actores, los sistemas existentes y los objetivos del proyecto.",
    deliverables: ["Plan de trabajo", "Matriz de riesgos"],
  },
  {
    step: 2,
    title: "Análisis",
    description: "Levantamos requisitos funcionales y no funcionales, definimos alcance y criterios de aceptación.",
    deliverables: ["Documento de arquitectura", "Especificación de requisitos"],
  },
  {
    step: 3,
    title: "Diseño",
    description: "Diseñamos la experiencia de usuario, la arquitectura técnica y los flujos principales.",
    deliverables: ["Prototipos", "Diagramas de arquitectura"],
  },
  {
    step: 4,
    title: "Desarrollo iterativo",
    description: "Construimos en ciclos cortos con entregas frecuentes para validación continua.",
    deliverables: ["Código fuente", "Releases incrementales"],
  },
  {
    step: 5,
    title: "Pruebas y seguridad",
    description: "Ejecutamos pruebas funcionales, de rendimiento y seguridad antes de cada despliegue.",
    deliverables: ["Evidencias de pruebas", "Reporte de seguridad"],
  },
  {
    step: 6,
    title: "Implementación",
    description: "Desplegamos en producción con plan de despliegue, monitoreo y rollback.",
    deliverables: ["Plan de despliegue", "Acta de implementación"],
  },
  {
    step: 7,
    title: "Capacitación y soporte",
    description: "Capacitamos al equipo usuario y brindamos soporte post-implementación.",
    deliverables: ["Manuales de usuario", "Acta de transferencia de conocimiento"],
  },
];
