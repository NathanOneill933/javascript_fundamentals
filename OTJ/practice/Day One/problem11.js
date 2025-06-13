
const randomString = (number) => {
    let finalString = "";
    let numberLoop = 0;
    while (numberLoop < number){
        let randomNumber = `${Math.floor((Math.random()) * (9 - 1) * 1)}`
        finalString = finalString.concat(randomNumber)
        numberLoop++;
    }
    if (numberLoop == number){
        console.log(finalString);
         
    }
}

randomString(10);
