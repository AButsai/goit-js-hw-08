// ! Задание 3 - форма обратной связи
// * В HTML есть разметка формы.Напиши скрипт который будет сохранять значения полей
// * в локальное хранилище когда пользователь что - то печатает.

// * <form class="feedback-form" autocomplete="off">
// *   <label>
// *     Email
// *     <input type="email" name="email" autofocus />
// *   </label>
// *   <label>
// *     Message
// *     <textarea name="message" rows="8"></textarea>
// *   </label>
// *   <button type="submit">Submit</button>
// * </form>

// * Выполняй это задание в файлах 03-feedback.html и 03-feedback.js.
// * Разбей его на несколько подзадач:

// * 1. Отслеживай на форме событие input, и каждый раз записывай в
// *    локальное хранилище объект с полями email и password,
// *    в которых сохраняй текущие значения полей формы.
// *  	Пусть ключом для хранилища будет строка "feedback-form-state".

// * 2. При загрузке страницы проверяй состояние хранилища,
// *    и если там есть сохраненные данные, заполняй ими поля формы.
// *    В противном случае поля должны быть пустыми.

// * 3. При сабмите формы очищай хранилище и поля формы,
// *    а также выводи объект с полями email,
// *    password и текущими их значениями в консоль.

// * 5. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
// *    Для этого добавь в проект и используй библиотеку lodash.throttle.

const formFeedbackEl = document.querySelector('.feedback-form');

const keyLocalStorage = 'feedback-form-state';

// const feedback = {
//   // constructor({ email, message }) {
//   //   this.email = email;
//   //   this.message = message;
//   // }
// };

// formFeedbackEl.addEventListener('input', event => {
//   const {
//     elements: { email, message },
//   } = event.currentTarget;

//   const userFeedback = {
//     email: email.value,
//     message: message.value,
//   };

//   // userFeedback.email = email.value;
//   // userFeedback.message = message.value;
//   console.log('USER', userFeedback.email);
//   console.log('USER', userFeedback.message);
// });
