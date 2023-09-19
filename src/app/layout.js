import Footer from './footer'
import './globals.css'
import Header from './header'
import Navbar from './navbar'

export const metadata = {
  title: 'Digimatic',
  description: 'Digimatic Marketers Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        <Header />
        {children}
        <Footer />
        <Navbar />
      </body>
    </html>
  )
}
