// listeners
const buttons = document.querySelectorAll('#digit');
const equals = document.querySelector('#equals');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', function () { populate(button.textContent) });

});

equals.addEventListener('click', finalOperator);






// Basic Operations ---------------------
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

// applies one of the above operations -------
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

// finalOperator

var currentNumber = 0;
function finalOperator() {
    const display = document.querySelector('#display');
    let firstNumber = display.textContent;
    let totalResult = 0;


    let displayArray = firstNumber.split(/([.\*+-/_])/);
    displayArray[0] = displayArray[0].trim();

    for (a = 0; a < displayArray.length; a++) {
        if (
            displayArray[a] == ('1') ||
            displayArray[a] == ('2') ||
            displayArray[a] == ('3') ||
            displayArray[a] == ('4') ||
            displayArray[a] == ('5') ||
            displayArray[a] == ('6') ||
            displayArray[a] == ('7') ||
            displayArray[a] == ('8') ||
            displayArray[a] == ('9')
        ) {
            displayArray[a] = parseInt(displayArray[a]);
        }
    }

    // console.log(displayArray + 'hey le cave'); // test console log




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

    // console.log(displayArray + " conasse");
    // console.log(totalResult);


    // for (i = 0; i < displayArray.length; i++) {
    //     if (displayArray[i] == '+'){
    //         equationArray.push(displayArray[i]);
    //         console.log('my guy' + currentNumber);
    //     }else{
    //         currentNumber += firstNumber[i];
    //     }

    // }


}

// Populating the display
function populate(number) {
    const display = document.querySelector('#display');



    let newContent = document.createTextNode(number);

    document.querySelector('#display').appendChild(newContent);

}