function triangleArea (input){
//  формулата за лице на триъгълник: area = a * h / 2.
 let a = Number (input[0]);
 let h = Number (input [1]);
 let area = a * h / 2
 console.log (area.toFixed(2));
}

triangleArea ([20, 30])