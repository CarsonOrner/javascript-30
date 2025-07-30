const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const updateTime = () => {
    const time = Date.now() / 1000;

    const secondRotation = (((time / 60) * 360) + 90) % 360;
    const minuteRotation = (((time / (60 * 60)) * 360) + 90) % 360;
    const hourRotation = (((time / (60 * 60 * 12)) * 360) + 90) % 360;

    secondHand.style.transform = `rotate(${secondRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
}

setInterval(updateTime, 1000);