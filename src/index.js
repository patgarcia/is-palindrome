"use strict";

const isPalindrome = str => str.length < 2 ? true : str[0] !== str.slice(-1) ? false : isPalindrome(str.slice(1, -1));

// TEST CASES
console.log(isPalindrome("") === true);
console.log(isPalindrome("a") === true);
console.log(isPalindrome("aa") === true);
console.log(isPalindrome("aba") === true);
console.log(isPalindrome("abba") === true);
console.log(isPalindrome("abccba") === true);

console.log(isPalindrome("ab") === false);
console.log(isPalindrome("abc") === false);
console.log(isPalindrome("abca") === false);
console.log(isPalindrome("abcdba") === false);
