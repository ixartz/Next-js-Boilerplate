import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';

const CurrentCount = async () => {
  const result = await db.query.counterSchema.findFirst();
  const count = result?.count ?? 0;

  logger.info('Counter fetched successfully');

  return (
    <div>
      Count:
      {' '}
      {count}
    </div>
  );
};

export { CurrentCount };
