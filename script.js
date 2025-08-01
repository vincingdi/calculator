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

console.log(add(4, 3));
console.log(subtract(4, 3));
console.log(multiply(4, 4));
console.log(divide(4, 4));

let num1, num2, operator;

function populateDisplay() {
    buttons = document.querySelectorAll(".populate");
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            buttonText = button.textContent;
            console.log(buttonText);
        });
    });


}

populateDisplay();

function operate(num1, num2, operator) {

    return 0;
}