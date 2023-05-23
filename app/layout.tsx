import "./globals.css";
import { Unbounded, Montserrat } from "next/font/google";



// const unbounded = Unbounded({ subsets: ['latin'] })
// const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
    title: "Carlos Portfolio",
    description: "Built with Next.js, Tailwind CSS, and TypeScript.",
    icon: "/favicon.ico",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
