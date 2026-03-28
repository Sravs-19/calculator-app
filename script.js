function appendValue(value) {
  let display = document.getElementById("display");
  let lastChar = display.value.slice(-1);

  if (['+', '-', '*', '/', '%'].includes(lastChar) &&
      ['+', '-', '*', '/', '%'].includes(value)) {
    return;
  }

  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  let display = document.getElementById("display");

  if (display.value === "") return;

  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

document.addEventListener("keydown", function(event) {
  let key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '%', '.'].includes(key)) {
    event.preventDefault();
    appendValue(key);
  }
  else if (key === "Enter") {
    event.preventDefault();
    calculate();
  }
  else if (key === "Backspace") {
    backspace();
  }
  else if (key === "Escape") {
    clearDisplay();
  }
});