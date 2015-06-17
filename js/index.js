/* global Arduino */
'use strict';

(function() {
  var power = document.querySelector('#power');
  var blink = document.querySelector('#blink');
  var arduino;
  var blinkTimerID;

  window.addEventListener('webarduino-connected', function(evt) {
    arduino = evt.detail.arduino;
    arduino.d7 = Arduino.HIGH;
    power.disabled = false;
    blink.disabled = false;
  });

  power.addEventListener('click', function() {
    if (arduino.d7) {
      arduino.d7 = Arduino.LOW;
    } else {
      arduino.d7 = Arduino.HIGH;
    }
  });

  blink.addEventListener('click', function() {
    if (blinkTimerID) {
      clearInterval(blinkTimerID);
      blinkTimerID = null;
    } else {
      blinkTimerID = setInterval(function() {
        if (arduino.d7) {
          arduino.d7 = Arduino.LOW;
        } else {
          arduino.d7 = Arduino.HIGH;
        }
      }, 300);
    }
  });
}());
