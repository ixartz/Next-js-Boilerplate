import { NextResponse } from 'next/server';
import z from 'zod';
import { logger } from '@/libs/Logger';
import { CounterValidation } from '@/validations/CounterValidation';

export const PUT = async (request: Request) => {
  const json = await request.json();
  const parse = CounterValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(z.treeifyError(parse.error), { status: 422 });
  }

  // Simple counter without database - just return the increment value
  const count = parse.data.increment;

  logger.info('Counter has been incremented');

  return NextResponse.json({
    count,
  });
};
