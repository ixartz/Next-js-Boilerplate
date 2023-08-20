'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { AddGuestbookSchema } from '@/validations/Guestbook';

const AddGuestbookForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<z.infer<typeof AddGuestbookSchema>>({
    resolver: zodResolver(AddGuestbookSchema),
  });
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
      {errors.username?.message && <div>{errors.username?.message}</div>}

      <input {...register('body')} />
      {errors.body?.message && <div>{errors.body?.message}</div>}

      <button type="submit">Create</button>
    </form>
  );
};

export { AddGuestbookForm };
