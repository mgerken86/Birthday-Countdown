const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');


const birthday = "21 April 2022"

function countdown() {
  const birthdayDate = new Date(birthday);
  const currentDate = new Date(); 
  
  const totalSeconds = (birthdayDate - currentDate) / 1000;
  
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const seconds = Math.floor(totalSeconds % 60);
  
  daysEl.innerHTML = addZero(days);
  hoursEl.innerHTML = addZero(hours);
  minsEl.innerHTML = addZero(minutes);
  secsEl.innerHTML = addZero(seconds);  
}

function addZero(time) {
  return (time < 10 ? "0" : "") + time;
}

countdown();

setInterval(countdown, 1000);


