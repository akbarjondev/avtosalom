import { useTranslations } from 'next-intl'
import { Input } from '../ui/input'
import { SearchIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  className?: string
}

export const SearchBar = ({ className }: SearchBarProps) => {
  const t = useTranslations('Top')
  return (
    <search
      className={cn(
        'flex items-center rounded-lg bg-gray-100 px-3 py-2.5',
        className
      )}
    >
      <SearchIcon className='mr-3 text-gray-500' />
      <Input
        placeholder={t('search_placeholder')}
        className='rounded-0 h-auto border-0 bg-transparent p-0 shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0'
      />
    </search>
  )
}
