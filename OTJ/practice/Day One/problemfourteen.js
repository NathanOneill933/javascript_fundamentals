class Employee{
    //creating Properties
    constructor(Name, salary) {
        this.Name = Name;
        this.salary = salary;
    }
    //Wage calculation
    calculatesalary(){
        let yearlysalary = salary * 12
    }
}


class Manager extends Employee{
    constructor(Name, salary, department, bonus) {
        super(Name, salary)
        this.bonus = bonus
        this.department = department
        
    }
    calculatesalary(salary, bonus){
        return (salary * 12) + (salary* 12) * bonus 
    }

}

const managerOne = new Manager("Angela Luca", 5000, "Marketing", 0.1)
const managerTwo = new Manager("Jonelle Rozaliya", 5500, "Marketing", 0.1)

console.log(managerOne);
console.log(`Annual Salary: ${managerOne.calculatesalary(managerOne.salary, managerOne.bonus)}`)
console.log(managerTwo);
managerTwo.calculatesalary(managerTwo.salary, managerTwo.bonus);
console.log(`Annual Salary: ${managerTwo.calculatesalary(managerTwo.salary, managerTwo.bonus)}`)