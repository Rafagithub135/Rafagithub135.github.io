"use strict";
function checkPalindrome() {
    let candidate = document.querySelector("#word").value;
    let result = document.querySelector("#result");
    let isPalindrome = true;
    let i = 0;
    let j = candidate.length - 1;
    while (i < j) {
        if (candidate.charAt(i) != candidate.charAt(j)) {
            isPalindrome = false;
            break;
        }
        i++;
        j--;
    }
    if (isPalindrome) {
        result.innerHTML = candidate + " is a palindrome!";
    } else {
        result.innerHTML = candidate + " is not a palindrome!";
    }
}