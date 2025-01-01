/**
 *
 * @param {string} str
 */
const isUniq = (str) => {
  if (str === "") return true;
  console.log({ str });
  // 중복이있으면 true OR false
  const compareSet = new Set(str);

  if (compareSet.size === str.length) return true;
  return false;
};
console.log(isUniq("true"), isUniq("abccd"));

const isUniq2 = (str) => {
  // hash alphabet count loop 2개있으면 return false
  const asd = new Uint8Array(3);
  console.log({ asd });
};

console.log(isUniq2("true"));
