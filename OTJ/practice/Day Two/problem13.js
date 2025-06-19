const text = "I am studying software development in college.";
const inDetector = (text) => {
    let inIndex = text.indexOf(" in ");
    console.log(`The In starts at Index ${inIndex}`);   
}


inDetector(text);