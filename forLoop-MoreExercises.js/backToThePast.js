function backToThePast(input){
let inheritedMoney = Number(input[0]);
let yearToLiveUp = Number(input[1]);
let ageIvan = 18;
let moneySpent = 0;


for (let i = 1800; i <= yearToLiveUp; i ++){
    if (i % 2 === 0 ) {
        moneySpent +=  12000;
      ageIvan++
    } else {
        
        moneySpent += (12000 + (ageIvan * 50));
        ageIvan++
      
    }
     
}
 if (moneySpent <= inheritedMoney){
  let restMoney = inheritedMoney - moneySpent;
    console.log(`Yes! He will live a carefree life and will have ${restMoney.toFixed(2)} dollars left.`)
 } else {
    let neededMoney = 0;
    neededMoney = moneySpent - inheritedMoney;
    console.log(`He will need ${neededMoney.toFixed(2)} dollars to survive.`)

 }
}
backToThePast ([50000,
    1802])