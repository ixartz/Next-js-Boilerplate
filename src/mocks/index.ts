const IS_BROWSER = typeof window !== 'undefined';

const initMocks = async () => {
  if (IS_BROWSER) {
    const { mswWorker } = await import('@/mocks/mswBrowser');

    mswWorker.start({
      // Specifies how to handle a request that is not listed in the request handlers. Default is "warn"
      onUnhandledRequest: 'bypass',
    });
  } else {
    const { mswServer } = await import('@/mocks/mswServer');
    mswServer.listen();
  }
};

initMocks();

export {};
