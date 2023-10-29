function transportPrice (input){
    let n = Number(input[0]);
    let dayOrNight = input[1];
    let distance = 0; 
    
    if (n < 20){
               if (dayOrNight  === "day"){
                distance = (n * 0.79) + 0.70;
            } else {
                distance = (n * 0.90) + 0.70;
             
        } }
    else if (n >= 20 && n < 100){
                distance = n * 0.09;
            } else {
                distance = n * 0.06;
         
        }
      
            console.log (distance.toFixed(2));
    }

transportPrice ([20, 'day'])