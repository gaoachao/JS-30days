const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime(){
    const date = new Date();

    const second = date.getSeconds();
    const minute = date.getMinutes();
    const hour = date.getHours();

    const secondDeg = 90+(second/60)*360;
    const minuteDeg = 90+(minute/60)*360;
    const hourDeg = 90+( (hour + minute/60) /12 )*360;
    
    secHand.style.transform = `rotate(${secondDeg}deg)`;
    minHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setTime();
setInterval(setTime,1000);