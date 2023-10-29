function coins(input){
let moneyAmount = Number(input[0]);
let coinsCount = 0;

let amountCurrent = Math.round(moneyAmount * 100);

while( amountCurrent > 0){
  if (amountCurrent >= 200){
    amountCurrent -= 200;
  } else if (amountCurrent >= 100){
    amountCurrent -= 100;
  } else if (amountCurrent >= 50){
    amountCurrent -= 50;
  } else if (amountCurrent >= 20){
    amountCurrent -= 20;
  }else if (amountCurrent >= 10){
    amountCurrent -= 10;
  } else if (amountCurrent >= 5){
    amountCurrent -= 5;
  }else if (amountCurrent >= 2){
    amountCurrent -= 2;
  }else if (amountCurrent >= 1){
    amountCurrent -= 1;
  }
  coinsCount++
}
console.log(coinsCount);

}
coins (["2.73"])