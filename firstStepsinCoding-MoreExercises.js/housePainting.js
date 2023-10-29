function housePainting (input){
    // 1. x – височината на къщата – реално число в интервала [2...100]
    // 2. y – дължината на страничната стена – реално число в интервала [2...100]
    // 3. h – височината на триъгъл
    let x = Number (input[0]);
    let y = Number (input [1]);
    let h = Number(input[2]);
    let theSideWalls = x * y;
    let windows = 1.5 * 1.5;
    let frontAndBackWall = 2 * theSideWalls - 2* windows;
    let backWall = x * x ; entry = 1.2 * 2;
    let totalFrontAndRear = 2 * backWall - entry;
    let totalArea= frontAndBackWall + totalFrontAndRear;
    let greenpaint = totalArea / 3.4;

let twoRectanglesOnTheRoof = 2 * (x * y);
let twoTriangles =  2 * (x * h / 2);
let totalAreaRoof = twoRectanglesOnTheRoof + twoTriangles;
let redPaint = totalAreaRoof / 4.3;

console.log (greenpaint.toFixed(2));  
console.log (redPaint.toFixed(2));
}

housePainting ([10.25, 15.45, 8.88])