const fs = require("fs");
const flavor = require("")
const flavorFruits = require("./Ingredients/fruit.js")
const flavorSavory = require("./Ingredients/savory.js")
const flavorChocolate = require("./Ingredients/chocolate.js")
const cones = require("./Ingredients/cones.js")
const promt = require("prompt-sync")({ sigint: true});

const showMenu = (itemList) => {
  let menuNumbers = "";
  console.log();

  // Loop through the itemList and format each item for display.
  for (index = 0; index < itemList.length; index++) {
    const arr = [...itemList[index]];
    arr.splice(1, 0, " - $");
    menuNumbers += (index + 1).toString();
    console.log(`${index + 1}. ${arr.join("")}`);
  }
  console.log();

  // Return the string of menu numbers.
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

}
