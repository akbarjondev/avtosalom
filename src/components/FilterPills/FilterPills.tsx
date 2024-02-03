import { useState } from 'react'
import { CategoryType, GeneralTabs, Tabs } from '@/types'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

interface FilterPillsProps {
  filters: CategoryType[]
  activeTab: Tabs | GeneralTabs
  setActiveTab: (tab: Tabs | GeneralTabs) => void
}

export const FilterPills = ({
  filters,
  activeTab,
  setActiveTab,
}: FilterPillsProps) => {
  const locale = useLocale()

  return (
    <div className='relative'>
      {filters.map((category) => (
        <Button
          className={cn(
            'hover:bg-primary-blue relative z-0 h-auto rounded-none border border-gray-400 bg-white px-3 py-[5px] text-sm font-normal text-gray-500 first:rounded-l-lg last:rounded-r-lg even:-mx-px hover:text-white',
            activeTab === category.key &&
              'bg-primary-blue border-primary-blue even:border-l-primary-blue z-10 bg-opacity-30 text-gray-900 hover:bg-opacity-100'
          )}
          onClick={() => setActiveTab(category.key)}
          key={category.key}
        >
          {category.title[locale]}
        </Button>
      ))}
    </div>
  )
}
