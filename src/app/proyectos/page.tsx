import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { projects, solutionTypes } from "@/content/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import dynamic from "next/dynamic";
const CTA = dynamic(() => import("@/components/sections/CTA").then(m => ({ default: m.CTA })), { loading: () => null });

export const metadata: Metadata = generatePageMetadata({
  title: "Proyectos",
  description:
    "Tipos de soluciones que podemos implementar y casos de ejemplo de nuestro trabajo.",
  path: "/proyectos",
});

export default function ProyectosPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Proyectos
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Cada proyecto es único. Estos son algunos ejemplos de lo que podemos construir para
              tu organización.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Tipos de soluciones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {solutionTypes.map((solution) => (
              <Card
                key={solution.id}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-muted/30"
              >
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Layers className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {projects.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Casos de ejemplo
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    className="overflow-hidden border-0 bg-muted/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center">
                      <Layers className="h-16 w-16 text-accent/30" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {project.sector}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                          Problema
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                          Solución
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                          Resultados
                        </h4>
                        <p className="text-sm text-accent font-medium">
                          {project.results}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <CTA />
    </>
  );
}
