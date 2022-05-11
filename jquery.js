//1: Create a button that says "click me", and when its clicked it alerts "this is clicked"
$(document).ready(function() {

    $("#click-me").on("click", function() {
        alert("this is clicked")
    })
//2: Create a h3 tag that says "click me", and when its clicked the html says "this is clicked"
$("#click-me-again").on("click", function() {
    $("#click-me-again").html("this is clicked")
})
//3: Create a gymCounter and everytime its clicked it alerts how many times theyve been to the gym
var gymCounter = 0;
$("#gym").on("click", function(){
    gymCounter++;
    $("#gym")
    alert("how many time have been clicked " + gymCounter)
})
//4: Create a gymCounter and everytime its clicked put the number in the html
var gymCounter = 0;
$("#gym-counter").on("click", function(){
    gymCounter++;
    $("#gym-counter").html("my current gym count is: "+gymCounter);
alert("clicked")
})

//5: Create a list of different cars in html and everytime its clicked the number shows up next to it
var fordNumber = 0;
$("#list-1").on("click", function(){
    fordNumber++
    $("#list-1 span").html(" " + fordNumber)
})
var benzNumber = 0;
$("#list-2").on("click", function(){
    benzNumber++
    $("#list-2 span").html(" " + benzNumber)
})
var nissanNumber = 0;
$("#list-3").on("click", function(){
    nissanNumber++
    $("#list-3 span").html(" " + nissanNumber)
})

//6: Create a list of different countries in html and everytime each one is clicked a number shows up next to it
var countryFrance = 0;
$("#list-4").on("click", function(){
    countryFrance++
    $("#list-4 span").html(" " + countryFrance)
})
var countryEgypt = 0;
$("#list-5").on("click", function(){
    countryEgypt++
    $("#list-5 span").html(" " + countryEgypt)
})
var countryCanada = 0;
$("#list-6").on("click", function(){
    countryCanada++
    $("#list-6 span").html(" " + countryCanada)
})

//7: Create a h3 tag saying "where should I move?" where everytime its clicked it shows a random country from an array you create
var myArray = ["usa","canada", "uae"];
$("#random-country").on("click", function(){
    var randomCountry = myArray[Math.floor(Math.random()*myArray.length)];
    $("#random-country span").html(randomCountry)
    


})
//8: Create a button saying "which car should I buy" and everytime its clicked it shows a random car
var carArray = ["nissan", "benz"]
$("#car").on("click", function(){
    var carRandom = carArray[Math.floor(Math.random()*carArray.length)];
    $("#car span").html(carRandom)
})

//9: Create an array of cars and loop through and then show it in the html
var array = ["bmw","benz","mustang"]
 for (let index = 0; index < array.length; index++) {
     const item = array[index];
     console.log(item)
     $("#auto span").append(item + " ") 
 }

// 10: create a function that takes in an array and shows the values in the html

// 11: create an object about a person like name, address, phone number and show the values in the html

// 12: Create a function that takes in an object and then shows the values in the html


});