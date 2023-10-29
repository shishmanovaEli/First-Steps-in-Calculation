function fuelTank(input){
let typeOfFuel = input[0];
let litersOfFuel = Number(input[1]);

switch(typeOfFuel){
 case 'Diesel':
    if (litersOfFuel >= 25){
        console.log(`You have enough diesel.`);
    } else if (litersOfFuel < 25){
      console.log (`Fill your tank with diesel!`);
    }break;
 case 'Gasoline':
    if (litersOfFuel >= 25){
        console.log(`You have enough gasoline.`);
    } else if (litersOfFuel < 25){
      console.log (`Fill your tank with gasoline!`);
    }break;
 case 'Gas':
  if (litersOfFuel >= 25){
    console.log(`You have enough gas.`);
} else if (litersOfFuel < 25){
  console.log (`Fill your tank with gas!`);
} break;
default:   
     console.log(`Invalid fuel!`);
}}

fuelTank (['Gasoline', 40])