import { Inter } from 'next/font/google'
// import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Image Gallerey',
  description: 'Random Images',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  )
}
