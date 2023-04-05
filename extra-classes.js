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

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function rentalCarCost(d) {
  let costPerDay = 40;
  let goodOffer = -20;
  let betterOffer = -50;
  let total = 0;
  if (d >= 7) {
    total = costPerDay * d + betterOffer;
  } else if (d >= 3 && d < 7) {
    total = costPerDay * d + goodOffer;
  } else {
    total = costPerDay * d;
  }

  return total;
}
console.log(rentalCarCost(2));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const quarterOf = (month) => {
  const quarter1 = 1;
  const quarter2 = 2;
  const quarter3 = 3;
  const quarter4 = 4;
  const nonExistingQuarter = `This number: ${month} doesn't belong to any quarter of the year`;
  let quarter;

  if (month <= 3) {
    quarter = quarter1;
  } else if (month > 3 && month <= 6) {
    quarter = quarter2;
  } else if (month > 6 && month <= 9) {
    quarter = quarter3;
  } else if (month > 9 && month <= 12) {
    quarter = quarter4;
  } else {
    quarter = nonExistingQuarter;
  }

  return quarter;
};

console.log(quarterOf(15));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript

function fixTheMeerkat(arr) {
  const fixedMeerkats = arr.reverse();
  return fixedMeerkats;
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript

var cubeChecker = function (volume, side) {
  if (volume <= 0 || side <= 0) {
    return false;
  } else if (volume === side * side * side) {
    return true;
  }
  return false;
};
//!!!!!!!!!!!!!!
const object = {
  apple: 1,
};

if ("apple" in object) {
  object.apple += 1;
} else {
  object.apple = 1;
}

// Object literals
// Objects computable key
