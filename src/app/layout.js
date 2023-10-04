import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'b.leaf - Where nature meets no limits.',
  description: "We're all about adding that touch of green magic to your special moments and everyday spaces. We'll help you select the perfect plants and pots that match your style and space, whether it's an event, wedding or you just want to light up you office or restaurant.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js" async />
      </body>
    </html>
  )
}
