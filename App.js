var hours = 0;
var min = 0;
var sec = 0;
var displayHours = document.getElementById("displayHours");
var displayMin = document.getElementById("displayMin");
var displaySec = document.getElementById("displaySec");
var startBtn = document.getElementById("startBtn");
var pauseBtn = document.getElementById("pauseBtn");
var resetBtn = document.getElementById("resetBtn");

var interval;

function startTimer() {
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
    interval = setInterval(function(){
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
            if(min == 60){
                hours++;
                min = 0;
            }
        }
        displayHours.innerHTML = hours;
        displayMin.innerHTML = min;
        displaySec.innerHTML = sec;
    }, 1000);
}
function pauseTimer() {
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    clearInterval(interval);
}
function resetTimer() {
    pauseTimer();
    hours = 0;
    min = 0;
    sec = 0;
    displayHours.innerHTML = hours;
    displayMin.innerHTML = min;
    displaySec.innerHTML = sec;
}