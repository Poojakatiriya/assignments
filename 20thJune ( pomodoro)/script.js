let timer;
let isRunning = false;
let timeLeft = 1500; // default 25 * 60
let pomoCount = 0;
let intervalType = "work";

function getInputValues() {
  return {
    work: parseInt(document.getElementById("workDuration").value) * 60,
    short: parseInt(document.getElementById("shortBreakDuration").value) * 60,
    long: parseInt(document.getElementById("longBreakDuration").value) * 60,
    cycle: parseInt(document.getElementById("pomosBeforeLong").value),
  };
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();

      if (timeLeft <= 0) {
        clearInterval(timer);
        isRunning = false;
        handleSessionEnd();
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  const values = getInputValues();
  pomoCount = 0;
  intervalType = "work";
  timeLeft = values.work;
  updateTimerDisplay();
  updateSessionType();
  updateCycleDisplay();
}

function handleSessionEnd() {
  const values = getInputValues();
  if (intervalType === "work") {
    pomoCount++;
    if (pomoCount % values.cycle === 0) {
      intervalType = "long";
      timeLeft = values.long;
    } else {
      intervalType = "short";
      timeLeft = values.short;
    }
  } else {
    intervalType = "work";
    timeLeft = values.work;
  }

  updateSessionType();
  updateCycleDisplay();
  startTimer();
}

function updateTimerDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  document.getElementById("timer").textContent =
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateSessionType() {
  let text = "";
  if (intervalType === "work") text = "Work Session";
  else if (intervalType === "short") text = "Short Break";
  else text = "Long Break";
  document.getElementById("sessionType").textContent = text;
}

function updateCycleDisplay() {
  const values = getInputValues();
  let cycles = "";
  for (let i = 0; i < values.cycle; i++) {
    cycles += i < pomoCount % values.cycle ? "🔴 " : "⚪ ";
  }
  document.getElementById("cycleDisplay").textContent = cycles.trim();
}

// Initialize display
resetTimer();
