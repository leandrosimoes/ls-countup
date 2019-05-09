(() => {
    document.addEventListener("DOMContentLoaded", function () {
        let currentYear = new Date().getFullYear();
        currentYear -= 2;
        let targetDate = new Date(currentYear, 0, 1);
        let onStart = () => {
            document.querySelector('span.past-year').innerHTML = currentYear
            document.querySelectorAll('.countup-item').forEach(item => item.classList.add('show'))
        }
        let onTick = ({ years, days, hours, minutes, seconds }) => {
            document.querySelector('.countup-item.years').innerHTML = years;
            document.querySelector('.countup-item.days').innerHTML = days;
            document.querySelector('.countup-item.hours').innerHTML = hours;
            document.querySelector('.countup-item.minutes').innerHTML = minutes;
            document.querySelector('.countup-item.seconds').innerHTML = seconds;
        };
        let options = new LsCountupOptions({ targetDate, onStart, onTick });
        let countup = new LsCountup(options);

        countup.start();
        window.mycountup = countup;
    });
})();