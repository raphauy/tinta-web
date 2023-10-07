import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/shadcn/theme-provider'
import SessionProvider from '@/components/SessionProvider'
import Header from '@/components/header/header'
import Menu from '@/components/header/menu'
import { TailwindIndicator } from '@/components/shadcn/tailwind-indicator'
import { cn } from '@/lib/utils'
import getSession from '@/lib/auth'
import { fontSans } from '@/lib/fonts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tina - Marketing del vino',
  description: 'Sitio web de Tina, una agencia de marketing especializada en el sector del vino',
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "favicon.ico",
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
        <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
            <SessionProvider session={session}>
          

            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="container relative flex flex-col min-h-screen mt-1 text-muted-foreground">
                <Header><Menu /></Header> 

                <div className="flex flex-col items-center flex-1">
                  {children}
                  <Toaster />
                </div>
              </div>            
              <TailwindIndicator />
            </ThemeProvider>

            </SessionProvider>
        </body>
      </html>
    </>
  )
}
