"use client";

import {
  BookOpen,
  Bot,
  Workflow,
  MessageSquare,
  FileText,
  Code2,
  ShieldCheck,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LinkComponent from "next/link";
import { aiSolutions, aiSecurityFeatures } from "@/content/ai-solutions";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Bot,
  Workflow,
  MessageSquare,
  FileText,
  Code2,
};

export function AISolutions() {
  return (
    <section id="inteligencia-artificial" className="py-20 lg:py-28 relative overflow-hidden scroll-mt-20" style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a0a2e 50%, #0a1628 100%)" }}>
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(0, 212, 255, 0.08) 0%, transparent 60%)" }} />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
            IA + automatización + integración empresarial
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Inteligencia artificial aplicada a problemas reales
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Diseñamos soluciones de inteligencia artificial para automatizar procesos, consultar
            información empresarial, asistir a usuarios y mejorar la productividad de los equipos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {aiSolutions.map((solution) => {
            const Icon = iconMap[solution.icon] || Bot;
            return (
              <Card
                key={solution.id}
                className="group border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">
                      Capacidades
                    </p>
                    <ul className="space-y-1.5">
                      {solution.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2 text-sm text-white/70">
                          <Check className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {solution.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-white/10 text-white/60"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-0 bg-white/5 backdrop-blur-sm mb-16">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                IA integrada de forma segura y controlada
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aiSecurityFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-sm text-white/70">
                  <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-white">
            ¿Tienes un proceso que podríamos automatizar?
          </h3>
          <p className="text-white/60 max-w-xl mx-auto">
            Evaluamos tu proceso, identificamos oportunidades de mejora y diseñamos una solución
            conectada con tus sistemas y objetivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              nativeButton={false}
              className="bg-accent hover:bg-accent/90 text-white px-8"
              render={<LinkComponent href="/contacto" />}
            >
              Evaluar mi proceso
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              nativeButton={false}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8"
              render={<LinkComponent href="/contacto" />}
            >
              Solicitar una demostración
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
