// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 17;
alert("I am " + age + " years old");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page.
var visitCount = localStorage.getItem('visitCount') || 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);
document.getElementById('visitCount').textContent = "You have visited this site " + visitCount + " times.";

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = 2006;
document.getElementById('birthYearMsg').textContent = "My birth year is " + birthYear + ". Data type of my declared variable is " + typeof birthYear + ".";

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;

// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
document.getElementById('orderInfo').textContent = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";
