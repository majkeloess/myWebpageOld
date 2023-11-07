//Variables
const output = document.querySelector(".output");
const buttons = document.querySelectorAll(".button-area button");

const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const substractButton = document.querySelector(".substract");
const addButton = document.querySelector(".add");

const cancelButton = document.querySelector(".c");
const arrowButton = document.querySelector(".arrow");

const equalButton = document.querySelector(".equal");

output.textContent = 0;
let currentInput = '';

let values = [];
let operators = [];
let finalOutput = 0;

//Functions
function add(a, b) {
      return a + b;
}
function substract(a, b) {
      return a - b;
}
function multiply(a, b) {
      return a * b;
}
function divide(a, b) {
      return a / b;
}

//Listeners when sth is clicked

buttons.forEach((button) => {
      button.addEventListener("click", () => {
            if (button.textContent)
                  currentInput += button.textContent;
            output.textContent = currentInput;
      });
})

cancelButton.addEventListener("click", () => {
      currentInput = '';
      output.textContent = 0;
});

arrowButton.addEventListener("click", () => {
      if (currentInput.length > 0) {
            currentInput = currentInput.slice(0, -1);
            output.textContent = currentInput;
      }
      if (currentInput.length == 0) {
            output.textContent = 0;
      }
});
equalButton.addEventListener("click", () => {
      if (operators.length > 0 && values.length > 0) {
            values.push(Number(output.textContent));

            let result = values[0];
            for (let i = 0; i < operators.length; i++) {
                  const operator = operators[i];
                  const nextValue = values[i + 1];
                  result = operator(result, nextValue);
            }

            output.textContent = result;
            currentInput = result;
            values = [];
            operators = [];
      }
});

addButton.addEventListener("click", () => {
      operators.push(add);
      values.push(Number(output.textContent));
      currentInput = '';
      output.textContent = 0;
});

substractButton.addEventListener("click", () => {
      operators.push(substract);
      values.push(Number(output.textContent));
      currentInput = '';
      output.textContent = 0;
});

multiplyButton.addEventListener("click", () => {
      operators.push(multiply);
      values.push(Number(output.textContent));
      currentInput = '';
      output.textContent = 0;
});

divideButton.addEventListener("click", () => {
      operators.push(divide);
      values.push(Number(output.textContent));
      currentInput = '';
      output.textContent = 0;
});
