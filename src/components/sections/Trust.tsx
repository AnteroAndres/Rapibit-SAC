import {
  Search,
  Palette,
  Code,
  Rocket,
  GraduationCap,
  Headphones,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Análisis y consultoría",
    description: "Comprendemos tu necesidad, contexto y sistemas existentes.",
  },
  {
    icon: Palette,
    title: "Diseño de la solución",
    description: "Arquitectura técnica y experiencia de usuario fundamentadas.",
  },
  {
    icon: Code,
    title: "Desarrollo e integración",
    description: "Construcción iterativa con entregas frecuentes y demostrables.",
  },
  {
    icon: Rocket,
    title: "Implementación",
    description: "Despliegue seguro con plan, monitoreo y rollback.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación",
    description: "Transferencia de conocimiento al equipo usuario.",
  },
  {
    icon: Headphones,
    title: "Soporte y mejora continua",
    description: "Acompañamiento post-implementación y evolución.",
  },
];

export function Trust() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Un aliado tecnológico para cada etapa de tu proyecto
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Acompañamos desde la idea hasta la implementación y más allá.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
