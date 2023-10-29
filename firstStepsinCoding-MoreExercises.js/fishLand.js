function fishLand (input){
    // • Първи ред – цена на скумрията на килограм. Реално число в интервала [0.00…40.00]
    // • Втори ред – цена на цацата на килограм. Реално число в интервала [0.00…30.00]
    // • Трети ред – килограма паламуд. Реално число в интервала [0.00…50.00]
    // • Четвърти ред – килограма сафрид. Реално число в интервала [0.00… 70.00]
    // • Пети ред – килограма миди. Цяло число в интервала [0 ... 100]
    let mackerelKg = Number (input[0]);
    let sprinkleKg = Number (input[1]);
    let bonitoPerKg = Number (input[2]);
    let safridPerKg = Number (input[3]);
    let musselsPerKg = Number (input[4]);
 let bonitoPricePerKg = mackerelKg + mackerelKg * 0.60;
 let priceForBonito = bonitoPricePerKg * bonitoPerKg;
 let safridPricePerKg = sprinkleKg + sprinkleKg * 0.80;
 let priceForSafrid = safridPricePerKg * safridPerKg;
 let priceForMussels = musselsPerKg * 7.50;
 let totalPrice = priceForBonito + priceForSafrid + priceForMussels;
 console.log (totalPrice.toFixed(2)) ;

}

fishLand([6.90, 4.20, 1.5, 2.5, 1])