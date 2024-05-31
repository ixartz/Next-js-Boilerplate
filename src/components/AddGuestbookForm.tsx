'use client';

import { GuestbookForm } from './GuestbookForm';

const AddGuestbookForm = () => {
  const handleSave = async (data: any) => {
    await fetch(`/api/guestbook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  return <GuestbookForm onValid={handleSave} />;
};

export { AddGuestbookForm };
