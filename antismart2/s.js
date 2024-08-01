let timer;
let totalTime = 0;
let limit = 0;

function setUsageLimit() {
    limit = parseInt(document.getElementById('usageLimit').value);
    alert(`Usage limit set to ${limit} minutes.`);
}

function startTimer() {
    if (limit === 0) {
        alert("Please set a usage limit first.");
        return;
    }

    timer = setInterval(updateTimer, 60000); // Update every minute
    document.getElementById('timeDisplay').textContent = `${limit} minutes`;
}

function updateTimer() {
    totalTime += 1;
    let timeLeft = limit - totalTime;
    if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById('timeDisplay').textContent = "Time's up!";
        alert("You have reached your usage limit. Take a break!");
    } else {
        document.getElementById('timeDisplay').textContent = `${timeLeft} minutes`;
    }
}

function stopTimer() {
    clearInterval(timer);
    totalTime = 0;
    document.getElementById('timeDisplay').textContent = "0 minutes";
}
