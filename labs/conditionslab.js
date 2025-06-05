//Task One

//Writing Function
function comparisonFunc(paramOne, paramTwo){
    if (paramOne == paramTwo){
        console.log("The two parameters are equal");
    }else {
        console.log("These two parameters are not equal");
        
    }
}

//Testing

// comparisonFunc(10,10);
// comparisonFunc(5,8);
// comparisonFunc('Hi','Hi');
// comparisonFunc('Hi','Bye');

//Task Two

//Writing Function

function gradeFunc(grade){
    switch (grade) {
        case "E":
        case "e":
            console.log('This grade is Excellent!');
            break;
        case "V":
        case "v":
            console.log('This grade is Very Good!');
            break;
        case "G":
        case "g":
            console.log('This grade is Good.');
            break;
        case "A":
        case "a":
            console.log('This grade is Average.');
            break;
        case "F":
        case "f":
            console.log('You failed.'); 
            break;
        default:
            console.log('Not a valid Grade.'); 
            break;
    }       
}

//Testing
gradeFunc("E");
gradeFunc("v");
gradeFunc("G");
gradeFunc("a");
gradeFunc("f");
gradeFunc("hi");