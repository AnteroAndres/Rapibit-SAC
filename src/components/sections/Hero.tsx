import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const capabilities = [
  {
    title: "Experiencia multisectorial",
    description: "Estado y empresas privadas",
  },
  {
    title: "Equipo multidisciplinario",
    description: "Perfiles especializados",
  },
  {
    title: "Tecnologías modernas",
    description: "Soluciones mantenibles",
  },
  {
    title: "Cloud y DevOps",
    description: "Infraestructura escalable",
  },
];

function HeroVisual() {
  const nodes = [
    { label: "Rapibit", x: 50, y: 50, size: "lg" },
    { label: "Cloud", x: 15, y: 20, size: "sm" },
    { label: "Software", x: 85, y: 18, size: "sm" },
    { label: "Datos", x: 10, y: 75, size: "sm" },
    { label: "IA", x: 88, y: 78, size: "sm" },
    { label: "Seguridad", x: 50, y: 92, size: "sm" },
  ];

  return (
    <div className="relative hidden lg:flex items-center justify-center w-full min-h-[420px]">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,212,255,0.3)" />
            <stop offset="100%" stopColor="rgba(0,212,255,0.05)" />
          </linearGradient>
        </defs>
        {[
          [200, 200, 60, 80],
          [200, 200, 340, 72],
          [200, 200, 40, 300],
          [200, 200, 352, 312],
          [200, 200, 200, 368],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#line-grad)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}
        <circle cx="200" cy="200" r="60" stroke="rgba(0,212,255,0.15)" strokeWidth="1" fill="none" />
        <circle cx="200" cy="200" r="120" stroke="rgba(0,212,255,0.08)" strokeWidth="1" fill="none" />
      </svg>

      {nodes.map((node) => (
        <div
          key={node.label}
          className="absolute flex flex-col items-center gap-1.5"
          style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
        >
          <div
            className={`flex items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.12] ${
              node.size === "lg"
                ? "h-20 w-20 text-sm font-bold text-cyan-400"
                : "h-14 w-14 text-xs font-medium text-slate-300"
            }`}
          >
            {node.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24 min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-5rem)]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] xl:gap-16">
          <div className="space-y-0">
            <h1
              className="max-w-4xl text-balance text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-white"
            >
              Tecnología que convierte desafíos en{" "}
              <span className="text-gradient">soluciones reales</span>
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-300 sm:text-lg lg:text-xl">
              Diseñamos, desarrollamos e implementamos soluciones digitales seguras y escalables
              para entidades públicas, empresas y nuevos proyectos.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                size="lg"
                nativeButton={false}
                className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold px-8 h-12"
                render={<Link href="/contacto" />}
              >
                Solicitar una propuesta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                nativeButton={false}
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 px-8 h-12"
                render={<Link href="/servicios" />}
              >
                Conocer nuestros servicios
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-6 sm:grid-cols-4">
              {capabilities.map((cap) => (
                <div key={cap.title} className="min-w-0">
                  <div className="text-lg font-semibold leading-tight text-white sm:text-xl">
                    {cap.title}
                  </div>
                  <div className="mt-1 text-sm leading-5 text-slate-400">
                    {cap.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
