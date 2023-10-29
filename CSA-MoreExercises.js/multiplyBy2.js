function multiplyBy2(input){
let index = 0;
let number = 0;

while (number >= 0){
    number = input[index];
    index++
if (number < 0){
    console.log ('Negative number!');
} else {
    number *=2;
    console.log('Result: ' + number.toFixed(2));
}
}

}
multiplyBy2 ([23.43,
    12.3245,
    0,
    65.23432,
    23,
    65,
    -12])