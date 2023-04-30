let interval;
let seconds = 0;
let minutes = 0;
let hours = 0;

const display = document.querySelector('.timer-display');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const resetBtn = document.querySelector('#reset');

function startTimer() {
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    display.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  display.innerHTML = '00:00:00';
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);





