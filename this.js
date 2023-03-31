function foo() {
  console.log(this);
}

foo();

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//* Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// let result = array.reduce(
//   (acc, num) => {
//     if (num > 0) {
//       acc[0] += 1;
//     } else {
//       acc[1] += num;
//     }

//     return acc;
//   },
//   [0, 0]
// );
// let totalPositive = 0;
// let totalNegative = 0;

// for (num of array) {
//   if (num > 0) {
//     totalPositive += 1;
//   } else {
//     totalNegative += num;
//   }
// }

// console.log([totalPositive, totalNegative]);

function rentalCarCost(d) {
  let costPerDay = 40;
  let goodOffer = 20;
  let betterOffer = 50;
  let total = 0;
  if (d >= 7) {
    total = costPerDay * d - betterOffer;
  } else if (d >= 3 || d < 7) {
    total = costPerDay * d - goodOffer;
  } else {
    total = costPerDay * d;
  }

  return total;
}
console.log(rentalCarCost(2));
