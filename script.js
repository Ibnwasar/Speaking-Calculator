// script.js

let display = document.getElementById('display');

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  const lastChar = display.value.slice(-1);
  if (['+', '-', '*', '/', '%'].includes(lastChar)) {
    display.value = display.value.slice(0, -1) + op;
  } else {
    display.value += op;
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}

function square() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch (e) {
    display.value = 'Error';
  }
}

function squareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch (e) {
    display.value = 'Error';
  }
}
