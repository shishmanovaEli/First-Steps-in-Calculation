function pipesInPool (input){
let poolVolLtrs = Number(input[0]);
let p1 = Number(input[1]);
let p2 = Number(input[2]);
let hours = Number(input[3]);

let pipeOneDebit = (p1 * hours);
let pipeTwoDebit = (p2 * hours);

let poolVolFull = pipeOneDebit + pipeTwoDebit;
   
let poolVolPercent = (poolVolFull * 100) / poolVolLtrs;
let pipeOnePercent = (pipeOneDebit * 100) /  poolVolFull;
let pipeTwoPercent = (pipeTwoDebit * 100) / poolVolFull;
    
if (poolVolLtrs >= poolVolFull){
console.log(`The pool is ${poolVolPercent.toFixed(2)}% full. Pipe 1: ${pipeOnePercent.toFixed(2)}%. Pipe 2: ${pipeTwoPercent.toFixed(2)} %.`);
} else if (poolVolLtrs < poolVolFull) {
    let litersOver = (pipeOneDebit + pipeTwoDebit) - poolVolLtrs;
    console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${litersOver.toFixed(2)} liters.`);
}
}
pipesInPool ([1000, 100, 120, 3])