function gameOfIntervals (input){
let index = 0;
let gameMoves = Number(input[index]);
index++

let result = 0;
let gameMoveTo50 = 0;
let gameMoveTo39 = 0;
let gameMoveTo29 = 0;
let gameMoveTo19 = 0;
let gameMoveTo9 = 0;
let invalidNumber = 0;

for( let i = 0; i <= gameMoves; i++){
    let currentPoint = Number(input[index]);
    if (currentPoint < 0 || currentPoint > 50){
        invalidNumber++;
        result /= 2;
    } else if (currentPoint < 10 ){
       gameMoveTo9++;
       result += currentPoint * 0.20;
    } else if (currentPoint < 20){
        gameMoveTo19++;
        result += currentPoint * 0.30;
    } else if (currentPoint < 30){
       gameMoveTo29++;
       result += currentPoint * 0.40;

    } else if (currentPoint < 40){
       gameMoveTo39++;
       result += 50;
    } else if (currentPoint <= 50){
        gameMoveTo50++;
        result += 100;
    }
   
    index++;
}

let invalidNumberPurcent = invalidNumber / gameMoves * 100;
let gameMoveTo9Purcent =  gameMoveTo9 / gameMoves * 100;
let gameMoveTo19Purcent = gameMoveTo19 / gameMoves * 100;
let gameMoveTo29Purcent = gameMoveTo29/ gameMoves * 100;
let gameMoveTo39Purcent = gameMoveTo39 / gameMoves * 100;
let gameMoveTo50Purcent =  gameMoveTo50 / gameMoves * 100;


console.log(`${result.toFixed(2)}`);
console.log(`From 0 to 9: ${gameMoveTo9Purcent.toFixed(2)}%`);
console.log(`From 10 to 19: ${gameMoveTo19Purcent.toFixed(2)}%`);
console.log(`From 20 to 29: ${gameMoveTo29Purcent.toFixed(2)}%`);
console.log(`From 30 to 39: ${gameMoveTo39Purcent.toFixed(2)}%`);
console.log(`From 40 to 50: ${gameMoveTo50Purcent.toFixed(2)}%`);
console.log(`Invalid numbers: ${invalidNumberPurcent.toFixed(2)}%`);
}



gameOfIntervals ([10,
    43,
    57,
    -12,
    23,
    12,
    0,
    50,
    40,
    30,
    20])