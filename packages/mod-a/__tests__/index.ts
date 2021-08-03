import modA from "../src";

describe('test mod-a', () => {
  test('test modA method', () => {
    expect(modA()).toBe('@nicolaz/mod-a');
  });
});