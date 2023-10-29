function foodDelivery (input){
    // • Пилешко меню –  10.35 лв. 
    // • Меню с риба – 12.40 лв. 
    // • Вегетарианско меню  – 8.15 лв. 
// • Брой пилешки менюта – цяло число в интервала [0 … 99]
// • Брой менюта с риба – цяло число в интервала [0 … 99]
// • Брой вегетариански менюта – цяло число в интервала [0 … 99]
let chikenMenu = Number(input[0]);
let fishMenu = Number(input[1]);
let veganMenu = Number(input[2]);
let chchikenMenuPrice = chikenMenu * 10.35;
let fishMenuPrice = fishMenu * 12.40;
let veganMenuPrice = veganMenu * 8.15;
let totalPriceMenu = chchikenMenuPrice + fishMenuPrice + veganMenuPrice;
let desertPrice = totalPriceMenu * 0.20;
let totalPriceDelivery = totalPriceMenu + desertPrice + 2.50;
console.log(totalPriceDelivery)


}
foodDelivery(["2","4","3"])