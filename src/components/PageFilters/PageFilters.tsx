'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import teaserImage from '@/assets/images/teaser.png'
import { GeneralTabs, Tabs } from '@/types'
import { FilterPills } from '../FilterPills/FilterPills'
import { categoryTypes, dealers, generalTabs } from './config'
import { Checkbox } from '../ui/checkbox'
import { Link } from '@/config/navigation'
import { cn, numberRandomizer } from '@/lib/utils'
import { Magazine } from '../Magazine/Magazine'

interface PageFiltersProps {
  className?: string
  carModels: string[]
}

export const PageFilters = ({ carModels, className }: PageFiltersProps) => {
  const tCats = useTranslations('Header.categories')
  const tHeaders = useTranslations('Header')

  const [tab, setTab] = useState<Tabs>('all')
  const [generalTab, setGeneralTab] = useState<GeneralTabs>('general')

  return (
    <section className={cn('mb-52', className)}>
      <div className='wrapper mt-9 grid grid-cols-9 gap-7'>
        <div className='left col-span-7 grow'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='mb-3 text-3xl font-bold text-black'>
                {tCats(tab)}
              </h1>
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
          <div className='mt-9'>
            <div className='flex items-center justify-between'>
              {dealers.map((dealer) => (
                <Link key={dealer.name} href={'/'}>
                  <Image
                    alt={dealer.name}
                    src={`/logos/${dealer.logo}`}
                    width={64}
                    height={64}
                  />
                </Link>
              ))}
            </div>
          </div>
          <ol className='mt-5 grid grid-cols-5 gap-y-2'>
            {carModels &&
              carModels.length > 0 &&
              carModels.map((maker) => (
                <li key={maker} className='capitalize'>
                  <Link className='text-sm hover:text-primary-red' href={`/`}>
                    {maker}{' '}
                    <span className='ml-2 text-gray-400'>
                      {numberRandomizer(458, 45987)}
                    </span>
                  </Link>
                </li>
              ))}
          </ol>
        </div>
        <Magazine className='right col-span-2' />
      </div>
    </section>
  )
}
