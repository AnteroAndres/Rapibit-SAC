"use client";

import { useState } from "react";
import {
  SiNodedotjs,
  SiNestjs,
  SiDotnet,
  SiSpringboot,
  SiGo,
  SiPython,
  SiDjango,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGithubactions,
  SiGitlab,
  SiLinux,
  SiNginx,
  SiSap,
  SiApachekafka,
  SiNodered,
  SiGithub,
} from "react-icons/si";
import {
  Globe,
  Layers,
  Brain,
  MessageSquare,
  Workflow,
  FileText,
  LinkIcon,
  Code,
  Coffee,
  Database,
  Cloud,
  Cpu,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  tooltip: string;
}

const technologies: TechItem[] = [
  { name: "Node.js", icon: SiNodedotjs, category: "backend", tooltip: "Runtime de JavaScript para servidores" },
  { name: "NestJS", icon: SiNestjs, category: "backend", tooltip: "Framework Node.js progresivo" },
  { name: ".NET", icon: SiDotnet, category: "backend", tooltip: "Plataforma de desarrollo Microsoft" },
  { name: "C#", icon: Code, category: "backend", tooltip: "Lenguaje orientado a objetos" },
  { name: "Java", icon: Coffee, category: "backend", tooltip: "Lenguaje empresarial multiplataforma" },
  { name: "Spring Boot", icon: SiSpringboot, category: "backend", tooltip: "Framework Java para microservicios" },
  { name: "Golang", icon: SiGo, category: "backend", tooltip: "Lenguaje de Google para sistemas" },
  { name: "Python", icon: SiPython, category: "backend", tooltip: "Lenguaje versátil y expresivo" },
  { name: "Django", icon: SiDjango, category: "backend", tooltip: "Framework Python para web" },
  { name: "Angular", icon: SiAngular, category: "frontend", tooltip: "Framework TypeScript de Google" },
  { name: "React", icon: SiReact, category: "frontend", tooltip: "Biblioteca UI de Meta" },
  { name: "Next.js", icon: SiNextdotjs, category: "frontend", tooltip: "Framework React fullstack" },
  { name: "Vue.js", icon: SiVuedotjs, category: "frontend", tooltip: "Framework UI progresivo" },
  { name: "React Native", icon: SiReact, category: "frontend", tooltip: "Apps móviles con React" },
  { name: "TypeScript", icon: SiTypescript, category: "frontend", tooltip: "JavaScript con tipos estáticos" },
  { name: "JavaScript", icon: SiJavascript, category: "frontend", tooltip: "Lenguaje de la web" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend", tooltip: "Framework CSS utility-first" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "database", tooltip: "Base de datos relacional avanzada" },
  { name: "SQL Server", icon: Database, category: "database", tooltip: "BD relacional de Microsoft" },
  { name: "Oracle", icon: Database, category: "database", tooltip: "BD empresarial de alto rendimiento" },
  { name: "MySQL", icon: SiMysql, category: "database", tooltip: "BD relacional de código abierto" },
  { name: "MongoDB", icon: SiMongodb, category: "database", tooltip: "Base de datos NoSQL documental" },
  { name: "Redis", icon: SiRedis, category: "database", tooltip: "Almacenamiento en memoria caché" },
  { name: "SAP HANA", icon: SiSap, category: "database", tooltip: "BD en memoria para SAP" },
  { name: "AWS", icon: Cloud, category: "cloud", tooltip: "Plataforma cloud de Amazon" },
  { name: "Azure", icon: Cloud, category: "cloud", tooltip: "Plataforma cloud de Microsoft" },
  { name: "Docker", icon: SiDocker, category: "devops", tooltip: "Contenedores para despliegues" },
  { name: "GitHub Actions", icon: SiGithubactions, category: "devops", tooltip: "CI/CD de GitHub" },
  { name: "GitLab", icon: SiGitlab, category: "devops", tooltip: "Plataforma DevOps completa" },
  { name: "Linux", icon: SiLinux, category: "devops", tooltip: "Sistema operativo servidor" },
  { name: "Nginx", icon: SiNginx, category: "devops", tooltip: "Servidor web y proxy inverso" },
  { name: "SAP Business One", icon: SiSap, category: "integration", tooltip: "ERP para pymes" },
  { name: "Kafka", icon: SiApachekafka, category: "integration", tooltip: "Plataforma de streaming de eventos" },
  { name: "Node-RED", icon: SiNodered, category: "integration", tooltip: "Automatización basada en nodos" },
  { name: "REST APIs", icon: Globe, category: "integration", tooltip: "Interfaces de programación RESTful" },
  { name: "WebSockets", icon: LinkIcon, category: "integration", tooltip: "Comunicación en tiempo real" },
  { name: "OpenAI", icon: Cpu, category: "ai", tooltip: "Modelos de lenguaje avanzados" },
  { name: "Claude", icon: Brain, category: "ai", tooltip: "IA de Anthropic" },
  { name: "RAG", icon: FileText, category: "ai", tooltip: "Generación aumentada por recuperación" },
  { name: "MCP", icon: Layers, category: "ai", tooltip: "Model Context Protocol" },
  { name: "n8n", icon: Workflow, category: "ai", tooltip: "Automatización de workflows" },
  { name: "GitHub Copilot", icon: SiGithub, category: "ai", tooltip: "Asistente de código con IA" },
  { name: "Microsoft Copilot", icon: MessageSquare, category: "ai", tooltip: "IA integrada en Microsoft 365" },
];

const categories = [
  { id: "all", label: "Todas" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "database", label: "Bases de datos" },
  { id: "cloud", label: "Cloud" },
  { id: "devops", label: "DevOps" },
  { id: "integration", label: "Integraciones" },
  { id: "ai", label: "Inteligencia artificial" },
];

export function Technologies() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? technologies : technologies.filter((t) => t.category === active);

  return (
    <section className="py-20 lg:py-28" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-balance text-[clamp(2rem,3.5vw,3.5rem)] font-bold leading-tight text-white">
            Tecnologías que dominamos
          </h2>
          <p className="mt-4 text-pretty text-base leading-7 text-slate-300 sm:text-lg lg:text-xl">
            Seleccionamos las herramientas adecuadas para cada proyecto.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Filtrar tecnologías">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              aria-pressed={active === cat.id}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                active === cat.id
                  ? "bg-cyan-400 text-slate-900"
                  : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
          {filtered.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group flex min-h-[7rem] min-w-0 flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
                title={`${tech.name} — ${tech.tooltip}`}
              >
                <Icon className="h-9 w-9 sm:h-10 sm:w-10 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                <span className="w-full break-words text-xs font-medium leading-4 text-slate-300 sm:text-sm">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
