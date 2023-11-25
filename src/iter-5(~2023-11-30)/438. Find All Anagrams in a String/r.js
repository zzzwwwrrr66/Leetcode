const findAnagrams = (s, p) => {
  // initialize output array to be returned at the end and neededChars object to store the chars in p.
  const output = [];
  const neededChars = {};

  // populate neededChars to contain every char in p as a key and how many times that char appears in p as its value.
  for (let char of p) {
    if (char in neededChars) {
      neededChars[char]++;
    } else neededChars[char] = 1;
  }

  // initialize window pointers and the total number of chars needed to form an anagram.
  let left = 0;
  let right = 0;
  let count = p.length;

  // start sliding the window
  while (right < s.length) {
    const currR = s[right];
    if (neededChars[currR] && neededChars[currR] > 0) count -= 1;

    neededChars[currR] -= 1;
    right += 1;

    if (count === 0) output.push(left);

    if (right - left == p.length) {
      const currL = s[left];
      if (neededChars[currL] >= 0) count += 1;

      neededChars[currL] += 1;
      left += 1;
    }
  }
  return output;
};
console.log(findAnagrams("cbaebabacd", "abc"));
