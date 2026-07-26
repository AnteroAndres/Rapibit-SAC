import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
};

export default function PoliticaPrivacidadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
