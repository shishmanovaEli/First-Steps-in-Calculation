function celsiusToFahrenheit (input){
// T (° F) = T (° C) × 9/5 + 32
let celsius = Number(input[0]);
let fahrenheit = celsius * 9/5 + 32;
console.log( fahrenheit.toFixed(2));
}

celsiusToFahrenheit ([25])