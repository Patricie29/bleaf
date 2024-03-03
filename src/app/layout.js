import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'b.leaf | Queenstown | Plant Hire & Maintenance',
  description: "Your green specialist in event & wedding hire, long-term plant rental & maintenance, interior plant design. We are passionate about bringing greenery into your space.",
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
