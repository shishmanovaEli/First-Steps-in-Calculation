function hervest (input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let workPeople = Number(input[3]);
    let totalGrapes = x * y;
    let wine = (totalGrapes * 0.40) / 2.5;
      
    if (wine >= z){
        console.log (`Good harvest this year! Total wine: ${Math.ceil(wine)} liters.`);
        console.log (`${Math.ceil(wine-z)} liters left -> ${Math.ceil((wine-z)/workPeople)} liters per person.`);
      } else {
        console.log (`It will be a tough winter! More ${Math.floor(z-wine)} liters wine needed.`);
    } 
}
hervest ([1020, 1.5, 425, 4])


