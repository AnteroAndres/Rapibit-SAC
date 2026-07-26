export interface Professional {
  id: string;
  nombre: string;
  cargo: string;
  resumenProfesional: string;
  formacionAcademica: string[];
  experienciaGeneral: string;
  experienciaEspecifica: string[];
  especialidades: string[];
  tecnologias: string[];
  capacitaciones: string[];
  certificaciones: string[];
  sectores: string[];
  proyectosDestacados: string[];
  foto?: string;
  perfilDestacado: boolean;
  orden: number;
}

export type FilterCategory =
  | "todos"
  | "arquitectura"
  | "liderazgo"
  | "backend"
  | "frontend"
  | "fullstack"
  | "cloud-devops"
  | "bases-datos"
  | "integraciones"
  | "qa";
