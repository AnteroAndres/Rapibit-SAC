import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import LinkComponent from "next/link";
import { siteConfig } from "@/config/site";

export function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Conversemos sobre tu próximo proyecto
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Cuéntanos el desafío, el alcance esperado o los requisitos de tu TDR. Nuestro equipo
            evaluará la necesidad y preparará una propuesta técnica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              nativeButton={false}
              className="bg-accent hover:bg-accent/90 text-white px-8"
              render={<LinkComponent href="/contacto" />}
            >
              Solicitar evaluación
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              nativeButton={false}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8"
              render={
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Hablar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
