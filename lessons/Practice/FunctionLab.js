//This is a simple funtcion, as building block of javascript
function simpleFunction(){
    console.log('Hello, Javascript Function!');   
}

// simpleFunction();

function simpleFunctionTwo(){
    return "I am from simpleFunction2!"
}

// console.log(simpleFunctionTwo());

//This function takes an input and stores it in the valueOne parameter
function simpleFunctionThree(valueOne) {
    console.log(valueOne);
    
}

// simpleFunctionThree("Dog");

//This is a function expression assigning a function to a variable
const functionVariable = simpleFunctionTwo();
// function simpleFunctionTwo(){
//     return "I am from simpleFunction2!"
// }

// console.log(functionVariable);

const squareFoot = function(length, width){
    return length * width
};
// console.log(squareFoot(24, 32));

//Variable Scope

const firstName = "John";

function sampleOne() {
    const lastName = "Smith";
    console.log(lastName);
    
}

function sampleTwo() {
    console.log(firstName);
    console.log(lastName);
}

// sampleOne();
// sampleTwo();

// Nested Functions = Functions inside other functions
function parent() {
    const parentVariable = 15;
    function child(){
        const childVariable = parentVariable + 5;
        console.log(childVariable);
        
    }
    child();
    // console.log(childVariable); //Error here due to scope of nested function
    
};
// parent();

//Default Parameters -> adding a default parameter to a function will allow you to call a function and supply a value for that
//parameter or not

function doSubtraction(operandOne, operandTwo = 10) { //Always put default parameters at the end of parameter list
    return operandOne - operandTwo;
};

// console.log(doSubtraction(50, 21));
// console.log(doSubtraction(26));

//Rest Parameters

function restParameterFunction(...restParameter) {
    console.log(restParameter);
    
};

// restParameterFunction('Welcome', 'To', 'Rest', 'Parameter', 4, 9, true, false);

//Arrow Function
function normalFunction(value){
    return value;
}

const arrowFunction = (value) => value


// console.log(normalFunction(5));
// console.log(arrowFunction(5));

const arrowFunctionTwo = (paramOne, paramTwo, paramThree = "John") => {
    return paramOne + paramTwo + paramThree;
};

console.log(arrowFunctionTwo("My Middle Name ", "Is "));

