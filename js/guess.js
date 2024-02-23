"use strict";
(function () {
        let random = Math.floor((Math.random() * 100) + 1);
        let count = 1;
        let guess = document.querySelector("#guess");
        let lastGuess = document.querySelector("#lastGuess");

        while (guess != random) {
            if (guess > random) {
                lastGuess.innerText = lastGuess + " is too high! Guess again!";
            } else if (guess < random) {
                lastGuess.innerText = lastGuess + " is too low! Guess again!";
            }
            count++;
        }
        lastGuess.innerText = lastGuess + " is correct! It took you " + count + " tries!";
    }
)();