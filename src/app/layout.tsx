import React from 'react'
import SessionProvider from '@/components/SessionProvider'
import Header from '@/components/header/header'
import LanguageToggle from '@/components/header/locale-toggle'
import Menu from '@/components/header/menu'
import { TailwindIndicator } from '@/components/shadcn/tailwind-indicator'
import { ThemeProvider } from '@/components/shadcn/theme-provider'
import { ThemeToggle } from '@/components/shadcn/theme-toggle'
import { Toaster } from '@/components/ui/toaster'
import getSession from '@/lib/auth'
import { cn } from '@/lib/utils'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import Script from 'next/script'
import Footer from './footer'
import './globals.css'

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
              <div className="relative flex flex-col min-h-screen pt-32 sm:pt-20 text-muted-foreground">
                <Header><Menu /></Header> 

                <div className="flex flex-col items-center flex-grow">
                  {children}
                  <Analytics />
                  <SpeedInsights />
                  <Toaster />
                </div>

                <Footer />

                <div className="flex items-center sm:hidden mx-auto">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
              </div>            
              
              <Script id="chatwoot" strategy="afterInteractive">
                {`
                  window.chatwootSettings = {"position":"right","type":"standard","launcherTitle":"Chatea con nosotros"};
                  (function(d,t) {
                    var BASE_URL="https://chatwoot.raphauy.dev";
                    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                    g.src=BASE_URL+"/packs/js/sdk.js";
                    g.defer = true;
                    g.async = true;
                    s.parentNode.insertBefore(g,s);
                    g.onload=function(){
                      window.chatwootSDK.run({
                        websiteToken: 'Vim1b8paMCtBYkaDtbEXQUjD',
                        baseUrl: BASE_URL
                      })
                    }
                  })(document,"script");
                `}
              </Script>

              <TailwindIndicator />
            </ThemeProvider>
          </SessionProvider>
        </body>
      </html>
    </>
  )
}
