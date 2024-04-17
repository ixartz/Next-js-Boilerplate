/* eslint-disable @typescript-eslint/no-shadow */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

async function scrapeRoomElements(url: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the page with the HTML content
  await page.goto(url);

  // Wait for the target element to be available
  await page.waitForSelector('.pt-forum-container');

  // Extract the information
  const result = await page.evaluate(() => {
    const forumContainers = document.querySelectorAll(
      '.pt-forum-container .pt-forum-list',
    );

    const data: { title: string; imageLink: string }[] = [];
    forumContainers.forEach((container: any) => {
      const title = container.querySelector('h2.title').textContent;
      if (!container) return;
      const imageLink = container
        .querySelector('.pt-forum-list__icon')
        .style.backgroundImage.replace('url("', '')
        .replace('")', '');

      data.push({ title, imageLink });
    });

    return data;
  });

  await browser.close();
  return result;
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

    const res = await scrapeRoomElements(url);
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
