const inputStr = "JavaScript is one popular programming language.";



const words = inputStr.split(" ");
function minWord(Str) {
    const words = Str.split(" ");
    return words.reduce((smallest, current) => 
        current.length < smallest.length ? current: smallest);
};


function maxWord(Str){
    const words = Str.split(" ");
    return words.reduce((largest, current) =>
        current.length > largest.length ? current: largest);
}

const smallestword = minWord(inputStr)
const largestword = maxWord(inputStr)
console.log(`The smallest word is ${smallestword}. The largest word is ${largestword}`);




