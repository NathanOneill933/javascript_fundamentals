const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//              0           1           2           3           4           5       6       Index
//              1           2           3           4           5           6       7       Position

// console.log(weel);


const values = new Array(1, 2, 3, 4, 5);
// console.log(values);

const mixed = ["Hi", 5, 7, "Oh no", "Hello", () => {console.log("I Am inside an arrow function");}]
// console.log(mixed);

const getDay = (IndexNum) => {
    const day = week[IndexNum];
    console.log(day);
    
}

// getDay(3);
// getDay(1);
// getDay(6);

const testArray = ['This', 'Is', 'My', "First", 'Test', 'Array'];
// console.log(testArray);


const updateElement = (IndexNum) => {
    values[IndexNum] = true
    console.log(values);
    
}

// updateElement(3);


// console.log(mixed.length);


//Using A for loop with an array
// for (index = 0; index < week.length; index++) {
//     console.log(week[index])
// };

// for (const item of week) {
//     console.log(item);
    
// };

//Foreach instance method
// mixed.forEach((item) => {
//     console.log(item);
// });


// console.log(week.join(', '));

// const returnedArr = week.slice(1, 3);
// console.log(returnedArr);
// console.log(week);

//Pop instance method

// const result = week.pop();
// console.log(result);
// console.log(week);

// const reversedArr = week.reverse();

// console.log(reversedArr);
// reversedArr[1] = 'AAA';
// console.log(week);

// const pushExample = week.push('Whateverday', false);
// console.log(pushExample);
// console.log(week);

