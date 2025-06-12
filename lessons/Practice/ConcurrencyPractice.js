// const note = () => console.log('This note is shown after 3 seconds.');

// setTimeout(() => console.log('This note is shown after 3 seconds.'), 3000);

function determineGrade(grade) {
    switch (grade) {
        case "A":
            console.log(`You got an ${grade}! Awesome!`);
            break;
        case "B":
            console.log(`You got a ${grade}! Well Done!`);
             break;
        case "C":
            console.log(`You got a ${grade}! You got it!`);
            break;       
        case "D":
            console.log(`You got a ${grade}! You can do better!`);
        default:
            console.log(`You got a ${grade}! You will get it next time!`)
            break;
    }
}


function getGrade(value, callback) {
    let gradeValue;

    switch (true) {
        case value >= 90:
            gradeValue = "A"
            break;
        case value >= 80:
            gradeValue = "B"
            break;    
        case value >= 70:
            gradeValue = "C"
            break;
        case value >= 60:
            gradeValue = "D"
            break;    
        default:
            gradeValue = "F"
            break;
    }
    callback(gradeValue)
}

getGrade(45, determineGrade);

