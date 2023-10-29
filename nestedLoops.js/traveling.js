function traveling (input) {
   let index = 0;
   let command = input[index];
   index++;
    
          


    while (command !== "End"){
        let destination = command;
    let budgetMin = Number(input[index]);
    index++;
      let savedMoney = 0;
      while (savedMoney < budgetMin){
        let moneyCounter = Number(input[index]);
        index++;
        savedMoney += moneyCounter;
      }        
       
        console.log(`Going to ${destination}!`);

        command = input[index];
        index++;
         
        } 
}

traveling (["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])