var plusSession = document.querySelector('#plusSession');
var minusSession = document.querySelector('#minusSession');
var plusBreak = document.querySelector('#plusBreak');
var minusBreak = document.querySelector('#minusBreak');
var sessionTime = document.querySelector('.counter-timer');
var sessionLength= document.querySelector('#session-length');


var deadline = new Date(Date.parse(new Date()) + sessionLength.innerHTML*60*1000);



// Make clock
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor ( (t/1000/60) % 60 );
  var hours = Math.floor ( (t/(1000*60*60)) % 24 );
  var days = Math.floor ( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function addZero(i) {
  if(i < 10) {
    i = "0" + i;
  }
  return i;
}
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);

  function updateClock() {
    var t = getTimeRemaining(endtime);
    t.seconds = addZero(t.seconds);
    t.minutes = addZero(t.minutes);
    clock.innerHTML = t.minutes + ' : ' + t.seconds;
    if (t.total <= 0) {
      clearInterval(timeinterval);
  }
}
updateClock();
var timeinterval = setInterval(updateClock,1000);
}

initializeClock('counter-timer', deadline);
