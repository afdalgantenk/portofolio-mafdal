import './globals.css'

export const metadata = {
  title: 'Muhammad Afdal — Software Developer',
  description: 'Portofolio Muhammad Afdal, Software Developer spesialis Laravel dari SMK Garuda Mahadhika.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}