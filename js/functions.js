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


let skills = ['HTML', 'CSS', 'JavaScript', 'Ajax', 'Bootstrap', 'Jquery', 'Computer Network Wiring', 'General Aircraft Mechanic', 'General Automotive Mechanic', 'General Diesel Mechanic', 'Real Estate Investor Apprentice', 'Nationally Certified Tow Operator', 'General Household Electrical Wiring', 'General Household Plumbing Work', 'General Construction']


(skills.map(skill => `<li>${skill}</li>`));