//!СТРІЛОЧНІ ФУНКЦІЇ, ПРАКТИКА
const numbers = [1, 2, 3, 4, 5];

// const greaterThanTwo = numbers.filter(function (num) {
//   return num > 2;
// });

// console.log(greaterThanTwo);

const greaterThanTwo = numbers.filter((num) => num > 2);

console.log(greaterThanTwo);

/////////////////////////////////////////////////////////////////////
//* Example 1 - Коллбек функції
// Напишіть наступні функції:

//* createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек.
//Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у
//властивість id та викликає коллбек передаючи йому створений об'єкт.

//* logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль

//* logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює
//загальну вартість товару в консоль

const apple = { name: "🍎", price: 30, quantity: 3 };
const lemon = { name: "🍋", price: 20, quantity: 5 };

//Ну і тут найголовніша функція з колбеком
function createProduct(obj, callback) {
  ///створюємо новий пустий об'єкт
  const newProduct = { ...obj, id: Date.now() }; //id: Date.now() - так
  //додаємо нову властивість
  callback(newProduct);
}

function logProduct(product) {
  console.table(product);
}

logProduct(apple);

function logTotalPrice({ price, quantity }) {
  ///деструктуризуємо product, а саме записуємо
  //тільки ті змінні, які нам будуть потрібні
  //   return price * quantity;
  console.log(price * quantity);
}

logTotalPrice(lemon);

//Результат того всього, викликаємо основну функцію, в яку передамо іншу функцію як аргумент

createProduct(apple, logProduct);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//* Example 2 - Коллбек функції
// Додайте об'єкт account методи withdraw(amount, onSuccess, onError)
//та deposit(amount, onSuccess, onError), де перший параметр це сума операції,
//а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT
//або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount
//більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

const TRANSACTION_LIMIT = 1000;

const account = {
  username: "Jacob",
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount >= TRANSACTION_LIMIT) {
      onError(`Перевищено ліміт! Поточний ліміт: ${TRANSACTION_LIMIT}`);
    } else if (amount >= this.balance) {
      onError(`Недостатньо коштів! Поточний баланс: ${this.balance}`);
    } else {
      this.balance -= amount;
      onSuccess(`Кошти знято! Поточний баланс : ${this.balance}`);
    }
  },
  deposit(amount, onSuccess, onError) {},
};

account.withdraw(500, handleSuccess, handleError);

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}

function handleError(message) {
  console.error(`❌ Error! ${message}`);
}
