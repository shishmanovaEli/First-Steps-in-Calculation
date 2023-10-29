function safari(input){
let budget = Number(input[0]);
let fuelNeeded = Number(input[1]);
let day = input[2];

let fuelPrice = fuelNeeded * 2.10;
let totalPrice = fuelPrice + 100;

if(day === 'Saturday'){
    totalPrice *= 0.90;

}else {
    totalPrice *= 0.80;
}
 if(budget >= totalPrice){
    let moneyLeft = budget - totalPrice;
    console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv.`)
 } else {
    let moneyNeeded = totalPrice - budget;
    console.log(`Not enough money! Money needed: ${moneyNeeded.toFixed(2)} lv.`)
 }

} 
safari(["105.20",
"15",
"Sunday"])