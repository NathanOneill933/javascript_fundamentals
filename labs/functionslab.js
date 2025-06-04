//Task One

//Writing Function
function stringAddition(stringOne, stringTwo){
    return stringOne + stringTwo;
};

//Testing 

console.log(stringAddition('Hi ', 'There!'));

//Task Two

//Writing Function

function numberAddition(numberOne, numberTwo = 15) {
    return numberOne + numberTwo;
};

//Testing
console.log(numberAddition(20));
console.log(numberAddition(10, 16));

//Task Three

//Writing Function

const arrowStringAddition = (arrowStringOne, arrowStringTwo) => arrowStringOne + arrowStringTwo;

//Testing
console.log(arrowStringAddition("Hi ", "Again!"));
