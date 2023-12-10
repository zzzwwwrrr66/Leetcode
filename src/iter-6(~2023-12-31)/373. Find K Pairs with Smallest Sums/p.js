/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  if (nums1.length === 0 || nums2.length === 0) {
    return [];
  }

  let max = -Infinity;
  const result = [];

  for (const num1 of nums1) {
    for (const num2 of nums2) {
      const curr = {
        sum: num1 + num2,
        nums: [num1, num2],
      };

      if (curr.sum >= max && result.length >= k) {
        // curr.sum 이 max보다 크거나 같음 and result.length 가 k가와 같거나 클때 break
        break;
      } else if (curr.sum <= max && result.length < k) {
        // curr.sum이 max보다 작거나같음 and result.length 가 k 보다 작을때 바로 PUSH
        result.push(curr);
      } else if (curr.sum > max && result.length < k) {
        //curr.sum이 max보다 큼 and result.length 가 k 보다 작을때 max 변경, PUSH
        max = curr.sum;
        result.push(curr);
      } else if (curr.sum < max && result.length >= k) {
        // result.length가 k 만큼 있는데 sum이 max 보다 작을때
        let newMax = -Infinity;
        let replaced = false;
        for (let i = 0; i < result.length; i++) {
          // max 와 같은걸 현재 curr 로 바꿔준다
          if (result[i].sum === max && !replaced) {
            result[i] = curr;
            replaced = true;
          }
          // 새로운 max를 찾는다
          if (result[i].sum > newMax) {
            newMax = result[i].sum;
          }
        }
        max = newMax;
      }
    }
  }

  return result.map((v) => v.nums);
};
console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));
