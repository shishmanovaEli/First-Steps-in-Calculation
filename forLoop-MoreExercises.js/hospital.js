function hospital(input){
let period = Number(input[0]);
let doctorCount = 7;
let unexaminedPatients = 0;
let examinedPatients = 0;


for (let i = 1; i <= period; i++){
    let patients = Number(input[i]);
    if (i % 3 === 0 && unexaminedPatients > doctorCount) {
        doctorCount++
    }
if (patients <= doctorCount){
    examinedPatients += patients;
} else {
    examinedPatients += doctorCount;

    unexaminedPatients += patients - doctorCount;

}
}
console.log(`Treated patients: ${examinedPatients}.`);
console.log(`Untreated patients: ${unexaminedPatients}.`);

}
hospital ([3,7,7,7])