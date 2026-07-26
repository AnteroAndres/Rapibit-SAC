"use client";

import { useState } from "react";
import {
  User,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Briefcase,
  Award,
  Building2,
  FolderOpen,
  BookOpen,
  ShieldCheck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  professionals,
  filterCategories,
  filterProfessionals,
} from "@/content/professionals";
import type { Professional } from "@/types/professional";

const filterKeyMap: Record<string, string> = {
  todos: "todos",
  arquitectura: "arquitectura",
  liderazgo: "liderazgo",
  backend: "backend",
  frontend: "frontend",
  fullstack: "fullstack",
  "cloud-devops": "cloud-devops",
  "bases-datos": "bases-datos",
  integraciones: "integraciones",
  qa: "qa",
};

function truncate(text: string, maxWords: number): string {
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
}

function ProfessionalCard({
  professional,
  onSelect,
}: {
  professional: Professional;
  onSelect: (p: Professional) => void;
}) {
  return (
    <Card className="group relative overflow-hidden border-0 bg-gradient-to-b from-card to-muted/30 hover:shadow-xl transition-all duration-300">
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
            <User className="h-7 w-7" />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-foreground text-lg leading-tight">
              {professional.nombre}
            </h3>
            <p className="text-sm text-accent mt-1">{professional.cargo}</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {truncate(professional.resumenProfesional, 35)}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
            {professional.experienciaGeneral} de experiencia
          </span>
        </div>

        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60 mb-2">
            Especialidades
          </p>
          <div className="flex flex-wrap gap-1.5">
            {professional.especialidades.slice(0, 4).map((esp) => (
              <Badge
                key={esp}
                variant="secondary"
                className="text-xs bg-accent/10 text-accent hover:bg-accent/20"
              >
                {esp}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60 mb-2">
            Tecnologías principales
          </p>
          <div className="flex flex-wrap gap-1.5">
            {professional.tecnologias.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {professional.tecnologias.length > 5 && (
              <Badge variant="outline" className="text-xs text-muted-foreground">
                +{professional.tecnologias.length - 5}
              </Badge>
            )}
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="w-full border-accent/30 text-accent hover:bg-accent hover:text-white transition-colors"
          onClick={() => onSelect(professional)}
        >
          Ver perfil
        </Button>
      </CardContent>
    </Card>
  );
}

function ProfessionalDetail({
  professional,
  open,
  onClose,
}: {
  professional: Professional;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent shrink-0">
              <User className="h-8 w-8" />
            </div>
            <div>
              <DialogTitle className="text-xl">{professional.nombre}</DialogTitle>
              <DialogDescription className="text-accent">
                {professional.cargo}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div>
            <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
              <User className="h-4 w-4 text-accent" />
              Resumen profesional
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {professional.resumenProfesional}
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
              <GraduationCap className="h-4 w-4 text-accent" />
              Formación académica
            </h4>
            <ul className="space-y-1">
              {professional.formacionAcademica.map((f) => (
                <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
              <Briefcase className="h-4 w-4 text-accent" />
              Experiencia específica
            </h4>
            <ul className="space-y-1">
              {professional.experienciaEspecifica.map((e) => (
                <li key={e} className="text-sm text-muted-foreground flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {e}
                </li>
              ))}
            </ul>
          </div>

          {professional.capacitaciones.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
                <BookOpen className="h-4 w-4 text-accent" />
                Capacitaciones
              </h4>
              <ul className="space-y-1">
                {professional.capacitaciones.map((c) => (
                  <li key={c} className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {professional.certificaciones.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
                <ShieldCheck className="h-4 w-4 text-accent" />
                Certificaciones
              </h4>
              <div className="flex flex-wrap gap-2">
                {professional.certificaciones.map((cert) => (
                  <Badge key={cert} className="bg-accent/10 text-accent">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
              <Award className="h-4 w-4 text-accent" />
              Tecnologías
            </h4>
            <div className="flex flex-wrap gap-2">
              {professional.tecnologias.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
              <Building2 className="h-4 w-4 text-accent" />
              Sectores atendidos
            </h4>
            <div className="flex flex-wrap gap-2">
              {professional.sectores.map((sector) => (
                <Badge key={sector} variant="secondary" className="text-xs">
                  {sector}
                </Badge>
              ))}
            </div>
          </div>

          {professional.proyectosDestacados.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
                <FolderOpen className="h-4 w-4 text-accent" />
                Proyectos destacados
              </h4>
              <ul className="space-y-1">
                {professional.proyectosDestacados.map((p) => (
                  <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-xs text-muted-foreground/60 italic border-t pt-4">
            Los perfiles, grados académicos, capacitaciones y experiencia específica podrán
            acreditarse documentalmente de acuerdo con los requerimientos del servicio.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function PersonalClave() {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [selectedProfessional, setSelectedProfessional] =
    useState<Professional | null>(null);

  const filtered = filterProfessionals(professionals, activeFilter);

  return (
    <section id="personal-clave" className="py-20 lg:py-28 bg-hero-gradient relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Personal clave
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Especialistas preparados para diseñar, desarrollar e implementar soluciones
            tecnológicas confiables.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(filterKeyMap[cat.id] || cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === (filterKeyMap[cat.id] || cat.id)
                  ? "bg-accent text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((professional) => (
            <ProfessionalCard
              key={professional.id}
              professional={professional}
              onSelect={setSelectedProfessional}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/50">
              No se encontraron profesionales para esta categoría.
            </p>
          </div>
        )}
      </div>

      {selectedProfessional && (
        <ProfessionalDetail
          professional={selectedProfessional}
          open={!!selectedProfessional}
          onClose={() => setSelectedProfessional(null)}
        />
      )}
    </section>
  );
}
