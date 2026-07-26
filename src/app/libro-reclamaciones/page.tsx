import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, AlertTriangle, FileText, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Libro de reclamaciones",
  description:
    "Registro de reclamaciones de Rapibit SAC conforme a la normativa peruana.",
  path: "/libro-reclamaciones",
});

export default function LibroReclamacionesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Libro de reclamaciones
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              En cumplimiento de la normativa peruana, pongo a disposición de los usuarios el
              libro de reclamaciones.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="border-0 bg-muted/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-accent" />
                  Libro de reclamaciones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Rapibit SAC pone a disposición de sus clientes y usuarios el presente libro de
                  reclamaciones, en cumplimiento con lo establecido por la Ley N.º 29571, el
                  Reglamento del Libro de Reclamaciones y las normas complementarias.
                </p>
                <p>
                  Los usuarios pueden registrar sus reclamaciones ante esta empresa, las cuales
                  serán atendidas en un plazo no mayor de treinta (30) días hábiles, conforme
                  a la normativa vigente.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 bg-muted/30">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold text-foreground">¿Qué es una reclamación?</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Es toda expresión de inconformidad, protesta o queja de un consumidor respecto
                    a los productos o servicios ofrecidos por la empresa.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-muted/30">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold text-foreground">¿Qué es una queja?</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Es toda expresión de inconformidad o malestar que no está relacionada con
                    los productos o servicios de la empresa, sino con el personal o procesos.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-muted/30">
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-semibold text-foreground text-lg">Datos de la empresa</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>
                    <span className="font-medium text-foreground">Razón social:</span>{" "}
                    Rapibit SAC
                  </div>
                  <div>
                    <span className="font-medium text-foreground">RUC:</span>{" "}
                    {siteConfig.contact.ruc}
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Dirección:</span>{" "}
                    {siteConfig.contact.address}
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Correo:</span>{" "}
                    {siteConfig.contact.email}
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Teléfono:</span>{" "}
                    {siteConfig.contact.phone}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/30">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Canal de registro</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Para registrar su reclamación o queja, puede comunicarse a través de nuestro
                  correo electrónico {siteConfig.contact.email} o al teléfono{" "}
                  {siteConfig.contact.phone}. Le atenderemos en el menor tiempo posible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
