// 1: Create a userAge variable. if theyre over 21 console log "you're in", if not "sorry + age + is too young"
/*
var userAge = 65;
if (userAge >= 21) {
    console.log("you're in")
} else  {
    console.log("sorry " + userAge + " is too young")
}
*/
// 2: Get a users age using a prompt/confirm, if theyre over 21 console log "you're in", if not "sorry + age + is too young"
/*
var userAge = prompt("If you are over 21 ")  
if (userAge >= 21) {
    console.log("you're in 44" + userAge)
}
else {
    console.log( "sorry " + userAge + " is too young")
}
*/
// 3: Create an array of 4 cities, if the first letter of the city is "c, a, l, or n" console log "I love that city + city"
/* 
var   arrayCities= ["chicago", "newyork", "atlanta", "cairo", "nebraska", "westmont","oakbrook"]

for (var  i = 0; i < arrayCities.length; i++){
    console.log(arrayCities[i]);
    if (arrayCities[i].charAt(0) === "c" || arrayCities[i].charAt(0) === "a" ||arrayCities[i].charAt(0) === "l" ||arrayCities[i].charAt(0) === "n")
    console.log("I love that city! " + arrayCities[i])
    else {
        console.log("I wish I could relate " + arrayCities[i])
    }
}

*/

// 4: Create an array of 7 cities, for loop through the array and create an if for each one. For exmaple: if chicago, say "I live in Chicago". If "New York", say "New york is so fun"
/*
var arrayCities = ["chicago","newyork", "atlanta", "cairo", "nebraska", "westmont","oakbrook"]
for (var i = 0; i < arrayCities.length; i++){
    console.log(arrayCities[i]);
    

    if (arrayCities[i] === "chicago"){
    console.log("I live in chicago")

    } else if  (arrayCities[i] === "newyork"){
    console.log("I've bean to new york once!")
                                
    } else if  (arrayCities[i] === "atlanta"){
    console.log("I passed through atlanta before ")

    } else if (arrayCities[i] === "cairo"){
    console.log("I grew up in Cairo!")
    }
    else if (arrayCities[i] === "nebraska"){
        console.log(" Nebraska is too cold")
        }
     else if (arrayCities[i] === "westmont"){
         console.log(" I live in westmont")
            }
     else if (arrayCities[i] === "oakbrook"){
                console.log(" I used to live in oakbrook")
                }
}
*/
// 5: Create an array of 8 names, if the first letter is "s, a, or k" say "name + starts with an s, a, or k"
/*
var names  = ["sakina", "khaled", "omar", "ali", "sophia", "mazen", "dika", "rami"]

for (var i = 0; i < names.length; i++){
    console.log(names[i]);
    if( names[i][0] === "s" || names[i][0] === "k" ||names[i][0] === "a") {
        console.log(names[i] + " starts with s,a, or k")
    }
}
    
*/

// 6: Create a function that takes in 2 numbers. If these numbers = 10, console log them. If not, dont do anything
  /*
function numberAdder( a, b ){
        console.log(a + b);
        if (a + b === 10){    
        console.log("yes there are a total of 10")
        }
        
    }
    
     numberAdder(6,5);
 

*/

// 7 Create a function that checksAge, if theyre over 21 console log "you're in", if not "sorry + age + is too young". Test your function 4 times with different ages
/*
var age = 21;
function checksAge(age){
if (age >= 21){
console.log(age +" you're in " );
} else {
    console.log("sorry " + age + " is too young")
}
}
checksAge(11)
checksAge(111)
checksAge(1.1)
checksAge(-2)
checksAge(21)
checksAge(26)
*/


// 8: Create a function that finds the total price for tshirts. 
//Each tshirt costs $3. You will pass in the amount of tshirts they want to buy, multiply it by 3, and console.log "you owe: + price"
/*
function totalPrice(a, b){
console.log ("you owe:",+ (a * b) + "$ price");
}


totalPrice(3,3)
totalPrice(3,6)
totalPrice(3,2)
totalPrice(3,1)
*/
// 9: Get a users families names (prompts), add those to an array (this will be empty at first) (use .push()),
// then see which names begin with an "a", say "a is so cool + name". 
//See which names end with a d, say "thats so lit + the name"

var familiesNames= [];

for (var i = 0; i < 3; i++){
    var getNames= prompt("Name a member in your family? ")  
    console.log(getNames)
    familiesNames.push(getNames)
}
console.log(familiesNames)
for ( var j = 0; j < familiesNames.length; j++){
    if (familiesNames[j][0] === "a"){
        console.log(" a is a cool name "+ familiesNames[j])
    }   
    if(familiesNames[j].charAt(1) === "d"){
          console.log(" thats so lit " + familiesNames[j])
    }
}