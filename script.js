// Countdown timer
const countdownDate = new Date("March 31, 2025 00:00:00").getTime();

let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "We're Live!";
    }
}, 1000);

// Notify Me Button - Simple alert on click
document.getElementById("notifyBtn").addEventListener("click", function() {
    Swal.fire({
        title: 'Thanks for Subscribing!',
        text: 'You will be notified once we are live!',
        icon: 'success',
        confirmButtonText: 'Awesome!'
    });
});
