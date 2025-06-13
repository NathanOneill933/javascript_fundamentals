const inputStr = "JavaScript is one popular programming language.";



const words = inputStr.split(" ");
const reducedInput = words.reduce()


function minWord(Str) {
    const words = Str.split(" ");
    return words.reduce((smallest, current) => 
        current.length < smallest.length ? current: smallest);
};


function maxWord(){

}

const smallestword = minWord(inputStr)
console.log(smallestword);


