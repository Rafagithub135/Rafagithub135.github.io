"use strict";

    function calculateAge() {
        let today = new Date();
        let workStart = new Date("April 10, 1983");
        let age = today.getFullYear() - workStart.getFullYear();
        let m = today.getMonth() - workStart.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < workStart.getDate())) {
            age--;
        }
        return age;
    }

    calculateAge(new Date());

    (() => {

    const skills = ['HTML', 'Java', 'Ajax', 'Python']

    const skills2 = ['CSS', 'Bootstrap', 'Jquery'];

    const skills3 = ['JavaScript', 'Spring Boot', 'Computer Network Wiring'];

    for (let skill of skills) {
        document.querySelector("#skills-list1").innerHTML += `<li>${skill}</li>`;
    }

    for (let skill of skills2) {
        document.querySelector("#skills-list2").innerHTML += `<li>${skill}</li>`;
    }

    for (let skill of skills3) {
        document.querySelector("#skills-list3").innerHTML += `<li>${skill}</li>`;
}
    var write = document.getElementById('write');
    write.addEventListener('click', encodeInput);
    function encodeInput() {
        let statement = prompt('Enter the message you would like to encode.');
        let phrase = '';
        let randomCharacter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
        let keycodeCharacter = ['h', 'm', 's'];
        for (var i = 0; i < keycodeCharacter.length; i += 1) {
            if (keycodeCharacter[i] === 'h') {
                keycodeCharacter[i] = '10';
            } else if (keycodeCharacter[i] === 'm') {
                keycodeCharacter[i] = '2';
            } else {
                keycodeCharacter[i] = '5';
            }
        }
        let numberOfCharacters = keycodeCharacter[Math.floor(Math.random() * keycodeCharacter.length)];
        for (var i = 0; i < statement.length; i += 1) {
            phrase += statement[i];
            if (i !== statement.length - 1) {
                for (var j = 0; j < numberOfCharacters; j += 1) {
                    phrase += randomCharacter[Math.floor(Math.random() * randomCharacter.length)];
                }
            }
        }
    }
        return phrase;
})();