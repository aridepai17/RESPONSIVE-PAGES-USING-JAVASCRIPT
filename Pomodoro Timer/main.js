const startE1 = document.getElementById("start");
const stopE1 = document.getElementById("stop");
const resetE1 = document.getElementById("reset");
const timerE1 = document.getElementById("timer");

let interval = null;
let timeLeft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2,'0')}`;
    timerE1.innerHTML = formattedTime;
}

function startTimer(){
    if (interval !== null) return;

    interval = setInterval(function(){
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            interval = null;
            alert("Time's up!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}

function stopTimer(){
    if (interval !== null){
        clearInterval(interval);
        interval = null;
    }
}

function resetTimer(){
    clearInterval(interval);
    interval = null; // Reset the interval variable
    timeLeft = 1500;
    updateTimer();
}

startE1.addEventListener("click", startTimer);
stopE1.addEventListener("click", stopTimer);
resetE1.addEventListener("click", resetTimer);

updateTimer();
