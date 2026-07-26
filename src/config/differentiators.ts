import {
  Puzzle,
  Layers,
  ShieldCheck,
  MessageSquare,
  RefreshCcw,
  FileText,
  Link,
  Headphones,
} from "lucide-react";
import type { ComponentType } from "react";

export interface Differentiator {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export const differentiators: Differentiator[] = [
  {
    title: "Soluciones adaptadas al problema",
    description: "No usamos plantillas genéricas. Cada solución se diseña según el contexto real del cliente.",
    icon: Puzzle,
  },
  {
    title: "Arquitecturas escalables y mantenibles",
    description: "Construimos con estándares que permiten crecer, mantener y evolucionar el software.",
    icon: Layers,
  },
  {
    title: "Seguridad incorporada desde el diseño",
    description: "La seguridad no es un add-on. Se integra en cada etapa del desarrollo.",
    icon: ShieldCheck,
  },
  {
    title: "Comunicación y seguimiento permanente",
    description: "Actualizaciones frecuentes, transparencia y accesibilidad del equipo durante todo el proyecto.",
    icon: MessageSquare,
  },
  {
    title: "Entregas iterativas y demostrables",
    description: "Trabajamos en ciclos cortos con resultados tangibles para validación continua.",
    icon: RefreshCcw,
  },
  {
    title: "Documentación y transferencia",
    description: "Documentamos decisiones técnicas y transferimos conocimiento al equipo del cliente.",
    icon: FileText,
  },
  {
    title: "Integración con sistemas existentes",
    description: "Conectamos nuevas soluciones con la infraestructura y sistemas ya en uso.",
    icon: Link,
  },
  {
    title: "Soporte post-implementación",
    description: "Brindamos soporte y acompañamiento después de la puesta en producción.",
    icon: Headphones,
  },
];
