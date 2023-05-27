import './globals.css'
import { Poppins } from 'next/font/google'
import Header from './components/Header'

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Traversy media',
  description: 'Web development tutorials and courses',
  keywords:
    'web development, web desgin, javascript, react, node , angular, vue, html, css',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}
