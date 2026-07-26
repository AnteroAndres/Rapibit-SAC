import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  company: z.string().min(2, "Ingrese el nombre de su empresa o entidad"),
  ruc: z.string().optional(),
  email: z.string().email("Ingrese un correo electrónico válido"),
  phone: z.string().min(9, "Ingrese un número de teléfono válido"),
  organizationType: z.string().min(1, "Seleccione un tipo de organización"),
  serviceRequired: z.string().min(1, "Seleccione el servicio requerido"),
  budget: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Debe aceptar el tratamiento de datos",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
