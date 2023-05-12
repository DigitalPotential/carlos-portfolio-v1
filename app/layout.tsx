import './globals.css'
import { Unbounded, Montserrat } from 'next/font/google'

// const unbounded = Unbounded({ subsets: ['latin'] })
// const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Carlos Portfolio',
  description: 'Built with Next.js, Tailwind CSS, and TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
// className={unbounded.className}