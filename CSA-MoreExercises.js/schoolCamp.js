function schoolCamp (input){
let season = input[0];
let typeGroup = input[1];
let studentsCount = Number(input[2]);
let nigthCount = Number(input[3]);
let sports = "";
let totalPrice = 0;

if( studentsCount >= 50){
    switch(season){
        case 'Winter':
   if  (typeGroup === 'girls'){
    sports = 'Gymnastics';
     totalPrice += (studentsCount * 9.60) * nigthCount;
break;
   } else if (typeGroup === 'boys'){
    sports = 'Judo';
    totalPrice += (studentsCount * 9.60) * nigthCount;
    break;
   } else if ( typeGroup === 'mixed'){
    sports = 'Ski';
    totalPrice += (studentsCount * 10) * nigthCount;
    break;
   } 
        case 'Spring':
     if  (typeGroup === 'girls'){
     sports = 'Athletics';
     totalPrice += (studentsCount * 7.20) * nigthCount;
      break;
   } else if (typeGroup === 'boys'){
    sports = 'Tennis';
    totalPrice += (studentsCount * 7.20) * nigthCount;
     break;
   } else if ( typeGroup === 'mixed'){
    sports = 'Cycling';
    totalPrice += (studentsCount * 9.50) * nigthCount;
   break;
    }  

        case 'Summer':
    if  (typeGroup === 'girls'){
     sports = 'Volleyball';
     totalPrice += (studentsCount * 15.00) * nigthCount;
    break;
    } else if (typeGroup === 'boys'){
    sports = 'Football';
   totalPrice += (studentsCount * 15.00) * nigthCount;
    break;
     } else if ( typeGroup === 'mixed'){
     sports = 'Swimming';
     totalPrice += (studentsCount * 20.00) * nigthCount;
     break;
    }  

    }
    totalPrice -= totalPrice * 0.5;
} else if (studentsCount >= 20 && studentsCount < 50) {
    switch(season){
        case 'Winter':
   if  (typeGroup === 'girls'){
    sports = 'Gymnastics';
     totalPrice += (studentsCount * 9.60) * nigthCount;
break;
   } else if (typeGroup === 'boys'){
    sports = 'Judo';
    totalPrice += (studentsCount * 9.60) * nigthCount;
    break;
   } else if ( typeGroup === 'mixed'){
    sports = 'Ski';
    totalPrice += (studentsCount * 10) * nigthCount;
    break;
   } 
        case 'Spring':
     if  (typeGroup === 'girls'){
     sports = 'Athletics';
     totalPrice += (studentsCount * 7.20) * nigthCount;
      break;
   } else if (typeGroup === 'boys'){
    sports = 'Tennis';
    totalPrice += (studentsCount * 7.20) * nigthCount;
     break;
   } else if ( typeGroup === 'mixed'){
    sports = 'Cycling';
    totalPrice += (studentsCount * 9.50) * nigthCount;
   break;
    }  

        case 'Summer':
    if  (typeGroup === 'girls'){
     sports = 'Volleyball';
     totalPrice += (studentsCount * 15.00) * nigthCount;
    break;
    } else if (typeGroup === 'boys'){
    sports = 'Football';
   totalPrice += (studentsCount * 15.00) * nigthCount;
    break;
     } else if ( typeGroup === 'mixed'){
     sports = 'Swimming';
     totalPrice += (studentsCount * 20.00) * nigthCount;
     break;
    }  

    }
    totalPrice -=  totalPrice * 0.15;
} else if (studentsCount >= 10 && studentsCount < 20){
    switch(season){
        case 'Winter':
   if  (typeGroup === 'girls'){
    sports = 'Gymnastics';
     totalPrice += (studentsCount * 9.60) * nigthCount;
break;
   } else if (typeGroup === 'boys'){
    sports = 'Judo';
    totalPrice += (studentsCount * 9.60) * nigthCount;
    break;
   } else if ( typeGroup === 'mixed'){
    sports = 'Ski';
    totalPrice += (studentsCount * 10) * nigthCount;
    break;
   } 
        case 'Spring':
     if  (typeGroup === 'girls'){
     sports = 'Athletics';
     totalPrice += (studentsCount * 7.20) * nigthCount;
      break;
   } else if (typeGroup === 'boys'){
    sports = 'Tennis';
    totalPrice += (studentsCount * 7.20) * nigthCount;
     break;
   } else if (typeGroup === 'mixed'){
    sports = 'Cycling';
    totalPrice += (studentsCount * 9.50) * nigthCount;
   break;
    }  

       case 'Summer':
    if  (typeGroup === 'girls'){
     sports = 'Volleyball';
     totalPrice += (studentsCount * 15.00) * nigthCount;
    break;
    } else if (typeGroup === 'boys'){
    sports = 'Football';
   totalPrice += (studentsCount * 15.00) * nigthCount;
    break;
     } else if ( typeGroup === 'mixed'){
     sports = 'Swimming';
     totalPrice += (studentsCount * 20.00) * nigthCount;
     break;
    }  

    }
    totalPrice -= totalPrice * 0.05;
} else {
    switch(season){
        case 'Winter':
   if  (typeGroup === 'girls'){
    sports = 'Gymnastics';
     totalPrice += (studentsCount * 9.60) * nigthCount;
break;
   } else if (typeGroup === 'boys'){
    sports = 'Judo';
    totalPrice += (studentsCount * 9.60) * nigthCount;
    break;
   } else if ( typeGroup === 'mixed'){
    sports = 'Ski';
    totalPrice += (studentsCount * 10) * nigthCount;
    break;
   } 
        case 'Spring':
     if  (typeGroup === 'girls'){
     sports = 'Athletics';
     totalPrice += (studentsCount * 7.20) * nigthCount;
      break;
   } else if (typeGroup === 'boys'){
    sports = 'Tennis';
    totalPrice += (studentsCount * 7.20) * nigthCount;
     break;
   } else if ( typeGroup === 'mixed'){
    sports = 'Cycling';
    totalPrice += (studentsCount * 9.50) * nigthCount;
   break;
    }  

        case 'Summer':
    if  (typeGroup === 'girls'){
     sports = 'Volleyball';
     totalPrice += (studentsCount * 15.00) * nigthCount;
    break;
    } else if (typeGroup === 'boys'){
    sports = 'Football';
   totalPrice += (studentsCount * 15.00) * nigthCount;
    break;
     } else if ( typeGroup === 'mixed'){
     sports = 'Swimming';
     totalPrice += (studentsCount * 20.00) * nigthCount;
     break;
    }  

    }

}

console.log(`${sports} ${totalPrice.toFixed(2)} lv.`)


} 
schoolCamp (['Winter', 'mixed', 9, 15])