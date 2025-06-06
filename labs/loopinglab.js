//Task One

//Writing Function

function whileFunction() {
    let whileCounter = 0;
    while (whileCounter < 30) {
        if (whileCounter >= 5 && whileCounter <= 25) {
            console.log(whileCounter);
            whileCounter++;
            
        } else whileCounter++;
    }
    
}

//Testing

whileFunction();

//Task Two

//Writing Function

const forLoopFunction = () => {
    for (forCounter = 0; forCounter <=30; forCounter++) {
        if (forCounter % 3 === 0) {
            console.log(forCounter);

        }
    }
}

//Testing

forLoopFunction();