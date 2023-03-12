const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    if (!seconds) {
      return;
    }

    let time = seconds;
    const timer = setInterval(() => {
      if (time < 1) {
        clearInterval(timer);
      }

      const hours = Math.floor(time / 60 / 60) % 24;
      const min = Math.floor(time / 60) % 60;
      const sec = Math.floor(time) % 60;

      timerEl.textContent = `${hours < 0 ? '00' : hours < 10 ? '0' + hours : hours} : 
      ${min < 0 ? '00' : min < 10 ? '0' + min : min} : 
      ${sec < 0 ? '00' : sec < 10 ? '0' + sec : sec}`;

      time -= 1;
    }, 1000);
  };
}

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^\d]/g,'');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
