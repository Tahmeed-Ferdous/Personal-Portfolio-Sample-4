const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 600) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

});



// fortune generator 

const fortunes = [
  "You will have a pleasant surprise.",
  "A thrilling time is in your immediate future.",
  "Your hard work will soon pay off.",
  "Happiness begins with facing life with a smile.",
  "A new adventure awaits you.",
  "Someone is looking up to you. Don’t let that person down.",
  "A fresh start will put you on your way.",
  "You will conquer obstacles to achieve success.",
  "The fortune you seek is in another cookie.",
  "Change is coming, embrace it!"
];

const fortuneBox = document.getElementById('fortuneBox');
if (fortuneBox) {
  fortuneBox.textContent = fortunes[Math.floor(Math.random() * fortunes.length)];
}
const styleSets = {
  A: {
    color: "#FF5733",    
    backgroundColor: "#FFFF99",
    borderColor: "#FF33AA",
    fontSize: "18px",
    fontFamily: "Arial, sans-serif"
  },
  B: {
    color: "#333333",
    backgroundColor: "#CCFFCC",
    borderColor: "#6699FF",
    fontSize: "20px",
    fontFamily: "Georgia, serif"
  },
  C: {
    color: "#FFFFFF",
    backgroundColor: "#000000",
    borderColor: "#FF0000",
    fontSize: "16px",
    fontFamily: "Courier New, monospace"
  },
  D: {
    color: "#006600",
    backgroundColor: "#FFCC00",
    borderColor: "#0000FF",
    fontSize: "22px",
    fontFamily: "Times New Roman, serif"
  }
};
function applyStyle(style) {
  fortuneBox.style.color = style.color;
  fortuneBox.style.backgroundColor = style.backgroundColor;
  fortuneBox.style.borderColor = style.borderColor;
  fortuneBox.style.fontSize = style.fontSize;
  fortuneBox.style.fontFamily = style.fontFamily;
}
const buttonA = document.getElementById('A');
const buttonB = document.getElementById('B');
const buttonC = document.getElementById('C');
const buttonD = document.getElementById('D');

if (buttonA) {
  buttonA.addEventListener('click', () => {
    applyStyle(styleSets.A);
  });
}
if (buttonB) {
  buttonB.addEventListener('click', () => {
    applyStyle(styleSets.B);
  });
}
if (buttonC) {
  buttonC.addEventListener('click', () => {
    applyStyle(styleSets.C);
  });
}
if (buttonD) {
  buttonD.addEventListener('click', () => {
    applyStyle(styleSets.D);
  });
}




// stop watch 

let currentTime = 0;
let validity = null;
const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
function updateDisplay() {
  display.textContent = currentTime;
}
function startTimer() {
  if (validity !== null) return;
  validity = setInterval(() => {
    currentTime += 3;
    if (currentTime >= 30) {
      currentTime = 30;
      updateDisplay();
      clearInterval(validity);
      validity = null;
    } else {
      updateDisplay();
    }
  }, 2000);
}
function stopTimer() {
  if (validity !== null) {
    clearInterval(validity);
    validity = null;
  }
}
function resetTimer() {
  stopTimer();
  currentTime = 0;
  updateDisplay();
}
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);