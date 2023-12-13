import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { DeleteGuestbookEntry } from '@/components/DeleteGuestbookEntry';
import { EditableGuestbookEntry } from '@/components/EditableGuestbookEntry';
import { GuestbookForm } from '@/components/GuestbookForm';
import { db } from '@/libs/DB';
import { guestbookTable } from '@/models/Schema';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'Guestbook' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Guestbook = async () => {
  const guestbook = await db.select().from(guestbookTable).all();
  const t = await getTranslations('Guestbook');

  return (
    <>
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
        {`${t('database_powered_by')} `}
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
          width={130}
          height={112}
        />
      </a>
    </>
  );
};

export const dynamic = 'force-dynamic';

export default Guestbook;
