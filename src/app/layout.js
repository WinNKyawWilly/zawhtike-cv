import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zaw Htike - Treasure House  Art Gallery',
  description: 'Zaw Htike is a talented paper quilling artist from Myanmar who creates intricate artworks through the art of paper filigree and shares his skills through exhibitions, workshops, and media appearances.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
