function triangleArea(sideOne, sideTwo, sideThree) {
    const triangleSemiperimeter = (sideOne + sideTwo + sideThree) / 2
    const triangleArea = Math.sqrt(triangleSemiperimeter * (triangleSemiperimeter - sideOne) * (triangleSemiperimeter - sideTwo) * (triangleSemiperimeter - sideThree));
    const solution = triangleArea.toFixed(2)
    console.log(solution);
    
}

triangleArea(2, 8, 9)