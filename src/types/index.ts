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
