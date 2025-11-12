import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { inngest } from '@/inngest/client';
import { db } from '@/libs/DB';

import { users } from '@/models/Schema';
import { baseProcedure, createTRPCRouter, protectedProcedure } from '../init';

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  getUser: protectedProcedure.query(async ({ ctx }) => {
    const user = await db.select().from(users).where(eq(users.id, ctx.auth.id)).limit(1);
    return user[0] || null;
  }),
  inngestCheckUser: protectedProcedure.mutation(async ({ ctx }) => {
    const user = await inngest.send({
      name: 'test/demo.get-current-user',
      data: {
        id: ctx.auth.id,
      },
    });
    return user;
  }),
  testAi: protectedProcedure.mutation(async () => {
    const user = await inngest.send({
      name: 'app/ticket.created',
    });
    return user;
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
