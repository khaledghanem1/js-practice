/*
// 1: Create a userAge variable. if theyre over 21 console log "you're in", if not "sorry + age + is too young"
/*
var userAge = 0;
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
    console.log("you're in " + userAge)
}
else {
    console.log( "sorry " + userAge + " is too young")
}
*/
// 3: Create an array of 4 cities, if the first letter of the city is "c, a, l, or n" console log "I love that city + city"
/*
var arrayCities= ["chicago", "newyork", "atlanta", "cairo", "nebraska", "westmont","oakbrook"]

for (var i = 0; i < arrayCities.length; i++){
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
/*
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
*/

// 10 Create a function that takes in an array of different car brands. Create if statements for the brands you like and console log something
/*
function carBrands(carArray) {
    for (var index = 0; index < carArray.length; index ++) {
        if (carArray[index] === "nissan"){
            console.log(" I love nissan " + carArray[index])
        } else if (carArray[index] === "ford"){
            console.log("they are the best " + carArray[index])
        } else if (carArray[index] === "bmw"){
            console.log(" cool car " + carArray[index])
        }
    }
    }

carBrands(["nissan", "ford", "bmw"])

*/

// 11: Create a function that takes in an array of weather for each day i.e marchSecond = ["rain", "snow", "rain", "sunny"] and console log the weather for each day
/*
function weather(weatherArray){
    for (var index = 0; index < weatherArray.length; index ++){
        if (weatherArray[index] === "march first"){
            console.log("rain " + weatherArray[index])
        } else if (weatherArray[index] === "march second"){
          console.log("snow " + weatherArray[index])
        }
    }
}
weather(["march first", "march second", "march third", "march forth"]);

function weatherDaily(weatherArray) {
    console.log("Monday it will " + weatherArray[0]);
    console.log("Tuesday it will " + weatherArray[1]);
    console.log("Wednesday it will " + weatherArray[2]);
    console.log("Thursday it will " + weatherArray[3]);
    
}

weatherDaily(["rain", "snow", "sunny", "sleet"])
weatherDaily(["sunny", "rainy", "rainy", "snowy"])
*/
// 12: Create a car with 100 miles. Create a function called drive() that adds 10 miles to the car.
// Create a maintainance() function that sets the miles back to 0

// 13: Add a document.onkeyup to #12 that lets the user type 
//to drive and add miles to the car or "m" so it sets the miles to 0
// var carMile = 100;
// document.onkeyup = function(event) {
//  var userType = event.key;
//  console.log(userType)
 
//  function drive(){
//      carMile+= 10;
//      console.log(carMile + " car drives")
//  }

//  function maintainance(){
//      carMile= 0;
//      console.log(carMile + " car resets")
//  }

//     if(userType === "d"){
//         drive()
//     }else if (userType === "m"){
//         maintainance()
//     } else {
//         console.log("please type d or m")
//     }
// }

// jQuery + logic

//14: Create an empty div in your html with an ID. Create a variable name = "khaled".
// In the js file, show the name in your html div
var nameK = "khaled";
$("#person").append("sakina");
console.log($("#person").html(nameK));
 
// 15: Create another empty div. Have a variable for age set to 19.
// Create logic if the age variable under 21 the html will say'you cant enter', if theyre older, say "welcome"
/*
var age = 19;
if (age < 21){
    console.log("you cant enter ")
}
if (age > 21){
    console.log("Welcome ")
}
// 16: Create another empty div. Create a prompt that asks the users name and show "Your Name is" + their name in the html
let person = prompt("your name is " )
// 17: Create another empty div. Create a confirm that asks "do you like coffee",
// if true your html should say "you love coffe", if false your html should say 'how do you not like coffee'

*/



 


