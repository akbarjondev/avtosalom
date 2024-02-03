type Link = { label: { uz: string, en: string, [key: string]: string }, path: string, icon: string }

export const HEADER_TOP_LINKS: Link[] = [
  {
    label: {
      uz: 'Saqlanganlar',
      en: 'Favorites'
    },
    path: '/favorites',
    icon: 'heart'
  },
  {
    label: {
      uz: 'Qidirish',
      en: 'Search'
    },
    path: '/search',
    icon: 'search'
  },
  {
    label: {
      uz: 'Taqqoslash',
      en: 'Comparison'
    },
    path: '/comparison',
    icon: 'compare'
  },
  {
    label: {
      uz: 'Xabarlar',
      en: 'Messages'
    },
    path: '/messages',
    icon: 'message'
  },
  {
    label: {
      uz: 'Sotish',
      en: 'Sell'
    },
    path: '/sell',
    icon: 'presentation'
  }
]