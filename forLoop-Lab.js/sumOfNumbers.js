function sumOfNumbers (input){
let nuAsText = input[0];
let sum = 0;

for(let i = 0; i < nuAsText.length; i++){
    let currentNumber = Number (nuAsText[i]); 
sum += currentNumber;
}
   console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["1234"])