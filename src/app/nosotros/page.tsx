import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { Differentiators } from "@/components/sections/Differentiators";
import dynamic from "next/dynamic";
const CTA = dynamic(() => import("@/components/sections/CTA").then(m => ({ default: m.CTA })), { loading: () => null });
const PersonalClave = dynamic(() => import("@/components/sections/PersonalClave").then(m => ({ default: m.PersonalClave })), { loading: () => <div className="h-96" /> });

export const metadata: Metadata = generatePageMetadata({
  title: "Nosotros",
  description:
    "Conoce al equipo detrás de Rapibit SAC. Profesionales comprometidos con la excelencia tecnológica.",
  path: "/nosotros",
});

export default function NosotrosPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Sobre nosotros
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Rapibit SAC es una empresa peruana de tecnología comprometida con brindar soluciones
              digitales de alto impacto. Trabajamos con entidades del estado, empresas privadas y
              emprendimientos que buscan transformar sus procesos mediante la tecnología.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Nuestra misión</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Diseñar, desarrollar e implementar soluciones tecnológicas que resuelvan problemas
                reales, generen valor medible y acompañen la evolución digital de cada organización.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Nuestro enfoque</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Creemos en el desarrollo iterativo, la comunicación constante y la transferencia de
                conocimiento. Cada proyecto se aborda con rigor técnico, estándares de calidad y
                un compromiso genuino con los resultados del cliente.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Valores</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Confianza", description: "Transparencia y cumplimiento en cada compromiso." },
                  { title: "Calidad", description: "Estándares altos en cada línea de código." },
                  { title: "Seguridad", description: "Protección de la información desde el diseño." },
                  { title: "Colaboración", description: "Trabajo en equipo con el cliente y entre pares." },
                  { title: "Escalabilidad", description: "Soluciones que crecen con la organización." },
                  { title: "Mejora continua", description: "Cada proyecto es una oportunidad de evolucionar." },
                ].map((value) => (
                  <div key={value.title} className="p-4 rounded-xl border bg-muted/30">
                    <h3 className="font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <PersonalClave />
      <Differentiators />
      <CTA />
    </>
  );
}
