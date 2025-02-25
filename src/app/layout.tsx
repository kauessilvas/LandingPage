import './globals.css'

export const metadata = {
  title: 'Panto',
  description: 'Furniture e-commerce website',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body>{children}</body>
    </html>
  )
}
