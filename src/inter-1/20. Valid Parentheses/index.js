// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/?envType=featured-list&envId=top-100-liked-questions?envType=featured-list&envId=top-100-liked-questions


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s.length % 2 > 0) return false;
  
  let result = false;
  const list = s.split('');
  const dict = new Map;
  dict.set(')', '(');
  dict.set('}', '{');
  dict.set(']', '[');
  const exceptList = ['(', '{', '['];
  
  const q = [];
  q.push(list.shift());

  while(list.length) {
    const compare = list.shift();

    if(exceptList.includes(compare)) {
      q.push(compare);
      continue
    }

    if(q.pop() === dict.get(compare)) {
      result = true;
      continue
    } else {
      result = false;
      break;
    }
  }

  if(q.length) result = false;
  return result
};



console.log(
  isValid("()[]{}"),
isValid("{[]}"),
isValid("()"),
isValid("({{{{}}}))"), // false
isValid("(]"), // false
isValid("([)]"), // false
isValid("(){}}{"), // false
isValid(")(){}"), // false
isValid("([]){"), // false
isValid("[[[]"), // false
)