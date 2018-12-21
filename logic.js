// works, roughly... with the considerable
// problem that the same guess can be
// repeated to satisfy the hit-count
// requirement

let loc1 = 3;
let loc2 = 4;
let loc3 = 5;

let guess;

let numsGuessed = [];

let hits = 0;

let guesses = 0;

let isSunk = false;

 while (isSunk == false) {
     guess = prompt("Choose a target (enter a whole number, 1-7) !!!");

     if (guess < 1 || guess > 7) {
         alert ("Try again! This time, please follow the directions!");
        }
     else if (numsGuessed.includes(guess)) {
         alert ("Try again! This time, try a new guess!");
        }
     else {
         guesses = guesses + 1;
         numsGuessed.push(guess);
        };


     if ((guess == loc1) || (guess == loc2) || (guess == loc3)) {
         hits = hits + 1;
     }

     if (hits == 3) {
         isSunk = true;
         alert ("YOU WIN!");
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