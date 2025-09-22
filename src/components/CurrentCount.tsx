import { getTranslations } from 'next-intl/server';

export const CurrentCount = async () => {
  const t = await getTranslations('CurrentCount');

  // Simple counter without database - starts at 0
  const count = 0;

  return (
    <div>
      {t('count', { count })}
    </div>
  );
};
