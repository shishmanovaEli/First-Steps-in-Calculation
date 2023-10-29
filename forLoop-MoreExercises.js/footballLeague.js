function footballLeague(input){
let index = 0;
let capacityOfStadium = Number(input[0]);
let totalFenCaunt = Number(input[1]);

let fenOfSectorA = 0;
let fenOfSectorB = 0;
let fenOfSectorV = 0;
let fenOfSectorG = 0;
let totalPurcentOfFans = 0;
let fenOfSectorAPurcent = 0;
 let fenOfSectorBPurcent = 0;
 let fenOfSectorVPurcent = 0;
 let fenOfSectorGPurecent = 0;

for ( let i = 2; i <= totalFenCaunt+1; i++ ){
     let sector = input[i];
    index++;
  


 if(sector === "A"){
    fenOfSectorA++;   
      
 } else if (sector === "B"){
   
    fenOfSectorB++;
 } else if (sector === "V"){
    
    fenOfSectorV++;
 } else {
   
    fenOfSectorG++;
 }
 
 
}
totalPurcentOfFans = totalFenCaunt/ capacityOfStadium * 100;

fenOfSectorAPurcent = (fenOfSectorA / totalFenCaunt) * 100;
fenOfSectorBPurcent = (fenOfSectorB / totalFenCaunt) * 100;
fenOfSectorVPurcent = (fenOfSectorV / totalFenCaunt) * 100;
fenOfSectorGPurecent = (fenOfSectorG / totalFenCaunt) * 100;

console.log(`${fenOfSectorAPurcent.toFixed(2)}%`);
console.log(`${fenOfSectorBPurcent.toFixed(2)}%`);
console.log(`${fenOfSectorVPurcent.toFixed(2)}%`);
console.log(`${fenOfSectorGPurecent.toFixed(2)}%`);
console.log(`${totalPurcentOfFans.toFixed(2)}%`);

}
footballLeague ([1000,
    12,
    "A",
    "A",
    "V",
    "V",
    "A",
    "G",
    "A",
    "A",
    "V",
    "G",
    "V",
    "A"
    ])