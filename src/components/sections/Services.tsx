import {
  Code2,
  RefreshCw,
  Link,
  Cloud,
  LayoutDashboard,
  Bot,
  Server,
  Brain,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react";
import { services } from "@/content/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LinkComponent from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  RefreshCw,
  Link,
  Cloud,
  LayoutDashboard,
  Bot,
  Server,
  Brain,
  Shield,
  Users,
};

export function Services() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Nuestros servicios
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Soluciones tecnológicas integrales para cada necesidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <Card
                key={service.id}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-background"
              >
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <LinkComponent
            href="/servicios"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            Ver todos los servicios
            <ArrowRight className="h-4 w-4" />
          </LinkComponent>
        </div>
      </div>
    </section>
  );
}
