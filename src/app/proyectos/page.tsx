"use client";

import { useState } from "react";
import {
  Building2,
  Signal,
  Shield,
  Plug,
  Receipt,
  Zap,
  Brain,
  Layers,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { projects, projectCategories, filterProjects } from "@/content/projects";
import type { Project } from "@/types";

const categoryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Estado: Building2,
  Telecomunicaciones: Signal,
  Seguros: Shield,
  "ERP e integraciones": Plug,
  Facturación: Receipt,
  Automatización: Zap,
  "Inteligencia artificial": Brain,
};

function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (p: Project) => void;
}) {
  const Icon = categoryIconMap[project.category] || Layers;
  return (
    <Card className="group border-0 bg-muted/30 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center relative">
        <Icon className="h-16 w-16 text-accent/20 group-hover:text-accent/40 transition-colors" />
        <Badge className="absolute top-4 left-4 bg-accent/90 text-white text-xs">
          {project.category}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60 mb-2">
            Soluciones principales
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.solutions.slice(0, 4).map((sol) => (
              <Badge key={sol} variant="secondary" className="text-xs">
                {sol}
              </Badge>
            ))}
            {project.solutions.length > 4 && (
              <Badge variant="secondary" className="text-xs text-muted-foreground">
                +{project.solutions.length - 4} más
              </Badge>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <Badge variant="outline" className="text-xs text-muted-foreground">
              +{project.technologies.length - 5}
            </Badge>
          )}
        </div>
        <p className="text-sm text-accent font-medium italic">
          &ldquo;{project.result}&rdquo;
        </p>
        <Button
          variant="outline"
          size="sm"
          className="w-full border-accent/30 text-accent hover:bg-accent hover:text-white transition-colors"
          onClick={() => onSelect(project)}
        >
          Ver detalle
        </Button>
      </CardContent>
    </Card>
  );
}

function ProjectDetail({
  project,
  open,
  onClose,
}: {
  project: Project;
  open: boolean;
  onClose: () => void;
}) {
  const Icon = categoryIconMap[project.category] || Layers;
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent shrink-0">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <DialogTitle className="text-xl">{project.title}</DialogTitle>
              <DialogDescription className="flex items-center gap-2 mt-1">
                <Badge className="text-xs bg-accent/90 text-white">{project.category}</Badge>
                <span>{project.sector}</span>
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Descripción</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Soluciones implementadas</h4>
            <ul className="space-y-1.5">
              {project.solutions.map((sol) => (
                <li key={sol} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {sol}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Tecnologías</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Resultado</h4>
            <p className="text-sm text-accent font-medium italic">
              &ldquo;{project.result}&rdquo;
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function ProyectosPage() {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filtered = filterProjects(projects, activeFilter);

  return (
    <>
      <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Proyectos tecnológicos
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Los profesionales que integran Rapibit SAC han participado en proyectos
              tecnológicos para entidades públicas y empresas privadas de distintos sectores.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 mb-12 text-center">
            <p className="text-sm text-muted-foreground">
              Los proyectos presentados corresponden a la experiencia profesional previa y acumulada
              de los integrantes de Rapibit SAC. Los nombres de clientes y detalles contractuales
              se muestran únicamente cuando existe autorización.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat.id
                    ? "bg-accent text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No se encontraron proyectos para esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
