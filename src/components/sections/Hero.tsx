import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const stats = [
  { label: "Sectores atendidos", value: "8+" },
  { label: "Tecnologías dominadas", value: "30+" },
  { label: "Especialistas", value: "12+" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative container mx-auto px-4 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Tecnología que convierte desafíos en{" "}
              <span className="text-gradient">soluciones reales</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
              Diseñamos, desarrollamos e implementamos soluciones digitales seguras y escalables
              para entidades públicas, empresas y nuevos proyectos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              nativeButton={false}
              className="bg-accent hover:bg-accent/90 text-white px-8"
              render={<Link href="/contacto" />}
            >
              Solicitar una propuesta
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              nativeButton={false}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8"
              render={<Link href="/servicios" />}
            >
              Conocer nuestros servicios
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-lg">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-96 h-96">
          <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute inset-8 rounded-full border border-accent/20" />
          <div className="absolute inset-16 rounded-full border border-accent/10" />
          <div className="absolute inset-24 rounded-full bg-accent/5" />
        </div>
      </div>
    </section>
  );
}
