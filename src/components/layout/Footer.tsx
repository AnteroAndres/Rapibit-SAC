import Link from "next/link";
import { siteConfig } from "@/config/site";
import { mainNav } from "@/content/navigation";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  {
    title: "Empresa",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Servicios", href: "/servicios" },
      { label: "Proyectos", href: "/proyectos" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de privacidad", href: "/politica-privacidad" },
      { label: "Tratamiento de datos", href: "/politica-privacidad#tratamiento" },
      { label: "Libro de reclamaciones", href: "/libro-reclamaciones" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white text-sm">
                R
              </div>
              <span>Rapibit SAC</span>
            </Link>
            <p className="text-sm text-primary-foreground/70 max-w-xs">
              Soluciones de tecnología para entidades públicas, empresas y emprendimientos.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-primary-foreground/50">
              Navegación
            </h3>
            <ul className="space-y-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-primary-foreground/50">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-primary-foreground/60">
              <span className="flex items-center gap-1.5">
                <Mail className="h-4 w-4" />
                {siteConfig.contact.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-4 w-4" />
                {siteConfig.contact.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {siteConfig.contact.address}
              </span>
            </div>
            <p className="text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
