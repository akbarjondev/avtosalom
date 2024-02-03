import { HEADER_TOP_LINKS } from '@/config/constants'
import { useLocale } from 'next-intl'
import { Link } from '@/config/navigation'
import { Icon } from '../Icon/Icon'
import { locales } from '@/config/navigation'

type Locale = typeof locales[number]

export const TopLinks = () => {
  const locale = useLocale()

  return (
    <nav className='text-gray-900'>
      <ul className='container flex items-center gap-4 font-normal'>
        {HEADER_TOP_LINKS.map((link) => (
          <li key={link.path}>
            <Link
              className='flex flex-col items-center'
              locale={locale as Locale}
              href={link.path}
            >
              <span className='text-xs'>{link.label[locale]}</span>
              <Icon className='-order-1' icon={link.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
