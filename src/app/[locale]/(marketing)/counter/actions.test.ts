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
      expect(mockLogger.info).toHaveBeenCalledWith('Counter has been incremented', {
        id: 0,
        increment: 1,
        newCount: 1,
      });
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

      expect(result).toHaveProperty('error');
      expect(result.error).toBe('Counter update completed but result is invalid. Please refresh and try again.');
      expect(mockLogger.error).toHaveBeenCalledWith('Database returned invalid result', { result: [] });
    });
  });

  describe('Error handling', () => {
    it('should handle database connection errors', async () => {
      const formData = new FormData();
      formData.append('increment', '1');

      const dbError = new Error('Database connection failed');
      mockDb.insert = vi.fn().mockReturnValue({
        values: vi.fn().mockReturnValue({
          onConflictDoUpdate: vi.fn().mockReturnValue({
            returning: vi.fn().mockRejectedValue(dbError),
          }),
        }),
      });

      const result = await incrementCounter(undefined, formData);

      expect(result).toHaveProperty('error');
      expect(result.error).toBe('Failed to update counter. Please try again.');
      expect(mockLogger.error).toHaveBeenCalledWith('Database operation failed', {
        error: dbError,
        id: 0,
        increment: 1,
      });
    });

    it('should handle invalid header values gracefully', async () => {
      const mockHeadersObject = {
        get: vi.fn((key: string) => (key === 'x-e2e-random-id' ? 'invalid-number' : null)),
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
      expect(mockValues).toHaveBeenCalledWith({ id: 0, count: 1 }); // Should default to 0
      expect(mockLogger.warn).toHaveBeenCalledWith('Invalid x-e2e-random-id header value', {
        headerValue: 'invalid-number',
      });
    });

    it('should handle header reading errors', async () => {
      const headerError = new Error('Headers not available');
      mockHeaders.mockRejectedValue(headerError);

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
      expect(mockValues).toHaveBeenCalledWith({ id: 0, count: 1 }); // Should default to 0
      expect(mockLogger.error).toHaveBeenCalledWith('Failed to read headers', { error: headerError });
    });

    it('should handle database result with undefined count', async () => {
      const formData = new FormData();
      formData.append('increment', '1');

      const mockReturning = vi.fn().mockResolvedValue([{ count: undefined }]);
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

      expect(result).toHaveProperty('error');
      expect(result.error).toBe('Counter update completed but result is invalid. Please refresh and try again.');
      expect(mockLogger.error).toHaveBeenCalledWith('Database returned invalid result', {
        result: [{ count: undefined }],
      });
    });

    it('should handle logging errors gracefully', async () => {
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

      // Mock logger.info to throw an error
      const logError = new Error('Logging service unavailable');
      mockLogger.info.mockImplementation(() => {
        throw logError;
      });

      // Mock console.error to verify it's called
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      const result = await incrementCounter(undefined, formData);

      expect(result).toEqual({ count: 1 }); // Should still succeed
      expect(consoleSpy).toHaveBeenCalledWith('Failed to log counter increment:', logError);

      consoleSpy.mockRestore();
    });

    it('should include error details in development mode', async () => {
      vi.stubEnv('NODE_ENV', 'development');

      const formData = new FormData();
      formData.append('increment', '1');

      const dbError = new Error('Specific database error');
      mockDb.insert = vi.fn().mockReturnValue({
        values: vi.fn().mockReturnValue({
          onConflictDoUpdate: vi.fn().mockReturnValue({
            returning: vi.fn().mockRejectedValue(dbError),
          }),
        }),
      });

      const result = await incrementCounter(undefined, formData);

      expect(result).toHaveProperty('error');
      expect(result).toHaveProperty('details');
      expect(result.details).toBe('Error: Specific database error');

      vi.unstubAllEnvs();
    });

    it('should not include error details in production mode', async () => {
      vi.stubEnv('NODE_ENV', 'production');

      const formData = new FormData();
      formData.append('increment', '1');

      const dbError = new Error('Specific database error');
      mockDb.insert = vi.fn().mockReturnValue({
        values: vi.fn().mockReturnValue({
          onConflictDoUpdate: vi.fn().mockReturnValue({
            returning: vi.fn().mockRejectedValue(dbError),
          }),
        }),
      });

      const result = await incrementCounter(undefined, formData);

      expect(result).toHaveProperty('error');
      expect(result.details).toBeUndefined();

      vi.unstubAllEnvs();
    });
  });
});
