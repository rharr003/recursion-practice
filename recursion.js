/** product: calculate the product of an array of numbers. */

function product(nums, index = 0) {
  if (index === nums.length) return 1;
  return nums[index] * product(nums, index + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0) {
  if (index === words.length - 1) return words[index].length;
  return Math.max(words[index].length, longest(words, index + 1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0) {
  if (index >= str.length) return "";
  return str[index] + everyOther(str, index + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  //return str === Array.from(str).reverse().join("");
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  }
  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (arr[index] === val) return index;
  if (index === arr.length - 1) return -1;
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, offset = 1) {
  if (offset === str.length + 1) return "";
  return str[str.length - offset] + revString(str, offset + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") result.push(obj[key]);
    if (typeof obj[key] === "object") result.push(...gatherStrings(obj[key]));
  }
  return result;
}

let whiskey = {
  name: "Whiskey",
  age: 5,
  favFood: "popcorn",
  color: "black",
  barks: false,
};

console.log(gatherStrings(whiskey));

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
