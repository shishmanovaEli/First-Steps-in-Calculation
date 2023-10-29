function minNumber(input){
    let index =  0;
    let command = input[index];
    index++;
    
    let myMaxNumber = Number.MAX_SAFE_INTEGER;
    
    while (command !== "Stop") {
        let num = Number(command);
        if (myMaxNumber > num){
            myMaxNumber = num;
        }
     
        command = input[index];
        index++
        
    }
     console.log (myMaxNumber);

}
minNumber (["100",
"99",
"80",
"70",
"Stop"])