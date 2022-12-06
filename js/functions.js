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
