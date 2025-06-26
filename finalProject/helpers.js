const fs = require("fs");
const flavor = ["Fruit", "Savory", "Chocolate"]
const flavorFruits = require("./Ingredients/icecreamFlavors.js/fruit.js")
const flavorSavory = require("./Ingredients/icecreamFlavors.js/savory.js")
const flavorChocolate = require("./Ingredients/icecreamFlavors.js/chocolate.js")
const coneTypes = require("./Ingredients/cones.js");
const { chocolate } = require("./Ingredients/icecreamFlavors.js/chocolate.js");
const prompt = require("prompt-sync")({ sigint: true });
// Function to display the menu and return the menu numbers as a string.
const showMenu = (itemList) => {
  let menuNumbers = "";
  console.log();

  // Loop and format each item for display.
  for (index = 0; index < itemList.length; index++) {
    const arr = [...itemList[index]];
    arr.splice(1, 0, " - $");
    menuNumbers += (index + 1).toString();
    console.log(`${index + 1}. ${arr.join("")}`);
  }
  console.log();

  // Return the menu string.
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
  // Convert the Cone object into an array of entries and display the menu.
  const cones = Object.entries(cone);

  // Show the menu and prompt the user to choose a cone.
  const menuNumbers = showMenu(cone);

  // Prompt the user for their choice, ensuring it matches the menu numbers.
  const coneChoice = promptUser(
    "Please choose your cone: ",
    "Please enter only the numbers on the menu: ",
    menuNumbers
  );

  // If the user chooses a cone from the menu's number, return the selected cone.
  return cones[parseInt(coneChoice) - 1];
};

exports.ChooseFlavorType = () => {
  // Convert the flavor object into an array of entries and display the menu.
  const flavors = Object.entries(flavor);

  // Show the menu and prompt the user to choose a flavor.
  const menuNumbers = showMenu(flavors);

  // Prompt the user for their choice, ensuring it matches the menu numbers.
  const flavorChoice = promptUser(
    "Please choose your flavor profile: ",
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
  const categories = [
    ['Fruits', fruits],
    ['Savory', savory],
    ['Chocolate', chocolate]
  ];

  // Show the menu & menu numbers 
  const categoryMenuNumbers = showMenu(categories);

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
  // Convert the bun object into an array of entries and display the menu.
  const savoryFlavor = Object.entries(flavorSavory.savory);

  // Show the menu and prompt the user to choose a bun.
  const menuNumbers = showMenu(savoryFlavor);

  // Prompt the user for their choice, ensuring it matches the menu numbers.
  const flavorChoice = promptUser(
    "Please choose your flavor: ",
    "Please enter only the numbers on the menu: ",
    menuNumbers
  );

  // If the user chooses a flavor from the menu's number, return the selected flavor.
  return flavorSavory[parseInt(flavorChoice) - 1];
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
