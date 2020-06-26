// listeners --------------------------------------------------
const buttons = document.querySelectorAll('#digit');
const equals = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', function () {
        let displayOne = document.querySelector('#display');

        if (displayOne[displayOne.length - 1] == button.textContent) {
            alert('error');
        }
        else
            populate(button.textContent)
    });

});

equals.addEventListener('click', finalOperator);

clearButton.addEventListener('click', clear);


//------------------------------------------------------------


// Basic Operations -------------------------------------------------
function addition(number1, number2) {
    let result = number1 + number2;

    return result;
}

function substraction(number1, number2) {
    let result = number1 - number2;

    return result;
}

function multiplication(number1, number2) {
    let result = number1 * number2;

    return result;
}

function division(number1, number2) {
    let result = number1 / number2;

    return result;
}

// applies one of the above operations --------------------------------------------------
function operate(operator, number1, number2) {
    let result;


    if (operator == '+') {
        return result = addition(number1, number2);
    } else if (operator == '-') {
        return result = substraction(number1, number2);
    } else if (operator == '*') {
        return result = multiplication(number1, number2);
    } else if (operator == '/') {
        return result = division(number1, number2);
    }
}

// function doing most of the calculations -------------------------------------------------

var currentNumber = 0;
function finalOperator() {
    const display = document.querySelector('#display');
    let firstNumber = display.textContent;
    let totalResult = 0;


    let displayArray = firstNumber.split(/([.\*+-/_])/);
    displayArray[0] = displayArray[0].trim();


    for (a = 0; a < displayArray.length; a++) {
        if (
            displayArray[a].includes('1') ||
            displayArray[a].includes('2') ||
            displayArray[a].includes('3') ||
            displayArray[a].includes('4') ||
            displayArray[a].includes('5') ||
            displayArray[a].includes('6') ||
            displayArray[a].includes('7') ||
            displayArray[a].includes('8') ||
            displayArray[a].includes('9')
        ) {
            displayArray[a] = parseInt(displayArray[a]);
        }
    }

    totalResult = displayArray[0];
    let i = 0;
    let checker = true;

    console.log(displayArray);

    while (checker) {
        if (displayArray.length < 3) {
            checker = false;
        }

        if (displayArray[i + 1] == '+') {
            totalResult = operate('+', totalResult, displayArray[i + 2]);
        } else if (displayArray[i + 1] == '-') {
            totalResult = operate('-', totalResult, displayArray[i + 2]);
        } else if (displayArray[i + 1] == '*') {
            totalResult = operate('*', totalResult, displayArray[i + 2]);
        } else if (displayArray[i + 1] == '/') {
            totalResult = operate('/', totalResult, displayArray[i + 2]);
        }

        displayArray.splice(i + 1, 2);

    }

    console.log(totalResult);

    while (display.firstChild) {
        display.removeChild(display.firstChild)
    }

    let newContent = document.createTextNode(totalResult);
    display.appendChild(newContent);
}

// Populating the display ------------------------------------------------------------------------
function populate(number) {
    const display = document.querySelector('#display');
    let firstNumber = display.textContent;

    let displayArray = firstNumber.split(/([.\*+-/_])/);
    displayArray[0] = displayArray[0].trim();

    console.log(displayArray);
    //debugger;

    if (number == '+' || number == '-' || number == '*' || number == '/') {
        if (firstNumber[firstNumber.length - 1] == '+' || firstNumber[firstNumber.length - 1] == '-' || firstNumber[firstNumber.length - 1] == '*' ||
            firstNumber[firstNumber.length - 1] == '/') {
            console.error('You cannot enter two operators in a row !');

        }
        else {
            let newContent = document.createTextNode(number);

            display.appendChild(newContent);
        }
    } else {
        let newContent = document.createTextNode(number);

        display.appendChild(newContent);
    }
}

// Clearing the display ------------------------------------------------------------------------------
function clear() {
    const display = document.querySelector('#display');

    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }
}