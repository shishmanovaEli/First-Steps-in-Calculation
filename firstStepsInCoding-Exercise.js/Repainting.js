function Repainting(input){
    // • Предпазен найлон - 1.50 лв. за кв. метър
    // • Боя - 14.50 лв. за литър
    // • Разредител за боя - 5.00 лв. за литър
    // 1. Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
    // 2. Необходимо количество боя (в литри) - цяло число в интервала [1…100]
    // 3. Количество разредител (в литри) - цяло число в интервала [1…30]
    // 4. Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]
    let nylonQuantity = Number(input[0]);
    let paintQuantity = Number (input[1]);
    let thinnerQuantity = Number(input[2]);
    let workTime= Number(input[3]);
     let additionalPaintQuantity = 0.10 * paintQuantity;
     let totalPaintQuantity = paintQuantity + additionalPaintQuantity;
let totalNaylonQuantity = nylonQuantity + 2;
    let naylonPrice = totalNaylonQuantity * 1.50;
    let paintPrice = totalPaintQuantity * 14.50;
    let thinnerPrice = thinnerQuantity * 5.00;
    let totalAmountForMaterials = (naylonPrice + paintPrice + thinnerPrice + 0.40);
 let workPricePerHour = 0.30 * totalAmountForMaterials;
 let totalWorkPrice = workTime * workPricePerHour;
 let totalPrice = (totalAmountForMaterials + totalWorkPrice);
 console.log(totalPrice);
} 
Repainting(["10","11","4","8"])