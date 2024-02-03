import { ReactElement } from 'react'
import { HEADER_TOP_LINKS } from '@/config/constants'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { Icon } from '../Icon/Icon'

export const TopLinks = () => {
  const locale = useLocale()

  return (
    <nav className='text-gray-900'>
      <ul className='container flex items-center gap-6 font-normal'>
        {HEADER_TOP_LINKS.map((link) => (
          <li key={link.path}>
            <Link className='flex flex-col items-center' href={link.path}>
              {link.label[locale]}
              <Icon icon={link.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
