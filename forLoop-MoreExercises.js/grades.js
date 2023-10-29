function grades(input){
   let index = 0;
   let students = Number(input[index]);
   index++;
   let allGrades = 0;
   let gradesAbove5 = 0;
   let gradesTo5 = 0;
   let gradesTo4 = 0;
   let gradesTo3 = 0;
   
   for ( let i = 1; i <= students; i++){
      let currentGrade = Number(input[index]);

   if (currentGrade >= 5){
      gradesAbove5++;
   } else if (currentGrade >= 4){
      gradesTo5++;
   } else if (currentGrade >= 3){
     gradesTo4++;
   } else if ( currentGrade >= 2){
      gradesTo3++;
   }
  allGrades += currentGrade;
index++;
   }

   let averageSuccess = allGrades / students;
   let gradesAbove5Purcent = gradesAbove5 / students * 100;
   let gradesTo5Purcent = gradesTo5 / students * 100;
   let gradesTo4Purcent = gradesTo4 / students * 100;
   let gradesTo3Purcent = gradesTo3 / students * 100;

console.log(`Top students: ${gradesAbove5Purcent.toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${gradesTo5Purcent.toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${gradesTo4Purcent.toFixed(2)}%`);
console.log(`Fail: ${gradesTo3Purcent.toFixed(2)}%`);
console.log(`Average: ${averageSuccess.toFixed(2)}`);

}
grades([6,
   2,
   3,
   4,
   5,
   6,
   2.2])