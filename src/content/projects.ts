import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "plataforma-nacional-entidad-publica",
    title: "Plataforma nacional para una entidad pública",
    category: "Estado",
    sector: "Gobierno",
    description:
      "Participación del equipo en el desarrollo de una plataforma nacional para digitalizar procesos de postulación, revisión, evaluación y gestión documental.",
    solutions: [
      "Gestión de postulaciones",
      "Revisión y evaluación de información",
      "Administración de roles",
      "Importación masiva mediante Excel",
      "Generación de documentos PDF",
      "Reportes y trazabilidad",
      "Integración con Oracle",
      "Procedimientos almacenados",
      "Reuniones con usuarios funcionales",
      "Despliegue en infraestructura institucional",
    ],
    technologies: [".NET", "Angular", "Oracle", "REST APIs", "Tailwind CSS", "SonarQube"],
    result:
      "Centralización y digitalización de procesos institucionales mediante una plataforma web trazable.",
    visibility: "anonymous",
    featured: true,
    order: 1,
  },
  {
    id: "ecosistema-comercial-telecomunicaciones",
    title: "Ecosistema comercial y operativo de telecomunicaciones",
    category: "Telecomunicaciones",
    sector: "Telecomunicaciones",
    description:
      "Participación en el desarrollo, mantenimiento e integración de sistemas para clientes, ventas, contratos, facturación, intranet y comercio electrónico.",
    solutions: [
      "CRM empresarial",
      "Gestión de ventas y contratos",
      "Procesos de facturación",
      "Integración entre sistemas heredados",
      "Automatización mediante Node-RED",
      "Microservicios y patrón BFF",
      "Procesamiento de eventos con Kafka",
      "Caché con Redis",
      "Comunicación mediante WebSockets",
      "Optimización de procedimientos almacenados",
      "Atención de incidencias críticas",
      "Despliegues en producción",
    ],
    technologies: [".NET", "Node.js", "Java", "React", "Angular", "SQL Server", "PostgreSQL", "MongoDB", "Kafka", "Redis", "Docker", "Node-RED", "AWS"],
    result:
      "Integración de procesos comerciales y operativos para mejorar la continuidad y trazabilidad de los sistemas.",
    visibility: "anonymous",
    featured: true,
    order: 2,
  },
  {
    id: "plataformas-seguros-rrhh",
    title: "Plataformas para seguros y recursos humanos",
    category: "Seguros",
    sector: "Seguros",
    description:
      "Desarrollo de plataformas empresariales para administración de recursos humanos, gestión de brokers, comercio electrónico y procesos internos.",
    solutions: [
      "Gestión de colaboradores",
      "Administración de brokers",
      "APIs REST",
      "Microservicios",
      "Integración con ERP",
      "Interfaces web",
      "Bases de datos relacionales",
      "Despliegues cloud",
      "Automatización CI/CD",
    ],
    technologies: ["Node.js", ".NET", "Angular", "React", "PostgreSQL", "SQL Server", "AWS", "Docker", "GitHub Actions"],
    result:
      "Digitalización de procesos internos mediante plataformas empresariales integradas.",
    visibility: "anonymous",
    featured: true,
    order: 3,
  },
  {
    id: "integraciones-sap-business-one",
    title: "Integraciones con SAP Business One",
    category: "ERP e integraciones",
    sector: "ERP",
    description:
      "Desarrollo de integraciones entre SAP Business One, comercio electrónico, CRM, proveedores externos y portales corporativos.",
    solutions: [
      "Sincronización de artículos, precios y stock",
      "Integración de órdenes de compra",
      "Integración de facturas",
      "APIs REST",
      "Transferencia mediante SFTP",
      "Servicios Windows",
      "Logs y trazabilidad",
      "Portales de solicitudes y aprobaciones",
      "Gestión de documentos comerciales",
    ],
    technologies: ["C#", ".NET", "SAP Business One", "SAP HANA", "SQL Server", "Service Layer", "ODBC", "SFTP", "REST APIs"],
    result:
      "Automatización del intercambio de información entre SAP y plataformas externas.",
    visibility: "anonymous",
    featured: true,
    order: 4,
  },
  {
    id: "automatizacion-facturacion-electronica",
    title: "Automatización de facturación electrónica",
    category: "Facturación",
    sector: "Facturación",
    description:
      "Implementación y mantenimiento de procesos relacionados con comprobantes electrónicos, cobranzas, suspensión, reconexión y gestión comercial.",
    solutions: [
      "Integración con proveedores de facturación",
      "Integración con NubeFact y Bizlinks",
      "Emisión de comprobantes",
      "Suspensión y reconexión de servicios",
      "Procesamiento masivo",
      "Validación de datos",
      "Reportería",
      "Estabilización de procesos críticos",
    ],
    technologies: [".NET", "C#", "Angular", "SQL Server", "Node-RED", "APIs REST", "IIS"],
    result:
      "Automatización y estabilización de procesos críticos de facturación.",
    visibility: "anonymous",
    featured: true,
    order: 5,
  },
  {
    id: "automatizacion-extraccion-datos",
    title: "Automatización para extracción y procesamiento de datos",
    category: "Automatización",
    sector: "Automatización",
    description:
      "Desarrollo de una solución para extraer, procesar, validar y organizar información procedente de fuentes web.",
    solutions: [
      "Web scraping",
      "Procesamiento asíncrono",
      "Colas de tareas",
      "Monitoreo de procesos",
      "Validación de información",
      "Procesos en segundo plano",
      "Despliegue en Linux",
    ],
    technologies: ["Python", "Django", "Celery", "Redis", "Flower", "Nginx", "Gunicorn", "Linux"],
    result:
      "Automatización de tareas de extracción y procesamiento de información.",
    visibility: "anonymous",
    featured: true,
    order: 6,
  },
];

export const projectCategories = [
  { id: "todos" as const, label: "Todos" },
  { id: "Estado" as const, label: "Estado" },
  { id: "Telecomunicaciones" as const, label: "Telecomunicaciones" },
  { id: "Seguros" as const, label: "Seguros" },
  { id: "ERP e integraciones" as const, label: "ERP e integraciones" },
  { id: "Facturación" as const, label: "Facturación" },
  { id: "Automatización" as const, label: "Automatización" },
  { id: "Inteligencia artificial" as const, label: "Inteligencia artificial" },
];

export function filterProjects(projects: Project[], category: string): Project[] {
  return projects.filter((p) => p.visibility !== "confidential").filter((p) => category === "todos" || p.category === category);
}

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
