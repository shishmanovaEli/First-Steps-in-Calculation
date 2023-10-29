function suppliesForSchool (input){
//• Пакет химикали - 5.80 лв. 
//• Пакет маркери - 7.20 лв. 
//• Препарат - 1.20 лв (за литър)
// Брой пакети химикали - цяло число в интервала [0...100]
// Брой пакети маркери - цяло число в интервала [0...100]
// Литри препарат за почистване на дъска - цяло число в интервала [0…50]
// Процент намаление - цяло число в интервала [0...100]
 let packetOfPen = Number(input[0]);
 let packetOfMarkers = Number(input[1]);
 let literOfBoardCleaner = Number(input[2]);
 let discount = Number(input[3] / 100);
 let priceForPen = packetOfPen * 5.80;
 let priceFOrMarkers = packetOfMarkers * 7.20;
 let priceForBoardCleaner = literOfBoardCleaner * 1.20;
 let totalPrice = priceForPen + priceFOrMarkers + priceForBoardCleaner;
 console.log (totalPrice - (totalPrice*discount));
}

 suppliesForSchool(["2","3","4","25"]);
 suppliesForSchool(["4","2","5","13"]);