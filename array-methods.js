//! РЕПЕТА ВІДЕО 1

//!!!!!!!!!!!!!!!!!                 //Метод map()                !!!!!!!!!!!!!!!!!!!!!

//Метод map() дозволяє з великої кількості властивостей створити масив з меншою кількістю
//(наприклад, масив зі значеннями певної властивості);

// const numbers = [5, 10, 15, 20, 25];

// const doubleNumbers = numbers.map(function (number) {
//   console.log(number);

//   return number * 2;
// });

// console.log(doubleNumbers);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 210, points: 71, online: false },
  {
    id: "player-5",
    name: "Chelsey",
    timePlayed: 280,
    points: 48,
    online: true,
  },
];

//Нам треба витягнути звідси масив лише імен

// const playerNames = players.map((player) => {
// з цих вже окремих об'єктів ми вже можеио повренути значення властивості,
//звернувшись до неї через ім'я масиву, або this
//   return player.name;
// });
// console.log("Player names", playerNames);

// const playerIds = players.map((player) => player.id);
// console.log("Player ids:", playerIds);

//Як можна вернути дві масив з двома властивостями і їх значеннями, наприклад

// const result = players.map((player) => {
//   console.log(player);
//   return {
//     name: player.name,
//     id: player.id,
//   };
// });

//Можна і так коротще записати

// const result = players.map(({ name, id }) => {
//деструктуризація об'єкта player
//   return {
//     name,
//     id,
//   };
// });

// console.log("Result", result); //повернеться таке

// 0: { name: 'Mango', id: 'player-1' }
// 1: {name: 'Poly', id: 'player-2'}
// 2: {name: 'Kiwi', id: 'player-3'}
// 3: {name: 'Ajax', id: 'player-4'}
// 4: {name: 'Chelsey', id: 'player-5'}

//За допомогою методу map() ми можемо обновити значення для всіх елементів якоїсь одної властивості, наприклад

// const updatedPlayers = players.map((player) => {
//   console.log(player);

//   return {
//     ...player, //spread розпилили кожен об'єкт на властивість: значення,
// points: player.points * 1.1, //збільшуємо поінти з кожного об'єкта на 10%
//   };
// });

// console.table(updatedPlayers);
// console.log(updatedPlayers);

//За допомогою методу map() ми можемо поміняти значення для одного елементв якоїсь одної властивості, наприклад

// const playerIdToUpdate = "player-3";

// const updatedPlayers = players.map((player) => {
//   console.log(player.id);

//   if (playerIdToUpdate === player.id) {
//     console.log("Ось ми знайшли кого шукали");

//     return {
//       ...updatedPlayers,
//       timePlayed: updatedPlayers.timePlayed + 100,
//     };
//   }

//   return player; //це просто посилання на старий об'єкт, якщо попередня умова не виконалась
// });

//Коротший запис  того самого (через тернарник):

// const playerIdToUpdate = "player-3";

// const updatedPlayers = players.map(
//   (player) =>
//     playerIdToUpdate === player.id
//   ? {
//           ...player,
//           timePlayed: player.timePlayed + 100,
//         }
//       : player //це просто посилання на старий об'єкт, якщо попередня умова не виконалась
// );

// console.table(updatedPlayers);

//!!!!!!!!!!!!!!!!!                 Метод filter()                 !!!!!!!!!!!!!!!!!!!!!

//Поелементно перебирає оригінальний масив;

//Повертає новий масив (з елементами, або пустий);

//Додає, в масив, який повертає, елементи які задовільняють умову колбек функції:

//Якщо колбек повернув true  - додає елемент в новий масив (який повертає);

//Якщо колбек повернув false  - елемент в новий масив (який повертає) НЕ додає;

// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter((num) => num > 15);
// console.log(filteredNumbers);

//Отримуємо масив всіх онлайн гравців //!ТУТ РОЗІБРАТИ ЧОМУ МИ НЕ СТВОРЮВАЛИ УМОВУ?

// const onlinePlayers = players.filter((player) => player.online);
// console.table(onlinePlayers);

//Отримуємо масив всіх офлайн гравців

// const offlinePlayers = players.filter((player) => !player.online);
// console.table(offlinePlayers);

//Отримуємо масив хардкорних гравців, в кого timePlayed > 250

// const hardcorePlayers = players.filter((player) => player.timePlayed > 250);
// console.table(hardcorePlayers);

//!!!!!!!!!!!!!!!!!                 Метод find()                !!!!!!!!!!!!!!!!!!!!!

//Поелементно перебирає оригінальний масив;

//Повертає перший елемент, який задовільняє умову, в іншому випадку undefined

// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find((num) => num === 100);
// console.log(number);

//Шукаємо гравця за іменем

// const playerToFind = "Poly";

// const playerWithName = players.find((player) => player.name === playerToFind);
// console.log(playerWithName);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, allGenres) => allGenres.indexOf(genre) === index
// );
// console.log(uniqueGenres);

// Change code below this line
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// Change code below this line
// const getUsersWithEyeColor = (users, color) =>
//   users.filter((user) => {
//     const namesSortedByEyeColor = [];
//       if (color === user.eyeColor) {
//           return {
//               user.filter(user => user.name);
//           }
//     }
//     return namesSortedByEyeColor;
//   });

// Change code above this line
users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];

const getFriends = (users) => {
  const allFriends = users.flatMap((user) => user.friends);
  console.log(allFriends);
  const uniqueFriends = allFriends.filter(
    (friend, index, allFriends) => allFriends.indexOf(friend) === index
  );

  return uniqueFriends;
};

// console.log(uniqueFriends);

//!!!!!!!!!!!!!!!!!                 Метод every()                !!!!!!!!!!!!!!!!!!!!!

//Поелементно перебирає оригінальний масив;

//Повертає true якщо ВСІ елементи масиву звдовільняють умову

// Перевіряємо, чи ВСІ гравці в нас онлайн

const isAllOnline = players.every((player) => player.online);

console.log("Is all online", isAllOnline);

//!!!!!!!!!!!!!!!!!                 Метод some()                !!!!!!!!!!!!!!!!!!!!!

//Поелементно перебирає оригінальний масив;

//Повертає true якщо ХОЧ ОДИН елемент масиву задовільняє умову;

// Перевіряємо, чи ХОЧ ХТОСЬ з гравців в нас онлайн

const isAnyOnline = players.some((player) => player.online);
console.log("Is Anyone online?", isAnyOnline);
