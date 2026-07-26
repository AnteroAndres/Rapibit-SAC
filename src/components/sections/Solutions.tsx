import { Building2, Building, Rocket, Check } from "lucide-react";
import { sectorSolutions } from "@/config/solutions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Building,
  Rocket,
};

export function Solutions() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Soluciones por tipo de cliente
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nos adaptamos a las necesidades específicas de cada sector.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sectorSolutions.map((solution) => {
            const Icon = iconMap[solution.icon] || Building2;
            return (
              <Card
                key={solution.sector}
                className="relative overflow-hidden border-0 bg-gradient-to-b from-card to-muted/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
                <CardHeader className="pb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
