const timeInput = document.querySelector("#time-input");
const startButton = document.querySelector("#start-btn");
const stopButton = document.querySelector("#stop-btn");
const resetButton = document.querySelector("#reset-btn");
const countdown = document.querySelector("#countdown");

let timeRemaining = 0;
let timer;

const startTimer = () => {
  timeRemaining = parseInt(timeInput.value);

  if (isNaN(timeRemaining)) {
    countdown.textContent = "Please enter a valid number!";
    return;
  }

  countdown.textContent = `Time Remaining: ${timeRemaining} seconds`;

  timer = setInterval(() => {
    timeRemaining--;

    if (timeRemaining <= 0) {
      clearInterval(timer);
      countdown.textContent = "Timer Finished!";
    } else {
      countdown.textContent = `Time Remaining: ${timeRemaining} seconds`;
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timer);
};

const resetTimer = () => {
  clearInterval(timer);
  countdown.textContent = "00:00";
  timeInput.value = "";
};
