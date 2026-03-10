import { describe, expect, it } from 'vitest';
import { CounterValidation } from './CounterValidation';

describe('CounterValidation', () => {
  describe('increment', () => {
    it('accepts value of 1', () => {
      const result = CounterValidation.safeParse({ increment: 1 });

      expect(result.success).toBe(true);
    });

    it('accepts value of 3', () => {
      const result = CounterValidation.safeParse({ increment: 3 });

      expect(result.success).toBe(true);
    });

    it('rejects value below 1', () => {
      const result = CounterValidation.safeParse({ increment: 0 });

      expect(result.success).toBe(false);
    });

    it('rejects value above 3', () => {
      const result = CounterValidation.safeParse({ increment: 4 });

      expect(result.success).toBe(false);
    });

    it('rejects non-number value', () => {
      const result = CounterValidation.safeParse({ increment: 'abc' });

      expect(result.success).toBe(false);
    });

    it('rejects missing increment field', () => {
      const result = CounterValidation.safeParse({});

      expect(result.success).toBe(false);
    });
  });
});
