/*
As a diligent student, I want to reward myself if I finish my homework,
and based on the time of day. The function 'chooseTreat' selects the correct treat based on conditions:

I want a latte if it's before 10 am
I want a hot chocolate it's between 10 am and 4 pm
I want ice cream between 4 pm - 10 pm.
If it's after 10 pm, I don't want anything other than sleep!

Feature 1
Building off the MVP, if I'm up for ice cream, I want strawberry - but only 
if it's Wednesday. Otherwise, I want vanilla.
*/

function chooseTreat(timeOfDay, weekDay, treats){ // This function returns a string with the choice of treat based on time of day and day of week
    if (timeOfDay < 10){ // if the time is before 10:00am
        return "latte";
    } else if (timeOfDay < 16){ // if the time is after 10:00am but before 4:00pm
        return "hot chocolate";
    } else if (timeOfDay < 22){  // if the time is after 4:00pm but before 10:00pm
                // ice cream
        if (weekDay == "Wednesday"){ // On Wednesday, choose strawberry ice cream flavor
            return "strawberry ice cream";
        } else { // any day except Wednesday, choose vanilla ice cream
            return "vanilla ice cream";
        }
    } else {  // if the time is after 10:00pm
        return "no treat, sleep instead";
    }
}

var timeOfDay = 10; // time of day in 24-hour, rounded to the nearest hour
var weekDay = "Monday"; // Day of week Sunday-Saturday
var treats = ["ice cream", "hot chocolate", "cookies", "tea", "candy", "cake"]; // an array of treats to choose from
console.log(chooseTreat(timeOfDay,weekDay,treats)); // call function to decide on treat


/*
Feature 2 (hard) - Optional
Building off Feature 1, I want to adjust the current conditions and add a new
option so that if the time is between 3 pm - 6 pm, I want to have it pick either
ice cream or hot chocolate depending on if the time is even or odd.
*/

function chooseTreat(timeOfDay, weekDay, treats){ // This function returns a string with the choice of treat based on time of day and day of week
    if (timeOfDay < 10){ // if the time is before 10:00am
        return "latte";
    } else if (timeOfDay < 15){ // if the time is after 10:00am but before 3:00pm
        return "hot chocolate";
    } else if (timeOfDay < 18){ // if the time is after 3:00pm but before 6:00pm
        if (timeOfDay%2 === 0){ // is time of day is even?
            return ("ice cream"); //  time of day is even
        } else {
            return "hot chocolate"; //  time of day is odd
        }
    } else if (timeOfDay < 22){  // if the time is after 6:00pm but before 10:00pm
                // ice cream
        if (weekDay == "Wednesday"){ // On Wednesday, choose strawberry ice cream flavor
            return "strawberry ice cream";
        } else { // any day except Wednesday, choose vanilla ice cream
            return "vanilla ice cream";
        }
    } else {  // if the time is after 10:00pm
        return "no treat, sleep instead";
    }
}

var timeOfDay = 19; // time of day in 24-hour, rounded to the nearest hour
var weekDay = "Wednesday"; // Day of week Sunday-Saturday
var treats = ["ice cream", "hot chocolate", "cookies", "tea", "candy", "cake"]; // an array of treats to choose from
console.log(chooseTreat(timeOfDay,weekDay,treats)); // call function to decide on treat


/*
Feature 3 (super hard) - Optional
Building off Feature 2, I want my options for the 3 pm - 6 pm slot to be a random
selection: if the time is even, I want my selections to be ice cream, cookies, or
candy. If the time is odd, I want my selections to be hot chocolate, tea, or cake.
*/

function chooseTreat(timeOfDay, weekDay, treats){ // This function returns a string with the choice of treat based on time of day and day of week
    if (timeOfDay < 10){ // if the time is before 10:00am
        return "latte";
    } else if (timeOfDay < 15){ // if the time is after 10:00am but before 3:00pm
        return "hot chocolate";
    } else if (timeOfDay < 18){ // if the time is after 3:00pm but before 6:00pm
        if (timeOfDay%2 === 0){ //  time of day is even
            return treats[(Math.floor(Math.random()*3))*2]; // select 0,2,4 from array
            // return ("ice cream"); 
        } else { //  time of day is odd
            return treats[((Math.floor(Math.random()*3))*2)+1]; // select 1,3,5 from array
        }
    } else if (timeOfDay < 22){  // if the time is after 6:00pm but before 10:00pm
                // ice cream
        if (weekDay == "Wednesday"){ // On Wednesday, choose strawberry ice cream flavor
            return "strawberry ice cream";
        } else { // any day except Wednesday, choose vanilla ice cream
            return "vanilla ice cream";
        }
    } else {  // if the time is after 10:00pm
        return "no treat, sleep instead";
    }
}

var timeOfDay = 16; // time of day in 24-hour, rounded to the nearest hour
var weekDay = "Wednesday"; // Day of week Sunday-Saturday
var treats = ["ice cream", "hot chocolate", "cookies", "tea", "candy", "cake"]; // an array of treats to choose from
console.log(chooseTreat(timeOfDay,weekDay,treats)); // call function to decide on treat