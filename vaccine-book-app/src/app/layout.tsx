import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Menu from '@/components/Menu'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]/route'
import NextAuthProvider from '@/providers/NextAuthProvider'
import ReduxProvider from '@/redux/ReduxProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vaccine Booking',
  description: 'Vaccine Booking App',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const nextAuthSession = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
        <NextAuthProvider session={nextAuthSession}>
        <Menu/>
        {children}
        </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
