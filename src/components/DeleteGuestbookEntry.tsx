'use client';

import { deleteGuestbook } from '@/actions/GuestbookAction';

const DeleteGuestbookEntry = (props: { id: number }) => {
  return (
    <form
      action={async () => {
        await deleteGuestbook(props.id);
      }}
    >
      <button type="submit" aria-label="delete">
        <svg
          className="h-6 w-6 stroke-current"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
        </svg>
      </button>
    </form>
  );
};

export { DeleteGuestbookEntry };
