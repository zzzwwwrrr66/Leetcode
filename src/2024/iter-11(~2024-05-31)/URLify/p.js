// trim(), " " 변경

/**
 *
 * @param {String} str
 */
function URLify(str) {
  str = str.trim();
  str = str.replaceAll(" ", "%20");
  return str;
}

/**
 *
 * @param {String} str
 * @param {number} index
 */
function uglyfy(str, index) {
  let actualIndex = 0;
  console.log(str.length - index);
  for (let i = 0; str.length; i++) {
    if (!str[i].match(/[a-z]/i)) {
      actualIndex++;
    } else {
      break;
    }
  }

  let res = "";
  for (let i = actualIndex; i < index + actualIndex; i++) {
    const currStr = str[i];
    console.log({ currStr });
    if (currStr === " ") {
      res += "%20";
    } else {
      res += currStr;
    }
  }
  console.log({ res });
}

URLify("    Mr John Smith         ", 13);
uglyfy("    Mr John Smith         ", 13);
