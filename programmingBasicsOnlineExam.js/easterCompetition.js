function easterCompetition(input){
let index = 0;
let breadCount = Number(input[index]);
index++;
let maxPoint = 0;
let bestBaker = "";

for(let curBread = 1; curBread <= breadCount; curBread++){
  let bakerName = input[index];
  index++;
  let command = input[index];
  index++;

  let totalPoints = 0;


  while (command !== "Stop"){
    let grade = Number(command);
     totalPoints += grade;

     command = input[index];
     index++;
  }


 console.log(`${bakerName} has ${totalPoints} points.`);

  if (totalPoints > maxPoint){
      maxPoint = totalPoints;
      bestBaker = bakerName;
      console.log(`${bakerName} is the new number 1!`);
      }
}

console.log(`${bestBaker} won competition with ${maxPoint} points!`);

}
easterCompetition (["3",
"Chef Manchev",
"10",
"10",
"10",
"10",
"Stop",
"Natalie",
"8",
"2",
"9",
"Stop",
"George",
"9",
"2",
"4",
"2",
"Stop"])