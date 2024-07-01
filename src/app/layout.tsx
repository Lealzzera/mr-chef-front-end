import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { main_font_mono, main_font_sans, second_font } from "./functions/fonts";
import StyledComponentsRegistry from "./lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Mr. Chef",
	description: "Gerencie seu restaurante e alavanque suas vendas",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='pt-BR'
			className={`${main_font_mono.variable} ${main_font_sans.variable} ${second_font.variable}`}
		>
			<body>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
