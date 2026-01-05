import type { Metadata } from "next";
import {
	DM_Sans,
	Plus_Jakarta_Sans,
	Outfit,
	Sora,
	Inter,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const dmSans = DM_Sans({
	variable: "--font-dm-sans",
	subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
	variable: "--font-plus-jakarta",
	subsets: ["latin"],
});

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
});

const sora = Sora({
	variable: "--font-sora",
	subsets: ["latin"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "BetterForm - Create Beautiful Forms",
	description: "Build stunning, TypeForm-style forms in minutes.",
	icons: {
		icon: [
			{ url: "/favicon/favicon.ico", sizes: "any" },
			{ url: "/favicon/favicon.svg", type: "image/svg+xml" },
			{ url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
		],
		apple: [
			{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
		],
	},
	manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${dmSans.variable} ${plusJakarta.variable} ${outfit.variable} ${sora.variable} ${inter.variable} antialiased`}
			>
				{children}
				<Toaster richColors position="top-center" />
				<Analytics />
			</body>
		</html>
	);
}
