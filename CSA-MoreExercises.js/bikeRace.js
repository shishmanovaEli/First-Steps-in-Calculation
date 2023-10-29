function bikeRace(input){
    let juniorCyclists = Number(input[0]);
    let seniorCyclists = Number(input[1]);
    let trackType = input[2];
    
    let taxJuniors = 0;
    let taxSeniors = 0;
   

    switch (trackType) {
        case 'trail':
            taxJuniors = 5.50;
            taxSeniors = 7;
            break;
 
        case 'cross-country':
            taxJuniors = 8;
            taxSeniors = 9.50;
            break;
 
        case 'downhill':
            taxJuniors = 12.25;
            taxSeniors = 13.75;
            break;
 
        case 'road':
            taxJuniors = 20;
            taxSeniors = 21.50;
            break;
    }
    

let allTaxesJuniors = taxJuniors * juniorCyclists;
let allTaxesSeniors = taxSeniors * seniorCyclists;   
let amountDonated = (allTaxesJuniors + allTaxesSeniors) - (allTaxesJuniors + allTaxesSeniors) * 0.05;
    
      
    if ( trackType === 'cross-country' && (juniorCyclists + seniorCyclists) >= 50){
        amountDonated *= 0.75;
    }
    
    console.log(`${amountDonated.toFixed(2)}`);

    }
    
 
bikeRace ([21, 26, 'cross-country'])