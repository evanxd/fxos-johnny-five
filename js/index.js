/* global Arduino */
'use strict';

(function() {
  var light1 = document.querySelector('#light1');
  var light2 = document.querySelector('#light2');
  var power = document.querySelector('#power');
  var blink = document.querySelector('#blink');
  var blinkTimerID;

  light1.addEventListener('connected', function(evt) {
    light1.d7 = Arduino.HIGH;
    power.disabled = false;
    blink.disabled = false;
  });

  light2.addEventListener('connected', function(evt) {
    light2.d7 = Arduino.HIGH;
    power.disabled = false;
    blink.disabled = false;
  });

  power.addEventListener('click', function() {
    light1.d7 = !light1.d7;
    light2.d7 = !light2.d7;
  });

  blink.addEventListener('click', function() {
    if (blinkTimerID) {
      clearInterval(blinkTimerID);
      blinkTimerID = null;
    } else {
      blinkTimerID = setInterval(function() {
        light1.d7 = !light1.d7;
        light2.d7 = !light2.d7;
      }, 300);
    }
  });

  // For testing and debugging.
  window.light1 = light1;
  window.light2 = light2;
}());
