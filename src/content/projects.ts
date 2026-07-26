import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "portal-ciudadano",
    name: "Portal de Servicios Ciudadanos",
    sector: "Gobierno Local",
    problem:
      "Una municipalidad provincial necesitaba centralizar trámites y servicios digitales para sus ciudadanos.",
    solution:
      "Desarrollo de un portal web con autenticación, trámites en línea, seguimiento de expedientes y notificaciones.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    results:
      "Reducción del 60% en tiempos de atención y mejora en la experiencia ciudadana.",
    image: "/projects/portal-ciudadano.jpg",
  },
  {
    id: "sistema-gestion-inventarios",
    name: "Sistema de Gestión de Inventarios",
    sector: "Empresa Privada",
    problem:
      "Una empresa de retail perdía control sobre su inventario multi-sucursal con procesos manuales.",
    solution:
      "Plataforma web con control de stock en tiempo real, alertas automáticas y reportes analíticos.",
    technologies: ["React", "Node.js", "MongoDB", "Docker"],
    results:
      "Control total del inventario y reducción de pérdidas en un 45%.",
    image: "/projects/inventario.jpg",
  },
  {
    id: "plataforma-elearning",
    name: "Plataforma de E-Learning",
    sector: "Educación",
    problem:
      "Una institución educativa requería una plataforma propia para impartir cursos en línea con seguimiento.",
    solution:
      "SaaS con aulas virtuales, evaluaciones, progreso estudiantil y certificados automáticos.",
    technologies: ["Next.js", "Python", "PostgreSQL", "AWS"],
    results:
      "Más de 500 estudiantes activos y automatización completa de evaluaciones.",
    image: "/projects/elearning.jpg",
  },
  {
    id: "rpa-procesos-administrativos",
    name: "RPA para Procesos Administrativos",
    sector: "Entidad Pública",
    problem:
      "Una entidad del estado dedicaba horas a tareas repetitivas de digitación y generación de documentos.",
    solution:
      "Automatización de flujos de aprobación, generación de documentos y conciliación de datos.",
    technologies: ["Python", "Selenium", "Power Automate", "SQL Server"],
    results:
      "Automatización del 80% de tareas repetitivas y ahorro de 200 horas mensuales.",
    image: "/projects/rpa.jpg",
  },
];

export const solutionTypes = [
  {
    id: "portales-web",
    title: "Portales y plataformas web",
    description: "Portales institucionales, plataformas ciudadanas y sistemas de gestión web.",
  },
  {
    id: "aplicaciones-moviles",
    title: "Aplicaciones móviles",
    description: "Apps nativas e híbridas para Android, iOS y Progressive Web Apps.",
  },
  {
    id: "sistemas-erp",
    title: "Sistemas ERP y gestión",
    description: "Soluciones integradas para finanzas, inventario, RRHH y operaciones.",
  },
  {
    id: "automatizaciones",
    title: "Automatizaciones y RPA",
    description: "Procesos automatizados para eliminar tareas repetitivas y mejorar eficiencia.",
  },
  {
    id: "integraciones",
    title: "Integraciones y APIs",
    description: "Conexión de sistemas, APIs y servicios de terceros.",
  },
  {
    id: "productos-saas",
    title: "Productos SaaS",
    description: "Software como servicio escalable, multiempresa y con suscripción.",
  },
];
