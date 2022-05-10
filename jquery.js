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
var carNumber = 0;
$("#list-1").on("click", function(){
    carNumber++
    $("#list-1").html("list "+carNumber)
})

$("#list-2").on("click", function(){
    carNumber++
    $("#list-2").html("list "+carNumber)
})

$("#list-3").on("click", function(){
    carNumber++
    $("#list-3").html("list "+carNumber)
})

//6: Create a list of different countries in html and everytime each one is clicked a number shows up next to it
var countryNumber = 0;
$("#list-4").on("click", function(){
    countryNumber++
    $("#list-4").html("list "+countryNumber)
})

$("#list-5").on("click", function(){
    countryNumber++
    $("#list-5").html("list "+countryNumber)
})

$("#list-6").on("click", function(){
    countryNumber++
    $("#list-6").html("list "+countryNumber)
})

//7: Create a h3 tag saying "where should I move?" where everytime its clicked it shows a random country from an array you create
var myArray = ["usa","canada", "uae"];
$("#random-country").on("click", function(){
    var randomCountry = myArray[Math.floor(Math.random()*myArray.length)];
    $("#random-country").html(++randomCountry)
    


})
//8: Create a button saying "which car should I buy" and everytime its clicked it shows a random car
var cars = ["nissan", "benz"]
$("#car").on("click", function(){
    var cars = cars[Math.floor(Math.random()*cars.length)];
    $("#car").html(cars)
})


});