function cake(input){
let index = 0;
let width = Number(input[index]);
index++
let length = Number(input[index]);
index++

let command = input[index];
index++;

let totalPieces = width * length;

while (command !== 'STOP'){
    let cakePieces = Number(command);

    totalPieces -= cakePieces;
if (totalPieces <= 0){
    console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`)
break;

}

 command = input[index];
index++;

if (command === 'STOP'){
    console.log(`${totalPieces} pieces are left.`);
}
}


}
cake (["10",
"2",
"2",
"4",
"6",
"STOP"])