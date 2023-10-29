function godzillaVsKong (input){
  
    let budgetFilm = Number (input[0]);
    let extras = Number (input[1]);
    let costClothingExtras = Number (input[2]);
let decorAmount = budgetFilm * 0.1;
let clothingPrice = extras * costClothingExtras;
let totalForMovie = clothingPrice + decorAmount;


 if (extras > 150){
   
   totalForMovie = clothingPrice * 0.9 + decorAmount;
 }
 if (totalForMovie > budgetFilm) {
    let moneyNeeded = totalForMovie - budgetFilm;
   console.log(`Not enough money!`);
   console.log(`Wingard needs ${(moneyNeeded).toFixed(2)} leva more.`);

 } else if (totalForMovie <= budgetFilm) {
    let moneyLeft = budgetFilm- totalForMovie;
   console.log(`Action!`);
   console.log(`Wingard starts filming with ${(moneyLeft).toFixed(2)} leva left.`);
 }
}



godzillaVsKong (["15437.62",
"186",
"57.99"])