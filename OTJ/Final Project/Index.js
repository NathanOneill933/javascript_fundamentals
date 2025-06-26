const prompt = require("prompt-sync")({ sigint: true });
const {
  checkYorN,
  chooseYourflavors,
  chooseYourFruitflavors,
  chooseYourSavoryflavors,
  chooseYourEtcflavors,
  chooseYourCone,
  getTotalCost
} = require("./helpers.js");
const flavorFruits = require("./fruit.js");
const flavorSavory = require("./savory.js");
const flavorChocolate = require("./chocolate.js");
const coneTypes = require("./cones.js"); 

const shopTitle =
    "*********************************" +
    "*\n||\t\t\t\t\t\t\t\t||\n||\t       ICECREAM SHOP \t\t||\n||\t\t\t\t\t\t\t\t||\n*" +
    "*********************************";

const welcomeStr = "Welcome to our Icecream Shop!\n";

console.log(shopTitle);
console.log(welcomeStr);

let userInput = prompt("Would you like to order Y or N?");
while(!checkYorN(userInput)){
    userInput = prompt('please enter letter "Y" or letter "N":');
}
if (userInput.toLowerCase() == "n"){
    console.log("Thank you for coming, bye!");
}else {
    const icecreamflavors = chooseYourflavors();
    const flavorFruits = chooseYourFruitflavors();
    const flavorSavory = chooseYourSavoryflavors();
    const flavorChocolate = chooseYourEtcflavors();
    const cones = chooseYourCone();
    const orderedIcecream = new icecreamflavors(flavorFruits, flavorSavory, flavorChocolate, cone)


console.log("Putting together your icecream! Please wait...");

setTimeout(() => {
    console.log("Your icecream is ready!");
    orderedIcecream.showInfo();
    console.log(`\nTotal cost: $${getTotalCost(orderedIcecream)}`);
}, 3000);
}