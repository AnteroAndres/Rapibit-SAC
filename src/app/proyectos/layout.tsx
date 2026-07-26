import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
};

export default function ProyectosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
