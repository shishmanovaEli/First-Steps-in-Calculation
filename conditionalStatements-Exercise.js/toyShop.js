function toyShop (input){
  let holidayPrice = Number(input[0]);
  let puzzleCount = Number(input[1]);
  let dollsCount = Number(input[2]);
  let bearsCount = Number(input[3]);
  let minionsCount = Number(input[4]);
  let truksCount = Number(input[5]);
  
  let toysPrice = puzzleCount * 2.60 + dollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + truksCount * 2;
  let toysCount = puzzleCount + dollsCount + bearsCount + minionsCount;
  
  if (toysCount > 50){
  toysPrice *= 0.75 
  }
  
  let  moneyWon = toysPrice * 0.90 ;
  
  if ( moneyWon >= holidayPrice){
      let moneyLeft = moneyWon - holidayPrice;
      console.log (`Yes! ${moneyLeft.toFixed(2)} lv left.`);
  } else {
      let moneyNeeded = holidayPrice - moneyWon;
      console.log (`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
  }
  
  }
toyShop (["320",
"8",
"2",
"5",
"5",
"1"])