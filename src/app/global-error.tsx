'use client';

import * as Sentry from '@sentry/nextjs';
import NextError from 'next/error';
import { useEffect } from 'react';

export default function GlobalError(props: {
  error: Error & { digest?: string };
  params: { locale: string };
}) {
  useEffect(() => {
    Sentry.captureException(props.error);
  }, [props.error]);

  return (
    <html lang={props.params.locale}>
      <body>
        {/* `NextError` is the default Next.js error page component. Its type
        definition requires a `statusCode` prop. However, since the App Router
        does not expose status codes for errors, we simply pass 0 to render a
        generic error message. */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
