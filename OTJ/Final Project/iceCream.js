// Sandwich class definition
class Icecream {
  // Private fields to store the properties of the sandwich
  #cone;
  #flavor;


  // Constructor to initialize the sandwich with bun, meat, vegetables, and cheese
  constructor(cone, flavor) {
    this.#cone = cone;
    this.#flavor = flavor;
  }

  // Getters to access the private fields
  get cone() {
    return this.#cone;
  }
  get flavor() {
    return this.#flavor;
  }
  

  // Method to display the sandwich information
  showInfo() {
    const cone = this.#cone[0];
    let flavors = "";

    // Check if the vegetables are an array of objects or a simple array
    if (this.#flavor.length == 2 && this.#flavor[0] != "object") {
      flavors = this.#flavor[0];
    } else {
      const arr = [];

      // Loop through the vegetables array and format each vegetable for display
      for (index = 0; index < this.flavor.length; index++) {
        arr.push(this.#flavor[index][0]);
      }
      flavors = arr.join(", ");
    }

    // Log the sandwich details to the console
    console.log(
      `\nYour sandwich:\nBun - ${bun}\nCheese - ${cheese}\nMeat - ${meat}\nVegetables - ${vegies}`
    );
  }
}

// Export the Sandwich class so it can be used in other files
module.exports = Sandwich;