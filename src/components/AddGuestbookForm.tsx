'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import type { AddGuestbookSchema } from '@/validations/Guestbook';

const AddGuestbookForm = () => {
  const { handleSubmit, register, reset, setFocus } =
    useForm<z.infer<typeof AddGuestbookSchema>>();
  const router = useRouter();

  const handleCreate = handleSubmit(async (data) => {
    await fetch(`/api/guestbook/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    setFocus('username');
    reset();
    router.refresh();
  });

  return (
    <form onSubmit={handleCreate}>
      <input {...register('username')} />
      <input {...register('body')} />

      <button type="submit">Create</button>
    </form>
  );
};

export { AddGuestbookForm };
