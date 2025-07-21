import { eq } from 'drizzle-orm';
import { getTranslations } from 'next-intl/server';
import { headers } from 'next/headers';
import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { counterSchema } from '@/models/Schema';

export const CurrentCount = async () => {
  const t = await getTranslations('CurrentCount');

  // Check if we're in a build environment where database might not be available
  const isBuildTime = process.env.NODE_ENV === 'production' && !process.env.DATABASE_URL;

  let count = 0;

  if (!isBuildTime) {
    try {
      // `x-e2e-random-id` is used for end-to-end testing to make isolated requests
      // The default value is 0 when there is no `x-e2e-random-id` header
      const id = Number((await headers()).get('x-e2e-random-id')) ?? 0;
      const result = await db.query.counterSchema.findMany({
        where: eq(counterSchema.id, id),
      });
      count = result[0]?.count ?? 77;

      logger.info('Counter fetched successfully');
    } catch (error) {
      logger.warn('Failed to fetch counter, using default value', { error });
      count = 88;
    }
  } else {
    // During build time, use a default value
    count = 99;
  }

  return (
    <div>
      {t('count', { count })}
    </div>
  );
};
