function containsDuplicate(nums: number[]): boolean {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (map.has(val)) return true;
    map.set(val, i);
  }

  return false;
}

const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDuplicate(nums));
