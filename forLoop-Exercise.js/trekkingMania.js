function trekkingMania (input){
let groupsCount = Number(input[0]);

let totalPeople = 0;
let countMusalla = 0;
let countMontBlanc = 0;
let countKilimanjaro = 0;
let countK2 = 0;
let countEverest = 0;

for ( let i = 1; i <= groupsCount ; i++){
 let currentNums = Number(input[i]);
    totalPeople += currentNums;

if (currentNums <= 5){
    countMusalla += currentNums;
} else if (currentNums <=12){
    countMontBlanc +=currentNums;
} else if (currentNums <= 25){
    countKilimanjaro += currentNums;
}else if (currentNums <= 40){
    countK2 += currentNums;
} else {
    countEverest += currentNums;
}}
let percentClimbersMusalla = (countMusalla / totalPeople) * 100;
let percentClimbersMontBlanc = (countMontBlanc / totalPeople) * 100;
let percentClimbersKilimanjaro = (countKilimanjaro / totalPeople) * 100;
let percentClimbersK2 = (countK2 / totalPeople) * 100;
let percentClimbersEverest = (countEverest / totalPeople) * 100;

console.log(`${percentClimbersMusalla.toFixed(2)}%`);
console.log(`${percentClimbersMontBlanc.toFixed(2)}%`);
console.log(`${percentClimbersKilimanjaro.toFixed(2)}%`);
console.log(`${percentClimbersK2.toFixed(2)}%`);
console.log(`${percentClimbersEverest.toFixed(2)}%`);

}


trekkingMania (["5",
"25",
"41",
"31",
"250",
"6"])