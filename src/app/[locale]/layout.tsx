import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './../../styles/globals.css'
import { Header } from '@/components/Header/Header'
import { Link } from '@/config/navigation'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AvtoSalom',
  description: 'Avtomobillarni sotib olish va sotish uchun eng yaxshi joy',
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  return (
    <html lang={locale}>
      <body className={openSans.className}>
        <Header />
        <nav className='bg-primary-red text-white'>
          <ul className='container flex items-center gap-6 font-normal'>
            <li>
              <Link className='p-0 font-light text-white' href={'/'}>
                Cars
              </Link>
            </li>
            <li>
              <Link className='p-0 font-light text-white' href={'/'}>
                Commercial
              </Link>
            </li>
            <li>
              <Link className='p-0 font-light text-white' href={'/'}>
                Electro
              </Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
