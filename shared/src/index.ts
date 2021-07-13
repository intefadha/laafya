export function addNumbers(a: number, b: number): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  throw new Error('Please enter valid numbers!');
}
