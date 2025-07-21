import { headers } from 'next/headers';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';

import { incrementCounter } from './actions';

// Mock dependencies
vi.mock('next/headers');
vi.mock('@/libs/DB');
vi.mock('@/libs/Logger');

const mockHeaders = vi.mocked(headers);
const mockDb = vi.mocked(db);
const mockLogger = vi.mocked(logger);

describe('Counter', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    // Default mock for headers - create a proper Headers object mock
    const mockHeadersObject = {
      get: vi.fn((key: string) => (key === 'x-e2e-random-id' ? '0' : null)),
      append: vi.fn(),
      set: vi.fn(),
      delete: vi.fn(),
      getSetCookie: vi.fn(),
    } as any;
    mockHeaders.mockResolvedValue(mockHeadersObject);

    // Default mock for database operations
    mockDb.insert = vi.fn().mockReturnValue({
      values: vi.fn().mockReturnValue({
        onConflictDoUpdate: vi.fn().mockReturnValue({
          returning: vi.fn().mockResolvedValue([{ count: 1 }]),
        }),
      }),
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Basic database operations', () => {
    it('should return validation errors with empty FormData', async () => {
      const formData = new FormData();

      const result = await incrementCounter(undefined, formData);

      expect(result).toHaveProperty('errors');
      expect(result.errors).toBeDefined();
    });

    it('should return validation errors with invalid increment value (string)', async () => {
      const formData = new FormData();
      formData.append('increment', 'invalid');

      const result = await incrementCounter(undefined, formData);

      expect(result).toHaveProperty('errors');
      expect(result.errors).toBeDefined();
    });

    it('should return validation errors with increment value less than 1', async () => {
      const formData = new FormData();
      formData.append('increment', '0');

      const result = await incrementCounter(undefined, formData);

      expect(result).toHaveProperty('errors');
      expect(result.errors).toBeDefined();
    });

    it('should return validation errors with negative increment value', async () => {
      const formData = new FormData();
      formData.append('increment', '-1');

      const result = await incrementCounter(undefined, formData);

      expect(result).toHaveProperty('errors');
      expect(result.errors).toBeDefined();
    });

    it('should return validation errors with increment value greater than 3', async () => {
      const formData = new FormData();
      formData.append('increment', '5');

      const result = await incrementCounter(undefined, formData);

      expect(result).toHaveProperty('errors');
      expect(result.errors).toBeDefined();
    });

    it('should successfully increment counter with valid input (1)', async () => {
      const formData = new FormData();
      formData.append('increment', '1');

      const mockReturning = vi.fn().mockResolvedValue([{ count: 1 }]);
      const mockOnConflictDoUpdate = vi.fn().mockReturnValue({
        returning: mockReturning,
      });
      const mockValues = vi.fn().mockReturnValue({
        onConflictDoUpdate: mockOnConflictDoUpdate,
      });
      mockDb.insert = vi.fn().mockReturnValue({
        values: mockValues,
      });

      const result = await incrementCounter(undefined, formData);

      expect(result).toEqual({ count: 1 });
      expect(mockDb.insert).toHaveBeenCalled();
      expect(mockValues).toHaveBeenCalledWith({ id: 0, count: 1 });
      expect(mockLogger.info).toHaveBeenCalledWith('Counter has been incremented');
    });

    it('should successfully increment counter with valid input (2)', async () => {
      const formData = new FormData();
      formData.append('increment', '2');

      const mockReturning = vi.fn().mockResolvedValue([{ count: 2 }]);
      const mockOnConflictDoUpdate = vi.fn().mockReturnValue({
        returning: mockReturning,
      });
      const mockValues = vi.fn().mockReturnValue({
        onConflictDoUpdate: mockOnConflictDoUpdate,
      });
      mockDb.insert = vi.fn().mockReturnValue({
        values: mockValues,
      });

      const result = await incrementCounter(undefined, formData);

      expect(result).toEqual({ count: 2 });
      expect(mockValues).toHaveBeenCalledWith({ id: 0, count: 2 });
    });

    it('should successfully increment counter with valid input (3)', async () => {
      const formData = new FormData();
      formData.append('increment', '3');

      const mockReturning = vi.fn().mockResolvedValue([{ count: 3 }]);
      const mockOnConflictDoUpdate = vi.fn().mockReturnValue({
        returning: mockReturning,
      });
      const mockValues = vi.fn().mockReturnValue({
        onConflictDoUpdate: mockOnConflictDoUpdate,
      });
      mockDb.insert = vi.fn().mockReturnValue({
        values: mockValues,
      });

      const result = await incrementCounter(undefined, formData);

      expect(result).toEqual({ count: 3 });
      expect(mockValues).toHaveBeenCalledWith({ id: 0, count: 3 });
    });

    it('should use custom id from x-e2e-random-id header', async () => {
      const customId = 123;
      const mockHeadersObject = {
        get: vi.fn((key: string) => (key === 'x-e2e-random-id' ? customId.toString() : null)),
        append: vi.fn(),
        set: vi.fn(),
        delete: vi.fn(),
        getSetCookie: vi.fn(),
      } as any;
      mockHeaders.mockResolvedValue(mockHeadersObject);

      const formData = new FormData();
      formData.append('increment', '1');

      const mockReturning = vi.fn().mockResolvedValue([{ count: 1 }]);
      const mockOnConflictDoUpdate = vi.fn().mockReturnValue({
        returning: mockReturning,
      });
      const mockValues = vi.fn().mockReturnValue({
        onConflictDoUpdate: mockOnConflictDoUpdate,
      });
      mockDb.insert = vi.fn().mockReturnValue({
        values: mockValues,
      });

      const result = await incrementCounter(undefined, formData);

      expect(result).toEqual({ count: 1 });
      expect(mockValues).toHaveBeenCalledWith({ id: customId, count: 1 });
    });

    it('should handle missing x-e2e-random-id header (default to 0)', async () => {
      const mockHeadersObject = {
        get: vi.fn(() => null),
        append: vi.fn(),
        set: vi.fn(),
        delete: vi.fn(),
        getSetCookie: vi.fn(),
      } as any;
      mockHeaders.mockResolvedValue(mockHeadersObject);

      const formData = new FormData();
      formData.append('increment', '1');

      const mockReturning = vi.fn().mockResolvedValue([{ count: 1 }]);
      const mockOnConflictDoUpdate = vi.fn().mockReturnValue({
        returning: mockReturning,
      });
      const mockValues = vi.fn().mockReturnValue({
        onConflictDoUpdate: mockOnConflictDoUpdate,
      });
      mockDb.insert = vi.fn().mockReturnValue({
        values: mockValues,
      });

      const result = await incrementCounter(undefined, formData);

      expect(result).toEqual({ count: 1 });
      expect(mockValues).toHaveBeenCalledWith({ id: 0, count: 1 });
    });

    it('should handle string numbers in increment field (coercion)', async () => {
      const formData = new FormData();
      formData.append('increment', '2');

      const mockReturning = vi.fn().mockResolvedValue([{ count: 2 }]);
      const mockOnConflictDoUpdate = vi.fn().mockReturnValue({
        returning: mockReturning,
      });
      const mockValues = vi.fn().mockReturnValue({
        onConflictDoUpdate: mockOnConflictDoUpdate,
      });
      mockDb.insert = vi.fn().mockReturnValue({
        values: mockValues,
      });

      const result = await incrementCounter(undefined, formData);

      expect(result).toEqual({ count: 2 });
      expect(mockValues).toHaveBeenCalledWith({ id: 0, count: 2 });
    });

    it('should handle empty database result gracefully', async () => {
      const formData = new FormData();
      formData.append('increment', '1');

      const mockReturning = vi.fn().mockResolvedValue([]);
      const mockOnConflictDoUpdate = vi.fn().mockReturnValue({
        returning: mockReturning,
      });
      const mockValues = vi.fn().mockReturnValue({
        onConflictDoUpdate: mockOnConflictDoUpdate,
      });
      mockDb.insert = vi.fn().mockReturnValue({
        values: mockValues,
      });

      const result = await incrementCounter(undefined, formData);

      expect(result).toEqual({ count: undefined });
      expect(mockLogger.info).toHaveBeenCalledWith('Counter has been incremented');
    });
  });
});
