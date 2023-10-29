function matchTickets(input){
let budget = Number(input[0]);
let category = input[1];
let peopleCount = Number(input[2]);
let transport = 0;
let totalMoney = 0;
let ticketPrice = 0;

switch (category) {
    case 'Normal':
        ticketPrice = 249.99;
        break;
    case 'VIP':
        ticketPrice = 499.99;
        break;
}
 if (peopleCount <= 4){
    transport = budget * 0.75;
 } else if (peopleCount <= 9){
    transport = budget * 0.60;
    } else if (peopleCount <= 24){
    transport = budget * 0.50;
    } else if (peopleCount <= 49){
    transport = budget * 0.40;
 } else {
    transport = budget * 0.25; 
    }
    totalMoney =  (ticketPrice * peopleCount) + transport ; 

 if ( budget > totalMoney){
    let restMoney = budget - totalMoney;
    console.log (`Yes! You have ${restMoney.toFixed(2)} leva left.`)
 } else {
    let neededMoney = totalMoney - budget;
    console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`)
 }
}


matchTickets ([30000,'VIP', 49])