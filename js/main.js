let operator = "";
let currentNum = "";
let prevNum = "";

const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelectorAll(".decimal");
const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  if(currentNum != "" && prevNum != ""){
    calculate()
  }
})
const allClear = document.querySelector(".allClear");

const currentDisplayNumber = document.querySelector(".currNumber");
const prevDisplayNumber = document.querySelector(".prevNumber");

numberButtons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    processNumber(e.target.textContent);
  })
);

function processNumber(number) {
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
  operator = op;
  prevNum = currentNum;
  prevDisplayNumber.textContent = prevNum + " " + operator;
  currentNum = "";
  currentDisplayNumber.textContent = "";
}

function calculate() {
  prevNum = Number(prevNum);
  currentNum = Number(currentNum);
  if (operator === "+") {
    prevNum += currentNum;
  } else if (operator === "-"){
    prevNum -= currentNum
  } else if (operator === "*"){
    prevNum *= currentNum
  } else if ( operator === "/"){
    if(currentNum <= 0){
      prevNum = "LOL. serious?"
      displayResult()
      return
    }
    prevNum /= currentNum
  }
  prevNum = roundNumber(prevNum)
  prevNum = prevNum.toString()
  displayResult()

}
function roundNumber (num){
return Math.round(num * 100000) / 100000
}

function displayResult(){
  prevDisplayNumber.textContent = "";
  operator = ""
  if(prevNum.length <= 6){
    currentDisplayNumber.textContent = prevNum
  } else {
    currentDisplayNumber.textContent = prevNum.slice(0,6) + "..."
  }
}

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
