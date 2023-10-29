function cleverLily (input){
let ageLily = Number(input[0]);
let washingMachinePrice = Number(input[1]);
let pricePerToy = Number(input[2]);
let totalMoneyWon = 0;
let evenBirtdayMoneyWon = 10;


for( let i = 1; i <= ageLily; i++){
 if (i % 2 === 0){
totalMoneyWon += evenBirtdayMoneyWon;
totalMoneyWon -= 1; 
evenBirtdayMoneyWon += 10;
 } else{
    totalMoneyWon += pricePerToy;
 }
}
 if (totalMoneyWon >= washingMachinePrice){
    let moneyLeft = totalMoneyWon - washingMachinePrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
 } else {
    let moneyNeeded = washingMachinePrice - totalMoneyWon;
    console.log(`No! ${moneyNeeded.toFixed(2)}`);
 }
}
cleverLily (["21",
"1570.98",
"3"])
