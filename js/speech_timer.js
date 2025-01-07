"use strict";

function beginCountdown() {
    const timer = document.getElementById('time').value;
    let countdown = timer * 60;
    let minutes = Math.floor(countdown / 60);
    let seconds = countdown % 60;
    const interval = setInterval(() => {
        if (countdown === 0) {
            clearInterval(interval);
            document.getElementById('seconds').style.color = 'red';
            clearInterval(interval);
        } else if (countdown < 60) {
            document.getElementById('seconds').style.color = 'yellow';
        }
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
        countdown--;
        minutes = Math.floor(countdown / 60);
        seconds = countdown % 60;
    }, 1000);
}

function pauseCountdown() {
    clearInterval(interval);
}

document.getElementById('btn1').addEventListener('click', beginCountdown);
document.getElementById('btn2').addEventListener('click', pauseCountdown);