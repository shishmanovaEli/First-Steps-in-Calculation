function equalSumsEvenOddPosition(input){
let startNum = Number(input[0]);
let endNum = Number(input[1]);
let result = "";

for (let currNam = startNum; currNam <= endNum; currNam++){
let oddSum = 0;
let evenSum = 0;

let curNamAsStr = currNam.toString();

for( let index = 0; index < curNamAsStr.length; index++){
    let curDigit = Number(curNamAsStr[index]);

    let position = index + 1;
    if (position % 2 === 0){
        evenSum += curDigit;
    } else {
        oddSum += curDigit;
    }
    
}
 if (oddSum === evenSum){
    result += curNamAsStr + " ";
   
 }
 
}
console.log(result);
}
equalSumsEvenOddPosition (["123456",
"124000"])