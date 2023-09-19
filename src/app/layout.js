import './globals.css'

export const metadata = {
  title: 'Digimatic',
  description: 'Digimatic Marketers Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>{children}</body>
    </html>
  )
}
