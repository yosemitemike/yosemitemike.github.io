$(document).ready(function() {
    var clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
            stop: function() {
                console.log("The countdown ended");
            }
        }
    });

    clock.setTime(220880);
    clock.setCountdown(true);
    clock.start();
});
