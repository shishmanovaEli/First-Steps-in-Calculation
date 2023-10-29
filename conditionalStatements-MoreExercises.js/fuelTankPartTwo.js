function  fuelTankPartTwo (input){
    let typeOfFuel = input[0];
    let liters = Number(input[1]);
    let clubCard = input [2];
    let price = 0;
   
      
if(clubCard === 'Yes' && liters > 20 && liters <= 25 ){
     if (typeOfFuel === 'Diesel'){
            price = liters * ( 2.33 - 0.12) - liters * (2.33 - 0.12)* 0.08;
        } else if (typeOfFuel === 'Gasoline'){   
            price = liters * (2.22 - 0.18) - liters * (2.22 - 0.18) * 0.08; 
        } else if (typeOfFuel === 'Gas'){
            price = liters * (0.93 - 0.08) - liters * (0.93 - 0.08) * 0.08;
     } 
    } else if (liters > 25){
       if (typeOfFuel === 'Diesel'){
         price = liters * (2.33 - 0.12) -liters * (2.33 - 0.12) * 0.10;
       }else if (typeOfFuel === 'Gasoline'){
            price = liters * (2.22 - 0.18) - liters * (2.22 - 0.18)*  0.10;
       }else if (typeOfFuel === 'Gas'){
            price = liters * (0.93 - 0.08) - liters * (0.93 - 0.08) * 0.10;
       }}
if (clubCard === 'No' && liters > 20 && liters <= 25 ){
    if (typeOfFuel === 'Diesel'){
         price = liters * 2.33 - liters * 2.33 * 0.08;
        } else if (typeOfFuel === 'Gasoline'){   
         price = liters * 2.22  - liters * 2.22 * 0.08; 
        } else if (typeOfFuel === 'Gas'){
         price = liters * 0.93 - liters * 0.93 * 0.08;
        }
    } else if (clubCard === 'No' && liters > 25){
      if (typeOfFuel === 'Diesel'){
      price = liters * 2.33  - liters * 2.33 * 0.10;
    } else if (typeOfFuel === 'Gasoline'){
         price = liters * 2.22 - liters * 2.22 *  0.10;
    } else if (typeOfFuel === 'Gas'){
         price = liters * 0.93 - liters * 0.93 * 0.10;
    }
} else {
    if (typeOfFuel === 'Diesel'){
        price = liters * 2.33 ;
     } else if (typeOfFuel === 'Gasoline'){
        price = liters * 2.22;
    } else if (typeOfFuel === 'Gas'){
        price = liters * 0.93;                          
    }}
        console.log (`${price.toFixed(2)} lv.`);
    
 }

fuelTankPartTwo (['Gas', 30, 'Yes'])