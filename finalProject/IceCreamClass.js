// Icecream class definition
class Icecream {
  // Private fields to store the properties of the Icecream
  #cone;
  #flavor;


  // WE NEED TO DEFINE THE VARIABLES 
  // Constructor to initialize the Icecream with flavors and
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
 

  // Method to display the Icecream information
  showInfo() {
    const cone = this.#cone[0];
    const flavor = this.#flavor[0];

   console.log(
      `\nYour Icecream is \n Flavor: ${flavor}\n Cone: ${cone}.`
   );
   
    
  }}


// Export the Icecream class so it can be used in other files
module.exports = Icecream;