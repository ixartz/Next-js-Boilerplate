import { setupWorker } from 'msw';

import { handlers } from './handlers';

// This configures a Service Worker with the given request handlers.
export const mswWorker = setupWorker(...handlers);
