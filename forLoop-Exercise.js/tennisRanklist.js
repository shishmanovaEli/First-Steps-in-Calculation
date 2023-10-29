function tennisRankList (input){
let tournamentsCount = Number(input[0]);
let startingPoints = Number(input[1]);

let pointsWon = 0;
let tournamentsWon = 0;

for(let i= 2; i <= tournamentsCount + 1; i++){
    let curResult = input[i];
    if(curResult === 'W'){
pointsWon += 2000;
tournamentsWon ++;
        } else if (curResult === 'F') {
            pointsWon += 1200;
        } else {
            pointsWon += 720;
        }
}
 let totalPoints = startingPoints + pointsWon;
 console.log (`Final points: ${totalPoints}`);
 let avgPoint = Math.floor(pointsWon / tournamentsCount);  
 console.log(`Average points: ${avgPoint}`)
let tournamentsPerscent = (tournamentsWon / tournamentsCount) * 100;
console.log(`${tournamentsPerscent.toFixed(2)}%`)

}

tennisRankList (["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])