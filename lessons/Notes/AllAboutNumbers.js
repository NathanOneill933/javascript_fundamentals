//Numbers Example
let value1 = 42;
let valie2 = 34.4;
let value3 = -34.3;

//17 decimal point precision

let value4 = 3.08642346541427643

//Bigint examples

let value5 = 3477194754940991n;
let value6 = 256n;
// Exponential Literals
let aa = 0E-3; //0
let bb = 0E+5; // 0
let cc = 4E2; // 400
let dd = 234e-2; // 2.34
let ee = 2e-3; // 0.002

//Numeric Separators
let ff = 10_000;
let gg = 9_563.24;

let hh = 0b1010_0001 // binary
let ii = 0xA0_B0_C0 //hex 
let jj = 0o2_2_4 //Octat

const someNumber = 36;
//Accessible via object
console.log(Number.MAX_SAFE_INTEGER);
//Accessible via primitive variable
console.log(someNumber.toString);

//Static Properties from the Number Object
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MIN_VALUE)

//Static Number methods are methods that are called from the number object
console.log(Number.isNaN(ff));
console.log(Number.isInteger(hh));
console.log(Number.parseInt('432'));
//Instance number methods can be accessed from a primitive variasble
console.log(value1.toExponential());
console.log(valie2.toFixed(4));
console.log(value3.toPrecision(15));