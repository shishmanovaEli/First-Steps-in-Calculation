function logistics (input){
let index = 0;
let loadsCount = input[index];
index++;
let allCargoTonnage = 0;
let busLoads = 0;
let truckLoads = 0;
let trainLoads = 0;


for ( let i = 0; i < loadsCount; i++){
     let currentLoad = Number(input[index]);
     if (currentLoad <= 3){
   busLoads += currentLoad;
               
    } else if (currentLoad <= 11 ){
    
    truckLoads += currentLoad;
    
    } else {
     trainLoads += currentLoad;
    
    }
    allCargoTonnage += currentLoad;
    index++;
     
}
let totalPrice = busLoads * 200 + truckLoads * 175 + trainLoads * 120;
let avergePrice = totalPrice / allCargoTonnage;
let busPercent = busLoads / allCargoTonnage * 100;
let truckPercent = truckLoads / allCargoTonnage * 100;
let trainPercent = trainLoads / allCargoTonnage * 100;

console.log(avergePrice.toFixed(2));
console.log(`${busPercent.toFixed(2)}%`);
console.log(`${truckPercent.toFixed(2)}%`);
console.log(`${trainPercent.toFixed(2)}%`);



}
logistics ([5,
     2,
     10,
     20,
     1,
     7])