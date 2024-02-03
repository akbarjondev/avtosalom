import { useTranslations } from 'next-intl'
import { Logo } from '../Logo/Logo'
import { Menu } from '../Menu/Menu'
import { SearchBar } from '../SearchBar/SearchBar'
import { TopLinks } from '../TopLinks/TopLinks'
import { Button } from '../ui/button'
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher'

export const Header = () => {
  const t = useTranslations('Top')
  return (
    <header className='container flex h-[76px] items-center'>
      <Menu />
      <Logo className='ml-5 mr-9' />
      <SearchBar className='w-full max-w-[400px]' />
      <TopLinks />
      <div className='ml-auto flex gap-3'>
        <Button className='bg-gray-200 text-gray-900 hover:text-white'>
          {t('login')}
        </Button>
        <Button className='bg-primary-green text-white'>
          {t('free_post')}
        </Button>
      </div>
      <LanguageSwitcher className='ml-2' />
    </header>
  )
}
