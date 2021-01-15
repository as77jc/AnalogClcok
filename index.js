const hourHand = document.getElementById('clock-hour-hand');
const minuteHand = document.getElementById('clock-minute-hand');
const secondHand = document.getElementById('clock-second-hand');

let hDelay = '5s';
let mDelay = '3s';
let sDelay = '10s';



function setTime () {
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    
    hourHand.style.transition = hDelay;
    hourHand.style.transform = `rotate(${30 * hours + (0.5 * minutes)}deg)`;

    minuteHand.style.transition = mDelay;
    minuteHand.style.transform = `rotate(${6 *minutes + (0.1 * seconds)}deg)`;

    secondHand.style.transition = sDelay;
    secondHand.style.transform = `rotate(${6 * seconds}deg)`;
    
}
setTime()
window.setTimeout(runTime, 5000)

hDelay = '';
mDelay = '';
sDelay = '';
    
function runTime () {
    setInterval(setTime, 1000);
}
