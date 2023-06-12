import "./globals.css";
import { Unbounded, Montserrat } from "next/font/google";

export const metadata = {
    title: "Carlos Portfolio",
    description: "Built with Next.js, Tailwind CSS, and TypeScript."
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
            </head>
            <body>{children}</body>
        </html>
    );
}
