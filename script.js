const display = document.getElementById('display');

function press(val) {
if (val === 'C') {
    display.value = '';
} else if (val === '←') {
    display.value = display.value.slice(0, -1);
} else {
    display.value += val;
}
}

function calculate() {
try {
    const result = eval(display.value);
    display.value = result;
} catch {
    display.value = 'Error';
}
}

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    const key = button.getAttribute("data-key");
    if (key) triggerButtonEffect(key);
  });
});


function triggerButtonEffect(key) {
  const button = document.querySelector(`button[data-key="${key}"]`);
  if (button) {
    button.classList.add("active");
    setTimeout(() => button.classList.remove("active"), 150);
  }
}


// Keyboard support
document.addEventListener('keydown', function (event) {
  const key = event.key;

  triggerButtonEffect(key); // 👈 visual feedback here

  if (!isNaN(key)) {
    press(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    press(key);
  } else if (key === 'Enter' || key === '=') {
    event.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    press('←');
  } else if (key.toLowerCase() === 'c') {
    press('C');
  } else if (key === '.') {
    press('.');
  }
});

