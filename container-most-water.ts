const heightArr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function maxArea(height: number[]): number {
  let maxArea = 0;
  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    const el1 = height[i];
    const el2 = height[j];

    const xRange = j - i;
    const yRange = Math.min(el1, el2);

    maxArea = Math.max(maxArea, xRange * yRange);

    if (el1 <= el2) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
}

console.log(maxArea(heightArr));
