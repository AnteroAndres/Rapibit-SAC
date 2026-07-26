import { methodologySteps } from "@/config/methodology";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck } from "lucide-react";

export function Methodology() {
  return (
    <section id="metodologia" className="py-20 lg:py-28 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Cómo trabajamos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Un proceso claro y transparente para cada proyecto.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden lg:block" />

          <div className="space-y-8">
            {methodologySteps.map((step) => (
              <div
                key={step.step}
                className="relative lg:pl-20"
              >
                <div className="hidden lg:flex absolute left-0 top-6 h-16 w-16 items-center justify-center rounded-full bg-accent text-white font-bold text-lg z-10">
                  {step.step}
                </div>

                <Card className="border-0 bg-background hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex lg:hidden h-10 w-10 items-center justify-center rounded-full bg-accent text-white font-bold text-sm shrink-0">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((deliverable) => (
                        <span
                          key={deliverable}
                          className="inline-flex items-center gap-1.5 text-xs font-medium bg-accent/10 text-accent px-3 py-1.5 rounded-full"
                        >
                          <FileCheck className="h-3 w-3" />
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
