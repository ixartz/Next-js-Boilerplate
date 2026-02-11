import { createNavigation } from 'next-intl/navigation';
import { routing } from './I18nRouting';

export const { Link, usePathname, useRouter } = createNavigation(routing);
