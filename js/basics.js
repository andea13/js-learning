//                   Задачка 1                  //
// const userAnswer = prompt("Яка офіційна назва JavaScript?");
// console.log(userAnswer);
//Щоб показувало, що ми вводимо, то треба задати змінну, яка буде дорівнювати promt ("якийсь меседж")
//і тоді вивести це в консоль за допомогою console.log(назва змінної);

// if (userAnswer === "ECMAScript") {
//   alert("Правильно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

//Якщо тіло умови складається з одного рядка, то можна його в увадратні дужки не брати!
// if (userAnswer === "ECMAScript") alert("Правильно!");
// else alert("Не знаєте? ECMAScript!");

//Перероблюємо те саме під !!!!!ТЕРНАРНИЙ ОПЕРАТОР!!!!!!
//умова ? тіло_1,(якщо умова === true) : тіло_2, (якщо умова_1===false)    !!! тільки щоб замінити IF ELSE,
//і тільки, якщо тіло складається з однієї лінійки

// userAnswer === "ECMAScript"
//   ? alert("Правильно!")
//     : alert("Не знаєте? ECMAScript!");

//Ще один спосіб через введення змінної msg
// let msg = "";
// userAnswer === "ECMAScript"
//   ? (msg = "Правильно!")
//   : (msg = "Не знаєте? ECMAScript!");

// alert(msg);

// Можна ще й так
// let msg = userAnswer === "ECMAScript" ? "Правильно!" : "Не знаєте? ECMAScript!";
// alert(msg);

//!---------------------------------------------------------------------------------------------------------!//
//                   Задачка 2   РОЗГАЛУЖЕННЯ               //
// const hours = 14;
// const minutes = 26;
// let timeStr = "";

// if (minutes === 0) timeStr = `${hours} г. `;
// else timeStr = `${hours} г. ${minutes} хв.`;
// console.log(timeStr);

//Перероблюємо те саме під !!!!!ТЕРНАРНИЙ ОПЕРАТОР!!!!!!
const hours = 14;
const minutes = 26;
let timeStr = minutes === 0 ? `${hours} г.` : `${hours} г. ${minutes} хв.`;
console.log(timeStr);

//!---------------------------------------------------------------------------------------------------------!//
//                   Задачка 3     ВКЛАДЕНІ РОЗГАЛУЖЕННЯ             //
a = 120;
b = 1;
if (a > 100 && b > 100) {
  if (a > b) console.log(a);
  else b; //можна так записати тернарним оператором: a > b ? console.log(a) : console.log(b);
} else {
  console.log(b + 512);
}

//а замість цієї перевірки можна використати
console.log(Math.max(a, b));

//Те саме повністю через тернарний (тернарний всередині тернарного): //! НЕ ЧИТАЄТЬСЯ АДЕКВАТНО, ТАКЕ КРАЩЕ НЕ РОБИТИ!//
let result = a > 100 && b > 100 ? (a > b ? a : b) : b + 512;
console.log(result);

//!---------------------------------------------------------------------------------------------------------!//
//                   Задачка 4     SWITCH            //
