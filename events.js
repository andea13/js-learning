//Шукаємо посилання на кожну кнопку
const targetBtn = document.querySelector(".target__btn");
const addListenerBtn = document.querySelector(".add-listener__btn");
const removeListenerBtn = document.querySelector(".remove-listener__btn");
//!Рекомендовані патерни івент хендлерів
// 1 - handle: handleSubjectEvent Приклад: handleTargetButtonClick;
// 2 - Handler: subjectEventHandler Приклад: targetButtonClickHandler;
// 3 - on: onSubjectEvent Приклад: onTargetButtonClick

addListenerBtn.addEventListener("click", (event) => {
  console.log("Вішаю слухача подій на цільову кнопку");
  targetBtn.addEventListener("click", onTargetBtnClick);
});

removeListenerBtn.addEventListener("click", (event) => {
  console.log("Знімаю слухача подій з цільової кнопки");
  targetBtn.removeEventListener("click", onTargetBtnClick);
});

function onTargetBtnClick(event) {
  console.log("Клік на цільовій кнопці");
  console.log(event);
}

//!Коли ми додаємо слухача, то в параметри колбека (функції)
//! першим завжди приходить об'єкт, що містить дані про подію, що відбулась
//в прикладі це об'єкт event, але може бути довільна назва

//! console.log("Клік на цільовій кнопці"); в додаванні і
//!зніманні слухача не рівні, бо це різні посилання в пам'яті, допоки
//! ми не запищемо те саме значення в одну змінну, тоді пони будуть рівні

//!Події в формах
