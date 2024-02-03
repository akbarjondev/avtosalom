import { createLocalizedPathnamesNavigation, Pathnames } from "next-intl/navigation";

export const locales = ['uz', 'en'] as const;
export const defaultLocale = 'uz';
export const localePrefix = 'always'

export const pathnames = {
  '/': '/',
  '/search': {
    uz: '/qidirish',
    en: '/search'
  },
  '/sell': {
    uz: '/sotaman',
    en: '/sell'
  },
  '/favorites': {
    uz: '/saqlanganlar',
    en: '/favorites'
  },
  '/comparison': {
    uz: '/taqqoslash',
    en: '/comparison'
  },
  '/messages': {
    uz: '/xabarlar',
    en: '/messages'
  }
} satisfies Pathnames<typeof locales>

export const {Link, redirect, usePathname, useRouter, getPathname} = createLocalizedPathnamesNavigation({
  locales,
  localePrefix,
  pathnames
})