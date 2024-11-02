import type { Metadata } from "next";
import "./globals.css";
import { main_font_mono, main_font_sans, second_font } from "./functions/fonts";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: "Mr. Chefe",
  description: "Gerencie seu restaurante e aumente suas vendas.",
  openGraph: {
    images: [{ url: "/images/coffe-shop-login-page.webp" }],
    title: "Mr. Chefe",
    description: "Gerencie seu restaurante e aumente suas vendas.",
  },
  metadataBase: new URL("https://mrchefe.com.br"),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${main_font_mono.variable} ${main_font_sans.variable} ${second_font.variable}`}
    >
      <body>
        <main>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </main>
      </body>
    </html>
  );
}
