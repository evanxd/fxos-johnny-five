/* global Arduino */
'use strict';

(function() {
  var light = document.querySelector('#light');
  var power = document.querySelector('#power');
  var blink = document.querySelector('#blink');
  var blinkTimerID;

  light.addEventListener('connected', function(evt) {
    light.d7 = Arduino.HIGH;
    power.disabled = false;
    blink.disabled = false;
  });

  power.addEventListener('click', function() {
    light.d7 = !light.d7;
  });

  blink.addEventListener('click', function() {
    if (blinkTimerID) {
      clearInterval(blinkTimerID);
      blinkTimerID = null;
    } else {
      blinkTimerID = setInterval(function() {
        light.d7 = !light.d7;
      }, 300);
    }
  });

  // For testing and debugging.
  window.light = light;
}());
