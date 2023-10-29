function lunchBreak (input){
let serials = input[0];
let episodeLength = Number(input[1]);
let durationBreak = Number(input[2]);
let timeForLunch = durationBreak * (1 / 8); 
let timeToRelax = durationBreak * (1 / 4);
let timeLeft = durationBreak - timeForLunch - timeToRelax;
let totalOccupiedTime = timeForLunch + timeToRelax;
let movieTime = durationBreak - totalOccupiedTime;
if (movieTime >= episodeLength){
    let timeLeft = Math.ceil(movieTime - episodeLength); 
console.log(`You have enough time to watch ${serials} and left with ${timeLeft} minutes free time.`)

}else if ( timeLeft < episodeLength){
    let neededTime = Math.ceil(episodeLength - movieTime);
    console.log(`You don't have enough time to watch ${serials}, you need ${neededTime} more minutes.`)
}


}

lunchBreak (["Teen Wolf",
"48",
"60"])