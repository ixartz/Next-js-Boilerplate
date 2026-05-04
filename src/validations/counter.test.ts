import { CounterValidation } from "../CounterValidation";

describe("CounterValidation", () => {
  // ✅ VALID CASES
  describe("valid inputs", () => {
    it("should succeed for minimum boundary (1)", () => {
      const result = CounterValidation.safeParse({ increment: 1 });

      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.increment).toBe(1);
      }
    });

    it("should succeed for maximum boundary (3)", () => {
      const result = CounterValidation.safeParse({ increment: 3 });

      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.increment).toBe(3);
      }
    });

    it("should succeed for a valid middle value (2)", () => {
      const result = CounterValidation.safeParse({ increment: 2 });

      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual({ increment: 2 });
      }
    });
  });

  describe("invalid inputs", () => {
    it("should fail when value is less than minimum (0)", () => {
      const result = CounterValidation.safeParse({ increment: 0 });

      expect(result.success).toBe(false);
    });

    it("should fail when value is greater than maximum (4)", () => {
      const result = CounterValidation.safeParse({ increment: 4 });

      expect(result.success).toBe(false);
    });

    it("should fail when increment is not a number", () => {
      const result = CounterValidation.safeParse({ increment: "2" });

      expect(result.success).toBe(false);
    });

    it("should fail when increment is null", () => {
      const result = CounterValidation.safeParse({ increment: null });

      expect(result.success).toBe(false);
    });

    it("should fail when increment is undefined", () => {
      const result = CounterValidation.safeParse({ increment: undefined });

      expect(result.success).toBe(false);
    });

    it("should fail when increment is missing", () => {
      const result = CounterValidation.safeParse({});

      expect(result.success).toBe(false);
    });

    it("should fail for decimal values (if integers are expected)", () => {
      const result = CounterValidation.safeParse({ increment: 1.5 });

      expect(result.success).toBe(false);
    });
  });

  describe("error structure", () => {
    it("should return proper validation error message", () => {
      const result = CounterValidation.safeParse({ increment: 0 });

      expect(result.success).toBe(false);

      if (!result.success) {
        expect(result.error.issues[0].path).toContain("increment");
      }
    });
  });
});