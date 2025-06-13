
const message = "I am learning and practicing JavaScript."; 

const vowelCounter = (message) => {
    let loopCounter = 0;
    let vowelCount = 0;
    let notePlace = "I am learning and practicing JavaScript.".charAt(loopCounter)
    const messageLength = ("I am learning and practicing JavaScript.").length
    while (loopCounter <= messageLength) {
        switch(notePlace){
        case (notePlace == "A"):
        case (notePlace == "a"):
            vowelCount + 1
            loopCounter + 1
            continue   
        case (notePlace == "E"):
        case (notePlace == "e"):
            vowelCount + 1
            loopCounter + 1
            continue       
        case (notePlace == "I"):
        case (notePlace == "i"):
            vowelCount + 1
            loopCounter + 1
            continue   
        case (notePlace == "O"):
        case (notePlace == "o"):
            vowelCount + 1
            loopCounter + 1
            continue    
        case (notePlace == "U"):
        case (notePlace == "u"):    
            vowelCount + 1
            loopCounter + 1
            continue 
        default:
            loopCounter+1
            continue       
        }
    } 
console.log(vowelCount);
}

vowelCounter()