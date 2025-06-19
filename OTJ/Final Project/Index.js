const prompt = require("prompt-sync")({ sigint: true });
const {
  checkYorN,
  chooseYourFlavors,
  chooseYourFruitflavors,
  chooseYourSavoryflavors,
  chooseYourEtcflavors,
  chooseYourCone,
  getTotalCost
} = require("./helpers.js");
const flavorFruits = require("./fruit_flavors.js");
const flavorSavory = require("./savory_flavor.js");
const flavorChocolate = require("./chocoloate_and_other_flavors.js");
const coneTypes = require("./cone_types.js"); 

const shopTitle =
    "*********************************" +
    "*\n||\t\t\t\t\t\t\t\t||\n||\t  O'NEILL'S ICECREAM SHOP\t||\n||\t\t\t\t\t\t\t\t||\n*" +
    "*********************************";

const welcomeStr = "Welcome to O'neill's Icecream Shop!\n";

console.log(shopTitle);
console.log(welcomeStr);

let userInput = prompt("Would you like to order Y or N?");
while(!checkYoeN(userInput)){
    userInput = prompt('please enter letter "Y" or letter "N":');
}
if (userInput.toLowerCase() == "n"){
    console.log("Thank you for coming, bye!");
}else {
    const icecreamflavors = chooseYourflavors();
    const flavorFruits = chooseYourFruitflavors();
    const flavorSavory = chooseYourSavoryflavors();
    const flavorChocolate = chooseYourEtcflavors();
    const cone = chooseYourCone();
    const orderedIcecream = new icecreamflavors(flavorFruits, flavorSavory, flavorChocolate, cone)


console.log("Putting together your icecream! Please wait...");

setTimeout(() => {
    console.log("Your icecream is ready!");
    orderedIcecream.showInfo();
    console.log(`\nTotal cost: $${getTotalCost(orderedIcecream)}`);
}, 3000);
}