let loc1 = 3;
let loc2 = 4;
let loc3 = 5;

let guess;

let hits = 0;

let guesses = 0;

let isSunk = false;

 while (isSunk == false) {
     guess = prompt("Choose a target (enter a whole number, 1-7) !!!");

     if (guess < 1 || guess > 7) {
         alert ("Try again! This time, please follow the directions!");
     }
     else {
         guesses = guesses++;
     }
    };



// ================console.log silliness (below)================

// console.log("hey,");
// console.log("now...");

// console.log("");
// // console.log("");
// // console.log("");

// console.log("hey,");
// console.log("now...");

// console.log("");
// // console.log("");
// // console.log("");

// console.log("don't dream it's over...");