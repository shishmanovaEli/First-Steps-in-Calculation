function trainTheTrainers(input){
let index = 0;
let gradesCount = Number(input[0]);
index++;
let command = input[index];
index++;
let totalGradesSum = 0;
let presentationCount = 0;

while (command !== "Finish"){
    let presentationName = command;
    let gradesSum = 0;
    for (let curGradeCount = 1; curGradeCount <= gradesCount; curGradeCount++){
        let curGrade = Number(input[index]);
        index++;
        gradesSum +=curGrade;


    }
    let avgGraade = gradesSum / gradesCount;
    console.log (`${presentationName} - ${avgGraade.toFixed(2)}.`);

     totalGradesSum += avgGraade;
     presentationCount ++;

    command = input[index];
    index++;
}
let totalAvgGrade = totalGradesSum / presentationCount;
 console.log(`Student's final assessment is ${totalAvgGrade.toFixed(2)}.`)

}
trainTheTrainers (["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])