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
const Fruitflavors = require("./fruit_flavors.js")
const Savoryflavors = require("./savory_flavor.js")
const Etcflavors = require("./chocoloate_and_other_flavors.js")
const coneTypes = require("./cone_types.js")