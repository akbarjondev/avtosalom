import { useTranslations } from 'next-intl'
import { Banner } from '../Banner/Banner'
import starIcon from '@/assets/icons/star.svg'
import Image from 'next/image'
import { CarParams } from '@/types'
import { RecCard } from '../RecCard/RecCard'

interface RecommendationsProps {
  className?: string
  cars: CarParams[]
}

export const Recommendations = ({ className, cars }: RecommendationsProps) => {
  const t = useTranslations('Bottom')

  return (
    <section>
      <h3 className='mb-6 flex items-center gap-2 text-3xl font-bold text-black'>
        <Image src={starIcon} alt='' /> {t('title')}
      </h3>
      <Banner title={t('bannerTitle')} path='/' />
      <ol className='mt-6 grid grid-cols-4 gap-6'>
        {cars &&
          cars.length > 0 &&
          cars.map((car) => <RecCard key={car.model} car={car} path='/' />)}
      </ol>
    </section>
  )
}
