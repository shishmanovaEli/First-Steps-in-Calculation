function sumPrimeNonPrime(input){
let index = 0;

let comand = input[index];
index++;
let primeSum = 0;
let nonPrimeSum = 0;

while( comand !== "stop"){
let num = Number(comand);

if (num < 0 ){
    console.log('Number is negative.');
    comand = input[index];
    index++;
    continue;
}
 let isPrime = true;

 for (let divisor = 2; divisor < num; divisor++){
    if (num % divisor === 0){
        isPrime = false;
        break;
    }
 }
 if (isPrime === true){
    primeSum +=num;
 }else {
    nonPrimeSum +=num;
 }

    comand = input[index];
    index++;
}
console.log(`Sum of all prime numbers is: ${primeSum}`);
console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}
sumPrimeNonPrime (["0",
"-9",
"0",
"stop"])