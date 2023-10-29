function vegetableMarket (input){
// • Първи ред – Цена за килограм зеленчуци – реално число[0.00… 1000.00]
// • Втори ред – Цена за килограм плодове – реално число[0.00… 1000.00]
// • Трети ред – Общо килограми на зеленчуците – цяло число[0… 1000]
// • Четвърти ред – Общо килограми на плодовете – цяло число[0… 1000]
let vegetableKg = Number (input[0]);
let fruitsKg = Number (input [1]);
let totalKgOfVegetable = Number (input [2]);
let totalKgOfFruits = Number (input[3]);
let totalPriceVegetable = totalKgOfVegetable * vegetableKg;
let totalPriceFruits = totalKgOfFruits * fruitsKg ;
let totalLv = totalPriceFruits + totalPriceVegetable;
let totalEuro = totalLv / 1.94;
console.log (totalEuro.toFixed(2));
}

vegetableMarket ([ 0.194, 19.4, 10, 10])