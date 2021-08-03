import { upper } from '../src/utils';

describe('test utils', () => {
  test('test upper method', () => {
    expect(upper('a')).toBe('A');
  });
});