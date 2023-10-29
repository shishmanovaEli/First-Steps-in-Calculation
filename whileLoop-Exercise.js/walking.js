function walking(input){
 let index = 0 ;
 let command = input[index];
 index++
 let realSteps = 0;

while (command !== 'Going home'){
    let stepsADay = Number(command);
          realSteps += stepsADay;

          if (realSteps >= 10000){
            console.log(`Goal reached! Good job!`);
            console.log(`${realSteps - 10000} steps over the goal!`);
            break;
        }
        
        command = input[index];
        index++;
    }
    if (command === "Going home"){
        let steps = Number(input[index]);
        realSteps+= steps;
    
    if (realSteps >= 10000){
        console.log(`Goal reached! Good job!`);
        console.log(`${realSteps - 10000} steps over the goal!`);
    } else {
        console.log(`${10000 - realSteps} more steps to reach goal.`);
    }
       
    }  
} 


walking(["1000",
"1500",
"2000",
"6500"])

