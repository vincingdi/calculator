function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


let num1, num2, operator;

function populateDisplay() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let buttonText = button.innerHTML;
            const display = document.getElementById("display");
            display.textContent += buttonText;
        });
    });

}

populateDisplay();

function operate(num1, num2, operator) {

    return 0;
}