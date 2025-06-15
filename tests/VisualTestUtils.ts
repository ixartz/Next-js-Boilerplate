import type { Page } from '@playwright/test';

export const waitForAllImagesLoaded = async (page: Page) => {
  await page.waitForFunction(() =>
    Array.from(document.querySelectorAll('img')).every(img =>
      img.complete && img.naturalWidth > 0,
    ),
  );
};
