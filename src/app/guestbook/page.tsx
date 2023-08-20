import type { Metadata } from 'next';

import { AddGuestbookForm } from '@/components/AddGuestbookForm';
import { db } from '@/lib/DB';
import { guestbookTable } from '@/models/Schema';
import { Main } from '@/templates/Main';

export const metadata: Metadata = {
  title: 'Guestbook',
  description: 'An example of CRUD operation',
};

const Guestbook = async () => {
  const guestbook = await db.select().from(guestbookTable).all();

  return (
    <Main>
      <AddGuestbookForm />

      {guestbook.map((elt) => (
        <div key={elt.id} className="mb-1">
          <span className="font-semibold">{elt.username}</span>: {elt.body}
        </div>
      ))}
    </Main>
  );
};

export default Guestbook;
