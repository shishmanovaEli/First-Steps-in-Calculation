function  onTimeForTheExam (input) {
let examTime = Number(input[0]);
let minuteOfExam = Number(input[1]);
let hourOfArrival = Number(input[2]);
let minuteOfArrival = Number(input[3]);

let totalExam = examTime * 60 + minuteOfExam;
let totalArrivalMin= hourOfArrival * 60 + minuteOfArrival ;
let diffMin = Math.abs(totalArrivalMin - totalExam);

let finalHours =Math.floor(diffMin / 60);
let finalMinutes = diffMin % 60;


switch (totalExam){
    case 'Late':
     if (totalArrivalMin > totalExam){
        console.log ('Late');
     }if (diffMin < 60){
        console.log (`${diffMin} minutes after the start`);
    } else if (finalMinutes < 10){
            console.log (`${finalHours}:0${finalMinutes} hours after the start`);
    } else  {
            console.log (`${finalHours}:${finalMinutes} hours after the start`);
    }break;
    case 'On time':
        if ( diffMin <= 30 && diffMin >=0 ){
            console.log ('on time');
        } else {
                console.log (`${finalMinutes} minutes before the start`);
            } break;
    case 'Early':

        if (diffMin < 60){
            console.log('Early');
            console.log (`${diffMin} minutes before the start`);
      } else if (finalMinutes < 10){
          console.log (`${finalHours}:0${finalMinutes}minutes before the start`);
        } else {
            console.log (`${finalHours}:${finalMinutes} hours before the start`);
            } break;
}
   
} 


onTimeForTheExam (["9",
"30",
"9",
"50"])