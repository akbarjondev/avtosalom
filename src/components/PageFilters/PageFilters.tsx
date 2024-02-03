'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import teaserImage from '@/assets/images/teaser.png'
import { GeneralTabs, Tabs } from '@/types'
import { FilterPills } from '../FilterPills/FilterPills'
import { categoryTypes, generalTabs } from './config'
import { Checkbox } from '../ui/checkbox'

export const PageFilters = () => {
  const tCats = useTranslations('Header.categories')
  const tHeaders = useTranslations('Header')

  const [tab, setTab] = useState<Tabs>('all')
  const [generalTab, setGeneralTab] = useState<GeneralTabs>('general')

  return (
    <section>
      <div className='mt-9 flex items-center justify-between'>
        <div>
          <h1 className='mb-3 text-3xl font-bold text-black'>{tCats(tab)}</h1>
          <p className='text-sm text-gray-500'>
            {tHeaders('description', {
              outOf: '131 166',
              offers: '469 743',
            })}
          </p>
        </div>
        <Image alt='' {...teaserImage} />
      </div>
      <div className='mt-9 flex items-center'>
        <FilterPills
          filters={categoryTypes}
          activeTab={tab}
          setActiveTab={setTab}
        />
        <label className='ml-7 mr-auto inline-flex cursor-pointer items-center gap-2'>
          <Checkbox className='checked:bg-primary-blue h-5 w-5' />
          <span>{tHeaders('credit')}</span>
        </label>

        <FilterPills
          filters={generalTabs}
          activeTab={generalTab}
          setActiveTab={(tab) => {
            if (tab === 'general' || tab === 'brand') {
              setGeneralTab(tab)
            }
          }}
        />
      </div>
    </section>
  )
}
