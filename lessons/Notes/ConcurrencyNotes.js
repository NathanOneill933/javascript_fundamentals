//Callbacks

// const note = function() {
    // console.log('This note will be show in 3 seconds');
// }

// setTimeout(note, 3000);

//Anonymous DunctionSyle

// setTimeout(function() {
    // console.log('Anonymous note in 4 seconds');
    
// }, 4000)

//Arrow function style

// setTimeout(() => {
//   console.log('Arrow function note in 3 seconds');
    
// }, 3000);

//Promises

// let promise = new Promise(function (resolve, reject) {
    //Function code to resolve or reject
// })

// promise.then(
//     //Successful function
// ).catch(
//     //Error function
// )
// //3 States of promises
// //Pending, Fulfilled, rejected

// let myPromise = new Promise((resolve, reject) => {
    // let able = 20;

    //set delay
//     setTimeout(() => {
//         if (able > 10){
//             resolve(able);
//         } else {
//             reject('Not high Enough')
//         }
//     }, 5000);
// })

// myPromise.then(value => {
//     console.log(`Success Promise of: ${value}`);
    
// }).catch(error => {
//     console.log(error);
// })

// console.log(myPromise);



//Async / Await
function delayForAMoment(delta) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delta > 10){
                resolve(delta);
            } else {
                reject("Not High Enough")
            }
        }, 1000)
    });
}

async function myAsync() {
    console.log("Calling Delay");
    try{
        const result = await delayForAMoment(0);
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }
    
}

myAsync();