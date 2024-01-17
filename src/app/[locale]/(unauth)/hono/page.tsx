'use client';

import { hc } from 'hono/client';
import useSWRMutation from 'swr/mutation';

import type { AppType } from '../api/[[...route]]/route';

const client = hc<AppType>('/');

const postHello = async () => {
  const res = await client.api.hello.$post({
    form: {
      name: 'test',
    },
  });

  return res.json();
};

const Page = () => {
  const { trigger, isMutating, data } = useSWRMutation('post-hello', postHello);

  return (
    <div>
      <button type="button" onClick={() => trigger()} disabled={isMutating}>
        Send
      </button>

      <p>{data?.message}</p>
    </div>
  );
};

export default Page;
