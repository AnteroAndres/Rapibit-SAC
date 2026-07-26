# Rapibit SAC - Landing Page Corporativa

Landing page moderna, responsive y orientada a conversión para Rapibit SAC.

## Tecnologías

- Next.js 16 con App Router
- TypeScript (strict mode)
- Tailwind CSS v4
- shadcn/ui
- Lucide Icons
- React Hook Form + Zod

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local

# Ejutar en desarrollo
npm run dev
```

## Estructura del proyecto

```
src/
├── app/              # Páginas (App Router)
├── components/
│   ├── ui/           # Componentes base (shadcn)
│   ├── layout/       # Header, Footer
│   └── sections/     # Secciones de la landing
├── config/           # Configuración del sitio
├── content/          # Datos de servicios, proyectos, etc.
├── features/         # Módulos funcionales
├── lib/              # Utilidades, validaciones, SEO
└── types/            # Definiciones TypeScript
```

## Despliegue

```bash
# Build de producción
npm run build

# Ejecutar en producción
npm start
```

## Notas

- No incluir información comercial inventada
- Los datos de servicios, proyectos y equipo son editables desde `src/content/`
- Configuración del sitio en `src/config/site.ts`
