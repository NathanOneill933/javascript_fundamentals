const fs = require("fs");
const flavor = ["Fruit", "Savory", "Chocolate"]
const flavorFruits = require("./Ingredients/icecreamFlavors.js/fruit.js")
const flavorSavory = require("./Ingredients/icecreamFlavors.js/savory.js")
const flavorChocolate = require("./Ingredients/icecreamFlavors.js/chocolate.js")
const coneTypes = require("./Ingredients/cones.js");
const { chocolate } = require("./Ingredients/icecreamFlavors.js/chocolate.js");
const prompt = require("prompt-sync")({ sigint: true });
// Function to display the menu and return the menu numbers as a string.
let menuNumbers = ""
const showMenu = (itemList) => {
  let menuNumbers = "";

  console.log();

  for (let index = 0; index < itemList.length; index++) {
    const item = itemList[index];

    let displayText;

    if (Array.isArray(item)) {
      // It's something like ['Waffle Cone', '1.50']
      displayText = `${item[0]} - $${item[1]}`;
    } else {
      // It's just a string like 'Fruit'
      displayText = item;
    }

    const menuNumber = index + 1;
    menuNumbers += menuNumber.toString();
    console.log(`${menuNumber}: ${displayText}`);
  }

  console.log();

  return menuNumbers;
};


// Function to prompt the user for input and validate it against the menu numbers.
const promptUser = (promptMsgOne, promptMsgTwo, menuNumbers) => {
  let choice = prompt(promptMsgOne);

  // Ensure the choice is a single character and is included in the menu numbers.
  while (!(menuNumbers.includes(choice) && choice.length == 1)) {
    choice = prompt(promptMsgTwo);
  }
  return choice;
};

// Function to check if the input is a valid 'Y' or 'N'.
exports.checkYorN = function (input) {
  return "ynYN".includes(input) && input.length == 1;
};

// Function to choose a Cone from the available options.
exports.chooseYourCone = () => {
  const cones = Object.entries(coneTypes.cones);

  const menuNumbers = showMenu(cones);

  const coneChoice = promptUser(
    "Please choose your cone: ",
    "Please enter only the numbers on the menu: ",
    menuNumbers
  );

  return cones[parseInt(coneChoice) - 1];
};

exports.ChooseFlavorType = () => {
  
  const menuNumbers = showMenu(flavor);

  // Prompt the user for their choice, ensuring it matches the menu numbers.
  const flavorChoice = promptUser(
    "Please choose your flavor profile::",
    "Please enter only the numbers on the menu: ",
    menuNumbers)
  return(String(flavorChoice))
}

exports.chooseYourFlavor = () => {
  //convert flavor objects into arrays of [name, price] 
  const fruits = Object.entries(flavorFruits);
  const savory = Object.entries(flavorSavory);
  const chocolate = Object.entries(flavorChocolate);

  //name & flavor list together
  // To display flavor categories properly:
  const flavorTypes = ['Fruits', 'Savory', 'Chocolate'];
  const menuNumbers = showMenu(flavorTypes);

  const flavorTypeChoice = promptUser(
    "Please choose your flavor type: ",
    "Please enter only the numbers on the menu: ",
    categoryMenuNumbers
  );

  // use flavorTypeChoice to get the chosen category
  const chosenType = categories[parseInt(flavorTypeChoice) - 1];

//show flavors from flavorType
const flavorMenuNumbers = showMenu(chosenType[1]);

// Prompt the user to choose a flavor from the selected type.
const flavorChoice = promptUser(
  `Please choose your ${chosenType[0]} flavor: `,
  'Please enter only the numbers on the menu: ',
  flavorMenuNumbers
);

// Return the selected flavor.
return chosenType[1][parseInt(flavorChoice) - 1];

};




//Allows user to pick a savory flavor

exports.chooseSavoryFlavor = () => {
  const savoryFlavor = Object.entries(flavorSavory.savory);

  
  const menuNumbers = showMenu(savoryFlavor);

  const flavorChoice = promptUser(
    "Please choose your flavor: ",
    "Please enter only the numbers on the menu: ",
    menuNumbers
  );

  return savoryFlavor[parseInt(flavorChoice) - 1];
};


//Chocolate Flavor Menu

exports.chooseYourEtcflavors = () => {

  const chocolate = Object.entries(flavorChocolate.chocolate);
  const menuNumbers = showMenu(chocolate);
  const chooseYourEtcflavors = promptUser(
    "Please choose your chocolate flavor: ",
    "Please enter only the numbers on the menu: ",
 menuNumbers
  );

 return chocolate[parseInt(chooseYourEtcflavors) - 1];

};

//fruit flavor
exports.fruitFlavor = () => {
  // Convert the fruit object into an array of entries.
  const fruits = Object.entries(flavorFruits.fruit);

  // Show the menu and prompt the user to choose a fruit flavor.
  const menuNumbers = showMenu(fruits);

  const fruitChoice = promptUser(
    "Please choose your fruit flavor: ",
    "Please enter only the numbers on the menu: ",
    menuNumbers
  );

  // Return the selected fruit flavor.
  return fruits[parseInt(fruitChoice) - 1];
};

exports.getTotalCost = (orderedIcecream) => {
  return (
    orderedIcecream.cone.pop() +
    orderedIcecream.flavor.pop()
  ).toFixed(2);
}