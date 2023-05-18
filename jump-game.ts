const numsTrue = [2, 3, 1, 1, 4];
const numsFalse = [3, 2, 1, 0, 4];

function canJump(nums: number[]) {
  if (nums.length === 1) return false;
  let total = nums[0];

  while (total < nums.length) {
    total += nums[total - 1];

    if (total === nums.length) return true;
    if (nums[total - 1] === 0) return false;
  }
  return false;
}

console.log(canJump(numsTrue)); // true
console.log(canJump(numsFalse)); // false
