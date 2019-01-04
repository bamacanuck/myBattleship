// solved the problem of allowing the
// same guess to be repeated to
// satisfy the hit-count requirement

// now need to generate random ship placement

let loc1 = 3;
let loc2 = (loc1 + 1);
let loc3 = (loc1 + 2);

let guess;

let numsGuessed = [];

let hits = 0;

let misses = 0;

let guesses = 0;

let isSunk = false;

 while (isSunk == false) {
     guess = prompt("Choose a target (enter 1, 2, 3, 4, 5, 6, or 7) !!!");

     if (guess < 1 || guess > 7) {
         alert ("Try again! This time, please follow the directions!");
        }
     else if (numsGuessed.includes(guess)) {
         alert ("Try again! This time, try a new guess!");
        }
     else {
         guesses = guesses + 1;
         numsGuessed.push(guess);

            if ((guess == loc1) || (guess == loc2) || (guess == loc3)) {
                hits = hits + 1;
                alert("HIT");
            }
            else{
                misses = misses + 1;
                alert("MISS");
            }
    
            if (hits == 3) {
                isSunk = true;
                alert ("YOU WIN!");
            }
        }
    }

    alert("total valid guesses tried: " + guesses);
    alert("hits & misses: " + hits + " & " + misses);
    alert("valid-try hit rate: " + (100 * (3/guesses)) + "%");


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