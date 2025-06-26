const detectLetters = (str) => {
    const note = str.split("")
    const numberofCharacters = note.length;
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let numberofletters = 0
    let alphabetPlace = 0
    let stringPlace = 0
    while (stringPlace <= numberofCharacters) {
        for (let alphabetplace = 0; alphabetplace <= 25; alphabetplace++) {
            if (alphabet[alphabetPlace] === note[stringPlace]) {
                console.log("Hi");
                
                numberofletters ++
                stringPlace++
                alphabetPlace = 0
            }else;
                console.log("THE FITNESS GRAM PACER TEST IS ");
                alphabetPlace++
            
        }
    }
    console.log(`There are ${numberofletters} Letters.`);
    
}
const givenStr = "n0ji#k$"

detectLetters(givenStr)