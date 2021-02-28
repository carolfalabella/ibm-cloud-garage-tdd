const isPalindrome = (text) => {
    if (text === '') throw new Error('Empty strings are not palindromes');
    if (typeof text !== 'string') throw new Error('Non-strings are not palindromes')
    return text === text.split('').reverse().join('');
}

module.exports = { isPalindrome };