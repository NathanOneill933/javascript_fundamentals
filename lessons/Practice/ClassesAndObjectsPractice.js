//Traditional Stle for Object creation
const myHouse = new Object();
myHouse.foundation = 'Concrete';
myHouse.windowSize = 20;
myHouse.doorColor = 'White';
myHouse.roofType = 'Composite';

//Object initizalizer version
const house = {
    foundation: 'Dirt',
    windowSize: 30,
    doorColor: 'Red',
    roofType: 'Shingle',
};

house.lawn = "something";
house["windowSize"] = 40;
// console.log(house);
// console.log(house["foundation"]);


//Set and Retrieving object properties
// house['foundation'] = 'Concrete';
// house['doorColor'] = 'Green';
// house['roofType'] = 'Steek Shingle';
//Variables created to assign to an object seperation by commas

const something = {}, str = 'secondString', rand = Math.random(), myObj2 = {};

//Creating additional Properties
something.type = 'Dot Syntax for a key called type';
something['date issued'] = 'Key has a space';
something[str] = 'Key is variable string';
something[rand] = 'Random Number becomes the key';
something[myObj2] = 'Key is object myObj2';
something[''] = 'Key is and empty string';

// console.log(something);
// console.log(something.secondString);

//Looping an Object
const numbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4
};

// for (const key in numbers) {
//     console.log(key);
//     console.log(numbers[key]);
// }

const showSomething = (obj, objName) => {
    let result = "";
    for (const property in obj) {
        if (Object.hasOwn(obj, property)) {
            result += `${objName}.${property} = ${obj[property]}\n`
        }
    }
    console.log(result);
}
// showSomething(house, "house");

//Constructor Functions
function Truck(make, model, year, color, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.owner = owner;
}

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

//Creating Objects
// const peter = new Person('Peter', 'Parker');
// const hal = new Person('Hal', 'Jordan');

// const myTruck = new Truck('Chevy', 'Silverado', 2016, 'Black', peter);
// const oldTruck = new Truck('Ford', 'F10', 1985, 'White', hal);

//Method Creation

const tempConver = {
    fahrenToCelsius: function(fahrenheit) {
        return (fahrenheit -32) *5 / 9;
    },
    celsiusToFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }
}
//Object with func properties
const objWithFuncProperties = {
    printName: (firstName, lastName) => console.log(firstName + " " + lastName),
    move: () => console.log("moving")
};
// objWithFuncProperties.move();
// objWithFuncProperties.printName("John", "Smith");
// console.log(objWithFuncProperties.printName("John", "Smith") + " is " + objWithFuncProperties.move());


//Call Method
// object.methodName(params)
// console.log(tempConver.fahrenToCelsius(43));

//Class Declaration

class person {
    constructor(firstName, lastName, skinColor, eyeColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.skinColor = skinColor;
        this.eyeColor = eyeColor
    }
    speak(){
        console.log(`${this.firstName} ${this.lastName} is speaking.`);
    }
}

const nathanO = new person("John", "O'Neill", "white", "blue");
console.log(nathanO);

nathanO.firstName = "Nathan"

console.log(`NathanO's name is ${nathanO.firstName} ${nathanO.lastName}.`);

console.log(nathanO);


 

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }
// const myShape= new Rectangle(20, 40);
// console.log(myShape.height);

//Getter and setter

// class Rectangle {
//     #height;
//     #width;

//     constructor(height, width) {
//         this.#height = height;
//         this.#width = width;
//     }

//     get height() {
//         return this.#height;
//     }
//     get width() {
//         return this.#width;
//     }

//     set height(value) {
//         this.#height = value;
//     }
//     set width(value) {
//         this.#width = value;
//     }
// }

// const myShape = new Rectangle(20, 40);
// console.log(myShape.height);
// console.log(myShape.width);
// myShape.height = 100; 
// myShape.width = 200;
// console.log(myShape.height);
// console.log(myShape.width);

//Method
class Rectangle {
    #height;
    #width;
    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }
    //Method
    calculateArea() {
        return this.#height * this.#width;
    }
}
//Inheritance Superclass Subclass

// Parent class (superclass)
class Boat {
    constructor(color, engineType) {
     this.color = color;
     this.engineType = engineType;
       
    }
    move() {
        console.log("Moving on the water using", this.engineType);
        
    }
}
//Child class (subclass)
class Sailboat extends Boat{
    constructor(color, engineType, fuel) {
     super(color, engineType);
     this.fuel = fuel;  
    }
    explore() {
        console.log("Exploring the world");
    }
};

const sailboatA = new Sailboat("Black", "V8", "Premium");
// console.log(sailboatA.fuel);
// sailboatA.explore()
// sailboatA.move()



