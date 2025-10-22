function showTime(){
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();

  // AM/PM
  let session = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;

  // add leading 0
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("clock").innerText = h + ":" + m + ":" + s + " " + session;
}
setInterval(showTime, 1000);
showTime();