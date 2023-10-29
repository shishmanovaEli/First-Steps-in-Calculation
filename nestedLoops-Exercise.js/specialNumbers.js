function specialNumbers(input){
let n = Number(input[0]);
let specialNumCaunter = "";


for (let specialNum = 1111; specialNum <= 9999; specialNum++ ){
    let isValid = true;
    let specialNumStr = specialNum.toString();

    for( let index = 0; index < specialNumStr.length; index++){
        let curDigit = Number(specialNumStr[index]);
           
        if ( n % curDigit !== 0){
            isValid = false;
                break;
        }
        
    }
     if (isValid){
        specialNumCaunter += specialNumStr + " ";
       
     }
     
    }
    console.log(specialNumCaunter);
    }
specialNumbers (["16"])