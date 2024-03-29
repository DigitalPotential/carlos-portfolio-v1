import "./globals.css";
import { Unbounded, Montserrat } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
    title: "Carlos Portfolio",
    description: "Built with Next.js, TypeScript, Framer Motion, Three.js and Tailwind CSS."
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
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
