function bills(input){
let index = 0;
let months = Number(input[0]);
index++;
let electricity = 0;
let water = 20 * months;
let Internet = 15 * months;
let otherBills = 0;
let average = 0;


for (let i = 1; i <= months; i++){
    let electricityPerMonth = Number(input[i]);
    index++;
     electricity += electricityPerMonth;
     otherBills += (electricityPerMonth +20 + 15) + (electricityPerMonth +20 + 15) * 0.20;
       
  average = (electricity + water + Internet + otherBills) / months;
}


console.log(`Electricity: ${electricity.toFixed(2)} lv`);
console.log(`Water: ${water.toFixed(2)} lv`);
console.log(`Internet: ${Internet.toFixed(2)} lv`);
console.log(`Other: ${otherBills.toFixed(2)} lv`);
console.log(`Average: ${average.toFixed(2)} lv`);



}
bills([8,
    123.54,
    231.54,
    140.23,
    100,
    122.4,
    430,
    178.52,
    64.2])