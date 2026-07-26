import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("@/components/sections/ContactForm").then(m => ({ default: m.ContactForm })), { loading: () => <div className="h-96 animate-pulse bg-muted rounded-xl" /> });
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Contacto",
  description:
    "Contáctanos para evaluar tu proyecto. Nuestro equipo preparará una propuesta técnica.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Contacto
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Cuéntanos sobre tu proyecto o requerimiento. Nuestro equipo evaluará la necesidad y
              preparará una propuesta técnica.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-2xl font-bold text-foreground">
                Información de contacto
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Correo</h3>
                    <p className="text-sm text-muted-foreground">{siteConfig.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Teléfono</h3>
                    <p className="text-sm text-muted-foreground">{siteConfig.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent shrink-0">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:text-accent/80 transition-colors"
                    >
                      Escribir por WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Dirección</h3>
                    <p className="text-sm text-muted-foreground">{siteConfig.contact.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
