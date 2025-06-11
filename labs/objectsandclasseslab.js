//Task One

//Creating Object

const catObject = {
    color: `orange`,
    size:  `medium`,
    fluffiness:  `very`,
    age: 5,
    Evilbehavior: function() {
        return ("This cat is evil.")
    },
    goodBehavior() {
        return ("This cat is good.")
    }
}

//Testing
console.log(catObject.age);
console.log(catObject.color);
console.log(catObject.size);
console.log(catObject.fluffiness);
console.log(catObject.Evilbehavior());
console.log(catObject.goodBehavior());


//Task 2

//Creating object

class person {
    #age
    #height;
    #hairColor;
    #eyeColor;
    constructor (height, age, hairColor, eyeColor) {
        this.#age = age
        this.#eyeColor = eyeColor
        this.#hairColor = hairColor
        this.#height = height
    }
    get height() {
        return this.#height;
    }
    get age() {
        return this.#age
    }
    get hairColor(){
        return this.#hairColor;
    }
    get eyeColor() {
        return this.#eyeColor
    }

    set height(value) {
        this.#height = value;
    }
    set age(value) {
        this.#age = value;
    }
    set hairColor(value) {
        this.#hairColor = value;
    }
    set eyeColor(value) {
        this.#eyeColor = value;
    }
}

//Testing

const personA = new person (6, 24, "Blonde", "Blue")
console.log(personA.eyeColor);
console.log(personA.hairColor);
console.log(personA.age);
console.log(personA.height);
personA.height = 5;
personA.hairColor = "Brown";
console.log(personA.height);
console.log(personA.hairColor);


