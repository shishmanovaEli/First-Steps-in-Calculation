function journey (input){
let budget = Number(input[0]);
let season = input[1];
let destimation = '';
let  placeType = '';
let price = 0;

if (budget <=100){
    destimation = 'Bulgaria';
} else if (budget <= 1000){
    destimation = 'Balkans';
} else {
    destimation = 'Europe';
}
if ( season === 'summer'){
    placeType = 'Camp';
} else {
    placeType = 'Hotel';
}
if (destimation === 'Bulgaria'){
    if (season === 'summer'){
        price = 0.30 * budget;
    } else {
        price = 0.70 * budget;
    }
} else if (destimation === 'Balkans'){
    if (season === 'summer'){
        price = 0.40 * budget;
    } else{
        price = 0.80 * budget;
    }
} else {
    price = 0.90 * budget;
    placeType = 'Hotel';
}
console.log(`Somewhere in ${destimation}`);
console.log( `${placeType} - ${price.toFixed(2)}`);
}
journey (["75", "winter"])