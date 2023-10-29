function sleepyTomCat (input){
let dayOffPerYear = Number(input[0]);
let differenceNorm = 0;
let workingDays = 365 - dayOffPerYear;
let gameTime = (workingDays * 63) + (dayOffPerYear * 127);


if  ( differenceNorm = gameTime - 30000){
    finalHours = Math.floor(differenceNorm / 60);
     finalMinutes = differenceNorm % 60;
} if (gameTime >= 30000){
    console.log ('Tom will run away');
    console.log (`${finalHours} hours and ${finalMinutes} minutes more for play`);
} else if (gameTime < 30000){
    differenceNorm = 30000 - gameTime;
    finalHours = Math.floor(differenceNorm / 60);
     finalMinutes = differenceNorm % 60;
    console.log ('Tom sleeps well');
    console.log (`${finalHours} hours and ${finalMinutes} minutes less for play`);
}
  
} 


sleepyTomCat ([113])


