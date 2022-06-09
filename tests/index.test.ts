import { fooBar, isDivisble } from '..';

describe('isDivisible should return true or false if remainder ', () => {
  test('1 mod 3 is false', () => {
    expect(isDivisble(1, 3)).toBeFalsy();
  });
  test('3 mod 3 is true', () => {
    expect(isDivisble(3, 3)).toBeTruthy();
  });
  test('1 mod 5 is false', () => {
    expect(isDivisble(1, 5)).toBeFalsy();
  });
  test('5 mod 5 is true', () => {
    expect(isDivisble(5, 5)).toBeTruthy();
  });
});

describe('fooBar should return a valid string based on given num parameter', () => {
  test('till number 18', () => {
    expect(fooBar(18)).toBe('1 2 Foo 4 Bar Foo 7 8 Foo Bar 11 Foo 13 14 FooBar 16 17 Foo');
  });
});
