// This code is INCOMPLETE, meaning some things will need massaging and some things are missing.
// Adjust code appropriately to solve the problems listed.

var numPizzas;
var subTotal;
var total;
var hasDiscount = false; // Hint for prompts

// By convention, these variables represent CONSTANTS (unchanging values)
var DISCOUNTCODE = "ChicagoStyleNumberOne";
var DISCOUNTRATE = 0.1;
// Set the flat rate per pizza
var pizzaCost = 12;

var customerName = prompt('What is your name?');

/* prompt for the following: 1) number of pizzas in order, 2) Whether they have a discount, 3) The discount code (if they indicated they have one.) */
var numPizzas = Number(prompt('How many pizzas would you like?'));
var userDiscount = prompt("Do you have a discount code? (Y/N)").toUpperCase();

var userDiscountCode;


/* Write 4 functions: */
// Function that checks if the discount code the user gives matches the known discount code. Does not return anything but will set the has discount state to true if it matches. It will alert the user whether the code worked or not.
function discountMatch() {
    if (userDiscount === "Y") {
        var userDiscountCode = prompt("What is your discount code?");
        if (userDiscountCode === DISCOUNTCODE) {
            var hasDiscount = true;
            alert("Your code worked!");
        } else {
            alert("Sorry, this code is not functional.");
        }
    } else {}
}

// Function that calculates subtotal based on number of pizzas, flat rate per pizza, and discount. It should return a number.
function calcSubTotal() {
    if (userDiscount === "Y") {
        subTotal = numPizzas * pizzaCost - (numPizzas * pizzaCost) * DISCOUNTRATE;
    } else {
        subTotal = numPizzas * pizzaCost;
    }
}


// Function that calculates the total based on subtotal and tax rate. It should return a number;
var taxRate = 0.08875;

function calcTotal() {
    total = subTotal + subTotal * taxRate;
}

// Function that writes a reciept with user information, pizza order info, including prices, discount, etc. Does not return anything but will output to the console.
// function receipt() {
//     console.log(customerName);
//     console.log(numPizzas + " Pizzas @ $" + pizzaCost);
//     if (hasDiscount) {
//         console.log("Discount processed, code: " + userDiscountCode);
//         console.log("You saved " + (numPizzas * pizzaCost * DISCOUNTRATE));
//     } else {
//         console.log("No discount");
//     }
// 		console.log("Your total is $" + total);
// }
var receipt = [];
function receiptFunct() {
receipt.push("Hi " + customerName + "!");
receipt.push("\nYou ordered " + numPizzas + " pizzas @ $" + pizzaCost);
if (hasDiscount) {
    receipt.push("\nDiscount processed, code: " + userDiscountCode);
    receipt.push("\nYou saved $" + (numPizzas * pizzaCost * DISCOUNTRATE));
} else {
    receipt.push("\nNo discount applied");
}
receipt.push("\nSubtotal: $" + subTotal.toFixed(2));
receipt.push("\nNYC Tax Rate: " + taxRate);
receipt.push("\nThank you! Your total is $" + total.toFixed(2));
}

/* Call functions in correct sequence and utilize them to create a "receipt" for the order in the console. */

discountMatch();
calcSubTotal();
calcTotal();
receiptFunct();

// This function will write the following message to the <pre> element in HTML. New lines are indicated by \n
function writeToPre(text) {
    document.getElementById('info').innerHTML = text;
}
var message = "Hello, Jin.\nYour order is pending this program.";
writeToPre(receipt.join(""));

// Can you transform your code so that instead of to the console, it writes to the webpage?
