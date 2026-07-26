import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sectores",
};

export default function SectoresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
