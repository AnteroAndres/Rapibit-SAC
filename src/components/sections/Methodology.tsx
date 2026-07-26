"use client";

import { useState } from "react";
import {
  Search,
  BarChart3,
  Palette,
  Code,
  ShieldCheck,
  Rocket,
  GraduationCap,
  ChevronRight,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: 1,
    title: "Descubrimiento",
    icon: Search,
    description: "Comprendemos el contexto, actores, sistemas existentes y objetivos del proyecto.",
    activities: [
      "Reuniones con stakeholders",
      "Levantamiento de información",
      "Identificación de restricciones",
    ],
    deliverables: ["Plan de trabajo", "Matriz de riesgos"],
  },
  {
    step: 2,
    title: "Análisis",
    icon: BarChart3,
    description: "Definimos requisitos funcionales y no funcionales, alcance y criterios de aceptación.",
    activities: [
      "Especificación de requisitos",
      "Definición de alcance",
      "Criterios de aceptación",
    ],
    deliverables: ["Especificación de requisitos"],
  },
  {
    step: 3,
    title: "Diseño",
    icon: Palette,
    description: "Diseñamos la experiencia de usuario, la arquitectura técnica y los flujos principales.",
    activities: [
      "Prototipos de interfaz",
      "Diseño de arquitectura",
      "Definición de flujos",
    ],
    deliverables: ["Prototipos", "Diagramas de arquitectura"],
  },
  {
    step: 4,
    title: "Desarrollo iterativo",
    icon: Code,
    description: "Construimos en ciclos cortos con entregas frecuentes para validación continua.",
    activities: [
      "Sprints de desarrollo",
      "Revisión de código",
      "Integración continua",
    ],
    deliverables: ["Código fuente", "Versiones incrementales"],
  },
  {
    step: 5,
    title: "Pruebas y seguridad",
    icon: ShieldCheck,
    description: "Ejecutamos pruebas funcionales, de rendimiento y seguridad antes de cada despliegue.",
    activities: [
      "Pruebas funcionales",
      "Pruebas de rendimiento",
      "Auditoría de seguridad",
    ],
    deliverables: ["Evidencias de pruebas", "Reporte de calidad"],
  },
  {
    step: 6,
    title: "Implementación",
    icon: Rocket,
    description: "Desplegamos en producción con plan de despliegue, monitoreo y rollback.",
    activities: [
      "Despliegue controlado",
      "Monitoreo post-lanzamiento",
      "Plan de rollback",
    ],
    deliverables: ["Plan de despliegue", "Acta de implementación"],
  },
  {
    step: 7,
    title: "Capacitación y soporte",
    icon: GraduationCap,
    description: "Transferimos conocimiento al equipo usuario y brindamos soporte post-implementación.",
    activities: [
      "Capacitación a usuarios",
      "Documentación de uso",
      "Soporte técnico",
    ],
    deliverables: ["Manuales de usuario", "Acta de transferencia"],
  },
];

function StepDetail({ step }: { step: (typeof steps)[number] }) {
  const Icon = step.icon;
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:p-8 space-y-5">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
          <Icon className="h-7 w-7" />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent/70">
            Paso {step.step}
          </span>
          <h3 className="text-xl font-bold text-white">{step.title}</h3>
        </div>
      </div>
      <p className="text-slate-300 leading-relaxed">{step.description}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">
            Actividades
          </h4>
          <ul className="space-y-1.5">
            {step.activities.map((a) => (
              <li key={a} className="flex items-start gap-2 text-sm text-slate-300">
                <ChevronRight className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">
            Entregables
          </h4>
          <ul className="space-y-1.5">
            {step.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-slate-300">
                <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Methodology() {
  const [active, setActive] = useState(0);

  return (
    <section id="metodologia" className="py-20 lg:py-28 scroll-mt-20" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-balance text-[clamp(2rem,3.5vw,3.5rem)] font-bold leading-tight text-white">
            Cómo convertimos una necesidad en una solución
          </h2>
          <p className="mt-4 text-pretty text-base leading-7 text-slate-300 sm:text-lg lg:text-xl">
            Un proceso estructurado, transparente y adaptable a proyectos privados y servicios
            para entidades del Estado.
          </p>
        </div>

        {/* Desktop: semantic map */}
        <div className="hidden lg:block">
          <div className="relative mx-auto max-w-4xl min-h-[520px]">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 800 500"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="m-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(0,212,255,0.25)" />
                  <stop offset="100%" stopColor="rgba(0,212,255,0.05)" />
                </linearGradient>
              </defs>
              {/* Lines from center to each node */}
              {[
                [400, 250, 400, 40],
                [400, 250, 180, 120],
                [400, 250, 620, 120],
                [400, 250, 100, 350],
                [400, 250, 700, 350],
                [400, 250, 250, 460],
                [400, 250, 550, 460],
              ].map(([x1, y1, x2, y2], i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#m-grad)" strokeWidth="1.5" strokeDasharray="6 4" />
              ))}
              <circle cx="400" cy="250" r="40" stroke="rgba(0,212,255,0.12)" strokeWidth="1" fill="rgba(0,212,255,0.03)" />
            </svg>

            {/* Center node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-cyan-400/30 bg-cyan-400/[0.08] backdrop-blur-sm">
                <span className="text-sm font-bold text-cyan-400 text-center leading-tight">Proyecto<br />tecnológico</span>
              </div>
            </div>

            {/* Step nodes - positioned around center */}
            {[
              { step: steps[0], x: "50%", y: "2%", translateX: "-50%" },
              { step: steps[1], x: "18%", y: "22%", translateX: "-50%" },
              { step: steps[2], x: "82%", y: "22%", translateX: "-50%" },
              { step: steps[3], x: "8%", y: "62%", translateX: "-50%" },
              { step: steps[4], x: "92%", y: "62%", translateX: "-50%" },
              { step: steps[5], x: "30%", y: "90%", translateX: "-50%" },
              { step: steps[6], x: "70%", y: "90%", translateX: "-50%" },
            ].map((pos, i) => {
              const Icon = pos.step.icon;
              const isActive = active === i;
              return (
                <button
                  key={pos.step.step}
                  onClick={() => setActive(i)}
                  aria-current={isActive ? "step" : undefined}
                  className={cn(
                    "absolute z-10 flex flex-col items-center gap-2 transition-all duration-300 group",
                    "rounded-xl border p-3 min-w-[100px]",
                    isActive
                      ? "border-cyan-400/50 bg-cyan-400/[0.12] scale-105"
                      : "border-white/10 bg-white/[0.03] hover:border-cyan-400/30 hover:bg-cyan-400/[0.06]"
                  )}
                  style={{ left: pos.x, top: pos.y, transform: pos.translateX }}
                >
                  <div className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                    isActive ? "bg-accent text-white" : "bg-white/5 text-slate-400 group-hover:text-accent"
                  )}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-white text-center leading-tight">
                    {pos.step.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-12">
            <StepDetail step={steps[active]} />
          </div>
        </div>

        {/* Mobile & Tablet: timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = active === i;
            return (
              <div key={step.step} className="relative">
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px bg-white/10" />
                )}
                <button
                  onClick={() => setActive(isActive ? -1 : i)}
                  aria-current={isActive ? "step" : undefined}
                  className={cn(
                    "relative w-full flex items-start gap-4 py-4 text-left transition-all",
                    "rounded-xl px-3",
                    isActive && "bg-white/[0.03]"
                  )}
                >
                  <div className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-colors z-10",
                    isActive ? "border-cyan-400/50 bg-accent text-white" : "border-white/10 bg-white/5 text-slate-400"
                  )}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 pt-1">
                    <span className="text-xs font-semibold text-accent/70">Paso {step.step}</span>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    {isActive && (
                      <div className="mt-3 space-y-4 animate-fade-in">
                        <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          <div>
                            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Actividades</h4>
                            <ul className="space-y-1">
                              {step.activities.map((a) => (
                                <li key={a} className="flex items-start gap-2 text-xs text-slate-300">
                                  <ChevronRight className="h-3 w-3 text-accent mt-0.5 shrink-0" />
                                  {a}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Entregables</h4>
                            <ul className="space-y-1">
                              {step.deliverables.map((d) => (
                                <li key={d} className="flex items-start gap-2 text-xs text-slate-300">
                                  <Check className="h-3 w-3 text-accent mt-0.5 shrink-0" />
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
