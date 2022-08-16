var seconds = 0;
var centiseconds = 0;
var secondsContainer = document.getElementById('seconds');
var centisecondsContainer = document.getElementById('centiseconds');
var btnStart = document.getElementById('btn-start');
var btnStop = document.getElementById('btn-stop');
var btnReset = document.getElementById('btn-reset');
var interval;

btnStart.onclick = function() {
    clearInterval(interval);
    interval = setInterval(updateTimer, 10);
}

btnStop.onclick = function() {
    clearInterval(interval);
}

btnReset.onclick = function() {
    clearInterval(interval);
    centiseconds = 0;
    seconds = 0;
    secondsContainer.innerHTML = "00";
    centisecondsContainer.innerHTML = "00";
}

function updateTimer() {
    updateCentiseconds();
}

function updateCentiseconds() {
    centiseconds++;
    if (centiseconds < 10) {
        centisecondsContainer.innerHTML = "0" + centiseconds;
    }
    else if (centiseconds == 100) {
        updateSeconds();
        centisecondsContainer.innerHTML = "00";
        centiseconds = 0;
    }
    else {
        centisecondsContainer.innerHTML = centiseconds;
    }
}

function updateSeconds() {
    seconds++;
    if (seconds < 10) {
        secondsContainer.innerHTML = "0" + seconds;
    }
    else {
        secondsContainer.innerHTML = seconds;
    }
}
