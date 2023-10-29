function salary(input){
let openTabsCount = Number(input[0]);
let salary = Number(input[1]);


for (i = 2; i <= openTabsCount + 1; i++ ){
    browser = input[i];
    if (browser === 'Facebook'){
        salary -= 150;
    }else if (browser === 'Instagram'){
        salary -= 100;
    } else if (browser === 'Reddit'){
       salary -= 50;
}}

if (salary <= 0){
    console.log (`You have lost your salary.`);

} else {console.log(salary);  
}
}

salary (["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])