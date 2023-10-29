function worldSwimmingRecord (input){

let recordInSeconds = Number(input[0]);
let distanceInMeters = Number(input[1]);
let timeInSecondsOfM = Number(input[2]);
let toSwimAcross = distanceInMeters * timeInSecondsOfM;
let every15Min = Math.trunc (distanceInMeters / 15) * 12.5;
let totalTime = toSwimAcross + every15Min;

if (totalTime < recordInSeconds){
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
} else if (totalTime >= recordInSeconds){

      let notEnough = totalTime - recordInSeconds;
    console.log(`No, he failed! He was ${notEnough.toFixed(2)} seconds slower.`)
}
}


 worldSwimmingRecord (["55555.67",
 "3017",
 "5.03"])