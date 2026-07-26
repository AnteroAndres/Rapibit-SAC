import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { services } from "@/content/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
} from "lucide-react";
import dynamic from "next/dynamic";
const CTA = dynamic(() => import("@/components/sections/CTA").then(m => ({ default: m.CTA })), { loading: () => null });

export const metadata: Metadata = generatePageMetadata({
  title: "Servicios",
  description:
    "Desarrollo de software, modernización de sistemas, integración de plataformas, cloud, DevOps, IA y más.",
  path: "/servicios",
});

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

export default function ServiciosPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Nuestros servicios
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Ofrecemos soluciones tecnológicas integrales para entidades públicas, empresas y
              emprendimientos. Cada servicio se adapta a las necesidades específicas de cada cliente.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Code2;
              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-muted/30"
                >
                  <CardHeader>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
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
        </div>
      </section>
      <CTA />
    </>
  );
}
