import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './../../styles/globals.css'
import { Header } from '@/components/Header/Header'
import { Link } from '@/config/navigation'
import { Nav } from '@/components/Nav/Nav'
import { getCars } from '@/lib/getCars'
import { getModels } from '@/lib/getModels'
import { getTranslations } from 'next-intl/server'
import { Map } from 'lucide-react'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AvtoSalom',
  description: 'Avtomobillarni sotib olish va sotish uchun eng yaxshi joy',
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const models = await getModels()
  const t = await getTranslations({
    locale,
  })

  return (
    <html lang={locale}>
      <body className={openSans.className}>
        <Header />
        <Nav links={models} classNameList='container' />
        <div className='border-b'>
          <div className='container flex items-center justify-between'>
            <Nav links={models.slice(5)} isBottomNav />
            <Link
              className='inline-flex items-center gap-3 text-sm font-medium text-blue-500'
              href='/'
            >
              <Map /> {t('Pages.region')}
            </Link>
          </div>
        </div>
        <main>{children}</main>
      </body>
    </html>
  )
}
