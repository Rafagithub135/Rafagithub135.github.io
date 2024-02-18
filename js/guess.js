"use strict";
(function () {
    let random = Math.floor((Math.random() * 100) + 1);
    document.getElementById("mynum").innerHTML = `${random}`;
    let guess = prompt("Enter a number between 1 and 100");
    console.log(guess);
    let count = 1;
    while (guess != random) {
        if (guess > random) {
            guess = prompt("Too high! Guess again!");
        } else if (guess < random) {
            guess = prompt("Too low! Guess again!");
        }
        console.log(guess);
        console.log(count);
        count++;
    }
    alert("Congratulations! You guessed the right number, which was " + random + " It took you " + count + " guesses.");
}
)();