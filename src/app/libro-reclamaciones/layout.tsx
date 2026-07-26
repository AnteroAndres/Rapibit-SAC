import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Libro de reclamaciones",
};

export default function LibroReclamacionesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
