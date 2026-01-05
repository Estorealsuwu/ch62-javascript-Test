const { divide, multiply } = require('./calculadora');

describe('divide()', () => {
  test('10 / 2 = 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('9 / 3 = 3', () => {
    expect(divide(9, 3)).toBe(3);
  });

  test('división por 0', () => {
    expect(divide(10, 0)).toBe('Error: división por 0');
  });
});

describe('multiply()', () => {
  test('4 * 5 = 20', () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test('-2 * 3 = -6', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });
});
