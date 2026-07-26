"use client";

import { useState } from "react";
import { technologies, technologyCategories } from "@/content/technologies";
import { cn } from "@/lib/utils";

export function Technologies() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? technologies
      : technologies.filter((t) => t.category === active);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Tecnologías que dominamos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Seleccionamos las herramientas adecuadas para cada proyecto.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActive("all")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              active === "all"
                ? "bg-accent text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            Todas
          </button>
          {technologyCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                active === cat.id
                  ? "bg-accent text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-3 p-4 rounded-xl border bg-card hover:shadow-md hover:border-accent/50 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                <span className="text-xs font-bold text-muted-foreground">
                  {tech.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
