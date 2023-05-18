const nums = [-1, 0, 1, 2, -1, -4];

function threeSum(nums: number[]): number[][] {
  const len = nums.length;
  const result: number[][] = [];

  nums.forEach((num, index) => {
    for (let i = index + 1; i < len - 1; i++) {
      let next = nums[i];
      for (let j = index + 2; j < len; j++) {
        let tempSol: number[] = [];
        let iter = nums[j];
        if (next + iter === -1 * num) {
          tempSol = [num, next, iter];
          if (!result.includes(tempSol)) {
            result.push(tempSol);
          }
        }
      }
    }
  });
  return result;
}

console.log(threeSum(nums));
