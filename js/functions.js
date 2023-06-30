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

    const skills = ['HTML', 'Ajax', 'Python']

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

})();