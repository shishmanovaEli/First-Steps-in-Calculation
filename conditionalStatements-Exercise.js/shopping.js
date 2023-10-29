function shopping(input) {
  let budget = Number(input[0]);
  let videoCard = Number(input[1]);
  let cpu = Number(input[2]);
  let ram = Number(input[3]);
    
  let videoCardPrice = 250 * videoCard;
  let cpuPrice = 0.35 * videoCardPrice * cpu;
  let ramPrice = 0.10 * videoCardPrice * ram;

  let total = videoCardPrice + cpuPrice + ramPrice;
  
   
  if (videoCard >= cpu){
      total *= 0.85;
    
  }
 
  if (budget >= total) {
      let moneyLeft = (budget - total);
      console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
  } else {
      let moneyNeeded = total - budget;
      console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
   
  }
 
}
shopping (["920.45",
"3",
"1",
"1"])