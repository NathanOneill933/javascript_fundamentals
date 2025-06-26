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
const Icecream = require("./IceCreamClass.js");
const iceCream = require("./IceCreamClass.js");

//Define Variables for program
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
    
    if(flavorChoice == "1"){
        const flavorFruits = fruitFlavor();
        
    }else if(flavorChoice == "2"){
         const flavorSavory = chooseSavoryFlavor();
         const flavorChocolate = ""
          const flavorFruits = ""
    }else if(flavorChoice =="3"){
        const flavorChocolate = chooseYourEtcflavors();
    }
    
    const coneTypes = chooseYourCone();
   
   //Create a new Icecream with the Users choces
    const orderedIcecream = new Icecream(flavorFruit, flavorSavory, flavorChocolate, coneTypes)




console.log("Putting together your icecream! Please wait...");

//Simulated Delay
setTimeout(() => {
    console.log("Your icecream is ready!");
    orderedIcecream.showInfo();
    console.log(`\nTotal cost: $${getTotalCost(orderedIcecream)}`);
}, 3000);
