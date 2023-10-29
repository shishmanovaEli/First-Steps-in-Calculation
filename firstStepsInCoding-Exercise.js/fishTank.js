function fishTank (input){
    // 1. Дължина в см – цяло число в интервала [10 … 500]
    // 2. Широчина в см – цяло число в интервала [10 … 300]
    // 3. Височина в см – цяло число в интервала [10… 200]
    // 4. Процент  – реално число в интервала [0.000 … 100.000] 
 let lengthInCm = Number(input[0]);
 let widthInCm = Number(input[1]);
 let heightInCm = Number (input[2]);
 let percent = Number (input[3]);
 let volumeOfAquarium = lengthInCm * widthInCm * heightInCm;
 let volumeInLiters = volumeOfAquarium * 0.001;
 let litersNeeded = volumeInLiters * (1 - 0.17);
 console.log (litersNeeded)
}
 fishTank(["85", "75", "47", "17"])