import { teamMembers } from "@/content/team";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export function Team() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Especialistas preparados para cada desafío
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Nuestro personal clave está conformado por profesionales responsables de garantizar la
            correcta ejecución del servicio. Cuando el proyecto o TDR lo requiera, sus perfiles y
            experiencia podrán acreditarse documentalmente.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-background text-center"
            >
              <CardContent className="pt-8 pb-6 px-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent mx-auto mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                  <User className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-accent mt-1">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
