/* eslint-disable @typescript-eslint/no-shadow */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

async function scrapeHighLightElements(url: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the page with the HTML content
  await page.goto(url, { waitUntil: 'networkidle2' });
  // Extract list items
  const topics = await page.evaluate(() => {
    const scrapedItems: { title: string; link: string }[] = [];
    const topicElements = document.querySelectorAll('.pt-list-item');
    topicElements.forEach((item: any) => {
      const title = item.innerText.trim();
      const link = item
        .querySelector('.pt-list-item__img')
        ?.getAttribute('data-bg');
      if (link) {
        scrapedItems.push({ title, link });
      }
    });
    return scrapedItems;
  });

  await browser.close();
  return topics;
}

export async function GET(req: NextApiRequest) {
  try {
    const { searchParams } = new URL(
      req.url as string,
      `http://${req.headers.host}`,
    );

    const url = searchParams.get('url');

    if (!url) {
      return NextResponse.json(
        { message: `A ?url or ?selector query-parameter is required` },
        { status: 400 },
      );
    }

    const res = await scrapeHighLightElements(url);
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
