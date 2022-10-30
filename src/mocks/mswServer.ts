import { setupServer } from 'msw/node';

import { handlers } from './handlers';

// This configures a request mocking server with the given request handlers.
export const mswServer = setupServer(...handlers);
