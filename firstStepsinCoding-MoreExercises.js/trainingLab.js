function trainingLab (input){
// От конзолата се четат 2 числа, по едно на ред: w (дължина в метри) и h (широчина в метри).
let w = Number (input[0]) * 100;
let h = Number (input [1]) * 100 - 100;
let desks = Math.floor (h / 70);
let rows = Math.floor (w / 120);
let total = (desks * rows) - 3;
console.log (total)



}

trainingLab ([15,8.9])