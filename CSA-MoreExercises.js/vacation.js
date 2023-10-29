function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let location = "";
    let accommodation = "";
if( budget <= 1000){
    accommodation = "Camp";
    switch(season){
        case "Summer":
            location = "Alaska";
            budget *= 0.65;
            break;
        case "Winter":
            location = "Morocco";
            budget *= 0.45;
            break;
    }
} else if (budget > 1000 && budget <= 3000){
    accommodation = "Hut";
    switch(season){
        case "Summer":
            location = "Alaska";
            budget *= 0.80;
            break;
        case "Winter":
            location = "Morocco";
            budget *= 0.60;
            break;
        } 
} else {
    accommodation = "Hotel";
    switch(season){
        case "Summer":
            location = "Alaska";
            budget *= 0.90;
            break;
        case "Winter":
            location = "Morocco";
            budget *= 0.90;
            break;
        } 
    }
    console.log(`${location} - ${accommodation} - ${budget.toFixed(2)}`);

}
vacation ([800, "Summer"])