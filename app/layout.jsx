import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Curadoria Raiz',
  description: 'Alimento com história, entregue por quem escolhe.',

  icons: {
    icon: '/branding/08_favicon.png',
    shortcut: '/branding/08_favicon.png',
    apple: '/branding/08_favicon.png',
  },

  openGraph: {
    title: 'Curadoria Raiz',
    description:
      'Uma curadoria contemporânea de vinho natural, pão artesanal e produtos autorais.',
    type: 'website',
    locale: 'pt_BR',
  },

  metadataBase: new URL('https://curadoriaraiz.vercel.app'),
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR'>
      <body
        className={`${playfair.variable} ${inter.variable} bg-[#F4EEE6] text-[#120E0B] antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
