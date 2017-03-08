var plusSession = document.querySelector('#plusSession');
var minusSession = document.querySelector('#minusSession');
var sessionTime = document.querySelector('#counter-timer');
var sessionLength = document.querySelector('#session-length');
var plusBreak = document.querySelector('#plusBreak');
var minusBreak = document.querySelector('#minusBreak');


var breakLength = document.querySelector('#break-length');
var clock = document.getElementById('.counter-timer');
var minuteSpan = document.getElementById('.minute');
var secondSpan = document.getElementById('.second');

var counterHeader = document.querySelector('#counter-header');


var relax = false;
var running = false;

plusSession.onclick = function plusSessionTime() {
  if(!running) {
    sessionLength.innerHTML++;
  }
}
minusSession.onclick = function minusSessionTime() {
  if(!running) {
    sessionLength.innerHTML--;
  }
}
plusBreak.onclick = function plusBreakTime() {
  if(!running) {
    breakLength.innerHTML++;
  }
}
minusBreak.onclick = function minusBreakTime() {
  if(!running) {
    breakLength.innerHTML--;
  }
}

// Make clock
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor ( (t/1000/60) % 60 );
  return {
    'total': t,
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
  var minuteSpan = clock.querySelector('.minute');
  var secondSpan = clock.querySelector('.second');

  function updateClock() {
    var t = getTimeRemaining(endtime);
    t.seconds = addZero(t.seconds);
    t.minutes = addZero(t.minutes);

    minuteSpan.innerHTML = t.minutes;
    secondSpan.innerHTML = t.seconds;
    if (t.total <= 0) {
      if (relax === false) {
      clearInterval(timeinterval);
      var deadline = new Date(Date.parse(new Date()) + breakLength.innerHTML*60*1000);
      initializeClock('counter-timer', deadline);
      counterHeader.innerHTML = "Break";
      relax = true;
    }
    else {
      var deadline = new Date(Date.parse(new Date()) + sessionLength.innerHTML*60*1000);
      clearInterval(timeinterval);
      initializeClock('counter-timer', deadline);
      counterHeader.innerHTML = "Session";
      relax = false;
    }
  }
}


//update clock to avoid delay.
updateClock();
//start timer
var timeinterval = setInterval(updateClock,1000);
}
window.onload = function(){
    document.getElementById("counter").onclick=function(){
      if(!running) {
        var deadline = new Date(Date.parse(new Date()) + sessionLength.innerHTML*60*1000);
        initializeClock('counter-timer', deadline);
        running = true;
      }
    }
  }
