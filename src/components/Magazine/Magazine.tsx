import { useLocale, useTranslations } from 'next-intl'
import { news } from './config'
import Image from 'next/image'
import { Link } from '@/config/navigation'
import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'
import { Button } from '../ui/button'
import { cn, numberRandomizer } from '@/lib/utils'

interface MagazineProps {
  className?: string
}

export const Magazine = ({ className }: MagazineProps) => {
  const [embleRef] = useEmblaCarousel({ axis: 'y' }, [AutoPlay()])
  const t = useTranslations('Header.magazine')
  const locale = useLocale()

  return (
    <div className={cn('flex flex-col', className)}>
      <h1 className='mb-3 text-3xl font-bold text-black'>{t('title')}</h1>
      <p className='text-sm text-gray-500'>{t('description')}</p>
      <div className='embla mb-6'>
        <div ref={embleRef} className='mt-10 h-[350px] overflow-hidden'>
          <ol className='flex flex-col gap-4'>
            {news.map((news, index) => (
              <Link
                href={'/'}
                className='hover:text-primary-red'
                key={news.title[locale] + index}
              >
                <article className='flex h-[72px] flex-row-reverse items-center gap-2.5'>
                  <h4 className='text-[15px] leading-4'>
                    {news.title[locale]}
                  </h4>
                  <Image
                    className='rounded-lg'
                    alt={news.title[locale]}
                    src={`https://picsum.photos/id/${index + 72}/72/72`}
                    width={72}
                    height={72}
                  />
                </article>
              </Link>
            ))}
          </ol>
        </div>
      </div>
      <Button className='bg-blue-200 font-normal text-black hover:text-white'>
        {t('button')}
      </Button>
    </div>
  )
}
