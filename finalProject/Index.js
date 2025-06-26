const prompt = require("prompt-sync")({ sigint: true });
const {
  checkYorN,
  chooseYourflavors,
  chooseSavoryFlavor,
  chooseYourEtcflavors,
  chooseYourCone,
  getTotalCost,
  ChooseFlavorType,
  fruitFlavor,
} = require("./helpers.js");
const iceCream = require("./IceCreamClass.js");
//Define Variables for program
let flavorValue = 0;
const shopTitle =
    "*********************************" +
    "*\n||\t\t\t\t||\n||\t    ICECREAM SHOP \t||\n||\t\t\t\t||\n*" +
    "*********************************";

const welcomeStr = "Welcome to our Icecream Shop!\n";

//Print Title and Welcome string

console.log(shopTitle);
console.log(welcomeStr);

//Promt user for input
let userInput = prompt("Would you like to order Y or N?");

//Checks if input is invalid, and keeps asking if it is
while(!checkYorN(userInput)){
    userInput = prompt('please enter letter "Y" or letter "N":');
}

//If user inputs n, exits out the program
if (userInput.toLowerCase() == "n"){
    console.log("Thank you for coming, bye!");
    return;
}else {
    
}
    const flavorChoice = ChooseFlavorType();
    let flavorChocolate = "";
    let flavorSavory = "";
    let flavorFruit = "";
    
    if(flavorChoice == "1"){
        flavorFruit = fruitFlavor();
        flavorValue = 1
    }else if(flavorChoice == "2"){
        flavorSavory = chooseSavoryFlavor();
         flavorValue = 2
    }else if(flavorChoice =="3"){
        flavorChocolate = chooseYourEtcflavors();
        flavorValue = 3
    }
    
    const coneTypes = chooseYourCone();
   
   //Create a new Icecream with the Users choces
    let orderedIcecream = ""
if(flavorValue == 1){
    orderedIcecream = new iceCream(coneTypes, flavorFruit)
}else if(flavorValue == 2){
    orderedIcecream = new iceCream(coneTypes,flavorSavory)
}else{
    orderedIcecream = new iceCream(coneTypes, flavorChocolate)
}


console.log("Putting together your icecream! Please wait...");

//Simulated Delay
setTimeout(() => {
    console.log("Your icecream is ready!");
    orderedIcecream.showInfo();
    console.log(`\nTotal cost: $${getTotalCost(orderedIcecream)}`);
}, 3000);
