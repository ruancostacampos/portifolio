import type { Metadata } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans} from 'next/font/google'
import './globals.css'
import { Providers } from '@/providers'
import { NextIntlClientProvider, useMessages } from 'next-intl'

const IBM_P_MONO = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: "400",
  display: "swap"
})

const IBM_P_SANS = IBM_Plex_Sans({
  weight: "400",
  display: "swap",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Ruan | Front-end Dev',
  description: 'Seeking to understand better what I perceive and what I cannot see.',
}

interface RootLayoutProps {
  children: React.ReactNode,
  params: {locale: string}
}

export default function RootLayout({children, params: {locale} }: Readonly<RootLayoutProps>) {

  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={IBM_P_SANS.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
