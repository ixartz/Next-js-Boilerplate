'use client';

import { useTranslations } from 'next-intl';
import { useActionState } from 'react';
import { incrementCounter } from '@/app/[locale]/(marketing)/counter/actions';

export const CounterForm = () => {
  const t = useTranslations('CounterForm');
  const [state, formAction, isPending] = useActionState(incrementCounter, null);

  return (
    <form action={formAction}>
      <p>{t('presentation')}</p>
      <div>
        <label className="text-sm font-bold text-gray-700" htmlFor="increment">
          {t('label_increment')}
          <input
            id="increment"
            name="increment"
            type="number"
            defaultValue={1}
            min={1}
            max={3}
            className="ml-2 w-32 appearance-none rounded-sm border border-gray-200 px-2 py-1 text-sm leading-tight text-gray-700 focus:outline-hidden focus:ring-3 focus:ring-blue-300/50"
          />
        </label>

        {state?.errors?.properties?.increment && (
          <div className="my-2 text-xs italic text-red-500">
            {t('error_increment_range')}
          </div>
        )}

        {state?.error && (
          <div className="my-2 text-xs italic text-red-500">
            {state.error}
          </div>
        )}
      </div>

      <div className="mt-2">
        <button
          className="rounded-sm bg-blue-500 px-5 py-1 font-bold text-white hover:bg-blue-600 focus:outline-hidden focus:ring-3 focus:ring-blue-300/50 disabled:pointer-events-none disabled:opacity-50"
          type="submit"
          disabled={isPending}
        >
          {t('button_increment')}
        </button>
      </div>
    </form>
  );
};
