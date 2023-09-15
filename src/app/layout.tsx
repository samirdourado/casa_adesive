import { NavProvider } from '@/contexts/navContext'
import '../scss/main.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Casa Adesive',
  description: 'A casa do envelopamento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <NavProvider>
          {children}
        </NavProvider>
      </body>
    </html>
  )
}
