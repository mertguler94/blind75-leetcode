// ! BRUTE FORCE

// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

// ! Two-pass Hash Table

// function twoSum(nums: number[], target: number): number[] {
//   const newMap = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     newMap.set(nums[i], i);
//   }

//   for (let i = 0; i < nums.length; i++) {
//     const compliment = target - nums[i];
//     if (newMap.has(compliment) && i !== newMap.get(compliment)) {
//       return [i, newMap.get(compliment)];
//     }
//   }
//   return [];
// }

// ! One-pass Hash Table

function twoSum(nums: number[], target: number): number[] {
  const newMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (newMap.has(compliment)) {
      return [i, newMap.get(compliment)];
    }
    newMap.set(nums[i], i);
  }

  return [];
}
