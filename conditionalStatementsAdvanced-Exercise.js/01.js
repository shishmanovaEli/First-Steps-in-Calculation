function onTimeForExam (input){
    let examHour = Number (input[0]);
    let examMinutes = Number (input[1]);
    let arrivalHour = Number (input[2]);
    let arrivalMinutes = Number (input[3]);
 
    let totalExamMinutes = (examHour * 60) + examMinutes;
    let totalArrivalMinutes = (arrivalHour * 60) + arrivalMinutes;
    let diffMint = Math.abs(totalArrivalMinutes - totalExamMinutes);
    let hour = Math.floor (diffMint /60 );
        let mint = diffMint % 60;
    
    
 
    if (totalExamMinutes < totalArrivalMinutes){
        console.log ("Late");
        
        if (diffMint < 60 ){
          console.log (`${diffMint} minutes after the start`);
         
    } else if (mint < 10){
            console.log (`${hour}:0${mint} hours after the start`);
        } else{
            console.log (`${hour}:${mint} hours after the start`);
        }
        
 } else if (totalExamMinutes === totalArrivalMinutes || totalExamMinutes - totalArrivalMinutes <= 30){
       console.log ("On time");
       if (diffMint != 0){
        console.log (`${mint} minutes before the start`);
       }
    } else{
        console.log ("Early");
        if (diffMint <60){
            console.log (`${diffMint} minutes before the start`);
        
    } else if (mint < 10){
            console.log (`${hour}:0${mint} hours before the start`);
        } else{
            console.log (`${hour}:${mint} hours before the start`);
        }
        
    }
 
 
}
onTimeForExam (["16",
"00",
"17",
"00"])