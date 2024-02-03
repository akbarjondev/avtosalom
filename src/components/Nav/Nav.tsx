import { Link } from '@/config/navigation'
import { cn } from '@/lib/utils'

interface NavProps {
  links: { href: string; label: string }[]
  isBottomNav?: boolean
  className?: string
  classNameList?: string
}

export const Nav = ({
  isBottomNav = false,
  className,
  links,
  classNameList,
}: NavProps) => {
  return (
    <nav
      className={cn(
        'bg-primary-red py-2.5 text-white',
        isBottomNav && 'bg-white text-gray-500',
        className
      )}
    >
      <ul
        className={cn(
          'flex items-center gap-6 font-normal',
          isBottomNav && 'gap-7',
          classNameList
        )}
      >
        {links &&
          links.length > 0 &&
          links.map((link) => (
            <li key={link.href}>
              <Link
                className={cn(
                  'cursor-pointer p-0 text-sm font-normal capitalize text-white hover:opacity-70',
                  isBottomNav && 'text-gray-500'
                )}
                href={'/'}
              >
                {link.label}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}
