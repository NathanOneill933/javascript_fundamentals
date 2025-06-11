//Creating Map

// const programmingLanguages = new Map();
// console.log(programmingLanguages); //Empty

// programmingLanguages.set("JS", "Javascript");
// programmingLanguages.set("PY", "Python");
// programmingLanguages.set("JA", "Java");
// programmingLanguages.set("RR", "Ruby on Rail");

const programmingLanguages = new Map([
    ["JS", "Javascript"],
    ["PY", "Python"],
    ["JA", "Java"],
    ["RR", "Ruby on Rail"],
]);

// console.log(programmingLanguages.size);
// programmingLanguages.clear();

// const result = programmingLanguages.delete("RR");
// console.log(result);
// console.log(programmingLanguages);

// const language = programmingLanguages.get("RR");
// console.log(language);
// console.log(programmingLanguages);

// console.log(programmingLanguages.has("RR"));

//Loop a Map collection
// for (let lang of programmingLanguages){
//     console.log(lang);
// }


// const allKeys = programmingLanguages.keys();
//Prints Keys
// for(let key of allKeys){

//     console.log(key);
// };

//Prints Values
// for(let key of allKeys){
//     const result = programmingLanguages.get(key);
//     console.log(result);
// };

// for (let key of programmingLanguages.keys()) {
//     console.log(key);
// };

// console.log(programmingLanguages.entries());


// for (let item of programmingLanguages.entries()){
//     console.log(item);
// };

//Foreach

// function proccessData(value, key) {
//     console.log(`The key is ${key}. The value is ${value}.`);
    
// };
// programmingLanguages.forEach(proccessData);
programmingLanguages.forEach(function proccessData(value, key) {
    console.log(`The key is ${key}. The value is ${value}.`);
    
});






