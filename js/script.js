function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const newYear = new Date(`01/01/${currentYear + 1}`);

    const timeRemaining = newYear - now;

    if (timeRemaining <= 0) {
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('happyNewYear').style.display = 'flex';

        // 10 second timer
        setTimeout(function () {
            document.getElementById('countdown').style.display = 'flex';
            document.getElementById('happyNewYear').style.display = 'none';
            startCountdown(); // reset countdown
        }, 10000);
    } else {
        const days = Math.floor(timeRemaining / 86400000); // (1000 * 60 * 60 * 24)
        const hours = Math.floor((timeRemaining % 86400000) / 3600000); // (1000 * 60 * 60)
        const minutes = Math.floor((timeRemaining % 3600000) / 60000); // (1000 * 60)
        const seconds = Math.floor((timeRemaining % 60000) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }
}

function startCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

startCountdown();
