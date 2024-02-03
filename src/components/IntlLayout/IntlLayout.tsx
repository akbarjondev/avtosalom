import { NextIntlClientProvider, useMessages } from 'next-intl'
import { PropsWithChildren } from 'react'

export const IntlLayout = ({ children }: PropsWithChildren) => {
  const messages = useMessages()
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
