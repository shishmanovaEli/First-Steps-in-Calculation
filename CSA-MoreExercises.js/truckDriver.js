function truckDriver(input){
let season = input[0];
let kmForSeason = Number(input[1]);
let salary = 0;
if (kmForSeason <= 5000){
    switch(season){
        case "Spring":
        case "Autumn":
        
         salary += kmForSeason* 0.75 * 4;
     break;
         case "Summer":
           
            salary += kmForSeason * 0.9 * 4;
       break;
       case "Winter":
            salary += kmForSeason * 1.05 * 4;
    break;
    }
} else if ( kmForSeason > 5000 && kmForSeason <= 10000){
    switch(season){
        case "Spring":
        case "Autumn":
            salary += kmForSeason * 0.95 * 4;
     break;
         case "Summer":
            salary += kmForSeason * 1.1 * 4;
       break;
       case "Winter":
        salary += kmForSeason * 1.25 * 4;
    }
} else if (kmForSeason > 10000 && kmForSeason <= 20000){
    salary += kmForSeason * 1.45 * 4;

}
console.log((salary * 0.9).toFixed(2));
}
truckDriver (["Winter", 4350])