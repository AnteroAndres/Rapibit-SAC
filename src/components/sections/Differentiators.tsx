import { differentiators } from "@/config/differentiators";

export function Differentiators() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            ¿Por qué elegir Rapibit?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nos diferenciamos por cómo trabajamos y el valor que entregamos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="text-center space-y-4 group"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent mx-auto group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
