const pyramidHeight = 4

const printPyramid = (pyramidHeight) => {
    let pyramidLoop = 0
    while (pyramidLoop <= pyramidHeight) {
        for (pyramidLoopTwo = 0; pyramidLoopTwo < pyramidLoop; pyramidLoopTwo++) {
            console.log('*'.repeat(pyramidLoop));
            
        } 
        pyramidLoop++;
    }
}
printPyramid(pyramidHeight)