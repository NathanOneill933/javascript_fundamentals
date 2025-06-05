//If statement
function ifExample(valueOne) {
    console.log('Before if Statement');
    if(valueOne > 10){
        console.log(`Value of ${valueOne} is larger than 10`);
        
    };
    console.log('After if Statement');
};
// ifExample(12);

//If with else
function elseExample(valueTwo) {
    if(valueTwo == 'Javascript'){
        console.log(`${valueTwo} is true.`);
        
    } else {
        console.log(`${valueTwo} is false.`);
        
    }
}
// elseExample('Javascript');

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
// elseIfExample(12);

const logicalIfStatment = (paramOne, paramTwo) => {
    if(paramOne == 10 && paramTwo > 10){
        console.log('Both conditions were true.');
        
    } else console.log('Both Conditions are false.');
    if (paramOne <= 9 || paramTwo > 20){
        console.log('One of the conditions was true.');
        
    }else console.log('None of the conditions were true.');
    
}

// logicalIfStatment(10, 12);

const ternaryOperatorFunc = (paramOne) =>{
    const result = (paramOne > 10) ? 'The Value inside paramOne is greater than 10.' : 'The Value inside paramOne is not greater than 10.'; //True : False
    console.log(result);
    
}
// ternaryOperatorFunc(11)
// ternaryOperatorFunc(5)

//Switch Statement
const favoriteColor = (color) => {
    switch (color) {
        case "Blue":
            console.log(`My Favorite color is ${color}`);
            break;
        case "Red":
        case "red":
        case "RED":
            console.log(`My Favorite color is ${color}`);
            break;
        case 10:
            if (color % 2 == 0){
                console.log("Case 10 was matched and the value inside color was an even number");
                
            }
            break;    
        default:
            console.log(`My favorite color is ${color}`);
            break;
    }
}
// favoriteColor(10);
// favoriteColor("Blue");