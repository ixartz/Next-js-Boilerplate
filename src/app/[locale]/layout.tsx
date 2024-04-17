'use client';

import '@/styles/global.css';

import { Provider } from 'react-redux';

import Toast from '@/components/partials/Toast';
import store from '@/stores';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className="bg-primary-900">
        <Provider store={store}>
          <Toast />
          {props.children}
        </Provider>
      </body>
    </html>
  );
}

// Enable edge runtime but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
