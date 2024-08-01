let timer;
let totalTime = 0;
let limit = 0;

// Function to request notification permission when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }
});

function setUsageLimit() {
    limit = parseInt(document.getElementById('usageLimit').value);
    alert(`Usage limit set to ${limit} minutes.`);
}

function startTimer() {
    if (limit === 0) {
        alert("Please set a usage limit first.");
        return;
    }

    timer = setInterval(updateTimer, 1000); // Update every second (1000 ms)
    document.getElementById('timeDisplay').textContent = formatTime(limit * 60); // Initial display
}

function updateTimer() {
    totalTime += 1;
    let timeLeft = limit * 60 - totalTime; // Convert limit to seconds and subtract totalTime
    if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById('timeDisplay').textContent = "Time's up!";
        showNotification("Time's up!", "You have reached your usage limit. Take a break!");
    } else {
        document.getElementById('timeDisplay').textContent = formatTime(timeLeft);
    }
}

function stopTimer() {
    clearInterval(timer);
    totalTime = 0;
    document.getElementById('timeDisplay').textContent = "0:00";
}

// Function to format time in MM:SS format
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
}

// Function to show notification
function showNotification(title, bodyText) {
    if (Notification.permission === "granted") {
        new Notification(title, {
            body: bodyText,
            icon: 'icon.png' // Path to your icon image
        });
    }
}
