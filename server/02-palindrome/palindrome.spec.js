const { isPalindrome } = require('./palindrome')

describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('Is true if word is a Palindrome.', () => {
  it('true for mom', () => {
    expect(isPalindrome('mom')).toBe(true)
  });
  it('false for dude', () => {
    expect(isPalindrome('dude')).toBe(false)
  });
  it('false for dad mom', () => {
    expect(isPalindrome('dad mom')).toBe(false)
  });
  it('true for whitespace', () => {
    expect(isPalindrome('  ')).toBe(true)
  });
  it('error for empty string', () => {
    expect(() => {
      isPalindrome('');
    }).toThrowError('Empty strings are not palindromes');
  });
  it('error for not a string', () => {
    expect(() => {
      isPalindrome(123);
    }).toThrowError('Non-strings are not palindromes');
  });
})