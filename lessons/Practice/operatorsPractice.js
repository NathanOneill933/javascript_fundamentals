function plusAndMinusFunction(paramOne, paramTwo){
    const addition = paramOne + paramTwo
    const subtraction = paramTwo - paramOne

    console.log(addition);
    console.log(subtraction);
    
    
}
// plusAndMinusFunction(7,12);

function multiplyAndDivide(paramOne, paramTwo){
    const multiplication = paramOne * paramTwo
    const division = paramTwo / paramOne

    console.log(`Multiplication: ${multiplication}. Division: ${division}.`);
    
}
// multiplyAndDivide(4,14)

function modulusFunction(){
    const answerOne = 10 % 4;
    const answerTwo = 12 % 3;

    console.log(`Answer One: ${answerOne}. Answer Two: ${answerTwo}.`);
    
}
// modulusFunction();

function exponentialFunction(paramOne){
    const exponentialResult = 2 ** paramOne

    console.log(exponentialResult);
    
}
// exponentialFunction(5)

function pemdasOrder(){
    const total = (10 / (3+2)) * 4 + 5 ** 2 + 6 - 9;

    console.log(`Result is ${total}`);
    
}
// pemdasOrder();

//Assignment Operator

function additionAssignment(){
    let variableOne = 5;
    let variableTwo = 10;
    variableOne += variableTwo; // variableOne = variableOne + VariableTwo
    console.log(variableOne);
    
}
// additionAssignment()

function multiplyAssignment(){
    let variableOne = 5;
    let variableTwo = 10;
    variableOne *= variableTwo
    console.log(variableOne);
    
}
// multiplyAssignment()

//Comparison Operators

function compare(paramOne, paramTwo){
    const comparisonOne = paramOne == paramTwo
    const comparisonTwo = paramOne === paramTwo
    const comparisonThree = paramOne != paramTwo

    console.log(comparisonOne);
    console.log(comparisonTwo);
    console.log(comparisonThree);

    
}
// compare(10,'10')
// compare(10, 10)
// compare(10, 5)
// compare('10','10')

//Logical Operators: &&, ||, !

function logiclyCompare(paramOne, paramTwo){
    const comparisonOne = paramOne < 10 &&  paramTwo > 1;
    const comparisonTwo = paramOne === 5 || paramTwo == 5;
    const comparisonThree = !(paramOne == paramTwo);

    console.log(comparisonOne);
    console.log(comparisonTwo);
    console.log(comparisonThree);
    
}
// logiclyCompare(6, 3);