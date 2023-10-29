function equalPairs(input){
let index = 0;
index++;
let pairsCount = Number(input[0]);
let maxDiff = 0;
let value = Number(input[1]) + Number(input[2]);
let isEqual = true;

for ( let i = 0; i < pairsCount; i++){
    let numOne = Number(input[index]);
    index++;
    let numTwo = Number(input[index]);
    index++;
    let curValue = numOne + numTwo;

if (curValue != value){
    isEqual = false;
    let curDiff = Math.abs(curValue - value);
    if (curDiff > maxDiff){
        maxDiff = curDiff;
    }
    value = curValue;
}   
    }

if(isEqual == true){
    console.log(`Yes, value=${value}`);
} else {
    console.log(`No, maxdiff=${maxDiff}`);
}
}
equalPairs ([1,5,5])