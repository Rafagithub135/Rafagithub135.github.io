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

    const skills = ['HTML', 'Java', 'Ajax', 'Python', 'Responsive Web Design'];

    const skills2 = ['CSS', 'Bootstrap', 'Jquery', 'SASS'];

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

        let image = document.getElementById("vettix");
        let images = ['Images/VET-TIX-Baseball-Poster-HORIZ.jpg', 'Images/VET-TIX-Football_Flyer_FRONT_WEB.jpg', 'Images/VET-TIX-Racecar-Driver-Poster.jpg', 'Images/VetTixBasketballFlyer.jpg', 'Images/VetTixFlyer_8.5inx11in_FRONT.jpg', 'Images/VetTixHockeyFlyer.jpg', 'Images/VetTixRockGirl8x11.jpg', 'Images/DoverMotorSpeedway.jpg'];
        setInterval(function () {
            let random = Math.floor(Math.random() * 9);
            image.src = images[random];
        }, 2000);

    let write = document.getElementById('write');
    write.addEventListener('click', encodeInput);
    function encodeInput() {
        let statement = prompt('Enter the message you would like to encode.');
        let phrase = '';
        let randomCharacter = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
        let keycodeCharacter = ['h', 'm', 's'];
        for (let i = 0; i < keycodeCharacter.length; i += 1) {
            if (keycodeCharacter[i] === 'h') {
                keycodeCharacter[i] = '10';
            } else if (keycodeCharacter[i] === 'm') {
                keycodeCharacter[i] = '2';
            } else {
                keycodeCharacter[i] = '5';
            }
        }
        let numberOfCharacters = keycodeCharacter[Math.floor(Math.random() * keycodeCharacter.length)];
        for (let i = 0; i < statement.length; i += 1) {
            phrase += statement[i];
            if (i !== statement.length - 1) {
                for (let j = 0; j < numberOfCharacters; j += 1) {
                    phrase += randomCharacter[Math.floor(Math.random() * randomCharacter.length)];
                }
            }
        }
        return phrase;
    }
})();