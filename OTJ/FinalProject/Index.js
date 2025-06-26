const prompt = require("prompt-sync")({ sigint: true });
const {
  checkYorN,
  chooseYourFlavors,
  chooseYourFruitflavors,
  chooseYourSavoryflavors,
  chooseYourEtcflavors,
  chooseYourCone,
  getTotalCost,
  ChooseFlavorType
} = require("./helpers.js");
const flavorFruits = require("./Ingredients/fruit.js")
const flavorSavory = require("./Ingredients/savory.js");
const flavorChocolate = require("./Ingredients/chocolate.js");
const coneTypes = require("./Ingredients/cones.js"); 

const shopTitle =
    "*********************************" +
    "*\n||\t\t\t\t\t\t\t\t||\n||\t   ONEILL'S ICECREAM SHOP\t||\n||\t\t\t\t\t\t\t\t||\n*" +
    "*********************************";

const welcomeStr = "Welcome to Team Two's Icecream Shop!\n";

console.log(shopTitle);
console.log(welcomeStr);

let userInput = prompt("Would you like to order Y or N?");
while(!checkYorN(userInput)){
    userInput = prompt('please enter letter "Y" or letter "N":');
}
if (userInput.toLowerCase() == "n"){
    console.log("Thank you for coming, bye!");
}else {
    const icecreamflavors = ChooseFlavorType();
    userInput = prompt("Please choose your flavor type: \n 1: Fruit \n 2: Savory \n 3: Chocolate \n")
    
    if (userInput == 1)
        {  const flavorFruits = chooseYourFruitflavors();}
      
    else if (userInput == 2)
        { const flavorSavory = chooseYourSavoryflavors();}
       
    else if (userInput == 3)
        {const flavorChocolate = chooseYourEtcflavors();}
    else(
         userInput = prompt("That is not a valid option. Please choose: \n 1: Fruit \n 2: Savory \n 3: Chocolate")
    )   
    const cone = chooseYourCone();
    const orderedIcecream = new icecreamflavors(flavorFruits, flavorSavory, flavorChocolate, cone)


console.log("Putting together your icecream! Please wait...");

setTimeout(() => {
    console.log("Your icecream is ready!");
    orderedIcecream.showInfo();
    console.log(`\nTotal cost: $${getTotalCost(orderedIcecream)}`);
}, 3000);
}