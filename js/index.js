/* global Arduino */
'use strict';

(function() {
  var light = document.querySelector('#light');
  var power = document.querySelector('#power');
  var blink = document.querySelector('#blink');
  var arduino;
  var blinkTimerID;

  light.addEventListener('connected', function(evt) {
    arduino = evt.detail.arduino;
    arduino.d7 = Arduino.HIGH;
    power.disabled = false;
    blink.disabled = false;
  });

  power.addEventListener('click', function() {
    arduino.d7 = !arduino.d7;
  });

  blink.addEventListener('click', function() {
    if (blinkTimerID) {
      clearInterval(blinkTimerID);
      blinkTimerID = null;
    } else {
      blinkTimerID = setInterval(function() {
        arduino.d7 = !arduino.d7;
      }, 300);
    }
  });
}());
