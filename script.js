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
    let count = 0;
    const display = document.getElementById("display");  
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let buttonText = button.innerHTML;
            display.textContent += " " + buttonText + " ";
            count++;
            switch (count) {
                case 1: 
                    num1 = buttonText;
                    console.log("Hello");
                    break;
                case 2:
                    operator = buttonText;
                    break;
                case 3:
                    num2 = buttonText;
                    break;
                case 4:
                    operate(num1, num2, operator);
                default:
            }
            console.log(count);
            console.log(num1, num2, operator);
            if (buttonText === "=") {
                operate(num1, num2, operator);
            }
        });
    });

}

populateDisplay();

function operate(num1, num2, operator) {
    const display = document.getElementById("display");
    if (operator === "+") {
        display.textContent = add(Number(num1), Number(num2));
    } else if (operator === "-") {
        display.textContent = subtract(Number(num1), Number(num2));
    } else if (operator === "*") {
        display.textContent = multiply(Number(num1), Number(num2));
    } else if (operator === "/") {
        display.textContent = divide(Number(num1), Number(num2));
    }

    return 0;
}