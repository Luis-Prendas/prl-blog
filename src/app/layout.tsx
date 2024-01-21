import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/css/globals.css'
import { ThemeSwitcher } from '@/components/themeSwitcher'
import { ThemeProvider } from './themeProvider'
import { Pulse } from '@/components/pulse'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PRL Blog',
  description: 'Generated by Daniel Prendas'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-200 dark:bg-black text-slate-800 dark:text-white flex flex-col items-center`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className='w-full flex justify-center -z-10 absolute top-28'>
            <Pulse />
          </div>
          <ThemeSwitcher />
          {children}
          <p className='absolute bottom-4 left-4 font-extralight text-lg text-white/50'>By <span className='inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent'>Daniel Prendas.</span></p>
        </ThemeProvider>
      </body>
    </html>
  )
}
