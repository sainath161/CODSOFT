let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function undo() {
  if (displayValue.length > 0) {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
  }
}

function clearAll() {
  displayValue = "";
  updateDisplay();
}

function toggleSign() {
  if (displayValue.charAt(0) === "-") {
    displayValue = displayValue.slice(1);
  } else {
    displayValue = "-" + displayValue;
  }
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}
