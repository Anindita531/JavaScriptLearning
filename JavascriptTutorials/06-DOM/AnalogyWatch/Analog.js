function setClock(){
  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();

  let secDeg = ((seconds / 60) * 360) - 90;
  let minDeg = ((minutes / 60) * 360) + ((seconds/60)*6) - 90;
  let hourDeg = ((hours / 12) * 360) + ((minutes/60)*30) - 90;

  document.getElementById("second").style.transform = `rotate(${secDeg}deg)`;
  document.getElementById("minute").style.transform = `rotate(${minDeg}deg)`;
  document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
}
setInterval(setClock, 1000);
setClock();