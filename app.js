const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

let inputDisplay = document.querySelector(".input");
let outputDisplay = document.querySelector(".output");

//appending numbers to display screen
numbers.forEach((number) => {
  number.addEventListener("click", function () {
    inputDisplay.textContent = inputDisplay.textContent + number.innerText;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", function () {
    inputDisplay.textContent = inputDisplay.textContent + operator.innerText;
  });
});

//All clear function and event
document.querySelector(".clear").addEventListener("click", function () {
  inputDisplay.textContent = "0";
  outputDisplay.textContent = "0";
});

// //evaluating exp
document.querySelector(".equals").addEventListener("click", () => {
  outputDisplay.textContent = eval(inputDisplay.textContent);
});

//delete prev number[o]
document.querySelector(".delete").addEventListener("click", function () {
  inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
});
