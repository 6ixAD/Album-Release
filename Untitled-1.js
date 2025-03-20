// Set the target date for the countdown (April 4, 2025)
const targetDate = new Date("April 4, 2025 00:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(function() {
    // Get the current date and time
    const currentDate = new Date().getTime();

    // Find the distance between now and the target date
    const distance = targetDate - currentDate;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the results in the HTML elements
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "The Album is Released!";
    }
}, 1000);
