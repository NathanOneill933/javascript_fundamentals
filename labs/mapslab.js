//Task One

const colorsMap = new Map([
    ["R", "Red"],
    ["B", "Blue"],
    ["G", "Green"],
    ["C","Cyan"],
    ["Y","Yellow"],
    ["P","Purple"],    
    
])
//Writing Functions

function returnColor(){   
    return colorsMap;
};

//Task Two

function keyValueFunction(value, key){
    console.log(`The key is ${key}. The Value is ${value}.`);
}

returnColor().forEach(keyValueFunction)