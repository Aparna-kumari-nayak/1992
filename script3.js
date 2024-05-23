let dt = document.querySelector('.show-date');

 function startTime() {
  const today = new Date();
  let day = today.getDate();
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  let monthName = month[today.getMonth()];
  dt.innerHTML = day + " " + monthName;
  
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

 var sRotate = (s * 6) + "deg";
 var mRotate = (m * 6) + "deg";
 var hRotate = ((h * 30) + (m / 2)) + "deg";
 
   var cssVarSec = "--rotateSec";
   var cssVarMin = "--rotateMin";
   var cssVarHou = "--rotateHr";
   
  var r = document.querySelector(':root');
  r.style.setProperty(cssVarSec, sRotate);
  r.style.setProperty(cssVarMin, mRotate);
  r.style.setProperty(cssVarHou, hRotate);
  setTimeout(startTime, 1000);
}
startTime()