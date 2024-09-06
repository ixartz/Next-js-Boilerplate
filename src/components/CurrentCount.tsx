import { getTranslations } from 'next-intl/server';

import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';

const CurrentCount = async () => {
  const t = await getTranslations('CurrentCount');

  const result = await db.query.counterSchema.findFirst();
  const count = result?.count ?? 0;

  logger.info('Counter fetched successfully');

  return (
    <div>
      {t('count', { count })}
    </div>
  );
};

export { CurrentCount };
