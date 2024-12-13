import '@testing-library/jest-dom';

declare module 'vitest' {
  type Assertion<T = any> = {} & jest.Matchers<void, T>;
}
