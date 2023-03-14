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
const daysUntilDeadline = 5;

if (daysUntilDeadline === 0) {
  console.log("Сьогодні");
} else if (daysUntilDeadline === 1) {
  console.log("Завтра");
} else if (daysUntilDeadline === 2) {
  console.log("Післяавтра");
} else {
  console.log("Дата у майбутньому");
}

//РОБИМО РЕФАКТОРІНГ ВИКОРИСТОВУЮЧИ SWITCH
switch (daysUntilDeadline) {
  case 0: {
    console.log("Сьогодні");
    break;
  }
  case 1: {
    console.log("Завтра");
    break;
  }
  case 2: {
    console.log("Післяавтра");
    break;
  }
  default: {
    console.log("Дата у майбутньому");
  }
}

//!---------------------------------------------------------------------------------------------------------!//
//                   Задачка 5     ЦИКЛ for           //
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від
// min до max, але твльки якщо число кратне 5.

//ПРИКЛАД І ПОЯСНЕННЯ ЦИКЛУ FOR

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

//let i = 0;- це початкова ітерація, значення від якого ми будемо рухатись
//i < 10; - умова, до якої цей цикл буде виконуватись, поки цей вираз істинний, то цикл продовжується
//i += 1; - step, після нього крапку з комою вже не ставимо
//Якщо тіло умови складається з одної строки, то квадоатні дужки для нього можна і не ставити, але якщо більше, то треба.

const max = 100;
const min = 20;

// for (let i = min; i <= 100; i += 5) {
//   console.log(i);
// }

//Якщо початкова ітерація кратна 5, то все ок, а якщо ні, то треба по - іншому з перевіркою всередині:

// for (let i = min; i <= 100; i += 1) {
//   if (i % 5 === 0) console.log(i);
// }
//if (i % 5 === 0) -----якщо при діленні i на 5 останок ділення рівний 0
//% -топератор ділення числа без остачі

//В такій задачі можна рухатись і навпаки від максимального до мвнвмального:
// for (let i = max; i >= min; i -= 1) {
//   if (i % 5 === 0) console.log(i);
// }

//Якщо треба вивести суму всіх i-чисел в консоль:
// let total = 0; //Чому 0- бо до нього будемо додавати і воно не впливатиме на результат

// for (let i = min; i <= 100; i += 1) {
//   if (i % 5 === 0) console.log((total += i));
// }

//ОПЕРАТОР CONTINUE //
// for (let i = min; i <= 100; i += 1) {
//   if (i % 5 !== 0) continue;
//   console.log(i);
// }

//Пояснення continue: Якщо і-тий елемент не ділиться на ціло на 5, то пропускаємо -воно зупиняється на continue,
//не доходить до логування, аж поки умова не виконається і continue не спрацює, відповідно тоді в нас вперше (або знову через 5) залогується

//!---------------------------------------------------------------------------------------------------------!//
//                   Задачка 6     на prompt  Введення користувача та розгалуження         //

//Напиши скрипт, який питатиме логін та за допомогою prompt логувати результат у консоль браузера.

//Якщо відвідувач вводить "Адмін", то prompt запитує пароль
//Якщо нічого не введено, або натиснуто клавішу Esc - вивести рядок "Скасовано"
//В іншому випадку вивести рядок "Я вас не знаю"
//Пароль перевіряти так:

//Якщо введено пароль "Я адмін", то вивести рядок "Здрастуйте!"
//Інакше виводити рядок "Невірний пароль"

// const login = prompt("Введіть Логін: ")?.trim();
// console.log(login);

// if (login === "Адмін") {
//   const password = prompt("Введіть пароль: ");

//   if (password === "Я адмін") {
//     console.log("Здрастуйте!");
//   } else {
//     console.log("Невірний пароль");
//   }
// } else if (!login) {
//замість цього: (login === "" || login === undefined) можна написати так (!login) і результат буде таким самим
//  в (!login) ! - це логічне "ні"    ! змінює булевий тип елемента на зворотній
//   console.log("Скасовано");
// } else {
//   console.log("Я вас не знаю");
// }
//                                                         TRIM
//ЯК ВИДАЛИТИ ЗАЙВІ ПРОБІЛИ В ПУСТІЙ СТРОЦІ, ЩОБ ВОНО НЕ ПОКАЗУВАЛО ЯК ЩОСЬ ВВЕДЕНО НЕПРАВИЛЬНО, А ПОКАЗУВАЛО ЯК НІЧОГО НЕ БУЛО ВВЕДЕНО
//     .trim() одразу після того, що користувач введе в prompt:    const login = prompt("Введіть Логін: ").trim();

//!---------------------------------------------------------------------------------------------------------!//
// ! подивитись додатково !!!!!!!!!!!!!!!
//  Оператор ? і !
// Як працюють постфіксні і префіксні інкременти y ++ замість y +=
//slice
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!ВІДЕО З РЕПЕТОЮ 1 МОДУЛЬ 2
//const friends = []; - звичайний пустий масив
// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends[2]);

// friends[1] = "qweqrqreq";
// console.table(friends);

// const lastIndex = friends.length - 1;
//ПЕРЕБИРАННЯ ЗА ДОПОМОГОЮ ЦИКЛУ
// for (let i = 0; i <= lastIndex; i += 1) {
//   console.log([i]);
// } //звернення до ітого елементу, тобто перебирає індекси

//!Задача 1!//
//Порахуйтье загальну суму покупок в корзині

// 1. Перебираємо весь масив, щоб отримати доступ до кожного елемента.
// 2. Створюємо змінну total до оголошення циклу, бо інакше вона буде не видима всередині циклу.
// 3. Додаємо до змінної total кожен елемент масиву і логуємо суму після циклу

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);
//   total += cart[i]; //це те саме, що total = total + cart[i];
// }
// console.log("Total: ", total);
//ВИРІШУЄМО ЦЮ САМУ ЗАДАЧКУ З FOR OF
// for (const value of cart) {
//   total += value;
// }

// console.log("Total: ", total);
//! Якщо нам не треба перезаписувати щось в змінній, то використовуємо цикл for of, а якщо треба, то for
//Наприклад, додаємо такс до кожного елемента масива з попередньої задачки:
// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1); //це так до кожного елемента додаємо 20 відсотків
// }

// console.log(cart);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!Задача 2!//
//Напиши суму всіх парних чисел в масиві

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

// 1. Створюємо змінну total.
// total = 0;
// 2. Перебираємо масив.
// for (let i = 0; i < numbers.length; i += 1) {
// 3. Фільтруємо парні числа.
// if (numbers[i] % 2 === 0) {
//   console.log("Парне!! ", numbers[i]);
// 4. Сумуємо парні числа і додаємо до змінної  total.
//     total += numbers[i];
//   }
// }
// 5. Логуємо суму після циклу.
// console.log("Total: ", total);

//!numbers[i] всюди погано читається, тому краще створити локальну змінну замість нього (всвередині тіла циклу: let number = numbers[i])
//Тому перепишемо задачу так:
// 1. Створюємо змінну total.
// total = 0;
// 2. Перебираємо масив.
// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];
// 3. Фільтруємо парні числа.
// if (number % 2 === 0) {
//   console.log("Парне!! ", number);
// 4. Сумуємо парні числа і додаємо до змінної  total.
//     total += number;
//   }
// }
// 5. Логуємо суму після циклу.
// console.log("Total: ", total);

//! Якщо нам не треба перезаписувати щось в змінній, то використовуємо цикл for of, а якщо треба, то for
//Тому знову можна переписати задачку за допомогою for of:

// for (const number of numbers) {
// 3. Фільтруємо парні числа.
// if (number % 2 === 0) {
//   console.log("Парне!! ", number);
// 4. Сумуємо парні числа і додаємо до змінної  total.
//     total += number;
//   }
// }

// console.log("Total: ", total);

//Логіка від протилежного. Цю саму задачку можна переробити і з умовою, що фільтруємо непарні спершу і порпускаємо їх за допомогою continue:

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     console.log("Цю ітерацію треба пропустити ", number);
//     continue;
//   }

//   console.log("Парне!! ", number);
//   total += number;
// }

// console.log("Total: ", total);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!Задача 3!//
//Напиши скрипт пошуку логіну
//Якщо логіну нема, то вивести повідомлення: "Користувач [логін] не знайдено."
//Якщо логін є, то вивести повідомлення: "Користувач [логін] знайдено."

// const logins = [
//   "hgjhfdjfhqlrH",
//   "gledhbdfHGKbhf",
//   "polyiscute",
//   "ajbaerivbIkkand",
// ];

// const loginToFind = "polyiscute";
// let message = `Користувач ${loginToFind} не знайдено`;

//Спочатку через for: //! Не спрацює, бо цикл ніде не перервано, він захоче виконати всі ітерації

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   if (login === loginToFind) {
//     console.log((message = `Користувач ${login} знайдено`));
//   } else {
//     console.log((message = `Користувач ${login} не знайдено`));
//   }
// }

//! Правильно перервати цикл при першій успішній ітерації:

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   console.log("Login: ", login);

//   if (login === loginToFind) {
//     message = `Користувач ${login} знайдено`;
//     break;
//     //!Ось тут відмінність!
//     message = `Користувач ${login} не знайдено`;
//   }
// }

// console.log(message);

//Та сама задачка за допомогою for of
// for (login of logins) {
//   console.log(`Login: `, login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);
//   if (login === loginToFind) {
//     console.log("Ура, знайдено!");
//     message = `Користувач ${login} знайдено`;
//     break;
//   }
// }
//Та сама задачка за допомогою includes + тернарника
// const message = logins.includes(loginToFind)
// ? `Користувач ${loginToFind} знайдено`
//   : `Користувач ${loginToFind} не знайдено`;
// console.log(message);
//! .includes - абстрактний метод, а не декларація як в for, бо він робить все під капотом, а не показує як for
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!Задача 4!//
//Напиши скрипт пошуку найменшого числа в масиві, при умові, що числа унікальні (не повторюються)
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0]; // - просто як вивести консоль найменшого числа: зазвичай беремо перше по порядку
//  і далі будемо перебирати в циклі і порівнювати

// console.log(smallestNumber); консоль найменшого числа
//! Так як в нас числа ніде значення змінювати не будуть, то ітерацію нам нен треба, можна використати for of:
// for (number of numbers) {
//   console.log(number);
//   if (number < smallestNumber) {
//     smallestNumber = number; //якщо наступне число менше того, що ми записали раніше, то тепер воно буде найменшим
//   }
// }

// console.log(smallestNumber);

//Така сама задача, але шукаємо найбільше число
// let biggestNumber = [0];

// for (number of numbers) {
//   console.log(numbers);
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }
// console.log(biggestNumber);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!Задача 5!//
// Напишіть скрипт, який об'єднує всі елементи масиву в одне рядкове значення.
//Елементи масиву в рядку повинні бути розділені комою.
//Вирішуємо через for

// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
//Має вийти: "Mango,Poly,Kiwi,Ajax"
// let string = "";

// for (friend of friends) {
//   string += friend + ","; //в нас строка зліплена вивелась в консоль, а треба з комою між елементами,
//того пробуємо додати кому і вийшло таке: "Mango,Poly,Kiwi,Ajax," - тепер треба втрізати останню кому за допомогою slice:
// }

// string = string.slice(0, string.length - 1);

// console.log(string); //slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву,
// не змінюючи його. Копія створюється з begin і до, але не включно, end - індекси елементів вихідного масиву.

//Вирішуємо через join
//Що робить метод .join? зшиває всі елементи за допомогою того конектора, який ми вкажемо в дужках,
//причому після останнього елемента ніякого конектора не буде!!!!

// const string = friends.join(",");
// console.log(string);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!Задача 6!//
//Напишіть скрипт, котрий замінює регістр кожного символу в рядку на протилежний
//Наприклад, якщо рядок "JavaScript", то на виході має вийти "jAVAsCRIPT"

//Що робить метод .split? Бере рядок і розбиває його на масив за допомогою роздільника,
// який ми вкказуємо в дужках біля методу(!!!!!обов'язково в лапках!!!!!!)

// const string = "JavaScript";
// const letters = string.split("");
// let invertedString = ""; // тут змінна працює в нас по принципу змінної total, до неї потім будемо додавати всі букви в нижнтому і верхньому регістрі
//invertedString += letter.toUpperCase(); це те ж саме, що й: invertedString = invertedString + letter.toUpperCase();
//!Як записати букву в нижньому регістрі: letter.toLowerCase(); . І як в верхньому: letter.toUpperCase(); Console так бачить реєстр і фільтрує!!!!

// for (letter of letters) {
// console.log(letter); //перебираємо масив по символах кожен окремо, після чого нам треба буде побудувати новий рядок,
// який винесемо в глобальну змінну const invertedString= "";
//тоді створюємо умову для вичислення регістру кожної букви:

//   if (letter === letter.toLowerCase()) {
//     console.log("Ця буква в малому регістрі! - ", letter);
//     invertedString += letter.toUpperCase(); //це перетворює всі відфільтровані маленькі букви і пкеретворює їх в рядок з великих символів
//   } else {
//     invertedString += letter.toLowerCase();
//   }
// }

//Переписуємо те ж самк за допомогою тернарника
//   letter === letter.toLowerCase()
//     ? (invertedString += letter.toUpperCase())
//     : (invertedString += letter.toLowerCase());
// }
//це перетворює всі відфільтровані маленькі букви і пкеретворює їх в рядок з великих символів
//

// console.log(invertedString);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!Задача 7!//
//Робимо slug в URL з назви статті (наприклад на dev.to)
//! slug - це речення або набір слів з яких складається url записаних маленькими буквами через пробіл
//Заголовок статті складається лише з букв і пробілів

// const title = "Top 10 benefits of React framework";
// let normalizedTitle = "";

//1. Нормалізуємо рядок

// normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

//має вийти такий slug: top-10-benefits-of-react-framework

//2. Розбиваємо по словах

// const words = normalizedTitle.split(" ");
// console.log(words);

//3. Зшиваємо в один рядок з конекторами
// const slug = words.join("-");
// console.log(slug);

//!Chaning - запис декількох методів для одної змінної
// Можна записати кілька методів підряд, уникаючи проміжних змінних, наприклад на базі попередньої задачки так:
// const slug1 = title.toLowerCase().split(" ").join("-");
// console.log(slug1);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!Задача 8!//
//Напиши скрипт, який рахує суму елементів двох масивів
//Пишемо хорошим надійним методом, завжди буде працювати 100%
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

// let total = 0;

// for (i = 0; i <= array1.length - 1; i += 1) {
//   total += array1[i];
// }

// for (i = 0; i <= array2.length - 1; i += 1) {
//   total += array2[i];
// }

// console.log(total);
//Можна зробити і по-іншому: ОБ'ЄДНУЄМО МАСИВИ ЗА ДОПОМОГОЮ МЕТОДУ .concat(змінна елемента, який будемо приєднувати);
//МЕТОД .concat НЕ ДЕСТРУКТИВНИЙ, А ЦЕ ОЗНАЧАЄ, ЩО ВІН НЕ РУЙНУЄ ВИХІДНІ МАСИВИ,
// А СТВОРЮЄ НОВИЙ ЗШИВАЮЧИ ДВА ВИХІДНИХ, ПРИ ТОМУ ВИХІДНІ МАСИВИ ЗАЛИШАЮТЬСЯ ЯКИМИ Й БУЛИ

// const numbers = array1.concat(array2);
// console.log(numbers);

// for (i = 0; i <= numbers.length - 1; i += 1) {
//   total += numbers[i];
// }

// console.log(total);

//Або ще легше, бо ми ніякий елемент масиву не змінюємо: через for of
// for (number of numbers) {
//   total += number;
// }

// console.log(total);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!Задача 9!//
//Працюємо з колекцією карток в trello
//Метод splice
//Видалити
//Додати
//Обновити
const cardToRemove = "Картка-3"; //!Якщо елемента, який ми шукаємо в списку нема, то в консоль ми отримаємо: -1!!!!!!!!!!!!!!!
const cards = ["Картка-1", "Картка-2", "Картка-3", "Картка-4", "Картка-5"];
// console.table(cards);

//1.МЕТОД INDEX OF

// const index = cards.indexOf(cardToRemove); //Передаємо індекс елемента, який нам треба видалити
// console.log(index);

// 2. Видалення елементів по індексу МЕТОД SPLICE !!!!!!!!!!!!!!    splice(position, num)    !!!!!!!
//!МЕТОД SPLICE деструктивний, а також PUSH, він видаляє попередній масив, а повертає МАСИВ ВИДАЛЕНИХ ЕЛЕМЕНТІВ! Всі інші НЕ ДЕСТРУКТИВНІ!
// cards.splice(index, 1); //де index - це позиція елемента, який ми хочемо видалити, 1 - кількість елементів, які ми хочемо видалити
// console.log(cards);

// 3. Додавання елементів по індексу  МЕТОД SPLICE !!!!!!!     splice(position, 0, new_element_1, new_element_2, ...)    !!!!!
// !!!!!ЯКЩО ДОДАЄМО ЕЛЕМЕНТ В ДОВІЛЬНЕ МІСЦЕ МАСИВУ, А НЕ НА ПОЧАТОК, ЧИ КІНЕЦЬ, ТО ТРЕБА МЕТОД SPLICE
//!ЯКЩО Ж НА ПОЧАТОК - UNSHIFT, В КІНЕЦЬ - PUSH)
cards.splice(2, 0, "Картка-7");
console.log(cards);
//4.Оновлення (Заміна) по індексу  МЕТОД SPLICE !!!!!!!

cards.splice(2, 1, "Картка-7"); // Замість 0 в додаванні ставимо скільки елементів хочемо видалити
console.table(cards);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!ВІДЕО З РЕПЕТОЮ 2 МОДУЛЬ 2
//!Функції
// const add = function (x, y) {
//   console.log(x);
//   console.log(y);
// const result = x + y;

// console.log("Hello world");

// return x + y; //в самому кінці тіла функції вказуємо, що нам з тою функції потрібно повернути!
// }; //Отак в консоль нічого не виведе, бо ми просто оголосили функцію, вона ще не запущена
//Викликаємо функцію в довільному місці нижче по коду:
// console.log(add(2, 3)); //оце насправді викликає функцію!
//                                //                                //                                     //                        //                         //
// const fn = function () {
//   console.log(1);
//   console.log(2);
//   console.log(3);

//Якщо не оголосити return, тобто те, шо ми хочемо повернути, то повернеться undefined
// };

// console.log(fn());

//!Задача 1!//
//Напиши функцію calculateTotalPrice(items), яка приймає масив цін (чисел) і повертає їх суму

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log("Total: ", total);

//Все класно, але працює тільки для одного масиву, а якщо нам треба більше масивів порахувати, то кожен цикл треба переписувати
//тому тут було б добре використати функцію

const calculateTotalPrice = function (items) {
  console.log("Items всередині функції: ", items);
  let total = 0;

  for (const item of items) {
    total += item;
  }

  return total;
};

console.log(calculateTotalPrice([1, 2, 3]));
console.log(calculateTotalPrice([5, 10, 15, 20]));
console.log(calculateTotalPrice([100, 200, 300]));
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//!Задача 2!//
//Напиши функцію logItems для перебору і логування масиву

// logItems(["Mango", "Poly", "Kiwi", "Ajax"]);
// logItems([1, 2, 3, 4, 5]);
// logItems(["клавіатура", "гарнітура", "годинник"]);

// const logItems = function (items) {
//   for (item of items) {
//     console.log(item);
//   }
// };
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//!Задача 3!//
//Напишіть функцію findLogin(allLogins, login) для пошуку логіну
//Якщо логіну нема, то вивести повідомлення: "Користувач [логін] не знайдено."
//Якщо логін є, то вивести повідомлення: "Користувач [логін] знайдено."

const logins = [
  "hgjhfdjfhqlrH",
  "gledhbdfHGKbhf",
  "polyiscute",
  "ajbaerivbIkkand",
];

// const loginToFind = "polyiscute";
// let message = `Користувач ${loginToFind} не знайдено`;

// message = logins.includes(loginToFind)
//   ? `Користувач ${loginToFind} знайдено`
//   : `Користувач ${loginToFind} не знайдено`;
// console.log(message);

// const findLogin = function (allLogins, loginToFind) {
// console.log(allLogins);
// console.log(loginToFind);
//   let message = `Користувач ${loginToFind} не знайдено`;
//   for (login of allLogins) {
//     if (login === loginToFind) {
//       message = `Користувач ${loginToFind} знайдено`;
//       return message;
//     }
//   }
//   return message;
// };

//message тут всюди лишня змінна і займає місце, можна і без неї:

// const findLogin = function (allLogins, loginToFind) {
// console.log(allLogins);
// console.log(loginToFind);

//   for (login of allLogins) {
//     if (login === loginToFind) {
//       return `Користувач ${loginToFind} знайдено`;
//     }
//   }
//   return `Користувач ${loginToFind} не знайдено`;
// };

// console.log(findLogin(logins, "hgjhfdjfhqlrH"));
// console.log(findLogin(logins, "glehkjhjdfHGKbhf"));
// console.log(findLogin(logins, "polyiscute"));
// console.log(findLogin(logins, "ajbaerivbIkkand"));

//Та сама задачка через тернарник

//const findLogin = function (allLogins, loginToFind) {
// console.log(allLogins);
// console.log(loginToFind);

//   const message = allLogins.includes(loginToFind)
//     ? `Користувач ${loginToFind} знайдено`
//     : `Користувач ${loginToFind} не знайдено`;
//   return message;
// };

//Але так краще, бо функція перестане виконуватись як тільки буде співпадіння:
const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Користувач ${loginToFind} знайдено`
    : `Користувач ${loginToFind} не знайдено`;
};

console.log(findLogin(logins, "hgjhfdjfhqlrH"));
console.log(findLogin(logins, "glehkjhjdfHGKbhf"));
console.log(findLogin(logins, "polyiscute"));
console.log(findLogin(logins, "ajbaerivbIkkand"));
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//!Задача 4!//
//Напиши функцію findSmallestNumber(numbers) для пошуку найменшого числа в масиві, при умові, що числа унікальні (не повторюються)
const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0]; // - просто як вивести консоль найменшого числа: зазвичай беремо перше по порядку
//  і далі будемо перебирати в циклі і порівнювати

// console.log(smallestNumber); //консоль найменшого числа
//! Так як в нас числа ніде значення змінювати не будуть, то ітерацію нам нен треба, можна використати for of:
// for (number of numbers) {
//   console.log(number);
//   if (number < smallestNumber) {
//     smallestNumber = number; //якщо наступне число менше того, що ми записали раніше, то тепер воно буде найменшим
//   }
// }

// console.log(smallestNumber);

const findSmallestNumber = function (numbers) {
  let smallestNumber = numbers[0];

  for (number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number; //якщо наступне число менше того, що ми записали раніше, то тепер воно буде найменшим
    }
  }

  return smallestNumber;
};

console.log(findSmallestNumber([3, 8, 12, -2, 15]));
console.log(findSmallestNumber([100, 54, 8, 12, 47]));
console.log(findSmallestNumber([7, 21, 87, 15, 4]));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//!Задача 5!//
//Напишіть функцію changeCase(string), котра замінює регістр кожного символу в рядку на протилежний
//Наприклад, якщо рядок "JavaScript", то на виході має вийти "jAVAsCRIPT"

//Що робить метод .split? Бере рядок і розбиває його на масив за допомогою роздільника,
// який ми вкказуємо в дужках біля методу(!!!!!обов'язково в лапках!!!!!!)

const string = "Chekh Republic";

const changeCase = function (string) {
  const letters = string.split("");
  let invertedString = "";

  for (letter of letters) {
    letter === letter.toLowerCase()
      ? (invertedString += letter.toUpperCase())
      : (invertedString += letter.toLowerCase());
  }

  return invertedString;
};

console.log(changeCase("June is in Summer"));
console.log(changeCase("Ukraine will Win this year!"));
console.log(changeCase("MaNgO"));

// тут змінна працює в нас по принципу змінної total, до неї потім будемо додавати всі букви в нижнтому і верхньому регістрі
//invertedString += letter.toUpperCase(); це те ж саме, що й: invertedString = invertedString + letter.toUpperCase();
//!Як записати букву в нижньому регістрі: letter.toLowerCase(); . І як в верхньому: letter.toUpperCase(); Console так бачить реєстр і фільтрує!!!!

// for (letter of letters) {
// console.log(letter); //перебираємо масив по символах кожен окремо, після чого нам треба буде побудувати новий рядок,
// який винесемо в глобальну змінну const invertedString= "";
//тоді створюємо умову для вичислення регістру кожної букви:

//   if (letter === letter.toLowerCase()) {
//     console.log("Ця буква в малому регістрі! - ", letter);
//     invertedString += letter.toUpperCase(); //це перетворює всі відфільтровані маленькі букви і пкеретворює їх в рядок з великих символів
//   } else {
//     invertedString += letter.toLowerCase();
//   }
// }

//Переписуємо те ж самк за допомогою тернарника
//   letter === letter.toLowerCase()
//     ? (invertedString += letter.toUpperCase())
//     : (invertedString += letter.toLowerCase());
// }
//це перетворює всі відфільтровані маленькі букви і пкеретворює їх в рядок з великих символів
//

// console.log(invertedString);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//!Задача 5!//
//Напишіть функцію slugify(string), яка отримає рядок, а повертає URL-slug
//Рядок складається лише з букв і пробілів
//! slug - це речення або набір слів з яких складається url записаних маленькими буквами через пробіл

const title = "Top 10 benefits of React framework";

const slugify = function (string) {
  let normalizedTitle = "";

  normalizedTitle = string.toLowerCase();

  const words = normalizedTitle.split(" ");

  const slug = words.join("-");

  return slug;
};

console.log(slugify("Top 10 benefits of React framework"));
console.log(slugify("Azure Static Web Apps are Awesome"));
console.log(slugify("Technical writing tips for non-native English speakers"));

//1. Нормалізуємо рядок

// normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

//має вийти такий slug: top-10-benefits-of-react-framework

//2. Розбиваємо по словах

// const words = normalizedTitle.split(" ");
// console.log(words);

//3. Зшиваємо в один рядок з конекторами
// const slug = words.join("-");
// console.log(slug);

//!Chaning - запис декількох методів для одної змінної
// Можна записати кілька методів підряд, уникаючи проміжних змінних, наприклад на базі попередньої задачки так:
// const slug1 = title.toLowerCase().split(" ").join("-");
// console.log(slug1);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Псевдомасив arguments i Array.from

//!Як ми можемо написати функцію для різного числа аргументів? Таке неможливо зробити допоки ми не введемо в функцію локальну змінну arguments
//!Задача 6!//
// const fn = function () {
//   console.log(arguments);
//Перетворюємо всевдомасив arguments в масив args олдскул методом:
//   const args = Array.from(arguments);
//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

//Перетворюємо всевдомасив arguments в масив args новішим методом: ...rest - де замість rest будь-яка змінна, через яку ми виведемо масив

// const fn = function (...args) {
//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// function getExtremeElements(array) {
// Change code below this line
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];

//   return firstElement + lastElement;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// Change code above this line

// function splitMessage(message, delimiter) {
//   let words = message.split(delimiter);

//   return words;
// }

// console.log(splitMessage(["Mango hurries to the train"], ""));
// console.log(splitMessage(["Mango"], ""));
// console.log(splitMessage(["best_for_week"], "-"));

// function makeArray(firstArray, secondArray, maxLength) {
// Change code below this line
// let newArray = firstArray.concat(secondArray);
// newArray.length <= maxLength ? newArray.slice : newArray.slice(0, maxLength);

// return newArray;
// if (newArray.length <= maxLength) {
//  return newArray;} else {return newArray.slice(0, maxLength);}

// Change code above this line
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// function calculateTotalPrice(order) {
//   let total = 0;
// Change code below this line
// for (i = 0; i <= order.length - 1; i += 1) {
//   total += order[i];
// }

// Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

function getCommonElements(array1, array2) {
  // Change code below this line
  let array = [];

  for (i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      array.push(array1[i]);
    }
  }

  return array;

  // Change code above this line
}
