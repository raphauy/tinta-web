import SessionProvider from '@/components/SessionProvider'
import Header from '@/components/header/header'
import Menu from '@/components/header/menu'
import { TailwindIndicator } from '@/components/shadcn/tailwind-indicator'
import { ThemeProvider } from '@/components/shadcn/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import getSession from '@/lib/auth'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import Footer from './footer'

export const metadata: Metadata = {
  title: 'Tinta - Educación y Marketing del vino',
  description: 'Sitio web de Tinta, una agencia de marketing especializada en el sector del vino',
  //<meta property="twitter:image" content="Twitter link preview image URL">
  twitter: {
    card: 'summary',
    site: '@tinta_wine',
  },
  openGraph: {
    url: 'https://tinta.wine',
    title: 'Tinta - Educación y Marketing del vino',
    description: 'Sitio web de Tinta, una agencia de marketing especializada en el sector del vino',
    images: [
      {
        url: 'https://tinta.wine/Tinta_Logotipo_Fondo-transparente.png',
        width: 800,
        height: 600,
        alt: 'Tinta Wine Logo',
      },
    ],
  },

}

interface RootLayoutProps {  
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session= await getSession()
  return (    
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn("min-h-screen bg-background text-muted-foreground font-sans antialiased", GeistSans.className)}>
          <SessionProvider session={session}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>


              <div className="relative flex flex-col min-h-screen pt-20 text-muted-foreground">
                <Header><Menu /></Header> 

                <div className="flex flex-col items-center flex-grow">
                  {children}
                  <Toaster />
                </div>

                <Footer />
              </div>            


              <TailwindIndicator />
            </ThemeProvider>
          </SessionProvider>
        </body>
      </html>
    </>
  )
}
