//If statement
function ifExample(valueOne) {
    console.log('Before if Statement');
    if(valueOne > 10){
        console.log(`Value of ${valueOne} is larger than 10`);
        
    };
    console.log('After if Statement');
};

//If with else
function elseExample(valueTwo) {
    if(valueTwo == 'Javascript'){
        console.log(`${valueTwo} is true.`);
        
    } else {
        console.log(`${valueTwo} is false.`);
        
    }
}

//else if

function elseIfExample(num1){
    if(num1 <= 5){
        console.log(`${num1} is less than 5`);
        
    } else if(num1 <= 10){
        console.log(`${num1} is less than 10`);
    } else if(num1 <= 15){
        console.log(`${num1} is less than 15`);
    } else {
        console.log(`${num1} is more than 15`);
    }
}