# is-palindrome
Check if `str` is a palindrome recursively with a single-line arrow function

```javascript
const isPalindrome = str => str.length < 2 ? true : str[0] !== str.slice(-1) ? false : isPalindrome(str.slice(1, -1));
```
