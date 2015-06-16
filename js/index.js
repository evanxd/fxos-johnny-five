/* global Arduino */
'use strict';

(function() {
  var arduino = document.querySelector('#arduino');
  arduino.d7 = Arduino.HIGH;
  setInterval(function() {
    arduino.d7 = !arduino.d7;
  }, 300);
}());
