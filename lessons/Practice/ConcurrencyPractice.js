// const note = () => console.log('This note is shown after 3 seconds.');

// setTimeout(() => console.log('This note is shown after 3 seconds.'), 3000);

function determineGrade(grade) {
    switch (grade) {
        case "A":
            console.log(`You got an ${grade}! Awesome!`);
            break;
        case "B":
            console.log(`You got a ${grade}! Well Done!`);
             break;
        case "C":
            console.log(`You got a ${grade}! You got it!`);
            break;       
        case "D":
            console.log(`You got a ${grade}! You can do better!`);
        default:
            console.log(`You got a ${grade}! You will get it next time!`)
            break;
    }
}


function getGrade(value, callback) {
    let gradeValue;

    switch (true) {
        case value >= 90:
            gradeValue = "A"
            break;
        case value >= 80:
            gradeValue = "B"
            break;    
        case value >= 70:
            gradeValue = "C"
            break;
        case value >= 60:
            gradeValue = "D"
            break;    
        default:
            gradeValue = "F"
            break;
    }
    callback(gradeValue)
}

// getGrade(45, determineGrade);


//Promise
//Event Based = Pending, Success, and Failure. Asynchronous
let promise = new Promise((resolve, reject) => {
    let number = 20;

    setTimeout(() => {
        if (number > 10) {
            resolve(number)
        }else {reject("The number is not greater than 10.")}
    }, 5000)
})

// promise.then((value) => {
//     console.log(`The State was a success, and the value is ${value}`);
    
// }).catch((error) => {
//     console.log(error);
    
// })

function returnPromise() {
    return new Promise((resolve, reject) => {
    let number = 20;

    setTimeout(() => {
            if (number > 10) {
                resolve(number)
             }else {reject("The number is not greater than 10.")}
        }, 5000)
    })
}

async function asyncAwaitFunc(){
    try {
        const result = await returnPromise();
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }
}
// asyncAwaitFunc();

// fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json").then((response) => {
//     if (response.ok){
//         return response.json(); 
//     }
// }).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
    
// })

const getData = async () => {
    try {
        const response = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}

getData()