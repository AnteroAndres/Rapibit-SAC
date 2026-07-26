import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { sectorSolutions } from "@/config/solutions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Building, Rocket, Check } from "lucide-react";
import dynamic from "next/dynamic";
const CTA = dynamic(() => import("@/components/sections/CTA").then(m => ({ default: m.CTA })), { loading: () => null });

export const metadata: Metadata = generatePageMetadata({
  title: "Sectores",
  description:
    "Soluciones tecnológicas para entidades del estado, empresas privadas y emprendimientos.",
  path: "/sectores",
});

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Building,
  Rocket,
};

export default function SectoresPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Sectores que atendemos
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Nos adaptamos a las necesidades específicas de cada sector, ofreciendo soluciones
              diseñadas para resolver problemas reales.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 space-y-16">
          {sectorSolutions.map((solution) => {
            const Icon = iconMap[solution.icon] || Building2;
            return (
              <Card
                key={solution.sector}
                className="overflow-hidden border-0 bg-muted/30"
              >
                <div className="h-2 bg-accent" />
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{solution.title}</CardTitle>
                      <p className="text-muted-foreground mt-1">{solution.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {solution.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 p-4 rounded-xl bg-background"
                      >
                        <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
      <CTA />
    </>
  );
}
