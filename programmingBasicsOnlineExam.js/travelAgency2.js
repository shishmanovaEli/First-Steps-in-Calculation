function travelAgency(input){
    let city = input[0];
    let packet = input[1];
    let vipStatus = input[2];
    let days = Number(input[3]);
    
    if(days < 1){
        console.log (`Days must be positive number!`);
        return;
    }
         
    let totalPrice = 0;
    let percentAfterDiscount = 0;
    
    if(days > 7){
        days -= 1;
    }
    
    switch(city){
        case "Bansko":
        case "Borovets":
     if (packet === "withEquipment"){
        totalPrice = days * 100;
        percentAfterDiscount = 0.90;
        
     } else if (packet === "noEquipment"){
        totalPrice = days * 80;
        percentAfterDiscount = 0.95;
        
    
     } else{
        console.log(`Invalid input!`);
        return;
     }
        break;
    
        case "Varna":
        case "Burgas":
         if (packet === "withBreakfast"){
            totalPrice = days * 130;
            percentAfterDiscount = 0.88;
         } else if (packet === "noBreakfast"){
            totalPrice = days * 100;
            percentAfterDiscount = 0.93;
            
         } else {
            console.log(`Invalid input!`);
            return;
         }
         break;
         default:
            console.log(`Invalid input!`);
            return;

    }
        if(vipStatus === "yes"){
            totalPrice *= percentAfterDiscount;
            ;
        }
    
      
    console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
     }
    
    
    travelAgency(["Gabrovo",
    "noBreakfast",
    "no",
    "3"])