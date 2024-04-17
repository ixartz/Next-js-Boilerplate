/* eslint-disable @typescript-eslint/no-shadow */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { type NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

async function scrapeAnnounceElements(url: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the page with the HTML content
  await page.goto(url);

  // Wait for the target element to be available
  await page.waitForSelector('.pt-block.pt-block-purple-2.m-b-20');

  // Extract the information
  const result = await page.evaluate(() => {
    const container = document.querySelector(
      '.pt-block.pt-block-purple-2.m-b-20',
    );

    if (!container) return [];
    const items = container.querySelectorAll(
      'ul.pt-list.pt-list__type-c li.pt-list-item.pt-list-item__label',
    );

    const data: { title: string; link: string }[] = [];
    items.forEach((item) => {
      const titleElement: any = item.querySelector('h2.gtm-announcement a');
      const title = titleElement.innerHTML;
      const link = titleElement.getAttribute('href');

      data.push({ title, link });
    });

    return data;
  });
  await browser.close();
  return result;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(
      req.url as string,
      `http://${req.headers.get('host')}`,
    );

    const url = searchParams.get('url');

    if (!url) {
      return NextResponse.json(
        { message: `A ?url or ?selector query-parameter is required` },
        { status: 400 },
      );
    }

    const res = await scrapeAnnounceElements(url);
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
