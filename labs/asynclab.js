//Task One

function newPromise(arg){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`This task was ran ${arg} times.`)
        },2000)
    })}       


//Task Two
    
console.log("Lets start the task.");

const AsyncFunction = async function(arg) {
    const result = await newPromise(arg);
    console.log(result);
    
}

//Task Three

for (let loops = 0; loops < 5; loops++){
    AsyncFunction(loops)
}