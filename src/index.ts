/**
 * @packageDocumentation A small library for common math functions
 */

/**
 * Classic Foo Bar
 *
 * @param a - the last number to print i.e 100
 *
 * @public
 */

export function fooBar(a = 100) {
  if (typeof a !== 'number') {
    throw Error(`parameter a must be a number, you enter ${typeof a}`);
  }
  let b = 1;
  let output = '';

  while (b <= a) {
    if (b > a) break;

    const mod3 = isDivisble(b, 3);
    const mod5 = isDivisble(b, 5);
    console.log({ mod3, mod5 });
    if (mod3) output += 'Foo';
    if (mod5) output += 'Bar';
    if (!mod3 && !mod5) output += b.toString();

    output += ' ';
    b++;
  }

  return output.trim();
}

/**
 *
 * @param num - number to test
 * @param mod - mod number to test
 * @returns predicate
 *
 * @public
 */
export function isDivisble(num: number, mod: 3 | 5) {
  if (typeof num !== 'number') throw Error(`parameters must be of type number`);

  return num % mod === 0;
}
