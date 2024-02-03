import { Link, locales } from '@/config/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  return (
    <div className={cn(className)}>
      <DropdownMenu>
        <DropdownMenuTrigger className='cursor-pointer' asChild>
          <Globe className='hover:opacity-80' />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='flex flex-col gap-1'>
          {locales.map((locale) => (
            <Link
              className='p-2 hover:bg-gray-100 rounded'
              href='/'
              locale={locale}
              key={locale}
            >
              {locale}
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
