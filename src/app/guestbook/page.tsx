import type { Metadata } from 'next';
import Image from 'next/image';

import { DeleteGuestbookEntry } from '@/components/DeleteGuestbookEntry';
import { EditableGuestbookEntry } from '@/components/EditableGuestbookEntry';
import { GuestbookForm } from '@/components/GuestbookForm';
import { db } from '@/libs/DB';
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
      <GuestbookForm />

      <div className="mt-5">
        {guestbook.map((elt) => (
          <div key={elt.id} className="mb-1 flex items-center gap-x-1">
            <DeleteGuestbookEntry id={elt.id} />

            <EditableGuestbookEntry
              id={elt.id}
              username={elt.username}
              body={elt.body}
            />
          </div>
        ))}
      </div>

      <div className="mt-2 text-center text-sm">
        Database powered by{' '}
        <a
          href="https://turso.tech/?utm_source=nextjsstarterbp"
          target="_blank"
        >
          Turso
        </a>
      </div>

      <a href="https://turso.tech/?utm_source=nextjsstarterbp">
        <Image
          className="mx-auto mt-2"
          src="/assets/images/turso.png"
          alt="SQLite Developer Experience"
          width={65}
          height={56}
        />
      </a>
    </Main>
  );
};

export const dynamic = 'force-dynamic';

export default Guestbook;
