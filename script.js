
//PART 1
var name = prompt("Hi, What is your name?");
var job = prompt(`Hi, ${person}! What do you do?`);
var doYouLikeIt = prompt("Interesting! Do you love being a Developer?");

if (doYouLikeIt === 'yes') {
    doYouLikeIt = "does"
}else {
    doYouLikeIt = "does not"
}

console.log(`${name} is a ${job} and ${doYouLikeIt} like it!`)


//PART 2

var name = prompt("Hello! What is your name?");
var color = prompt("Choose a color. Red, Green, or Yellow");


if (color === 'Red' || color == 'red') {
    console.log ("You chose RED")
}else if (color === 'Green' || color === 'green'){
    console.log ("You chose GREEN")
}else if (color === 'Yellow' || color === 'yellow') {
    console.log ("You chose YELLOW")
}

console.log(`${name} chose the color ${color}`)

//PART 3
function part3(num) {
    if (num < 5) {
        return("Tiny")
    }else if (num < 10) {
        return("Small")
    }else if(num < 15) {
        return("Medium")
    }else if(num < 20) {
        return("Large")
    }else if(num === 20) {
        return("Huge")
    }
}
    console.log(part3(14))

/*  
Part 4
Write a series of JS statements that prompt a user for their name, 
rate of pay, and hours worked per week. The program needs to compute the
 total pay for the employee. If the hours worked are greater than 40, use 1.5
  for the overtime rate. Print the result to the console in a sentence.

Ex: Leah worked a total of 35 hours receiving a pay of $350.
*/

    var name = prompt("Hi, What is your name?");
    var payRate = prompt("Whats your pay rate?")
    var hours = prompt("How many hours do you work?")

    var totalPay;

    if (hours > 40 ) {
        totalPay = (payRate * 1.5) * hours
    }else {
        totalPay = payRate * hours
    }
   
    console.log(`${name} worked a total of ${hours} receiving a pay of $${350}.`)
