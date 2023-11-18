// script.js
document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("countdown"); 
    const endDateInput = document.getElementById("endDateInput"); 
    const startButton = document.getElementById("startButton");
    let endTime; 
    startButton.addEventListener("click", function () {
        const userInput = endDateInput.value;
        if (userInput) {
            endTime = Date.parse(userInput); 
            if (!isNaN(endTime)) {
                startCountdown();
            } else {
                countdownElement.innerHTML = "Invalid date format";
            }
        }
    });

    function startCountdown() {
        function updateCountdown() {
            const now = new Date().getTime(); 
            const timeRemaining = endTime - now;

            if (timeRemaining <= 0) {
                countdownElement.innerHTML = "Expired"; 
                return;
            }
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
});

