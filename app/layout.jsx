import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'Curadoria Raiz',
  description:
    'Uma seleção mensal de vinho natural, pão artesanal e produtos de pequenos produtores.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR'>
      <body className={`${playfair.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}
