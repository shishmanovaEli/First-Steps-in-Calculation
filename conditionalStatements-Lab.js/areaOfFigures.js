function areaOfFigures (input){
let type = input[0];
if ( type ==="square"){
    let side = Number (input[1]);
    let result = side * side;
    console.log( result.toFixed(3));
} else if ( type === "rectangle") {
    let sideA = Number(input[1]);
    let sideB = Number(input[2]);
    let result = sideA * sideB;
    console.log (result.toFixed(3));
} else if ( type === "circle") {
let r = Number(input[1]);
  result = Math.PI * Math.pow(r,2);
  console.log (result.toFixed(3));
} else {
    let side = Number(input[1]);
    let h = Number( input[2]);
    result = side * h / 2;
    console.log (result.toFixed(3));

}
}

areaOfFigures (["circle", "6"])