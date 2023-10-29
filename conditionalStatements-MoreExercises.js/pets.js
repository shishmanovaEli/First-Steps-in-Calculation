function pets(input){
let dayCount = Number(input[0]);
let foodInKg = Number(input[1]);
let foodForDog = Number(input[2]);
let foodForCat = Number(input[3]);
let foodForTurtle =Number(input[4]);
let neededFood = (dayCount * foodForDog) + (dayCount * foodForCat) + (dayCount * (foodForTurtle * 0.001));

if (neededFood < foodInKg){
      console.log (`${Math.floor(foodInKg - neededFood)} kilos of food left.`);
}else {
    console.log (`${Math.ceil(neededFood - foodInKg)} more kilos of food are needed.`);
}

}


pets ([5, 10, 2.1, 0.8, 321])