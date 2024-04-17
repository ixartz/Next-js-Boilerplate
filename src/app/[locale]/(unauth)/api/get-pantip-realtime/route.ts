/* eslint-disable @typescript-eslint/no-shadow */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { type NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

async function scrapeRealtimeElements(url: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the page with the HTML content
  await page.goto(url);

  // Wait for the target element to be available
  const data = await page.evaluate(() => {
    const items = document.querySelectorAll('ul.pt-list li.pt-list-item');
    const results: {
      title: string;
      from: string;
      image: string;
      comment: number;
      vote: number;
    }[] = [];

    items.forEach((item: any) => {
      const titleElement = item.querySelector('h2 a');
      const fromElement = item.querySelector('h5 a');
      const imageElement = item.querySelector('.pt-list-item__img');
      const commentElement = item.querySelector('.pt-li_stats-comment');
      const voteElement = item.querySelector('.pt-li_stats-vote');

      if (
        titleElement &&
        fromElement &&
        imageElement &&
        commentElement &&
        voteElement
      ) {
        const title = titleElement.textContent.trim();
        const from = fromElement.textContent.trim();
        const image = imageElement.getAttribute('data-bg');
        const comment = parseInt(commentElement.textContent.trim(), 10) || 0;
        const vote = parseInt(voteElement.textContent.trim(), 10) || 0;

        results.push({ title, from, image, comment, vote });
      }
    });

    return results;
  });

  await browser.close();
  return data;
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

    const res = await scrapeRealtimeElements(url);
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
