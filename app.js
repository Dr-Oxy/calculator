//Selecting elements
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const allClear = document.querySelector(".clear");
const equalTo = document.querySelector(".equals");
const del = document.querySelector(".delete");

let inputDisplay = document.querySelector(".input");
let outputDisplay = document.querySelector(".output");

//appending numbers to display screen
numbers.forEach((number) => {
  number.addEventListener("click", function () {
    const text = inputDisplay.textContent;
    if (text.length == 1 && text == "0" && number.dataset.digit != ".") {
      inputDisplay.textContent = "";
    }

    if (text[text.length - 1] == "." && number.dataset.digit == ".") return;

    inputDisplay.textContent += number.dataset.digit;
  });
});

//appending operators to display screen
operators.forEach((operator) => {
  operator.addEventListener("click", function () {
    inputDisplay.textContent =
      inputDisplay.textContent + operator.dataset.operator;
  });
});

//All clear functionality
function clearAll() {
  inputDisplay.textContent = "0";
  outputDisplay.textContent = "0";
}

allClear.addEventListener("click", clearAll);

//Equals to functionality
function calculate() {
  outputDisplay.textContent = eval(inputDisplay.textContent);
}

equalTo.addEventListener("click", calculate);

//Delete functionality
function deleteNum() {
  inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
}

del.addEventListener("click", deleteNum);
inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);

