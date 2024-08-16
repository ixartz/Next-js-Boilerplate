// Use type safe message keys with `next-intl`
type Messages = typeof import('../locales/en.json');
declare type IntlMessages = {} & Messages;
