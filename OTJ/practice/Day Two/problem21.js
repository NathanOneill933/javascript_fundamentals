let numberArray = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

const removeDuplicateNumbers = (numbers) => {
    return numbers.filter((value, index) => numbers.indexOf(value) === index)
}


console.log(removeDuplicateNumbers(numberArray));
