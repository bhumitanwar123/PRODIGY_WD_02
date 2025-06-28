let [minutes, seconds, milliseconds] = [0, 0, 0];
let display = document.getElementById("display");
let interval = null;
let isRunning = false;

function updateDisplay() {
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
  display.innerText = `${m}:${s}:${ms}`;
}

function stopwatch() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  updateDisplay();
}

function startStop() {
  if (!isRunning) {
    interval = setInterval(stopwatch, 10); // update every 10 ms
    isRunning = true;
  } else {
    clearInterval(interval);
    isRunning = false;
  }
}

function reset() {
  clearInterval(interval);
  [minutes, seconds, milliseconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
  isRunning = false;
}

function recordLap() {
  let lapTime = display.innerText;
  let lapItem = document.createElement("li");
  lapItem.innerText = `Lap: ${lapTime}`;
  document.getElementById("laps").appendChild(lapItem);
}

