//Intitilizing Value/Variable
//Condition
//Increment/Decrement

//While loop

const whileExample = () => {
    let counter = 0 //Initilizing Variable
    while(counter < 10){ //Condition
        console.log(counter);
        counter++; //Increment //Counter += 1 // counter = counter + 1
        
    }
}

// whileExample();

    
//Do while Loop

const doWhileExample = () => {
    let counter = 0 //Initilizing Variable
    do {
        console.log(counter);
        counter++;//Increment
    } while (counter < 5);//Condition
}

// doWhileExample();

//For Loop

const forLoopExample = () => {
    for (counter = 0; counter <= 20; counter++) { //Increment, Condition, And Initilizing Variable
        if(counter % 2 ===0) console.log(`The Number ${counter} is even.`);
    
        
    };
}
// forLoopExample();

//Break and Continue Keywords

const breakAndContinueExample = () => {
    for (index = 0; index < 10; index++){
        if (index === 2) continue;
        if (index === 7) {
            console.log("Loop Stop");
            break;
            
        }
        console.log(index);
        
    }
    console.log("Loop Ends");
    
}
// breakAndContinueExample();

//Label Statement

const labelExample = () => {
    let value = "";
    loopLable: for (index = 0; index < 30; index++) {
        if (index % 2 == 0) continue loopLable
        value += `${index}, `;
    };
    console.log(value);
}
labelExample();


