// ! Approach 1 of mine

// function productExceptSelf(nums: number[]): number[] {
//   const result: number[] = [];

//   for (let i = 0; i < nums.length; i++) {
//     let temp = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         temp *= nums[j];
//       }
//     }
//     result.push(temp);
//   }

//   return result;
// }

// ! Approach 2 of mine (not completed)

// function productExceptSelf(nums: number[]): number[] {
//   const result: number[] = new Array(nums.length).fill(1);

//   for (let i = 0; i < nums.length; i++) {
//     result[i] *= nums[i];
//   }

//   return result;
// }

// ! ChatGPT approach

function productExceptSelf(nums: number[]): number[] {
  const output: number[] = new Array(nums.length).fill(1);

  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    output[i] *= left;
    console.log("output", output);

    left *= nums[i];

    console.log("left", left);
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= right;
    console.log("output", output);
    right *= nums[i];
    console.log("right", right);
  }

  return output;
}

// ! Berkay's solution

// function productExceptSelf(nums: number[]): number[] {
//   let arr2: number[] = [];

//   nums.forEach((e, i) => {
//     let a = 1;
//     for (let k = 0; k < nums.length; k++) {
//       if (k !== i) {
//         a = a * nums[k];
//       }
//       arr2[i] = a;
//     }
//   });

//   return arr2;
// }

const nums = [3, 2, 3, 4];
// result = [24, 36, 24, 18]

console.log(productExceptSelf(nums));
