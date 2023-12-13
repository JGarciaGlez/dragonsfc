import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Dragon Fc Officials Website',
  description: 'Generated by javier garcia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          <div className="min-h-screen bg-black grid grid-cols-1 ">{children}</div>
          <Footer />
      </body>
    </html>
  );
}
