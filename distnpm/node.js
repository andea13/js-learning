"use strict";

var message = "Node is amazing";
console.log(message);
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
var result = array.reduce(function (acc, num) {
  if (num > 0) {
    acc[0] += 1;
  } else {
    acc[1] += num;
  }
  return acc;
}, [0, 0]);
var totalPositive = 0;
var totalNegative = 0;
for (var _i = 0, _array = array; _i < _array.length; _i++) {
  num = _array[_i];
  if (num > 0) {
    totalPositive += 1;
  } else {
    totalNegative += num;
  }
}
console.log([totalPositive, totalNegative]);