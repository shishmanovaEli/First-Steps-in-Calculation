function moving(input){
let index = 0;
let width = Number(input[index]);
index++
let length = Number(input[index]);
index++
let height = Number(input[index]);
index++

let housingVolume = width * length * height;

let command = input[index];
index++;
while (command !== 'Done'){
    command = Number(command);
    housingVolume -= command;
    if (housingVolume <= 0){
        console.log(`No more free space! You need ${Math.abs(housingVolume)} Cubic meters more.`);
        break;
    }
    command = input[index];
    index++;

}
 if (command === 'Done'){
   console.log(`${housingVolume} Cubic meters left.`);
 }

}
moving (["10",
"1",
"2",
"4",
"6",
"Done"])