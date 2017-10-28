$(document).ready(function() {
    var initClock = function() {
            var getTime = function() {
                    var wedding = new Date("2017-11-11T23:30:00.000Z"),
                        now = new Date();
                        differenceInSeconds = (wedding.getTime() - now.getTime()) / 1000;

                    return Math.floor(differenceInSeconds);
                },
                clock = $('.clock').FlipClock({
                    clockFace: 'DailyCounter',
                    autoStart: false,
                    callbacks: {
                        stop: function() {
                            console.log("The countdown ended");
                        }
                    }
                }),
                time = getTime();

            clock.setTime(time);
            clock.setCountdown(true);
            clock.start();
        },
        initSlides = function() {
            var options = {
                $AutoPlay: 1
            };

            new $JssorSlider$("slider1_container", options);
        };

    initClock();
    initSlides();
});
