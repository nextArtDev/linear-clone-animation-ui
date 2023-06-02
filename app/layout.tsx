import Container from './components/Container'
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <div>
          <Header />
          <main className="pt-[var(--navigation-height)] bg-page-gradient ">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
