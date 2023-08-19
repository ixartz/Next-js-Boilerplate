import type { Metadata } from 'next';

import { db } from '@/lib/db';
import { guestbookTable } from '@/models/schema';
import { Main } from '@/templates/Main';

export const metadata: Metadata = {
  title: 'Guestbook',
  description: 'An example of CRUD operation',
};

const Guestbook = async () => {
  const guestbook = await db.select().from(guestbookTable).all();

  return (
    <Main>
      {guestbook.map((elt) => (
        <div key={elt.id}>{elt.body}</div>
      ))}
    </Main>
  );
};

export default Guestbook;
