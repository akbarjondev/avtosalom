// type Messages = typeof import('@/messages/en.json').default
// Temporary workaround for https://github.com/amannn/next-intl/issues/625

type Messages = any
declare interface IntlMessages extends Messages {}
