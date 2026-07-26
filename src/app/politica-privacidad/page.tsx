import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Política de privacidad",
  description:
    "Conoce cómo Rapibit SAC protege y trata tus datos personales.",
  path: "/politica-privacidad",
});

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Política de privacidad
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Última actualización: julio 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Información que recopilamos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Recopilamos información que usted nos proporciona directamente al contactarnos,
                enviar un formulario o solicitar una propuesta. Esta información puede incluir:
                nombre completo, correo electrónico, teléfono, empresa, RUC, tipo de organización,
                servicio requerido, presupuesto referencial y mensaje.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Uso de la información</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos su información para: responder a sus consultas, preparar propuestas
                técnicas, gestionar proyectos, enviar comunicaciones relacionadas con nuestros
                servicios, y cumplir con obligaciones legales.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Protección de datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas para proteger su
                información contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Compartición de datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                No compartimos su información personal con terceros, salvo que sea necesario
                para cumplir con una obligación legal o cuando usted lo autorice expresamente.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Sus derechos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Usted tiene derecho a acceder, rectificar, eliminar o solicitar la portabilidad
                de sus datos personales. Para ejercer estos derechos, contáctenos a través de
                nuestros canales oficiales.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para consultas sobre esta política de privacidad o el tratamiento de sus datos,
                contáctenos a través de correo electrónico o teléfono indicados en nuestra
                página de contacto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
