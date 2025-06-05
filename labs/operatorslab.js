//Task One

//Writing Function
function mathFunction(){
    const mathOne = 10 + 32 * 12 / 3;
    const mathTwo = (10 + 32) * 12 / 3;

    console.log(mathOne);
    console.log(mathTwo);
    
    
}

mathFunction();

//Task Two

//Writing Function

function assignmentFunction(paramOne, paramTwo){
    console.log(paramOne += paramTwo);
    console.log(paramOne *= paramTwo);
    console.log(paramOne %= paramTwo);
}

assignmentFunction(5,10);

//Task Three

//Writing Function

function comparisonFunction(paramOne, paramTwo){
    const comparisonOne = paramOne == paramTwo;
    const comparisonTwo = paramOne != paramTwo;
    const comparisonThree = paramOne === paramTwo;

    console.log(`== asks if the inputs are equal. Is ${paramOne} equal to ${paramTwo}? ${comparisonOne}. 
!= asks if they are different. Are they different? ${comparisonTwo}. 
=== asks if they are the same type. Are they the same type? ${comparisonThree}.`);
    
}
comparisonFunction(5,'5');