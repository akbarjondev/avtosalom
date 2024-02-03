import { Link } from '@/config/navigation'
import { cn, numberRandomizer } from '@/lib/utils'
import { CarParams, Pathname } from '@/types'
import { Heart } from 'lucide-react'
import { useFormatter } from 'next-intl'
import Image from 'next/image'

interface RecCardProps {
  car: CarParams
  path: Pathname
}

export const RecCard = ({ car, path }: RecCardProps) => {
  const format = useFormatter()
  const price = format.number(numberRandomizer(312000, 1200000), {
    style: 'currency',
    currency: 'USD',
  })
  const km = format.number(numberRandomizer(1000, 100000), {
    style: 'unit',
    unit: 'kilometer',
  })

  return (
    <article className='relative flex flex-col'>
      <Link href={path} className={'link peer absolute inset-0'} />
      <span className='like-wrapper absolute right-0 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent peer-has-[:hover]:bg-red-600'>
        <Heart className='cursor-pointer rounded-full text-white transition-all hover:text-primary-red' />
      </span>
      <Image
        className='rounded-2xl'
        alt={car.model || ''}
        src={`https://picsum.photos/id/${numberRandomizer(2, 80)}/200`}
        width={287}
        height={215}
      />
      <span className='mt-2 text-xl font-bold capitalize text-black'>
        {price}
      </span>
      <h4 className='my-1 text-[17px] capitalize leading-4'>{car.model}</h4>
      <span className='flex text-[15px] text-black opacity-50'>
        <time>{car.year}</time> <span className='mx-1'>/</span>{' '}
        <span>{km}</span>
      </span>
    </article>
  )
}
