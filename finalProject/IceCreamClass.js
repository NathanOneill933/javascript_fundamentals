// Icecream class definition
class Icecream {
  // Private fields to store the properties of the Icecream
  #cone;
  #flavorChocolate;
  #flavorSavory;
  #flavorFruits;


  // Constructor to initialize the Icecream with flavors and cones
  constructor(cone, flavorChocolate, flavorFruit, flavorSavory) {
    this.#cone = cone;
    this.#flavorChocolate = flavorChocolate;
    this.#flavorSavory = flavorSavory;
    this.#flavorFruits = flavorFruit;
  }

  // Getters to access the private fields
  get cone() {
    return this.#cone;
  }
  get flavorChocolate() {
    return this.#flavorChocolate;
  }
  get flavorSavory() {
    return this.#flavorSavory;
  }
  get flavorFruit() {
    return this.#flavorFruits;
  }
  

  // Method to display the Icecream information
  showInfo() {
    const cone = this.#cone[0];
    let flavors = "";

    // Check if the flavor are an array of objects or a simple array
    if (this.#flavorChocolate.length == 2 && this.#flavorChocolate[0] != "object") {
      chocolateflavors = this.#flavorChocolate[0];
    } else {
      const arr = [];

// Loop through the savory flavors array and format each flavor for display
      for (index = 0; index < this.#flavorChocolate.length; index++) {
        arr.push(this.#flavorChocolate[index][0]);
      }
      flavors = arr.join(", ");
    }
    if (this.#flavorFruits.length == 2 && this.#flavorFruits[0] != "object") {
      fruitflavors = this.#flavorFruits[0];
    } else {
      const arr = [];

// Loop through the savory flavors array and format each flavor for display     
     for (index = 0; index < this.flavor.length; index++) {
        arr.push(this.#flavorFruits[index][0]);
      }
      flavors = arr.join(", ");
    }
    if (this.#flavorSavory.length == 2 && this.#flavorSavory[0] != "object") {
      savoryflavors = this.#flavorSavory[0];
    } else {
      const arr = [];

      // Loop through the savory flavors array and format each flavor for display
      for (index = 0; index < this.flavor.length; index++) {
        arr.push(this.#flavorSavory[index][0]);
      }
      flavors = arr.join(", ");
    }


    // Log the Icecream details to the console
    console.log(
      `\nYour Icecream:\nCone - ${cone}\nFlavors - ${flavors}`
    );
  }
}

// Export the Icecream class so it can be used in other files
module.exports = Icecream;