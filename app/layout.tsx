import './globals.css'

export const metadata = {
  title: 'alameen',
  description: 'personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
