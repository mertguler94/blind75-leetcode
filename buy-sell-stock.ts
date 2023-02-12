// ! Brute Force

// function maxProfit(prices: number[]): number {
//   let profit = 0;
//   let tempProfit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[j] > prices[i]) {
//         tempProfit = prices[j] - prices[i];
//         if (tempProfit > profit) profit = tempProfit;
//       }
//     }
//   }

//   return profit;
// }

// ! One Pass

function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > profit) {
      profit = prices[i] - minPrice;
    }
  }

  return profit;
}

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
