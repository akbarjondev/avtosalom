import { Link } from '@/config/navigation'
import { Pathname } from '@/types'
import dragonImage from '@/assets/images/dragon.png'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface BannerProps {
  title: string
  path: Pathname
  className?: string
}

export const Banner = ({ className, title, path }: BannerProps) => {
  return (
    <Link
      className={cn(className, 'relative flex rounded-3xl bg-[#3a4b6514] p-6')}
      href={path}
    >
      <h4 className='text-xl font-medium text-black'>{title}</h4>
      <div className='absolute bottom-0 right-40'>
        <Image alt='' {...dragonImage} width={368} height={103} />
      </div>
    </Link>
  )
}
