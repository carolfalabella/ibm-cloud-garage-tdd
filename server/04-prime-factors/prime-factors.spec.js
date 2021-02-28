const primeFactors = (num) => {
  let factors = [];
  for (let divisor = 2; num > 1; divisor++) {
    for (; num % divisor === 0; num /= divisor) {
      factors.push(divisor);
    }
  }
  return factors;
};

describe('the prime factors canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('a prime factors function should', () => {
  it('return none for 1', () => {
    expect(primeFactors(1)).toEqual([]);
  });
  it('return 2 for 2', () => {
    expect(primeFactors(2)).toEqual([2]);
  });
  it('return 3 for 3', () => {
    expect(primeFactors(3)).toEqual([3]);
  });
  it('return 2, 2 for 4', () => {
    expect(primeFactors(4)).toEqual([2,2]);
  });
  it('return 5 for 5', () => {
    expect(primeFactors(5)).toEqual([5]);
  });
  it('return 2, 3 for 6', () => {
    expect(primeFactors(6)).toEqual([2,3]);
  });
  it('return 7 for 7', () => {
    expect(primeFactors(7)).toEqual([7]);
  });
  it('return 2, 2, 2 for 8', () => {
    expect(primeFactors(8)).toEqual([2,2,2]);
  });
  it('return 3, 3 for 9', () => {
    expect(primeFactors(9)).toEqual([3,3]);
  });
});