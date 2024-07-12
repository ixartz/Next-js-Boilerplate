/* eslint-disable @typescript-eslint/consistent-type-imports */
// Use type safe message keys with `next-intl`
type Messages = typeof import('../locales/br.json')
declare interface IntlMessages extends Messages {}
