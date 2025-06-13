function alphabetPrint() {
    let canPrint = true;
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabet.split("")
    const note = "hellojavascript";
    const noteLength = note.Length
    const noteArray = "hellojavascript".split("")
    let noteloopOne = 0;
    let noteloopTwo = 0;
    let letter = "";
    let finalNote = "";
    while (noteloopOne <= note.length) {
        if (noteArray[noteloopOne] === alphabetArray[noteloopTwo]){
            letter = alphabet.charAt(noteloopTwo),
            finalNote = finalNote.concat(letter),
            noteloopOne ++;
            noteloopTwo = 0;
            
        }else  {
            noteloopTwo++;
                
    }
   if (finalNote == "hellojavascript" && canPrint == true){
        console.log(finalNote);
        canPrint = false;
   } else continue;
}}

alphabetPrint();


