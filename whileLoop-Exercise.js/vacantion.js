function vacantion(input){

 let vacantionMoneyNeeded = Number(input[0]);
 let availableMoney = Number(input[1]);
  let spendingDays = 0;
 let dayCaunter = 0;

let i = 2;

while(true){
    let command = input[i];
    i++
    let amountCurrent = Number(input[i]);
    i++;

 dayCaunter ++;
   
    if (command == 'spend' ){
        spendingDays++;
        availableMoney -= amountCurrent;
        if (availableMoney < 0){
            availableMoney = 0;
        } 
    } else if (command == 'save'){
        availableMoney += amountCurrent;
        spendingDays = 0;
    }
      if (spendingDays == 5){
     
        console.log(`You can't save the money.`);
        console.log(dayCaunter);
        break;
    }

 if(availableMoney >= vacantionMoneyNeeded) {
      
    console.log(`You saved the money for ${dayCaunter} days.`)
    break;
 }
   
}
  
}

vacantion (["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])