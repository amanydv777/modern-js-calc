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

function evaluate() {
try {
    const result = eval(display.value);
    display.value = result;
} catch {
    display.value = 'Error';
}
}
