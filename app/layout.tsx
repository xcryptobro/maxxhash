import type { Metadata } from 'next'
import { Quantico } from 'next/font/google'
import './globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import { Providers } from './providers'

const quantico = Quantico({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'MaxxHash',
  description: 'The first $MAXX shared mining pool protocol on Base'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${quantico.className} antialiased`}>
        <div id='maxxhashbg' className='-z-10 '>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
