function basketballEquipment(input){
    // • Баскетболни кецове – цената им е 40% по-малка от таксата за една година
    // • Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
    // • Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
    // • Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
let chargePerYear = Number (input[0]);
let basketballSneakers = chargePerYear - (chargePerYear * 0.40);
let basketballOutfit = basketballSneakers - (basketballSneakers* 0.20);
let basketballBall = basketballOutfit * 1/4;
let basketballAcssesoares = basketballBall * 1/5;
let totalPriceFit = chargePerYear + basketballSneakers + basketballOutfit + basketballBall + basketballAcssesoares;
console.log(totalPriceFit)
}

basketballEquipment(["365"])