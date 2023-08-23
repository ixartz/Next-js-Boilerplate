import type { Metadata } from 'next';

import { AddGuestbookForm } from '@/components/AddGuestbookForm';
import { DeleteGuestbookEntry } from '@/components/DeleteGuestbookEntry';
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

      <div className="mt-5">
        {guestbook.map((elt) => (
          <div key={elt.id} className="mb-1 flex items-center">
            <DeleteGuestbookEntry id={elt.id} />

            <div className="ml-2">
              <span className="text-gray-500">{elt.username}:</span>{' '}
              <span className="text-gray-800">{elt.body}</span>
            </div>
          </div>
        ))}
      </div>
    </Main>
  );
};

export default Guestbook;
