function fruitShop (input){
// (banana / apple / orange / grapefruit / kiwi / pineapple / grapes)
let type = input [0];
let day = input [1];
let quantity = Number (input[2]);
let sum = 0;

if ( day === "Monday" || day ==="Tuesday" || day ==="Wednesday" || day ==="Thursday" || day === "Friday" ){ 

 switch (type) {
    case "banana": sum = quantity * 2.50; break;
    case "apple": sum = quantity * 1.20; break;
    case "orange": sum = quantity * 0.85; break;
    case "grapefruit": sum = quantity * 1.45; break;
    case "kiwi": sum = quantity * 2.70; break;
    case "pineapple":sum = quantity * 5.50; break;
    case "grapes": sum =quantity * 3.85; break;
    default: console.log("error"); break;
} 
}  else if  ( day === "Saturday" || day ==="Sunday"){
    switch (type) {
        case "banana": sum = quantity * 2.70; break;
        case "apple": sum = quantity * 1.25; break;
        case "orange": sum = quantity * 0.90; break;
        case "grapefruit": sum = quantity * 1.60; break;
        case "kiwi": sum = quantity * 3.00; break;
        case "pineapple": sum = quantity * 5.60; break;
        case "grapes": sum = quantity * 4.20; break;
        default: console.log ("Error"); break;
       
    } 
} else {
    console.log("error")
   } if (sum > 0){

console.log(sum.toFixed(2))

   }
}


fruitShop (["tomato",
"Monday",
"0.5"])