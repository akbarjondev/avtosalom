import { pathnames } from '../config/navigation'

export type StringKeys<objType extends {}> = Array<
  Extract<keyof objType, string>
>

export type Pathname = StringKeys<typeof pathnames>[number]

export type TopLink = {
  label: { uz: string; en: string; [key: string]: string }
  path: Pathname
  icon: string
}

export interface CarParams {
  fuel_type?: 'gas' | 'diesel' | 'electricity'
  model?: string
  cylinders?: string
  class?: string
  make?: string
  year?: string
  limit?: number
  transmission?: 'automatic' | 'manual'
}

export type Tabs = 'all' | 'new' | 'old' | 'brand' | 'general'
export type GeneralTabs = 'brand' | 'general'

export type CategoryType = {
  key: Tabs | GeneralTabs
  title: {
    en: string
    uz: string
    [key: string]: string
  }
}
