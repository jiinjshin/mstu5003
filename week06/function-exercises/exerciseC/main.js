var email;
var username = "jmk2142";
var first = "Jin";
var last = "Kuwata";
var name;

// What does this line do? HINT: compare HTML to Browser
// **print something to the browser?
document.getElementById('greeting').innerHTML = test(first, last, "fabulous");

/* Make a function that takes 3 arguments
   Returns 1 String message like this: "Hello Jin Kuwata, your username is fabulous." */
function test(first, last, adjective) {
    return ("Hello " + first + " " + last + ", your username is " + adjective + ".");
}

/* Replace the h1 innerText with the message by calling the function you created. */

// Try console logging these, what gets returned?
var emailEl = document.getElementById('userEmail');
var basicsBtnEl = document.getElementById('basicsBtn');

console.log(emailEl);
console.log(basicsBtnEl);

//**the code for the input box and the button

// Adds an event 'click' listener on the button element
// 2nd arg, an anonymous function is what gets called-back after the 'click'
basicsBtnEl.addEventListener('click', function() {
    email = emailEl.value;
    console.log('clicked', email);

});
// What is the value of email before the click?
// **undefined
//Enter email
// After you type in an email and then click?
// **whatever you typed in

/* Create a second button with an id */
/* Set the value of secondBtnEl to the second button element */
var nameEl = document.getElementById('userName');
var secondBtnEl = document.getElementById('secondBtn');

/* Create a function that will return a String  message like so: Jin Kuwata is 40 years old. The age should be a random number between 37 and 65. The name should be come from the html. */
function jinAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function test2(name) {
    return (name + ' is ' + jinAge(37, 66) + ' years old.');
}

/* Add an 'click' event listener to your second button. When clicked, it should create the message using the function you just declared previously, and print it to the HTML, replacing YYY. */
var nameEl = document.getElementById('userName');
var secondBtnEl = document.getElementById('secondBtn');
secondBtnEl.addEventListener('click', function() {
    name = userName.value;
    // console.log('clicked', name);
    document.getElementById('sampleGreeting').innerHTML = test2(name);
});



/* Can you add HTML and extra JS code in this program, so that username, first, and last can be dynamically set from the page input when the basic button is clicked? */
var firstEl = document.getElementById('userFirst');
var firstBtnEl = document.getElementById('firstBtn');
firstBtnEl.addEventListener('click', function() {
    name = userFirst.value;
    // console.log('clicked', name);
    document.getElementById('greeting').innerHTML = test(userFirst);
});
