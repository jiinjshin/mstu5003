// Big problem - Let's make a program that let's people choose an animal. Once an animal is chosen, then the computer will "make an appropriate animal sound to the console (pretend)"

// If I have an array like the following, what is the pseudocode logic to grab a random animal from the array? What does the random factor actually represent in the context of the array?
var animals = ["dog", "cat", "bird"];

// prompt for user to click a button
// use math.random to chose 0, 1, or 2 (this corresponds to one of the three spots in the array)

// Make a function that returns a random animal.
function animalChoice() {
  return animals[Math.floor((Math.random() * 3) + 0)];
}

// Make a function that will output to console, an appropriate sound for the animal that is passed into the function.
function animalSound() {
  var firstStep = animalChoice();
  if (firstStep === "dog") {
    console.log("woof");
  } else if (firstStep === "cat") {
    console.log("meow");
  } else {
    console.log("tweet");
  }
}

animalSound();
// Challenge - what if instead of outputting to a console, we wanted to actually make an MP3 sound output?
