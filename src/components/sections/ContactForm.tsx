"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { services } from "@/content/services";

const organizationTypes = [
  "Entidad del Estado",
  "Empresa privada",
  "ONG / Organización social",
  "Educación",
  "Salud",
  "Emprendimiento / Startup",
  "Otro",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <Card className="border-0 bg-background max-w-2xl mx-auto">
        <CardContent className="py-16 text-center space-y-4">
          <CheckCircle className="h-16 w-16 text-accent mx-auto" />
          <h3 className="text-2xl font-bold text-foreground">Mensaje enviado</h3>
          <p className="text-muted-foreground">
            Gracias por contactarnos. Nuestro equipo revisará tu solicitud y te responderá a la
            brevedad.
          </p>
          <Button
            variant="outline"
            onClick={() => setSubmitted(false)}
            className="mt-4"
          >
            Enviar otro mensaje
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 bg-background">
      <CardHeader>
        <CardTitle className="text-2xl">Envíanos tu requerimiento</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre y apellidos *</Label>
              <Input id="name" {...register("name")} placeholder="Juan Pérez" />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Empresa o entidad *</Label>
              <Input
                id="company"
                {...register("company")}
                placeholder="Mi empresa SAC"
              />
              {errors.company && (
                <p className="text-sm text-destructive">{errors.company.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="ruc">RUC (opcional)</Label>
              <Input id="ruc" {...register("ruc")} placeholder="20XXXXXXXXX" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo corporativo *</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="correo@empresa.com"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono *</Label>
              <Input
                id="phone"
                {...register("phone")}
                placeholder="999 999 999"
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label>Tipo de organización *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione..." />
                </SelectTrigger>
                <SelectContent>
                  {organizationTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Servicio requerido *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione..." />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Presupuesto referencial (opcional)</Label>
              <Input
                id="budget"
                {...register("budget")}
                placeholder="S/ 50,000 - S/ 100,000"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensaje *</Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Describe brevemente tu proyecto o requerimiento..."
              rows={5}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="attachment">Archivo adjunto (TDR o requerimiento)</Label>
            <Input id="attachment" type="file" className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-muted file:text-sm file:font-medium" />
          </div>

          <div className="space-y-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register("consent")}
                className="mt-1 h-4 w-4 rounded border-gray-300"
              />
              <span className="text-sm text-muted-foreground">
                Acepto el tratamiento de mis datos personales conforme a la política de privacidad. *
              </span>
            </label>
            {errors.consent && (
              <p className="text-sm text-destructive">{errors.consent.message}</p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Enviando..."
            ) : (
              <>
                Enviar mensaje
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
