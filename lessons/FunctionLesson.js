//Function Expression
const squareFoot = function(length, width) { 
    return length * width
}

// console.log(squareFoot(24,32));

const able = 32; //able is a global variable since it is declared outside a function

function sample() {
    let beta = 12;
}

function sample2() {
    console.log(able);
    console.log(beta); //This will throw a ReferenceError because beta is not defined in this scope
    
    
}

// function outerScope(value1) {
//     let charlie = 20;
//     function innerScope() {
//         let total = charlie + value1;
//         console.log(total);
        
//     }
//     //call innerScope function
//     innerScope();
// }
// //cannot call inner scope from here
// outerScope(10);

//default parameter
function subtractThis(value4, value5 = 10) {
    return value4 - value5;
}
console.log(subtractThis(15, 7));
console.log(subtractThis(34));

//rest Parameter
function groupSample(...args) {
    console.log(args);
}

groupSample('Welcome', 'To', 'Javascript')

//Arrow functions are a compact version of a function expression

//Traditional Anonyous Function
const we = (function(value) {
    return value + 100;
});
console.log(we(15));

//Arrow fucntion of same type

const me = value => value + 100;

console.log(me(15));

//Results: 115, 115

//Traditional Anonyous Function
const example2 = (function (num1, num2) {
    return num1 + num2 / 10;
})
console.log(example2(23, 64));


//Arrow fucntion of same type
const example2b = (num3, num4) => num3 + num4 / 10;

//Traditional with No parameters
const example3 = (function(){
    return 10 + 5 / 3;
})
console.log(example3());
//Arrow fucntion of same type
const example3b = () => 10 + 5 / 3;

console.log(example3b());

