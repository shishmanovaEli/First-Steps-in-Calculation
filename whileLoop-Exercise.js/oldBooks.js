function oldBooks(input){
let index = 0;
let bookSearched = input[index];
index++;
let command = input[index];
index++
let booksChecked = 0;

while (command !== 'No More Books'){
    if (command === bookSearched){
        console.log(`You checked ${booksChecked} books and found it.`);
        break;
    }
    booksChecked++  
    command = input[index];
    index++ 
}
 if ( command ==='No More Books' ){
        console.log("The book you search is not here!");
        console.log (`You checked ${booksChecked} books.`);
 }

}
oldBooks (["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])