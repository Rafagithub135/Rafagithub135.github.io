"use strict";

// (() => {

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


    const skills = ['HTML', 'CSS', 'JavaScript', 'Ajax', 'Bootstrap', 'Jquery', 'Computer Network Wiring']

    const skills2 = ['General Aircraft Mechanic', 'General Automotive Mechanic', 'General Diesel Mechanic', 'Real Estate Investor Apprentice', 'Nationally Certified Tow Operator'];

    const skills3 = ['General Household Electrical Wiring', 'General Household Plumbing Work', 'General Construction'];

    for (let skill of skills) {
        document.querySelector("#skill-list1").innerHTML += `<li>${skill}</li>`;
    }

    for (let skill of skills2) {
        document.querySelector("#skill-list2").innerHTML += `<li>${skill}</li>`;
    }

    for (let skill of skills3) {
        document.querySelector("#skill-list3").innerHTML += `<li>${skill}</li>`;
}

// })();