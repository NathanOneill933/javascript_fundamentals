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
const Fruitflavors = require("OTJ\Final Project\Ingredients\fruit.js")
const Savoryflavors = require("OTJ\Final Project\Ingredients\savory.js")
const Etcflavors = require("OTJ\Final Project\Ingredients\chocolate.js")
const coneTypes = require("OTJ\Final Project\Ingredients\cones.js")

const shopTitle =
    "*********************************" +
    "*\n||\t\t\t\t\t\t\t\t||\n||\t  O'NEILL'S ICECREAM SHOP\t||\n||\t\t\t\t\t\t\t\t||\n*" +
    "*********************************";
    
const welcomeStr = "Welcome to O'neill's Icecream Shop!\n";

console.log(shopTitle);
console.log(welcomeStr);