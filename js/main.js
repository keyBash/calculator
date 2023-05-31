let operator = "";
let currentNum = "";
let prevNum = "";

const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
  addDecimal();
});
const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  if (currentNum != "" && prevNum != "") {
    calculate();
  }
});
const allClear = document.querySelector(".allClear");
allClear.addEventListener("click", clearCalculator);
const currentDisplayNumber = document.querySelector(".currNumber");
const prevDisplayNumber = document.querySelector(".prevNumber");

numberButtons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    processNumber(e.target.textContent);
  })
);

function processNumber(number) {
  if (currentNum != "" && prevNum != "" && operator === "") {
    prevNum = "";
    currentDisplayNumber.textContent = currentNum;
  }
  if (currentNum.length <= 7) {
    currentNum += number;
    currentDisplayNumber.textContent = currentNum;
  }
}

operators.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    processOpeator(e.target.textContent);
  });
});

function processOpeator(op) {
  if (prevNum === "") {
    prevNum = currentNum;
    operatorCheck(op);
  } else if (currentNum === "") {
    operatorCheck(op);
  } else {
    calculate();
    operator = op;
    currentDisplayNumber.textContent = "0";
    prevDisplayNumber.textContent = prevNum + " " + operator;
  }
}

function operatorCheck(text) {
  operator = text;
  prevDisplayNumber.textContent = prevNum + " " + operator;
  currentDisplayNumber.textContent = "";
  currentNum = "";
}

function calculate() {
  prevNum = Number(prevNum);
  currentNum = Number(currentNum);
  if (operator === "+") {
    prevNum += currentNum; 
  } else if (operator === "-") {
    prevNum -= currentNum;
  } else if (operator === "*") {
    prevNum *= currentNum;
  } else if (operator === "/") {
    if (currentNum <= 0) {
      prevNum = "hUh?";
      displayResult();
      return;
    }
    prevNum /= currentNum;
  }
  prevNum = roundNumber(prevNum);
  prevNum = prevNum.toString();
  displayResult();
}
function roundNumber(num) {
  return Math.round(num * 100000) / 100000;
}

function displayResult() {
  if (prevNum.length <= 6) {
    currentDisplayNumber.textContent = prevNum;
  } else {
    currentDisplayNumber.textContent = prevNum.slice(0, 8) + "...";
  }
  prevDisplayNumber.textContent = "";
  operator = "";
  currentNum = "";
}

function clearCalculator() {
  currentNum = "";
  prevNum = "";
  operator = "";
  currentDisplayNumber.textContent = "0";
  prevDisplayNumber.textContent = "";
}

function addDecimal() {
  if (!currentNum.includes(".")) {
    currentNum += ".";
    currentDisplayNumber.textContent = currentNum;
  }
}
console.log(numberButtons)
/* 
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiplay(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
 */
