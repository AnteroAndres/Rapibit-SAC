import { projects, solutionTypes } from "@/content/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Layers } from "lucide-react";
import LinkComponent from "next/link";

export function Projects() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Tipos de soluciones que podemos implementar
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cada proyecto es único. Estos son algunos ejemplos de lo que podemos construir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutionTypes.map((solution) => (
            <Card
              key={solution.id}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-background"
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
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-foreground">
                Casos de ejemplo
              </h3>
              <p className="mt-2 text-muted-foreground">
                Proyectos que ilustran nuestro enfoque y capacidades.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden border-0 bg-background hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center">
                    <Layers className="h-16 w-16 text-accent/30" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
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

        <div className="text-center mt-12">
          <LinkComponent
            href="/proyectos"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            Ver más proyectos
            <ArrowRight className="h-4 w-4" />
          </LinkComponent>
        </div>
      </div>
    </section>
  );
}
