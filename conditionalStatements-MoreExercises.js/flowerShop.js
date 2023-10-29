function flowerShop (input){
  let magnolias = 3.25 * Number(input[0]);
  let hyacinths = 4 * Number(input[1]);
  let roses = 3.5 * Number(input[2]);
  let cactus = 8 * Number(input[3]);
  let presentPrice = Number(input[4]);
  let profit = (magnolias + hyacinths + roses + cactus );
  let taxis = profit * 0.05;

 if (presentPrice > profit){

   console.log (`She will have to borrow ${Math.ceil(presentPrice - (profit - taxis))} leva.`);
 } else {
    console.log (`She is left with ${Math.floor((profit - taxis) - presentPrice)} leva.`);
 
 } 
}

flowerShop ([15, 7, 5, 10, 100])