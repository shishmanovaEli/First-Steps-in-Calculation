function poolDay(input){
    let people = Number(input[0]);
    let feePerPerson = Number(input[1]);
    let priceLounger = Number(input[2]);
    let pricePerUmbrella = Number(input[3]);

    let totalFee = people * feePerPerson;

    let umbrellaCount = Math.ceil(people / 2);
    let loungerCount = Math.ceil(0.75 * people);

    let totalUmbrelaPrice = umbrellaCount * pricePerUmbrella;
    let totalLoungerPrice = loungerCount * priceLounger;

   let totalPrice = totalFee + totalUmbrelaPrice + totalLoungerPrice;
    
   console.log(`${totalPrice.toFixed(2)} lv.`);



}
poolDay (["21",
"5.50",
"4.40",
"6.20"])