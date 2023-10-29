function depositCalculator(input){
//1. Депозирана сума – реално число в интервала [100.00 … 10000.00]
//2. Срок на депозита (в месеци) – цяло число в интервала [1…12]
//3. Годишен лихвен процент – реално число в интервала [0.00 …100.00]
//сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
let depositSum = Number(input[0]);
let depositPeriod = Number(input[1]);
let annualIncreasePercent = Number( input[2]);
let annualIncreaseDecimal = annualIncreasePercent/ 100;
let finalSum = depositSum + depositPeriod * ((depositSum*annualIncreaseDecimal)/ 12);
console.log(finalSum);

}
depositCalculator(["200 ","3 ","5.7 "])