const str1 = "When zombies arrive, quickly fax Judge Pat";
const str2 = "This is probably not a panagram"
const pangramCheck = (sentence) => {
    const letters ="abcdefghijklmnopqrstuvwxyz";
    const lowerString = sentence.toLowerCase();
    const splitAlphabet = letters.split('')

    return splitAlphabet.every(char => lowerString.includes(char));
}

console.log(`The string "${str1}" is
    ${pangramCheck(str1) ? 'a pangram' : 'not a pangram'}.`);

console.log(`The string "${str2}" is
    ${pangramCheck(str2) ? 'a pangram' : 'not a pangram'}.`);




