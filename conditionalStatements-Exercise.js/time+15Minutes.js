function time15Minutes (input){
let hours = Number(input[0]);
let minutes = Number (input[1]);
let totalMins= hours * 60 + minutes + 15;
let finalHours =Math.floor(totalMins / 60);
let finalMinutes = totalMins % 60;

if (finalHours === 24) {
    finalHours = 0;
}

if (finalMinutes < 10) {
    console.log(`${finalHours}:0${finalMinutes}`);
} else {
console.log(`${finalHours}:${finalMinutes}`);

}
    
}

time15Minutes (["23", "59"])