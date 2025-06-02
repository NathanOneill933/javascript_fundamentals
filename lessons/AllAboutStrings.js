//Decare a string using double quotes
let canineType = "Dog";
let caninaAction = "They Bark Loudly";

//Declare a string using single quotes
let felineType = 'Cat';
let felineAction = 'They meow quietly';

//Use bracket notation on a variable of sting
//output is undefined
console.log(canineType[3]);

//Output is T
console.log(felineAction[0])

//A long sentence using the + character
let longSentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit," + 
" sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." + 
" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." + 
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

//A long character using the \
let longSecond = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

/* Using the + to concatenate multiple strings or other 
priumitives together to create a new string*/
let alpha = 'Hello ';
let beta = 'World';
let combine1 = alpha + beta;
let combine2 = alpha + 42;
let combine3 = 'The ' + beta + ' is vast.';

//Long sentence using a + operator and \n escape sequence
console.log("I'm blue da ba dee da bee da,\n" +
    "do da bee dee da ba ba.");

    //Template string implementation
console.log(`Im blue da ba dee da bee da, 
do da bee dee da ba ba.`);

const VALUE1 = 10;
const VALUE2 = 20;

//Concaenation nusing an Expression
console.log('Thirty is ' + (VALUE1 + VALUE2) + ' and not ' + (2 * VALUE1 + VALUE2));

//Placeholder syntax using an expression
console.log(`Thirty is ${VALUE1 + VALUE2} and not ${2 * VALUE1 + VALUE2}`);

//Escape Sequences
let phrase = 'My name is Nathan O\'Neill. \tHow are\n you doing today';
console.log(phrase);

//Length of string
let example_length = 'DAOSDASDSASDsasdWADW';
console.log(example_length.length)

let msg = 'Hello, World ';
// Instance methods

/* at() returns the character at a specified index. Accepts negative integers
with cound bacl from the last string. Last posiition in the string is -1 and not 0.
output is d */
console.log(msg.at(-2));

//charAt() returns the character at the specified index. Output is e
console.log(msg.charAt(2));

// concat() conblines 2or more strings. output is Hello, world world
console.log(msg.concat('', beta));

// includes() determines if searched value is in msg. returns true or false. Output is true
console.log(msg.includes('orl'));

//indexOf returns number index msg of first occurence of earched value. output is 5
console.log(msg.indexOf('o'));

//slice() returns a new sring vased on an index range of msg. output is ell
console.log(msg.slice(2, 5));

//split divides a string in a list of substrings based on a pattern and puts the values into an array output is World
let word = msg.split(' ');
console.log(word[2]);

//toLowerCase() returns the string as lower case letters
console.log(msg.toLowerCase());

//toUpperCase() returns the string as upper case letters
console.log(msg.toUpperCase());

//trim) remobes the empty space from the beginning and end of a string. There are also trimStart() amd trimEnd()
console.log(msg.trim())