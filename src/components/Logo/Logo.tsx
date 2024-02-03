import Link from 'next/link'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'

const poppins = Poppins({ weight: '700', subsets: ['latin'] })

interface LogoProps {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      href={'/'}
      className={cn(
        'text-2xl font-black text-primary-red',
        poppins.className,
        className
      )}
    >
      avto.ru
    </Link>
  )
}
