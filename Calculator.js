let currentInput = '';
let operator = '';
let firstOperand = null;
let secondOperand = null;

function addToDisplay(num) {
  currentInput += num;
  updateDisplay(currentInput);  
}

function addOperator(op) {
  addToDisplay(op);
  if (currentInput === '') {
    return;
  }

  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput);
  } else if (operator !== '') {
    secondOperand = parseFloat(currentInput);
    calculate();
    firstOperand = parseFloat(document.getElementById('display').value);
    secondOperand = null;
  }

  operator = op;
  currentInput = '';
}

function calculate() {
  if (operator === '') {
    return;
  }

  if (secondOperand === null) {
    secondOperand = parseFloat(currentInput);
  }

  let result;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
  }

  firstOperand = result;
  updateDisplay(result);
  currentInput = '';
  operator = '';
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  firstOperand = null;
  secondOperand = null;
  updateDisplay('');
}

function updateDisplay(val) {
  document.getElementById('display').value = val;
}
