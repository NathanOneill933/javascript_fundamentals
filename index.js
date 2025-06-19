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
const Fruitflavors = require("./fruit_flavors.js");
const Savoryflavors = require("./savory_flavor.js");
const Etcflavors = require("./chocoloate_and_other_flavors.js");
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
    const fruitflavors = chooseYourFruitflavors();
    const savoryflavors = chooseYourSavoryflavors();
    const otherflavors = chooseYourEtcflavors();
    const cone = chooseYourCone();
    const orderedIcecream = new icecreamflavors(fruitflavors, savoryflavors, otherflavors, cone)
}

console.log("Putting together your icecream! Please wait...");

